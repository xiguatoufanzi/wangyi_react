import React, { Component } from "react";
import { Router } from "react-router-dom";
import TabBar from "./components/TabBar/TabBar";
import history from "./utils/history";

import "./assets/reset.css";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <TabBar></TabBar>
      </Router>
    );
  }
}
