const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.target;

  console.dir(email);

  if (email.value === "" || password.value === "") {
    return alert("Field is emplty! Please fill it in");
  } else {
    const userDataArr = { email: email.value, password: password.value };
    console.log(userDataArr);
  }

  event.currentTarget.reset();
}
