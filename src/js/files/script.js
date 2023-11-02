// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("header-scrolling");
  } else {
    header.classList.remove("header-scrolling");
  }
});

// function generateStars() {
//   const svg = document.getElementById("stars-svg");
//   const group = svg.querySelector("#c0153062-95a7-412f-be95-4bccb94029e9");

//   for (let i = 0; i < 300; i++) {
//     const x = Math.random() * 545.39;
//     const y = Math.random() * 294.79;
//     const animationDelay = Math.random() * 2; // Random delay between 0 and 2 seconds

//     const starPath = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "path"
//     );
//     starPath.setAttribute("class", "stars-bg__star");
//     starPath.setAttribute(
//       "d",
//       `M${x},${y}a1.18,1.18,0,1,0,1.18,1.18,1.18,1.18,0,0,0-1.18-1.18`
//     );
//     starPath.style.animationDelay = `${animationDelay}s`; // Set random animation delay

//     group.appendChild(starPath);
//   }
// }

// generateStars();

// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     // Check if the card has the "selected" class
//     if (card.classList.contains("selected")) {
//       // If it has the class, remove it
//       card.classList.remove("selected");
//     } else {
//       // If it doesn't have the class, add it
//       card.classList.add("selected");

//       // Remove the "selected" class from all other cards
//       cards.forEach((otherCard) => {
//         if (otherCard !== card) {
//           otherCard.classList.remove("selected");
//         }
//       });
//     }
//   });
// });

const cards = document.querySelectorAll(".card");
const toggleButtons = document.querySelectorAll(".toggleButton");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    toggleClass(index);
  });

  toggleButtons[index].addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent card click event propagation
    toggleClass(index);
  });
});

function toggleClass(index) {
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.toggle("selected");
    } else {
      card.classList.remove("selected");
    }
  });
}

const elements = document.querySelectorAll(".animated-element");
let currentIndex = 0;

function startAnimation() {
  elements[currentIndex].style.animationPlayState = "running";
  currentIndex = (currentIndex + 1) % elements.length;

  // Pause the previous element
  const previousIndex = (currentIndex - 1 + elements.length) % elements.length;
  elements[previousIndex].style.animationPlayState = "paused";

  setTimeout(startAnimation, 3000); // 3 seconds interval
}

startAnimation();
