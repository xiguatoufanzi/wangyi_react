import React, { Component } from "react";
import { Button } from "antd-mobile";

import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">primary</Button>
        <div className="box"></div>
      </div>
    );
  }
}
