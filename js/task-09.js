function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  span: document.querySelector("span"),
  btn: document.querySelector("button"),
};

refs.btn.addEventListener("click", onButtonClick);

function onButtonClick(event) {
  const color = getRandomHexColor();
  console.log(color);
  refs.body.style.backgroundColor = color;
  refs.span.textContent = color;
}
