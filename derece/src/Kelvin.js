import React, { Component } from "react";

class Kelvin extends Component {
  render() {
    let k = this.props.derece + 273.15;
    return (
      <div
        style={{
          backgroundColor: "#F6416C",
          height: "50px",
          textAlign: "center",
          paddingTop: "10px",
          color: "#FFFFFF",
        }}
      >
        <h5>Kelvin: {k} K</h5>
      </div>
    );
  }
}

export default Kelvin;
