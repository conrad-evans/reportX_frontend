import checkFields, {
  checkEmail,
  checkPasswordsMatch,
  checkPasswordLength,
  validateFields,
} from "./validation_funcs.js";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail(email);
  checkPasswordLength(password, 8, 30);
  checkPasswordsMatch(password, confirmPassword);
  checkFields([email, password, confirmPassword]);

  if (validateFields([email, password])) {
    const url = "http://localhost:5000/auth/register";
    const data = {
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    const fetchData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(url, fetchData)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.status === 200) {
          localStorage.setItem("x-auth-token", data.data.token);
        }
      })
      .catch((error) => console.log(error));
  }
});
