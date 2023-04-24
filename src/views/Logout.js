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
        <h4>Users</h4>
        <Card className="stacked-form">
          <Card.Body>
            <Row className="pt-2">
              <Col md="4">
                <Form.Group>
                  <Form.Control placeholder="Search"></Form.Control>
                </Form.Group>
              </Col>
              <Col md="2" >

                <Button className="btn w-100" type="submit" variant="primary">
                  Search
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="p-0">
                <div className="table-responsive">
                  <Table className="table-hover table-striped w-full mt-4">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile Number</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                     <tr>
                        <td>5</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      
                      <tr>
                        <td>7</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="thumb-photo">
                              <img
                                alt="..."
                                src={require("assets/img/default-avatar.png").default}
                              ></img>
                            </div>
                            <h5 className="pl-2 m-0">alex</h5>
                          </div>
                        </td>
                        <td>alex@example.com</td>
                        <td>1-609-331-9194</td>
                      </tr>
                      
                      </tbody>
                  </Table>

                </div>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Dashboard;
