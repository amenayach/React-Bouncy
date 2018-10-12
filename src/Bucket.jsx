import React, { Component } from "react";
import Bouncy from "./Bouncy";

class Bucket extends Component {
  render() {
    return (
      <div>
        <Bouncy color="red" x={100} y={50} />
        <Bouncy color="yellowgreen" x={10} y={10} />
        <Bouncy color="purple" x={250} y={130} />
        <Bouncy color="blue" x={150} y={200} />
        <Bouncy color="white" x={20} y={100} />
      </div>
    );
  }
}

export default Bucket;
