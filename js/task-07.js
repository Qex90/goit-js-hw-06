const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};
refs.input.addEventListener("input", onHandleChange);
function onHandleChange(event) {
  console.log(event.currentTarget.value);
  refs.span.style.fontSize = `${event.currentTarget.value}px`;
}
