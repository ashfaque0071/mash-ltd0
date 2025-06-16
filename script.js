// File: script.js
// Image upload + love-message + dark-mode toggle

// Love messages with fade-in
const messages = [
  "Mahi always knows how to make me smile 😊",
  "She is the most beautiful soul I have ever known 💖",
  "Mahi makes every moment special ✨",
  "No matter how bad the day is seeing her makes me better and melts me 💫",
  "Her love is my biggest strength 🌈",
  "Mahi's laughter is my favorite sound 🎶",
  "I love her alot, she is my everything 💕",
  "I want to marry her and spend my life with her forever 💍",
  "Mahi is the reason I believe in love at first sight 💘",
  "I can't imagine my life without her by my side 🌹",
  "i want to have a family with her and grow old together 👨‍👩‍👧‍👦",
];
function showMessage() {
  const p = document.getElementById("love-message");
  const idx = Math.floor(Math.random() * messages.length);
  p.textContent = messages[idx];
  p.classList.add("visible");
}

// Dark-mode toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Stacked flip logic
const container = document.getElementById("flip-container");
const cards = container.querySelectorAll(".card");
let currentIndex = 0;

function flipAndShowNext() {
  const currentCard = cards[currentIndex];
  if (!currentCard) return;

  // Flip the current card
  currentCard.classList.add("flipped");

  // Wait 1.5s → then flip back & show next card
  setTimeout(() => {
    currentCard.classList.remove("flipped");
    currentCard.classList.remove("active");

    // Move to next card
    currentIndex = (currentIndex + 1) % cards.length;
    const nextCard = cards[currentIndex];
    nextCard.classList.add("active");
  }, 1500);
}

// Set up initial card
cards[0]?.classList.add("active");

// Desktop hover
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (card.classList.contains("active")) {
      flipAndShowNext();
    }
  });
});

// Mobile touch (long tap)
cards.forEach((card) => {
  card.addEventListener("touchstart", () => {
    if (card.classList.contains("active")) {
      flipAndShowNext();
    }
  }, { passive: true });
});

// Export showMessage for onclick use
window.showMessage = showMessage;
