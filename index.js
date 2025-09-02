//script lấy ảnh từ safebooru
async function loadLappland() {
  try {
    // chọn pid ngẫu nhiên theo cấp số cộng 42
    const maxPid = 3444;
    const pidList = [];
    for (let i = 0; i <= maxPid; i += 42) pidList.push(i);
    const pid = pidList[Math.floor(Math.random() * pidList.length)];

    const url = `https://safebooru.org/index.php?page=post&s=list&tags=lappland_%28arknights%29&pid=${pid}`;

    // dùng allorigins để bypass CORS
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
      url
    )}`;
    const res = await fetch(proxyUrl);
    const data = await res.json();

    // parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, "text/html");

    // lấy danh sách ảnh
    const thumbs = doc.querySelectorAll("div.image-list span.thumb img");
    if (thumbs.length === 0) throw new Error("No images found");

    // chọn 1 ảnh bất kỳ
    const img = thumbs[Math.floor(Math.random() * thumbs.length)];
    let src = img.getAttribute("src");

    // convert thumbnail → full image
    src = src
      .replace("/thumbnails/", "/images/") // đổi folder
      .replace("thumbnail_", "") // bỏ prefix
      .split("?")[0]; // bỏ query string

    // gán ảnh và nguồn
    document.getElementById("lappland-img").src = src;
    document.getElementById("lappland-source").innerText = "Source: " + src;
  } catch (err) {
    console.error(err);
    document.getElementById("lappland-source").innerText =
      "Failed to load image.";
  }
}

// load ảnh lần đầu
loadLappland();
