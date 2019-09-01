import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ExcelSheet from "./components/Excel";
import Example from "./components/Example";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={ExcelSheet} />
          <Route exact path="/model" component={Example} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
