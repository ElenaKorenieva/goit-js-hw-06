const buttonCteate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const amountEl = document.querySelector("#controls>input");
console.log(amountEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesCreate = (amount) => {
  const boxesArr = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArr.push(box);
  }

  return boxesArr;
};

const boxesDestroy = () => {
  boxesEl.innerHTML = "";
};

buttonCteate.addEventListener("click", () => {
  let boxesToAdd = boxesCreate(amountEl.value);
  boxesEl.append(...boxesToAdd);
});

buttonDestroy.addEventListener("click", () => {
  boxesDestroy.call();
});
