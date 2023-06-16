// JavaScript code for hatza slider functionality
const hatzaSlider = document.querySelector(".hatza-slider");
const slideWidth = document.querySelector(".slide").offsetWidth;
const arrowButtons = document.querySelectorAll(".arrow-button");
let slideIndex = 0;

// Move hatza slider to the given index
const moveHatzaSlider = (index) => {
  hatzaSlider.style.transform = `translateX(-${slideWidth * index}px)`;
};

// Update slide index and move the hatza slider
const updateHatzaSlider = (direction) => {
  if (direction === "prev") {
    slideIndex = Math.max(slideIndex - 1, 0);
  } else if (direction === "next") {
    slideIndex = Math.min(slideIndex + 1, hatzaSlider.childElementCount - 1);
  }

  moveHatzaSlider(slideIndex);
};

// Attach event listeners to arrow buttons
arrowButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const direction = event.target.classList.contains("left") ? "prev" : "next";
    updateHatzaSlider(direction);
  });
});
