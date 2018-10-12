import React, { Component } from "react";

class Bouncy extends Component {
  state = { x: this.props.x, y: this.props.y, color: this.props.color };

  render() {
    const spanStyle = {
      // left: this.state.x + "px",
      // top: this.state.y + "px", //Or
      transform: "translate(" + this.state.x + "px, " + this.state.y + "px)",
      backgroundColor: this.state.color
    };

    return <span className="bouncy" style={spanStyle} />;
  }

  componentDidMount() {
    const offset = 3;
    const ballSize = 20;
    const root = document.getElementById("root");
    let lastXCoeff = 1;
    let lastYCoeff = 1;

    setInterval(() => {
      let x = this.state.x + lastXCoeff * offset;
      if (x + ballSize > root.offsetWidth || x <= 0) {
        lastXCoeff = -lastXCoeff;
        x = this.state.x + lastXCoeff * offset;
      }

      let y = this.state.y + lastYCoeff * offset;
      if (y + ballSize > root.offsetHeight || y <= 0) {
        lastYCoeff = -lastYCoeff;
        y = this.state.y + lastYCoeff * offset;
      }

      this.setState({ x, y });
    }, 50);
  }
}

export default Bouncy;
