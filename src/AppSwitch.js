import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Deck from "./components/Deck";
import Reading from "./components/Reading";
import ReadingStarter from "./components/ReadingStarter";
import paths from "./paths";

export default function AppSwitch() {
  return (
    <Switch>
      <Route path={paths.about()} component={About} />
      <Route path={paths.deck()} component={Deck} />
      <Route path={paths.reading()} component={Reading} />
      <Route exact path={paths.home()} component={ReadingStarter} />
      <Redirect to={paths.home()} />
    </Switch>
  );
}
