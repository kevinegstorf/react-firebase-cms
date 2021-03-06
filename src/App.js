import React, { Component } from "react";
import history from "./history";
import { Route, Switch, Router } from "react-router-dom";
import Admin from "./containers/Admin/Admin";
import CMSForm from "./containers/CMSForm/CMSForm";
import HomePage from "./containers/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/cms" exact component={CMSForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
