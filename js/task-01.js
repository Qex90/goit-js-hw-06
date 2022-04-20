const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTittle = item.querySelector("h2").textContent;
  const elementsCouint = item.querySelector("ul").children.length;

  console.log(`Category: ${categoryTittle}`);
  console.log(`Elements: ${elementsCouint}`);
});
