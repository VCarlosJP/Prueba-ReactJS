export const fetchHomeData = (route, setData) => {
  let token = localStorage.getItem("test_token");
  fetch(`${process.env.REACT_APP_SERVER_URL_ROOT}/api/${route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else throw Error(response.statusText);
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => console.log(error));
};
