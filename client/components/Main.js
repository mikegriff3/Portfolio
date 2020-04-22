import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TestPage from "./TestPage";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={TestPage} />
      {/*<Redirect from="/" to="/Home" />*/}
    </Switch>
  </BrowserRouter>
);

export default Main;
