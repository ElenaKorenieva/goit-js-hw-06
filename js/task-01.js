const list = document.querySelector("ul");
console.log(`Number of categories: ${list.childElementCount}`);

const listOfListItem = document.querySelectorAll("#categories>li");
listOfListItem.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`
  );
});
