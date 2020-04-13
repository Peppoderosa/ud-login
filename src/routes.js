import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./Pages";
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}
