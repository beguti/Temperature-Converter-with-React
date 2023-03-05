import React, { Component } from "react";

class Fahrenheit extends Component {
  render() {
    let f = this.props.derece * 9 / 5 + 32;
    return (
      <div
        style={{
          backgroundColor: "#F49D1A",
          height: "50px",
          textAlign: "center",
          paddingTop: "10px",
          color: "#FFFFFF",
        }}
      >
        <h5>Fahrenheit: {f} °F</h5>
      </div>
    );
  }
}

export default Fahrenheit;
