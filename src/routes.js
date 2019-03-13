import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NewCard from "./components/NewCard/NewCard";
import ShowCards from "./components/ShowCards/ShowCards";
import Login from "./components/Login/Login";

export default (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/view" component={ShowCards} />
    <Route path="/new" component={NewCard} />
    <Route path="/" component={Home} />
  </Switch>
);
