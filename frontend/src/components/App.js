import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import UserPage from "./UserPage";

const App = () => {
  return (
    <div className="center">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user" component={UserPage} />
      </Switch>
    </div>
  );
};

export default App;
