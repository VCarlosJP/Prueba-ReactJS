import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AuthForm from "./components/AuthFormComponent";
import Home from "./components/HomeComponent";
import NotFound from "./components/NotFoundComponent";
import { ProtectedRoute } from "./components/protected";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("test_token"));

  if (!auth) {
    <Router>
      <Route component={AuthForm}></Route>
    </Router>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={AuthForm}></Route>
        <Route path="/register" component={AuthForm}></Route>
        <ProtectedRoute exact path="/home" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
