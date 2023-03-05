import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import SicaklikYazisi from "./SicaklikYazisi";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";

class App extends Component {
  constructor() {
    super();
    this.state = { derece: 0 };
  }

  dereceArtır = (derece) => {
    derece = this.state.derece + 1;
    this.setState({ derece });
  };

  dereceDusur = (derece) => {
    derece = this.state.derece - 1;
    this.setState({ derece });
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Hava Nasıl</h1>
          <h5>Şu an sıcaklık: {this.state.derece}°</h5>
          <Row>
            <Col xs="2">
              <Button onClick={this.dereceArtır} size="lg" color="success">
                Sıcaklık Artır
              </Button>
            </Col>
            <Col xs="2">
              <Button onClick={this.dereceDusur} size="lg" color="danger">
                Sıcaklık Düşür
              </Button>
            </Col>
            <SicaklikYazisi />
          </Row>
          <Row>
            <Col>
              <Celcius derece={this.state.derece} />
            </Col>
            <Col>
              <Fahrenheit derece={this.state.derece} />
            </Col>
            <Col>
              <Kelvin derece={this.state.derece} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
