// Lấy ảnh Lappland từ Danbooru API (ổn định, không scrape)
async function loadLappland() {
  const apiUrl =
    "https://danbooru.donmai.us/posts.json?" +
    new URLSearchParams({
      tags: "lappland_(arknights) rating:safe",
      limit: 20,
      random: "true",
    });

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Danbooru API error");

    const posts = await res.json();
    if (!posts.length) throw new Error("No posts found");

    // chọn 1 post ngẫu nhiên
    const post = posts[Math.floor(Math.random() * posts.length)];

    // ưu tiên file_url, fallback large_file_url
    const src = post.file_url || post.large_file_url;
    if (!src) throw new Error("No image url");

    document.getElementById("lappland-img").src = src;
    document.getElementById("lappland-source").innerText = "Source: " + src;
  } catch (err) {
    console.error(err);
    document.getElementById("lappland-source").innerText =
      "Failed to load image.";
  }
}

loadLappland();

//osuprofile
const API_URL =
  "https://ngocsorabackend.vulengocvip2015.workers.dev/?user=10306288";
const $ = (s) => document.querySelector(s);

fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    const { user, bestScores } = data;
    if (!user) throw new Error("User data missing");
    renderUser(user);
    renderStats(user);
    if (bestScores) renderBestScores(bestScores);
  })
  .catch((err) => console.error("osu api error:", err));

/* ================= USER ================= */
function renderUser(user) {
  $("#osu-avatar").src = user.avatar_url || "";
  $("#osu-username").textContent = user.username || "Unknown";
  $("#osu-country-name").textContent = user.country?.name || "-";
  $("#osu-flag").src = user.country_code
    ? `https://flagcdn.com/w40/${user.country_code.toLowerCase()}.png`
    : "";
}

/* ================= STATS ================= */
function renderStats(user) {
  const s = user.statistics || {};

  animateNumber("#stat-pp", s.pp || 0);
  animateNumber("#stat-rank", s.global_rank || 0);
  animateNumber("#stat-country-rank", s.country_rank || 0);
  animateNumber("#stat-playcount", s.play_count || 0);
  animateNumber("#stat-acc", s.hit_accuracy ? s.hit_accuracy.toFixed(2) : 0);
  animateNumber("#stat-level", s.level?.current || 0);

  $("#stat-playtime").textContent = formatTime(s.play_time || 0);
  $("#stat-joindate").textContent = user.join_date
    ? new Date(user.join_date).toLocaleDateString()
    : "-";
}

/* ================= BEST SCORES ================= */
function renderBestScores(scores) {
  const container = $("#osu-best-scores");
  container.innerHTML = "";

  scores.forEach((score) => {
    const el = document.createElement("div");
    el.className = "best-score";
    el.innerHTML = `
      <div class="score-rank">${score.rank || "-"}</div>
      <img class="score-cover" src="${score.beatmapset?.covers?.card || ""}">
      <div class="score-info">
        <div class="score-title">${score.beatmapset?.title || "Unknown"}</div>
        <div class="score-diff">${score.beatmap?.version || "-"}</div>
        <div class="score-meta">
          <span>${score.pp ? score.pp.toFixed(2) : 0} pp</span>
          <span>${
            score.accuracy ? (score.accuracy * 100).toFixed(2) : 0
          }%</span>
          <span>${score.mods?.length ? score.mods.join(",") : "NM"}</span>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

/* ================= HELPERS ================= */
function animateNumber(selector, target) {
  const el = $(selector);
  if (!el) return;
  let current = 0;
  const step = Math.max(1, target / 60);
  function tick() {
    current += step;
    if (current >= target) el.textContent = target;
    else {
      el.textContent = Math.floor(current);
      requestAnimationFrame(tick);
    }
  }
  tick();
}

function formatTime(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return `${h}h ${m}m`;
}
