import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Cards from "./components/Cards";
import Reading from "./components/Reading";
import ReadingStarter from "./components/ReadingStarter";
import { paths } from "./paths";

export default function AppSwitch() {
  return (
    <Switch>
      <Route path={paths.about()} component={About} />
      <Route path={paths.cards()} component={Cards} />
      <Route path={paths.reading()} component={Reading} />
      <Route exact path={paths.home()} component={ReadingStarter} />
      <Redirect to={paths.home()} />
    </Switch>
  );
}
