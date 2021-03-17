export const createNewUser = (data, props) => {
  fetch(`${process.env.REACT_APP_SERVER_URL_ROOT}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        alert("Usuario creado con exito");
        props.history.push("/login");
        return response.json();
      } else throw Error(response.statusText);
    })
    .catch((error) => console.log(error));
};
