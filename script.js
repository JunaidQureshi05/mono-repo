let container = document.querySelector(".container");

let names = [
  "Form Validator",
  "New Year Countdown",
  "Video Player",
  "Exchange Rate Calculator",
  "Movie Seat Booking",
  "DOM Array Methods",
  "Lyrics Search",
  "Break Out Game",
  "Memory Cards",
  "Infinite Scroll",
  "Number Guessing Game",
  "Speech Text Reader",
  "Hangman Game",
  "Landing Page",
  "Drag and Drop",
  "Speed Typer",
  "Relaxer",
  "Meal Finder",
  "Music Player",
  "Expense Tracker",
];
let links = [
  "./projects/form-validator",
  "./projects/new-year-countdown",
  "./projects/custom-video-player",
  "./projects/exchange-rate-calculator",
  "./projects/movie-booking",
  "./projects/dom-array-method",
  "./projects/lyrics-search",
  "./break-out-game.html",
  "./projects/memory-cards",
  "./projects/infinite-scroll",
  "./projects/speak-number-guessing",
  "./projects/speech-text-reader",
  "./projects/hangman-game",
  "./projects/menu-slider-and-modal",
  "./projects/sortable-list",
  "./projects/typing-game",
  "./projects/relaxer",
  "./projects/meal-finder",
  "./projects/music-player",
  "./projects/expense-tracker",
];

function createBox(link, no) {
  let box = document.createElement("div");
  box.classList.add("project");
  box.style.backgroundImage = `url('./img/${no}.png')`;

  box.innerHTML = `
  
  <div class="content">
  <div class="title">${names[no - 1]}</div>
  <a href="${link}" class="btn">See Project</a>
</div>
  `;
  return box;
}

links.forEach((link, idx) => {
  container.appendChild(createBox(link, idx + 1));
});
console.log(container);

``;
