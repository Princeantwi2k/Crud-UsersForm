import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Userlist from "../Component/Userlist";
import AddUser from "../Component/AddUser";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <AddUser />
            </Col>
            <Col xs={6} md={2} className="box">
              <Userlist />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
