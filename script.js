let container = document.querySelector(".container");
let footerText = document.getElementById("footer-text");

let projects = [
  { name: "Form Validator", link: "form-validator", image: "1.png" },
  { name: "New Year Countdown", link: "new-year-countdown", image: "2.png" },
  { name: "Custom Video Player", link: "custom-video-player", image: "3.png" },
  {
    name: "Exchange Rate Calculator",
    link: "exchange-rate-calculator",
    image: "4.png",
  },
  { name: "Movie Booking", link: "movie-booking", image: "5.png" },
  { name: "DOM Array Method", link: "dom-array-method", image: "6.png" },
  { name: "Lyrics Search", link: "lyrics-search", image: "7.png" },
  { name: "Break Out Game", link: "break-out-game", image: "8.png" },
  { name: "Memory Cards", link: "memory-cards", image: "9.png" },
  { name: "Infinite Scroll", link: "infinite-scroll", image: "10.png" },
  {
    name: "Speak Number Guessing",
    link: "speak-number-guessing",
    image: "11.png",
  },
  { name: "Speech Text Reader", link: "speech-text-reader", image: "12.png" },
  { name: "Hangman Game", link: "hangman-game", image: "13.png" },
  {
    name: "Menu Slider and Modal",
    link: "menu-slider-and-modal",
    image: "14.png",
  },
  { name: "Sortable List", link: "sortable-list", image: "15.png" },
  { name: "Typing Game", link: "typing-game", image: "16.png" },
  { name: "Relaxer", link: "relaxer", image: "17.png" },
  { name: "Meal Finder", link: "meal-finder", image: "18.png" },
  { name: "Music Player", link: "music-player", image: "19.png" },
  { name: "Expense Tracker", link: "expense-tracker", image: "20.png" },
];

function createBox(project) {
  let box = document.createElement("a");
  box.classList.add("project");
  box.href = `./projects/${project.link}`;

  let image = document.createElement("div");
  image.classList.add("image");
  image.style.backgroundImage = `url('./img/${project.image}')`;

  let content = document.createElement("div");
  content.classList.add("content");
  content.innerHTML = `
    <div class="title">${project.name}</div>
  `;

  box.appendChild(image);
  box.appendChild(content);

  return box;
}

projects.forEach((project) => container.appendChild(createBox(project)));

footerText.innerText = `All rights reserved - Juned Ahmad ${new Date().getFullYear()}`;
