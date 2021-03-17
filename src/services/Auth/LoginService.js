export const loginUser = (data, props) => {
  fetch(`${process.env.REACT_APP_SERVER_URL_ROOT}/api/login_check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299)
        return response.json();
      else if (response.status == 401) {
        alert("Ingresa credenciales validas");
        throw Error(response.statusText);
      } else throw Error(response.statusText);
    })
    .then((data) => {
      if (data["token"]) {
        localStorage.setItem("test_token", data["token"]);
        props.history.push("/home");
      }
    })
    .catch((error) => console.log(error));
};
