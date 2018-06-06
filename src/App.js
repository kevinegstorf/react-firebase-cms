import React, { Component } from "react";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import Admin from "./containers/Admin/Admin.js";
import CMSForm from "./containers/CMSForm/CMSForm";
import HomePage from "./containers/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Router history={createHistory()}>
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
