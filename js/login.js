import checkFields, { checkEmail, validateFields } from "./validation_funcs.js";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail(email);
  checkFields([email, password]);

  if (validateFields([email, password])) {
    const url = "http://localhost:5000/auth/login";
    const data = {
      email: email.value,
      password: password.value,
    };
    const fetchData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"}
    };
    fetch(url, fetchData)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data)
          localStorage.setItem("x-auth-token", data.data.token);
        }
      })
      .catch((error) => console.log(error));
  }
});
