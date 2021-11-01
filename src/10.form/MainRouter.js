import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { PageNotFound } from "./PageNotFound";

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
};
