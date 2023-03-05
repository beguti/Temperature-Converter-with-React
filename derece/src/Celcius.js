import React, { Component } from "react";

class Celcius extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#00B8A9",
          height: "50px",
          textAlign: "center",
          paddingTop: "10px",
          color: "#FFFFFF",
        }}
      >
        <h5>Celcius: {this.props.derece} °C</h5>
      </div>
    );
  }
}

export default Celcius;
