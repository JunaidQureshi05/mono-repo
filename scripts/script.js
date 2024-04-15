let container = document.querySelector(".container");
let footerText = document.getElementById("footer-text");

let projects = [
  { name: "Form Validator", link: "form-validator", image: "1.webp" },
  { name: "New Year Countdown", link: "new-year-countdown", image: "2.webp" },
  { name: "Custom Video Player", link: "custom-video-player", image: "3.webp" },
  {
    name: "Exchange Rate Calculator",
    link: "exchange-rate-calculator",
    image: "4.webp",
  },
  { name: "Movie Booking", link: "movie-booking", image: "5.webp" },
  { name: "DOM Array Method", link: "dom-array-method", image: "6.webp" },
  { name: "Lyrics Search", link: "lyrics-search", image: "7.webp" },
  { name: "Break Out Game", link: "break-out-game", image: "8.webp" },
  { name: "Memory Cards", link: "memory-cards", image: "9.webp" },
  { name: "Infinite Scroll", link: "infinite-scroll", image: "10.webp" },
  {
    name: "Speak Number Guessing",
    link: "speak-number-guessing",
    image: "11.webp",
  },
  { name: "Speech Text Reader", link: "speech-text-reader", image: "12.webp" },
  { name: "Hangman Game", link: "hangman-game", image: "13.webp" },
  {
    name: "Menu Slider and Modal",
    link: "menu-slider-and-modal",
    image: "14.webp",
  },
  { name: "Sortable List", link: "sortable-list", image: "15.webp" },
  { name: "Typing Game", link: "typing-game", image: "16.webp" },
  { name: "Relaxer", link: "relaxer", image: "17.webp" },
  { name: "Meal Finder", link: "meal-finder", image: "18.webp" },
  { name: "Music Player", link: "music-player", image: "19.webp" },
  { name: "Expense Tracker", link: "expense-tracker", image: "20.webp" },
  { name: "Movie App", link: "movie-app", image: "20.webp" },
  { name: "Code Pen", link: "code-pen-clone", image: "20.webp" },
  { name: "Book  Keeper", link: "book-keeper", image: "20.webp" },
  { name: "Calculator", link: "calculator", image: "20.webp" },
  { name: "Kanban Board", link: "drag-n-drop", image: "20.webp" },
  { name: "Form Validation", link: "form-validation", image: "20.webp" },
  { name: "Infinity Scroll", link: "infinity-scroll", image: "20.webp" },
  { name: "Joke Teller", link: "joke-teller", image: "20.webp" },
  { name: "Light Dark Mode", link: "light-dark-mode", image: "20.webp" },
  { name: "Navigation Nation", link: "navigation-nation", image: "20.webp" },
  { name: "Paint", link: "paint", image: "20.webp" },
  { name: "Picture in Picture", link: "picture-in-picture", image: "20.webp" },
  { name: "Quote Generator", link: "quote-generator", image: "20.webp" },
  { name: "Song Player", link: "song-player", image: "20.webp" },
  { name: "Spock Rock Game", link: "spock-rock-game", image: "20.webp" },
];

function createBox(project) {
  let box = document.createElement("div"); // Change anchor tag to div
  box.classList.add("project");
  // box.href = `./projects/${project.link}`;
  box.style.background = getRandomColor();
  box.style.cursor = "pointer"; // Change cursor to pointer to indicate it's clickable
  box.addEventListener("click", () => {
    // Handle navigation when the box is clicked
    window.location.href = `./projects/${project.link}`;
  });

  let image = document.createElement("div");
  image.classList.add("image");
  image.innerHTML = `<img src='./img/${project.image}'/>`;

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
