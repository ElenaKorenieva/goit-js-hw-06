let valueCount = 0;

// let valueEl = +document.querySelector("#value").textContent;
const counterValue = document.querySelector("#value");
const decrementCounter = document.querySelector("#counter").firstElementChild;
const incrementCounter = document.querySelector("#counter").lastElementChild;

incrementCounter.addEventListener("click", (event) => {
  valueCount += 1;

  counterValue.textContent = valueCount;
});

decrementCounter.addEventListener("click", (event) => {
  valueCount -= 1;

  counterValue.textContent = valueCount;
});
