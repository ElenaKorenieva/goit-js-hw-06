function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const currentColorEL = document.querySelector(".color");

buttonChangeColor.addEventListener("click", (event) => {
  const createdColor = getRandomHexColor();
  document.body.style.backgroundColor = createdColor;
  currentColorEL.textContent = createdColor;
});
