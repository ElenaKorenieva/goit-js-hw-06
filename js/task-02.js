const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parentEl = document.querySelector("#ingredients");

function insertItem(ingredients, parentEl) {
  const result = ingredients
    .map((ingridient) => {
      return `<li class="item">${ingridient}</li>`;
    })
    .join("");

  parentEl.insertAdjacentHTML("beforeend", result);
}

insertItem(ingredients, parentEl);
