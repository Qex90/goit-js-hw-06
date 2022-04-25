const refs = {
  decrement: document.querySelector("[data-action=decrement]"),
  increment: document.querySelector("[data-action=increment]"),
  span: document.querySelector("[id=value]"),
  div: document.querySelector("[id=counter]"),
};

let counterValue = 0;

refs.decrement.addEventListener("click", handleDecrement);
refs.increment.addEventListener("click", handleIncrement);
function handleIncrement(type) {
  counterValue++;
  refs.span.innerHTML = counterValue;
}
function handleDecrement(type) {
  counterValue--;
  refs.span.innerHTML = counterValue;
}
