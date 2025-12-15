// ==== DỮ LIỆU NHÂN VẬT ====
const characters = [
  { name: "hilde", image: "../../asset/trickcal/char/hilde.webp" },
  { name: "vivi", image: "../../asset/trickcal/char/vivi.webp" },
  { name: "amelia", image: "../../asset/trickcal/char/amelia.webp" },
  { name: "asia", image: "../../asset/trickcal/char/asia.webp" },
  { name: "aya", image: "../../asset/trickcal/char/aya.webp" },
  { name: "barong", image: "../../asset/trickcal/char/barong.webp" },
  { name: "benny", image: "../../asset/trickcal/char/benny.webp" },
  { name: "caesar", image: "../../asset/trickcal/char/caesar.webp" },
  { name: "canta", image: "../../asset/trickcal/char/canta.webp" },
  {
    name: "diana-heyday",
    image: "../../asset/trickcal/char/diana-heyday.webp",
  },
  { name: "ed", image: "../../asset/trickcal/char/ed.webp" },
  { name: "elena", image: "../../asset/trickcal/char/elena.webp" },
  { name: "espi", image: "../../asset/trickcal/char/espi.webp" },
  { name: "fricle", image: "../../asset/trickcal/char/fricle.webp" },
  { name: "gwynn", image: "../../asset/trickcal/char/gwynn.webp" },
  { name: "jade", image: "../../asset/trickcal/char/jade.webp" },
  {
    name: "kommy-swimsuit",
    image: "../../asset/trickcal/char/kommy-swimsuit.webp",
  },
  { name: "layze", image: "../../asset/trickcal/char/layze.webp" },
  { name: "lethe", image: "../../asset/trickcal/char/lethe.webp" },
  { name: "meluna", image: "../../asset/trickcal/char/meluna.webp" },
  { name: "patula", image: "../../asset/trickcal/char/patula.webp" },
  { name: "picora", image: "../../asset/trickcal/char/picora.webp" },
  { name: "ricotta", image: "../../asset/trickcal/char/ricotta.webp" },
  { name: "sylla", image: "../../asset/trickcal/char/sylla.webp" },
  { name: "velvet", image: "../../asset/trickcal/char/velvet.webp" },
  { name: "asana", image: "../../asset/trickcal/char/asana.webp" },
  { name: "ashur", image: "../../asset/trickcal/char/ashur.webp" },
  { name: "barie", image: "../../asset/trickcal/char/barie.webp" },
  { name: "blanchet", image: "../../asset/trickcal/char/blanchet.webp" },
  { name: "chopi", image: "../../asset/trickcal/char/chopi.webp" },
  { name: "festa", image: "../../asset/trickcal/char/festa.webp" },
  { name: "joan", image: "../../asset/trickcal/char/joan.webp" },
  { name: "kidian", image: "../../asset/trickcal/char/kidian.webp" },
  { name: "kommy", image: "../../asset/trickcal/char/kommy.webp" },
  { name: "leone", image: "../../asset/trickcal/char/leone.webp" },
  { name: "levi", image: "../../asset/trickcal/char/levi.webp" },
  { name: "orr", image: "../../asset/trickcal/char/orr.webp" },
  { name: "posher", image: "../../asset/trickcal/char/posher.webp" },
  { name: "rim", image: "../../asset/trickcal/char/rim.webp" },
  { name: "risty", image: "../../asset/trickcal/char/risty.webp" },
  { name: "rohne-mayor", image: "../../asset/trickcal/char/rohne-mayor.webp" },
  { name: "shasha", image: "../../asset/trickcal/char/shasha.webp" },
  { name: "snorky", image: "../../asset/trickcal/char/snorky.webp" },
  { name: "veroo", image: "../../asset/trickcal/char/veroo.webp" },
  { name: "xion", image: "../../asset/trickcal/char/xion.webp" },
  { name: "yomi", image: "../../asset/trickcal/char/yomi.webp" },
  { name: "allet", image: "../../asset/trickcal/char/allet.webp" },
  { name: "bigwood", image: "../../asset/trickcal/char/bigwood.webp" },
  { name: "daya", image: "../../asset/trickcal/char/daya.webp" },
  { name: "erpin", image: "../../asset/trickcal/char/erpin.webp" },
  { name: "gabia", image: "../../asset/trickcal/char/gabia.webp" },
  { name: "haley", image: "../../asset/trickcal/char/haley.webp" },
  { name: "kathy", image: "../../asset/trickcal/char/kathy.webp" },
  { name: "kyarot", image: "../../asset/trickcal/char/kyarot.webp" },
  { name: "kyuri", image: "../../asset/trickcal/char/kyuri.webp" },
  { name: "mago", image: "../../asset/trickcal/char/mago.webp" },
  { name: "mayo-cool", image: "../../asset/trickcal/char/mayo-cool.webp" },
  { name: "mute", image: "../../asset/trickcal/char/mute.webp" },
  { name: "naia", image: "../../asset/trickcal/char/naia.webp" },
  { name: "opal", image: "../../asset/trickcal/char/opal.webp" },
  { name: "laika", image: "../../asset/trickcal/char/laika.webp" },
  { name: "ran", image: "../../asset/trickcal/char/ran.webp" },
  { name: "rohne", image: "../../asset/trickcal/char/rohne.webp" },
  { name: "sari", image: "../../asset/trickcal/char/sari.webp" },
  { name: "sherum", image: "../../asset/trickcal/char/sherum.webp" },
  { name: "silphir", image: "../../asset/trickcal/char/silphir.webp" },
  { name: "speaki", image: "../../asset/trickcal/char/speaki.webp" },
  { name: "alice", image: "../../asset/trickcal/char/alice.webp" },
  { name: "annette", image: "../../asset/trickcal/char/annette.webp" },
  { name: "belita", image: "../../asset/trickcal/char/belita.webp" },
  { name: "chloe", image: "../../asset/trickcal/char/chloe.webp" },
  { name: "diana", image: "../../asset/trickcal/char/diana.webp" },
  { name: "ifrit", image: "../../asset/trickcal/char/ifrit.webp" },
  { name: "leets", image: "../../asset/trickcal/char/leets.webp" },
  { name: "maestro", image: "../../asset/trickcal/char/maestro.webp" },
  { name: "maison", image: "../../asset/trickcal/char/maison.webp" },
  { name: "mayo", image: "../../asset/trickcal/char/mayo.webp" },
  { name: "ner", image: "../../asset/trickcal/char/ner.webp" },
  { name: "neti", image: "../../asset/trickcal/char/neti.webp" },
  { name: "pira", image: "../../asset/trickcal/char/pira.webp" },
  { name: "polan", image: "../../asset/trickcal/char/polan.webp" },
  { name: "renewa", image: "../../asset/trickcal/char/renewa.webp" },
  { name: "rim-chaos", image: "../../asset/trickcal/char/rim-chaos.webp" },
  { name: "rollet", image: "../../asset/trickcal/char/rollet.webp" },
  { name: "shady", image: "../../asset/trickcal/char/shady.webp" },
  { name: "sist", image: "../../asset/trickcal/char/sist.webp" },
  { name: "tig-hero", image: "../../asset/trickcal/char/tig-hero.webp" },
  { name: "yumimi", image: "../../asset/trickcal/char/yumimi.webp" },
  { name: "arco", image: "../../asset/trickcal/char/arco.webp" },
  { name: "bana", image: "../../asset/trickcal/char/bana.webp" },
  { name: "beni", image: "../../asset/trickcal/char/beni.webp" },
  { name: "butter", image: "../../asset/trickcal/char/butter.webp" },
  { name: "canna", image: "../../asset/trickcal/char/canna.webp" },
  { name: "carren", image: "../../asset/trickcal/char/carren.webp" },
  { name: "epica", image: "../../asset/trickcal/char/epica.webp" },
  { name: "jubee", image: "../../asset/trickcal/char/jubee.webp" },
  { name: "makasha", image: "../../asset/trickcal/char/makasha.webp" },
  { name: "marie", image: "../../asset/trickcal/char/marie.webp" },
  { name: "miro", image: "../../asset/trickcal/char/miro.webp" },
  { name: "momo", image: "../../asset/trickcal/char/momo.webp" },
  { name: "mynx", image: "../../asset/trickcal/char/mynx.webp" },
  { name: "rude", image: "../../asset/trickcal/char/rude.webp" },
  { name: "rufo", image: "../../asset/trickcal/char/rufo.webp" },
  { name: "selinne", image: "../../asset/trickcal/char/selinne.webp" },
  { name: "shoupan", image: "../../asset/trickcal/char/shoupan.webp" },
  { name: "suro", image: "../../asset/trickcal/char/suro.webp" },
  { name: "speaki-maid", image: "../../asset/trickcal/char/speaki-maid.webp" },
  { name: "taida", image: "../../asset/trickcal/char/taida.webp" },
  { name: "tig", image: "../../asset/trickcal/char/tig.webp" },
  { name: "ui", image: "../../asset/trickcal/char/ui.webp" },
  { name: "vela", image: "../../asset/trickcal/char/vela.webp" },
  { name: "uros", image: "../../asset/trickcal/char/uros.webp" },
];

// ==== CÀI ĐẶT ====
let currentQuestion = 0;
let score = 0;
let lives = 3;
let timeLeft = 120;
let timerInterval;

// ==== DOM ELEMENTS ====
const startBtn = document.getElementById("start-btn");
const characterImg = document.getElementById("character-img");
const quizArea = document.getElementById("quiz-area");
const overlay = document.querySelector(".overlay");
const choiceBtns = document.querySelectorAll(".choice-btn");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const resultDisplay = document.getElementById("result");

// ==== HÀM HỖ TRỢ ====
function getRandomQuestion() {
  // Lấy 1 nhân vật random làm câu hỏi
  const q = characters[Math.floor(Math.random() * characters.length)];

  // Lấy 3 lựa chọn sai khác
  let wrongChoices = characters.filter((c) => c.name !== q.name);
  wrongChoices = shuffleArray(wrongChoices).slice(0, 3);

  const choices = shuffleArray([q, ...wrongChoices]);
  return { question: q, choices: choices };
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// ==== QUIZ LOGIC ====
let currentQData;

function startQuiz() {
  quizArea.style.display = "block";
  startBtn.disabled = true;
  currentQuestion = 0;
  score = 0;
  lives = 3;
  timeLeft = 120;

  scoreDisplay.textContent = `Điểm: ${score}`;
  livesDisplay.textContent = `Lượt sai còn lại: ${lives}`;
  resultDisplay.classList.add("hidden");

  nextQuestion();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Thời gian: ${timeLeft}s`;
  if (timeLeft <= 0) endQuiz();
}

function nextQuestion() {
  if (lives <= 0) {
    endQuiz();
    return;
  }
  currentQData = getRandomQuestion();
  characterImg.src = currentQData.question.image;
  overlay.style.display = "block"; // luôn phủ đen

  choiceBtns.forEach((btn, idx) => {
    btn.textContent = currentQData.choices[idx].name;
    btn.disabled = false;
  });
}

function selectAnswer(e) {
  const selected = e.target.textContent;
  if (selected === currentQData.question.name) {
    score++;
    scoreDisplay.textContent = `Điểm: ${score}`;
  } else {
    lives--;
    livesDisplay.textContent = `Lượt sai còn lại: ${lives}`;
  }

  currentQuestion++;
  nextQuestion();
}

function endQuiz() {
  clearInterval(timerInterval);
  quizArea.style.display = "none";
  characterImg.src = "";
  choiceBtns.forEach((btn) => (btn.disabled = true));
  resultDisplay.textContent = `Quiz kết thúc! Điểm của bạn: ${score}`;
  resultDisplay.classList.remove("hidden");
  startBtn.disabled = false;
}

// ==== EVENT LISTENERS ====
startBtn.addEventListener("click", startQuiz);
choiceBtns.forEach((btn) => btn.addEventListener("click", selectAnswer));
