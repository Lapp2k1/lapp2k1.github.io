// Lấy ảnh Lappland từ Safebooru, tối ưu
async function loadLappland() {
  const maxPid = 3612; // pid tối đa mới
  const step = 42; // mỗi trang 42 ảnh
  const pid = Math.floor(Math.random() * (maxPid / step + 1)) * step;

  const targetUrl = `https://safebooru.org/index.php?page=post&s=list&tags=lappland_%28arknights%29&pid=${pid}`;
  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
    targetUrl
  )}`;

  try {
    // fetch HTML qua proxy
    const res = await fetch(proxyUrl);
    const data = await res.json();

    // parse HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, "text/html");

    // lấy danh sách thumbnail
    const thumbs = doc.querySelectorAll("div.image-list span.thumb img");
    if (!thumbs.length) throw new Error("No thumbnails found.");

    // random 1 thumbnail
    let src =
      thumbs[Math.floor(Math.random() * thumbs.length)].getAttribute("src");

    // chuyển thumbnail → ảnh full
    src = src
      .replace("/thumbnails/", "/images/")
      .replace("thumbnail_", "")
      .split("?")[0];

    // gán vào DOM
    document.getElementById("lappland-img").src = src;
    document.getElementById("lappland-source").innerText = "Source: " + src;
  } catch (err) {
    console.error(err);
    document.getElementById("lappland-source").innerText =
      "Failed to load image.";
  }
}

// chạy lần đầu
loadLappland();
