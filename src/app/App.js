import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import React from "react";
import Jess from "./layouts/jess";
import Kanki from "./layouts/kanki";
import Home from "./layouts/home";
import Login from "./layouts/login";
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          path="/jess"
          component={Jess}
        />
        <Route path="/kanki" component={Kanki} />
        <Route path="/login" component={Login} />

        <Route path="/" exact component={Home} />

      </Switch>
    </div>
  );
}

export default App;
