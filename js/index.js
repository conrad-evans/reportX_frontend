function validateUser() {
  const url = "http://127.0.0.1:5000/auth/";

  fetch(url, {
    method: 'GET',
    headers: {
      "x-auth-token": localStorage.getItem("x-auth-token")
    }
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

validateUser();
