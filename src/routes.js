import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as pages from "./Pages";
export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login" component={pages.Login}></Route>
      </Switch>
    </BrowserRouter>
  );
}
