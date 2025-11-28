// ==== DỮ LIỆU NHÂN VẬT ====
const characters = [
  { name: "hilde", image: "../../asset/trickcal/hilde.webp" },
  { name: "vivi", image: "../../asset/trickcal/vivi.webp" },
  { name: "amelia", image: "../../asset/trickcal/amelia.webp" },
  { name: "asia", image: "../../asset/trickcal/asia.webp" },
  { name: "aya", image: "../../asset/trickcal/aya.webp" },
  { name: "barong", image: "../../asset/trickcal/barong.webp" },
  { name: "benny", image: "../../asset/trickcal/benny.webp" },
  { name: "caesar", image: "../../asset/trickcal/caesar.webp" },
  { name: "canta", image: "../../asset/trickcal/canta.webp" },
  { name: "diana-heyday", image: "../../asset/trickcal/diana-heyday.webp" },
  { name: "ed", image: "../../asset/trickcal/ed.webp" },
  { name: "elena", image: "../../asset/trickcal/elena.webp" },
  { name: "espi", image: "../../asset/trickcal/espi.webp" },
  { name: "fricle", image: "../../asset/trickcal/fricle.webp" },
  { name: "gwynn", image: "../../asset/trickcal/gwynn.webp" },
  { name: "jade", image: "../../asset/trickcal/jade.webp" },
  { name: "kommy-swimsuit", image: "../../asset/trickcal/kommy-swimsuit.webp" },
  { name: "layze", image: "../../asset/trickcal/layze.webp" },
  { name: "lethe", image: "../../asset/trickcal/lethe.webp" },
  { name: "meluna", image: "../../asset/trickcal/meluna.webp" },
  { name: "patula", image: "../../asset/trickcal/patula.webp" },
  { name: "picora", image: "../../asset/trickcal/picora.webp" },
  { name: "ricotta", image: "../../asset/trickcal/ricotta.webp" },
  { name: "sylla", image: "../../asset/trickcal/sylla.webp" },
  { name: "velvet", image: "../../asset/trickcal/velvet.webp" },
  { name: "asana", image: "../../asset/trickcal/asana.webp" },
  { name: "ashur", image: "../../asset/trickcal/ashur.webp" },
  { name: "barie", image: "../../asset/trickcal/barie.webp" },
  { name: "blanchet", image: "../../asset/trickcal/blanchet.webp" },
  { name: "chopi", image: "../../asset/trickcal/chopi.webp" },
  { name: "festa", image: "../../asset/trickcal/festa.webp" },
  { name: "joan", image: "../../asset/trickcal/joan.webp" },
  { name: "kidian", image: "../../asset/trickcal/kidian.webp" },
  { name: "kommy", image: "../../asset/trickcal/kommy.webp" },
  { name: "leone", image: "../../asset/trickcal/leone.webp" },
  { name: "levi", image: "../../asset/trickcal/levi.webp" },
  { name: "orr", image: "../../asset/trickcal/orr.webp" },
  { name: "posher", image: "../../asset/trickcal/posher.webp" },
  { name: "rim", image: "../../asset/trickcal/rim.webp" },
  { name: "risty", image: "../../asset/trickcal/risty.webp" },
  { name: "rohne-mayor", image: "../../asset/trickcal/rohne-mayor.webp" },
  { name: "shasha", image: "../../asset/trickcal/shasha.webp" },
  { name: "snorky", image: "../../asset/trickcal/snorky.webp" },
  { name: "veroo", image: "../../asset/trickcal/veroo.webp" },
  { name: "xion", image: "../../asset/trickcal/xion.webp" },
  { name: "yomi", image: "../../asset/trickcal/yomi.webp" },
  { name: "allet", image: "../../asset/trickcal/allet.webp" },
  { name: "bigwood", image: "../../asset/trickcal/bigwood.webp" },
  { name: "daya", image: "../../asset/trickcal/daya.webp" },
  { name: "erpin", image: "../../asset/trickcal/erpin.webp" },
  { name: "gabia", image: "../../asset/trickcal/gabia.webp" },
  { name: "haley", image: "../../asset/trickcal/haley.webp" },
  { name: "kathy", image: "../../asset/trickcal/kathy.webp" },
  { name: "kyarot", image: "../../asset/trickcal/kyarot.webp" },
  { name: "kyuri", image: "../../asset/trickcal/kyuri.webp" },
  { name: "mago", image: "../../asset/trickcal/mago.webp" },
  { name: "mayo-cool", image: "../../asset/trickcal/mayo-cool.webp" },
  { name: "mute", image: "../../asset/trickcal/mute.webp" },
  { name: "naia", image: "../../asset/trickcal/naia.webp" },
  { name: "opal", image: "../../asset/trickcal/opal.webp" },
  { name: "laika", image: "../../asset/trickcal/laika.webp" },
  { name: "ran", image: "../../asset/trickcal/ran.webp" },
  { name: "rohne", image: "../../asset/trickcal/rohne.webp" },
  { name: "sari", image: "../../asset/trickcal/sari.webp" },
  { name: "sherum", image: "../../asset/trickcal/sherum.webp" },
  { name: "silphir", image: "../../asset/trickcal/silphir.webp" },
  { name: "speaki", image: "../../asset/trickcal/speaki.webp" },
  { name: "alice", image: "../../asset/trickcal/alice.webp" },
  { name: "annette", image: "../../asset/trickcal/annette.webp" },
  { name: "belita", image: "../../asset/trickcal/belita.webp" },
  { name: "chloe", image: "../../asset/trickcal/chloe.webp" },
  { name: "diana", image: "../../asset/trickcal/diana.webp" },
  { name: "ifrit", image: "../../asset/trickcal/ifrit.webp" },
  { name: "leets", image: "../../asset/trickcal/leets.webp" },
  { name: "maestro", image: "../../asset/trickcal/maestro.webp" },
  { name: "maison", image: "../../asset/trickcal/maison.webp" },
  { name: "mayo", image: "../../asset/trickcal/mayo.webp" },
  { name: "ner", image: "../../asset/trickcal/ner.webp" },
  { name: "neti", image: "../../asset/trickcal/neti.webp" },
  { name: "pira", image: "../../asset/trickcal/pira.webp" },
  { name: "polan", image: "../../asset/trickcal/polan.webp" },
  { name: "renewa", image: "../../asset/trickcal/renewa.webp" },
  { name: "rim-chaos", image: "../../asset/trickcal/rim-chaos.webp" },
  { name: "rollet", image: "../../asset/trickcal/rollet.webp" },
  { name: "shady", image: "../../asset/trickcal/shady.webp" },
  { name: "sist", image: "../../asset/trickcal/sist.webp" },
  { name: "tig-hero", image: "../../asset/trickcal/tig-hero.webp" },
  { name: "yumimi", image: "../../asset/trickcal/yumimi.webp" },
  { name: "arco", image: "../../asset/trickcal/arco.webp" },
  { name: "bana", image: "../../asset/trickcal/bana.webp" },
  { name: "beni", image: "../../asset/trickcal/beni.webp" },
  { name: "butter", image: "../../asset/trickcal/butter.webp" },
  { name: "canna", image: "../../asset/trickcal/canna.webp" },
  { name: "carren", image: "../../asset/trickcal/carren.webp" },
  { name: "epica", image: "../../asset/trickcal/epica.webp" },
  { name: "jubee", image: "../../asset/trickcal/jubee.webp" },
  { name: "makasha", image: "../../asset/trickcal/makasha.webp" },
  { name: "marie", image: "../../asset/trickcal/marie.webp" },
  { name: "miro", image: "../../asset/trickcal/miro.webp" },
  { name: "momo", image: "../../asset/trickcal/momo.webp" },
  { name: "mynx", image: "../../asset/trickcal/mynx.webp" },
  { name: "rude", image: "../../asset/trickcal/rude.webp" },
  { name: "rufo", image: "../../asset/trickcal/rufo.webp" },
  { name: "selinne", image: "../../asset/trickcal/selinne.webp" },
  { name: "shoupan", image: "../../asset/trickcal/shoupan.webp" },
  { name: "suro", image: "../../asset/trickcal/suro.webp" },
  { name: "speaki-maid", image: "../../asset/trickcal/speaki-maid.webp" },
  { name: "taida", image: "../../asset/trickcal/taida.webp" },
  { name: "tig", image: "../../asset/trickcal/tig.webp" },
  { name: "ui", image: "../../asset/trickcal/ui.webp" },
  { name: "vela", image: "../../asset/trickcal/vela.webp" },
  { name: "uros", image: "../../asset/trickcal/uros.webp" },
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
