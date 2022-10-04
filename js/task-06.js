const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("change", onInputValidation);

function onInputValidation(event) {
  console.dir(event);

  const { value, dataset, classList } = event.target;
  if (value.length === Number(dataset.length)) {
    classList.remove("invalid");
    classList.add("valid");
  } else {
    classList.remove("valid");
    classList.add("invalid");
  }
}
