import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Admin from "./containers/Admin";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
