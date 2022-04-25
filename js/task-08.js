const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const email = refs.form.elements["email"].value;
  const password = refs.form.elements["password"].value;
  if (!email && !password) {
    alert("Все поля должны быть заполнены");
  } else {
    const values = {
      email,
      password,
    };

    console.log(values);
    refs.form.reset();
  }
}
