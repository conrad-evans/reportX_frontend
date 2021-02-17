// import { checkEmail, checkPasswordsMatch, checkFields, checkPasswordLength } from "./funcs";

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");


form.addEventListener('submit', e => {
    e.preventDefault();
    console.log('hello')
    
    // checkFields([email, password, confirmPassword]);
    // checkEmail(email);
    // checkPasswordLength(password, 8, 30);
    // checkPasswordsMatch(password, confirmPassword);
});