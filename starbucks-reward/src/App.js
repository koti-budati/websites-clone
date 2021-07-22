import Rewards from "./components/pages/Rewards";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Rewards />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
