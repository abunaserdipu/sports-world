import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Components/Home/Home";
import LeagueDetail from "./Components/LeagueDetail/LeagueDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/league/:idLeague">
          <LeagueDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1 style={{ textAlign: "center" }}>404 Not Found!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
