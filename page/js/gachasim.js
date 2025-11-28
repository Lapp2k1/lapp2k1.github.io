/************************************************************************
 * PHẦN CẤU HÌNH NHÂN VẬT — BẠN CHỈ SỬA ĐOẠN NÀY
 ************************************************************************/
const characters = [
  { name: "hilde", image: "../../asset/trickcal/hilde.webp", rate: 1 },
  { name: "vivi", image: "../../asset/trickcal/vivi.webp", rate: 1 },
  { name: "amelia", image: "../../asset/trickcal/amelia.webp", rate: 1 },
  { name: "asia", image: "../../asset/trickcal/asia.webp", rate: 1 },
  { name: "aya", image: "../../asset/trickcal/aya.webp", rate: 1 },
  { name: "barong", image: "../../asset/trickcal/barong.webp", rate: 1 },
  { name: "benny", image: "../../asset/trickcal/benny.webp", rate: 1 },
  { name: "caesar", image: "../../asset/trickcal/caesar.webp", rate: 1 },
  { name: "canta", image: "../../asset/trickcal/canta.webp", rate: 1 },
  {
    name: "diana-heyday",
    image: "../../asset/trickcal/diana-heyday.webp",
    rate: 1,
  },
  { name: "ed", image: "../../asset/trickcal/ed.webp", rate: 1 },
  { name: "elena", image: "../../asset/trickcal/elena.webp", rate: 1 },
  { name: "espi", image: "../../asset/trickcal/espi.webp", rate: 1 },
  { name: "fricle", image: "../../asset/trickcal/fricle.webp", rate: 1 },
  { name: "gwynn", image: "../../asset/trickcal/gwynn.webp", rate: 1 },
  { name: "jade", image: "../../asset/trickcal/jade.webp", rate: 1 },
  {
    name: "kommy-swimsuit",
    image: "../../asset/trickcal/kommy-swimsuit.webp",
    rate: 1,
  },
  { name: "layze", image: "../../asset/trickcal/layze.webp", rate: 1 },
  { name: "lethe", image: "../../asset/trickcal/lethe.webp", rate: 1 },
  { name: "meluna", image: "../../asset/trickcal/meluna.webp", rate: 1 },
  { name: "patula", image: "../../asset/trickcal/patula.webp", rate: 1 },
  { name: "picora", image: "../../asset/trickcal/picora.webp", rate: 1 },
  { name: "ricotta", image: "../../asset/trickcal/ricotta.webp", rate: 1 },
  { name: "sylla", image: "../../asset/trickcal/sylla.webp", rate: 1 },
  { name: "velvet", image: "../../asset/trickcal/velvet.webp", rate: 1 },
  { name: "asana", image: "../../asset/trickcal/asana.webp", rate: 1 },
  { name: "ashur", image: "../../asset/trickcal/ashur.webp", rate: 1 },
  { name: "barie", image: "../../asset/trickcal/barie.webp", rate: 1 },
  { name: "blanchet", image: "../../asset/trickcal/blanchet.webp", rate: 1 },
  { name: "chopi", image: "../../asset/trickcal/chopi.webp", rate: 1 },
  { name: "festa", image: "../../asset/trickcal/festa.webp", rate: 1 },
  { name: "hilde", image: "../../asset/trickcal/hilde.webp", rate: 1 },
  { name: "joan", image: "../../asset/trickcal/joan.webp", rate: 1 },
  { name: "kidian", image: "../../asset/trickcal/kidian.webp", rate: 1 },
  { name: "kommy", image: "../../asset/trickcal/kommy.webp", rate: 1 },
  { name: "leone", image: "../../asset/trickcal/leone.webp", rate: 1 },
  { name: "levi", image: "../../asset/trickcal/levi.webp", rate: 1 },
  { name: "orr", image: "../../asset/trickcal/orr.webp", rate: 1 },
  { name: "posher", image: "../../asset/trickcal/posher.webp", rate: 1 },
  { name: "rim", image: "../../asset/trickcal/rim.webp", rate: 1 },
  { name: "risty", image: "../../asset/trickcal/risty.webp", rate: 1 },
  {
    name: "rohne-mayor",
    image: "../../asset/trickcal/rohne-mayor.webp",
    rate: 1,
  },
  { name: "shasha", image: "../../asset/trickcal/shasha.webp", rate: 1 },
  { name: "snorky", image: "../../asset/trickcal/snorky.webp", rate: 1 },
  { name: "veroo", image: "../../asset/trickcal/veroo.webp", rate: 1 },
  { name: "xion", image: "../../asset/trickcal/xion.webp", rate: 1 },
  { name: "yomi", image: "../../asset/trickcal/yomi.webp", rate: 1 },
  { name: "allet", image: "../../asset/trickcal/allet.webp", rate: 1 },
  { name: "bigwood", image: "../../asset/trickcal/bigwood.webp", rate: 1 },
  { name: "daya", image: "../../asset/trickcal/daya.webp", rate: 1 },
  { name: "erpin", image: "../../asset/trickcal/erpin.webp", rate: 1 },
  { name: "gabia", image: "../../asset/trickcal/gabia.webp", rate: 1 },
  { name: "haley", image: "../../asset/trickcal/haley.webp", rate: 1 },
  { name: "kathy", image: "../../asset/trickcal/kathy.webp", rate: 1 },
  { name: "kyarot", image: "../../asset/trickcal/kyarot.webp", rate: 1 },
  { name: "kyuri", image: "../../asset/trickcal/kyuri.webp", rate: 1 },
  { name: "mago", image: "../../asset/trickcal/mago.webp", rate: 1 },
  { name: "mayo-cool", image: "../../asset/trickcal/mayo-cool.webp", rate: 1 },
  { name: "mute", image: "../../asset/trickcal/mute.webp", rate: 1 },
  { name: "naia", image: "../../asset/trickcal/naia.webp", rate: 1 },
  { name: "opal", image: "../../asset/trickcal/opal.webp", rate: 1 },
  { name: "laika", image: "../../asset/trickcal/laika.webp", rate: 1 },
  { name: "ran", image: "../../asset/trickcal/ran.webp", rate: 1 },
  { name: "rohne", image: "../../asset/trickcal/rohne.webp", rate: 1 },
  { name: "sari", image: "../../asset/trickcal/sari.webp", rate: 1 },
  { name: "sherum", image: "../../asset/trickcal/sherum.webp", rate: 1 },
  { name: "silphir", image: "../../asset/trickcal/silphir.webp", rate: 1 },
  { name: "speaki", image: "../../asset/trickcal/speaki.webp", rate: 1 },
  { name: "alice", image: "../../asset/trickcal/alice.webp", rate: 1 },
  { name: "annette", image: "../../asset/trickcal/annette.webp", rate: 1 },
  { name: "belita", image: "../../asset/trickcal/belita.webp", rate: 1 },
  { name: "chloe", image: "../../asset/trickcal/chloe.webp", rate: 1 },
  { name: "diana", image: "../../asset/trickcal/diana.webp", rate: 1 },
  { name: "ifrit", image: "../../asset/trickcal/ifrit.webp", rate: 1 },
  { name: "leets", image: "../../asset/trickcal/leets.webp", rate: 1 },
  { name: "maestro", image: "../../asset/trickcal/maestro.webp", rate: 1 },
  { name: "maison", image: "../../asset/trickcal/maison.webp", rate: 1 },
  { name: "mayo", image: "../../asset/trickcal/mayo.webp", rate: 1 },
  { name: "ner", image: "../../asset/trickcal/ner.webp", rate: 1 },
  { name: "neti", image: "../../asset/trickcal/neti.webp", rate: 1 },
  { name: "pira", image: "../../asset/trickcal/pira.webp", rate: 1 },
  { name: "polan", image: "../../asset/trickcal/polan.webp", rate: 1 },
  { name: "renewa", image: "../../asset/trickcal/renewa.webp", rate: 1 },
  { name: "rim-chaos", image: "../../asset/trickcal/rim-chaos.webp", rate: 1 },
  { name: "rollet", image: "../../asset/trickcal/rollet.webp", rate: 1 },
  { name: "shady", image: "../../asset/trickcal/shady.webp", rate: 1 },
  { name: "sist", image: "../../asset/trickcal/sist.webp", rate: 1 },
  { name: "tig-hero", image: "../../asset/trickcal/tig-hero.webp", rate: 1 },
  { name: "yumimi", image: "../../asset/trickcal/yumimi.webp", rate: 1 },
  { name: "arco", image: "../../asset/trickcal/arco.webp", rate: 1 },
  { name: "bana", image: "../../asset/trickcal/bana.webp", rate: 1 },
  { name: "beni", image: "../../asset/trickcal/beni.webp", rate: 1 },
  { name: "butter", image: "../../asset/trickcal/butter.webp", rate: 1 },
  { name: "canna", image: "../../asset/trickcal/canna.webp", rate: 1 },
  { name: "carren", image: "../../asset/trickcal/carren.webp", rate: 1 },
  { name: "epica", image: "../../asset/trickcal/epica.webp", rate: 1 },
  { name: "jubee", image: "../../asset/trickcal/jubee.webp", rate: 1 },
  { name: "makasha", image: "../../asset/trickcal/makasha.webp", rate: 1 },
  { name: "marie", image: "../../asset/trickcal/marie.webp", rate: 1 },
  { name: "miro", image: "../../asset/trickcal/miro.webp", rate: 1 },
  { name: "momo", image: "../../asset/trickcal/momo.webp", rate: 1 },
  { name: "mynx", image: "../../asset/trickcal/mynx.webp", rate: 1 },
  { name: "rude", image: "../../asset/trickcal/rude.webp", rate: 1 },
  { name: "rufo", image: "../../asset/trickcal/rufo.webp", rate: 1 },
  { name: "selinne", image: "../../asset/trickcal/selinne.webp", rate: 1 },
  { name: "shoupan", image: "../../asset/trickcal/shoupan.webp", rate: 1 },
  { name: "suro", image: "../../asset/trickcal/suro.webp", rate: 1 },
  {
    name: "speaki-maid",
    image: "../../asset/trickcal/speaki-maid.webp",
    rate: 1,
  },
  { name: "taida", image: "../../asset/trickcal/taida.webp", rate: 1 },
  { name: "tig", image: "../../asset/trickcal/tig.webp", rate: 1 },
  { name: "ui", image: "../../asset/trickcal/ui.webp", rate: 1 },
  { name: "vela", image: "../../asset/trickcal/vela.webp", rate: 1 },
  { name: "uros", image: "../../asset/trickcal/uros.webp", rate: 1 },
];

/************************************************************************
 * CODE LOGIC - KHÔNG CẦN ĐỤNG TỚI
 ************************************************************************/

const resultsEl = document.getElementById("results");
const configPreviewEl = document.getElementById("configPreview");
const roll1Btn = document.getElementById("roll1");
const roll10Btn = document.getElementById("roll10");

function refreshConfigPreview() {
  configPreviewEl.textContent = JSON.stringify(characters, null, 2);
}
refreshConfigPreview();

// Chuẩn hóa tỉ lệ thành weight tổng = 1
function buildWeightedList(chars) {
  const list = chars.map((c) => ({ ...c, rate: Number(c.rate) || 0 }));
  const total = list.reduce((s, c) => s + Math.max(0, c.rate), 0);
  if (total <= 0) {
    const n = list.length || 1;
    return list.map((c) => ({ ...c, weight: 1 / n }));
  }
  return list.map((c) => ({ ...c, weight: c.rate / total }));
}

function pickOne(weighted) {
  let r = Math.random();
  let acc = 0;
  for (const c of weighted) {
    acc += c.weight;
    if (r <= acc) return c;
  }
  return weighted[weighted.length - 1];
}

function makeCard(item) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.name;
  img.onerror = () => {
    img.style.opacity = 0.35;
  };

  const nm = document.createElement("div");
  nm.className = "name";
  nm.textContent = item.name;

  const rate = document.createElement("div");
  rate.className = "rate";
  rate.textContent = Math.round((item.weight || 0) * 1000) / 10 + "%";

  div.appendChild(img);
  div.appendChild(nm);
  div.appendChild(rate);
  return div;
}

function doRoll(n) {
  const weighted = buildWeightedList(characters);
  for (let i = 0; i < characters.length; i++) {
    characters[i].weight = weighted[i].weight;
  }
  refreshConfigPreview();

  const frag = document.createDocumentFragment();

  for (let i = 0; i < n; i++) {
    const picked = pickOne(weighted);
    const card = makeCard(picked);
    resultsEl.prepend(card);
  }

  while (resultsEl.childElementCount > 100) {
    resultsEl.removeChild(resultsEl.lastElementChild);
  }
}

roll1Btn.addEventListener("click", () => doRoll(1));
roll10Btn.addEventListener("click", () => doRoll(10));
