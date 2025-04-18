const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const messages = [
  "You are my sunshine ☀️",
  "I love you more than words can say 💖",
  "You're my forever and always 💍",
  "Your smile lights up my world ✨",
  "I’m so lucky to have you ❤️"
];

let messageIndex = 0;
const messageBox = document.getElementById("message");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

function showNextMessage() {
  messageIndex = (messageIndex + 1) % messages.length;
  messageBox.textContent = messages[messageIndex];
}

setInterval(showNextSlide, 4000);  // every 4 seconds
setInterval(showNextMessage, 5000); // every 5 seconds
