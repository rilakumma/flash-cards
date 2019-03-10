import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import NewCard from "./components/NewCard/NewCard";
import ShowCards from "./components/ShowCards/ShowCards";

export default (
  <Switch>
    <Route path="/view" component={ShowCards} />
    {/* <Route path='' component={} /> */}
    <Route path="/new" component={NewCard} />
    <Route path="/" component={App} />
  </Switch>
);
