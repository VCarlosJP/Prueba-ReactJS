export const postMeasurement = (route, data, triggerParentCallBack) => {
  let token = localStorage.getItem("test_token");
  fetch(`${process.env.REACT_APP_SERVER_URL_ROOT}/api/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        triggerParentCallBack();
        return response.json();
      } else throw Error(response.statusText);
    })
    .catch((error) => console.log(error));
};
