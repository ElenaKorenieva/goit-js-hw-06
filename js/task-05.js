let inputRef = document.querySelector("#name-input");
let outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  console.dir(event);

  outputRef.textContent =
    event.target.value === "" ? "Anonymous" : event.target.value;
});
