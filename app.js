"use strict";

(function () {
  // --- CẤU HÌNH ---
  const PRESETS = {
    model1: {
      skel: "/Lapp/build_char_140_whitew.skel",
      atlas: "/Lapp/build_char_140_whitew.atlas",
      png: ["./Lapp/build_char_140_whitew.png"],
    },
    model2: {
      skel: "/Lapp/build_char_140_whitew_boc.skel",
      atlas: "/Lapp/build_char_140_whitew_boc.atlas",
      png: ["./Lapp/build_char_140_whitew_boc.png"],
    },
    model3: {
      skel: "/Lapp2/build_char_1038_whitw2.skel",
      atlas: "/Lapp2/build_char_1038_whitw2.atlas",
      png: ["./Lapp2/build_char_1038_whitw2.png"],
    },
    model4: {
      skel: "/Lapp2/build_char_1038_whitw2_sale15.skel",
      atlas: "/Lapp2/build_char_1038_whitw2_sale15.atlas",
      png: ["./Lapp2/build_char_1038_whitw2_sale15.png"],
    },
  };
  const KEYWORDS = ["lappland", "lappy", "lappemtoi", "siracusa", "lapp"];
  const SPINE_RUNTIME_URL =
    "https://cdn.jsdelivr.net/gh/EsotericSoftware/spine-runtimes@3.8/spine-ts/build/spine-webgl.js";

  let gl, renderer, canvas, skeleton, state;
  let lastFrameTime = Date.now();
  let characterPos = { x: 0, y: 0 },
    mouseWorldPos = { x: 0, y: 0 };
  let modelScale = 0.6,
    currentScaleX = 1,
    isWalking = false;
  let currentModelIndex = 0;
  const MOVE_SPEED = 200,
    ARRIVE_DISTANCE = 10;

  // --- 1. LOAD THƯ VIỆN ---
  function loadDependencies(callback) {
    if (window.spine) return callback();
    const script = document.createElement("script");
    script.src = SPINE_RUNTIME_URL;
    script.onload = callback;
    document.head.appendChild(script);
  }

  // --- 2. TẠO CANVAS ---
  function createOverlayCanvas() {
    if (canvas) return; // Không tạo trùng
    canvas = document.createElement("canvas");
    canvas.id = "spine-overlay-canvas";
    Object.assign(canvas.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: "9999",
    });
    document.body.appendChild(canvas);

    gl = canvas.getContext("webgl", { alpha: true });
    renderer = new spine.webgl.SceneRenderer(canvas, gl);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();
  }

  // --- 3. LOAD MODEL ---
  async function loadModel(presetKey) {
    if (!canvas) createOverlayCanvas(); // Tạo canvas ngay khi gọi model
    const config = PRESETS[presetKey];
    if (!config || !gl) return;

    try {
      const atlasText = await fetch(config.atlas).then((r) => r.text());
      const texturePromises = config.png.map((url) => {
        return new Promise((res) => {
          const img = new Image();
          img.onload = () => res({ name: url.split("/").pop(), img });
          img.src = url;
        });
      });
      const imgMap = (await Promise.all(texturePromises)).reduce(
        (a, b) => ({ ...a, [b.name]: b.img }),
        {},
      );
      const atlas = new spine.TextureAtlas(
        atlasText,
        (path) => new spine.webgl.GLTexture(gl, imgMap[path]),
      );
      const skelData = new spine.SkeletonBinary(
        new spine.AtlasAttachmentLoader(atlas),
      ).readSkeletonData(
        new Uint8Array(await fetch(config.skel).then((r) => r.arrayBuffer())),
      );

      skeleton = new spine.Skeleton(skelData);
      state = new spine.AnimationState(new spine.AnimationStateData(skelData));
      state.data.defaultMix = 0.3;

      // Kế thừa state cũ
      skeleton.x = characterPos.x;
      skeleton.y = characterPos.y;
      skeleton.scaleX = currentScaleX;
      state.setAnimation(0, isWalking ? "Move" : "Sit", true);

      // Bắt đầu vòng lặp render nếu chưa chạy
      if (!window.isSpineLoopRunning) {
        window.isSpineLoopRunning = true;
        requestAnimationFrame(renderLoop);
      }
    } catch (e) {
      console.error("Spine Load Error:", e);
    }
  }

  // --- 4. TƯƠNG TÁC ---
  function setupEvents() {
    window.addEventListener("mousemove", (e) => {
      // FIX LỖI: Chỉ tính toán nếu canvas đã sẵn sàng
      if (!canvas) return;
      mouseWorldPos.x = (e.clientX - canvas.width / 2) / modelScale;
      mouseWorldPos.y = (canvas.height / 2 - e.clientY) / modelScale;
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        const keys = Object.keys(PRESETS);
        if (!skeleton) return; // Chỉ Tab khi đã triệu hồi model
        e.preventDefault();
        currentModelIndex = (currentModelIndex + 1) % keys.length;
        loadModel(keys[currentModelIndex]);
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target.innerText) {
        const text = e.target.innerText.toLowerCase();
        if (KEYWORDS.some((k) => text.includes(k))) {
          const keys = Object.keys(PRESETS);
          loadModel(keys[currentModelIndex]);
        }
      }
    });
  }

  // --- 5. RENDER LOOP ---
  function renderLoop() {
    const now = Date.now();
    const delta = (now - lastFrameTime) / 1000;
    lastFrameTime = now;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    if (skeleton && state) {
      const dx = mouseWorldPos.x - characterPos.x,
        dy = mouseWorldPos.y - characterPos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > ARRIVE_DISTANCE) {
        if (!isWalking) {
          state.setAnimation(0, "Move", true);
          isWalking = true;
        }
        characterPos.x += (dx / dist) * MOVE_SPEED * delta;
        characterPos.y += (dy / dist) * MOVE_SPEED * delta;
        currentScaleX += ((dx < 0 ? -1 : 1) - currentScaleX) * 15 * delta;
      } else if (isWalking) {
        state.setAnimation(0, "Sit", true);
        isWalking = false;
      }

      // Gán giá trị trước khi update để tránh nháy hình
      skeleton.x = characterPos.x;
      skeleton.y = characterPos.y;
      skeleton.scaleX = currentScaleX;

      state.update(delta);
      state.apply(skeleton);
      skeleton.updateWorldTransform();

      renderer.resize(spine.webgl.ResizeMode.Expand);
      renderer.camera.viewportWidth = canvas.width / modelScale;
      renderer.camera.viewportHeight = canvas.height / modelScale;
      renderer.camera.update();

      renderer.begin();
      renderer.drawSkeleton(skeleton, true);
      renderer.end();
    }
    requestAnimationFrame(renderLoop);
  }

  loadDependencies(() => {
    setupEvents();
  });
})();
