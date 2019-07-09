// using jsx will get better code completion than js

import React, { Component } from "react";

// creating a component, when rendered will return hello world
class Counter extends Component {
  render() {
    return <h1>Yo World</h1>;
  }
}

export default Counter;
