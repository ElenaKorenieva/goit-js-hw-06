const inputEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  const size = inputEl.value;
  console.dir(event);

  spanTextEl.style.fontSize = size + "px";
});
