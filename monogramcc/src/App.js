import Shop from "./components/pages/Shop";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Shop />
      </Route>
    </Switch>
  );
}

export default App;
