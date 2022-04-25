const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul");

const createEl = ingredients.map((ingredient) => {
  const titleEl = document.createElement("li");
  titleEl.classList.add("item");
  titleEl.append(ingredient);
  return titleEl;
});
list.append(...createEl);

// const createList = () => {
//   const li = ingredients
//     .map(
//       (ingredient) =>
//         `<li class = item>
//       ${ingredient}
//     </li>`
//     )
//     .join("");

//   list.insertAdjacentHTML("afterbegin", li);
// };
// createList(ingredients);
