import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/About";
import Embroidery from "./components/Embroidery";
import Illustration from "./components/Illustration";
import ComingSoonMessage from "./components/ComingSoonMessage";

export default function AppSwitch() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/embroidery" component={Embroidery} />
      <Route path="/illustration" component={Illustration} />
      <Route exact path="/" component={ComingSoonMessage} />
      <Redirect to="/" />
    </Switch>
  );
}
