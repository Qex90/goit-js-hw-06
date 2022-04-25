const refs = {
  input: document.querySelector("[id=name-input"),
  span: document.querySelector("[id=name-output]"),
};
console.log(refs.input);
console.log(refs.span);

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value || "Anonymous";
  refs.span.textContent = value;
}
