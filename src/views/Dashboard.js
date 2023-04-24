import React from "react";
// react component used to create charts
import ChartistGraph from "react-chartist";
// react components used to create a SVG / Vector map
import { VectorMap } from "react-jvectormap";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  OverlayTrigger,
  Table,
  Tooltip,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs="5">
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-circle-09 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <Card.Title as="h4">Users</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          

          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs="5">
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-chart-bar-32 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <Card.Title as="h4">Rewards</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

       
        </Row>
        <Row>
       </Row>
        <Row>
          
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users </Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
              <ChartistGraph
                  type="Line"
                  data={{
                    labels: [
                      "'07",
                      "'08",
                      "'09",
                      "'10",
                      "'11",
                      "'12",
                      "'13",
                      "'14",
                      "'15",
                    ],
                    series: [
                      [
                        22.2,
                        34.9,
                        42.28,
                        51.93,
                        62.21,
                        80.23,
                        82.12,
                        102.5,
                        107.23,
                      ],
                    ],
                  }}
                  options={{
                    lineSmooth: false,
                    height: "260px",
                    axisY: {
                      offset: 40,
                      labelInterpolationFnc: function (value) {
                        return "$" + value;
                      },
                    },
                    low: 10,
                    high: 110,
                    classNames: {
                      point: "ct-point ct-green",
                      line: "ct-line ct-green",
                    },
                    chartPadding: {
                      right: -25,
                    },
                  }}
                />
              </Card.Body>
        
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
