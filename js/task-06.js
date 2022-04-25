const input = document.querySelector("input");
const maxLength = Number(input.dataset.length);
input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const length = event.currentTarget.value.length;

  if (length === maxLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  console.log("теряет фокус");
}
