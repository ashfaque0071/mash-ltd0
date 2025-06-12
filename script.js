// File: script.js
// Image upload + love-message + dark-mode toggle

// “Add More Images”


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
  const idx = Math.floor(Math.random()*messages.length);
  p.textContent = messages[idx];
  p.classList.add('visible');
}

// Dark-mode toggle
const toggle = document.getElementById('dark-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Export showMessage so inline onclick still works
window.showMessage = showMessage;