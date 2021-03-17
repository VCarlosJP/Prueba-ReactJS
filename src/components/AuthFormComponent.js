import React, { useState, useEffect } from "react";
import "./styles/AuthFormComponent.scss";
import { loginUser } from "../services/Auth/LoginService.js";
import { createNewUser } from "../services/Auth/SignUpService.js";

//Este componente se encarga, en base a la ruta, cargar un formulario para registrarse/acceder al sistema
function AuthFormComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postDataLogin = { username: email, password: password };
  const postDataCreateUser = { email: email, password: password };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.location.pathname == "/login") loginUser(postDataLogin, props);
    else createNewUser(postDataCreateUser, props);
  };

  return (
    <div>
      <section className="login-container">
        <div className="login-box">
          <form className="form-login" onSubmit={handleSubmit}>
            <label>Email</label>
            <br />
            <input
              className="input-login"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label>Password</label>
            <br />
            <input
              className="input-login"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <button className="confirm-button">
              {props.location.pathname === "/login" ? "Login" : "SignUp"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AuthFormComponent;
