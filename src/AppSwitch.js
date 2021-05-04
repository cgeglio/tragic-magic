import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Cards from "./components/Cards";
import Reading from "./components/Reading";
import ComingSoonMessage from "./components/ComingSoonMessage";

export default function AppSwitch() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/cards" component={Cards} />
      <Route path="/reading" component={Reading} />
      <Route exact path="/" component={ComingSoonMessage} />
      <Redirect to="/" />
    </Switch>
  );
}
