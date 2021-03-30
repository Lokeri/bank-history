import React from "react";
import Menu from "./view/menu";
import History from "./view/history";
import Cards from "./view/cards";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex-row h-screen flex">
        <Menu />
        <div className="flex-grow">
          <Switch>
            <Route path="/transactions/:id?">
              <History />
            </Route>
            <Route path="/cards">
              <Cards />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
