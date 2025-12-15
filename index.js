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
