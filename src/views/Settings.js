import React, { useState } from "react";
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
  Modal,
} from "react-bootstrap";
import { Label } from "reactstrap";

function Settings() {
  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);

  return (
    <>
   
      <Modal
        size="md"
        show={lgShow1}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <h4 className="m-0">Change Password</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
        <Label>Old Password</Label>
        <Form.Control placeholder="Old Password"></Form.Control>
        </Form.Group>
        <Form.Group>
        <Label>New Password</Label>
        <Form.Control placeholder="New Password"></Form.Control>
        </Form.Group>
        <Form.Group>
        <Label>Confirm Password</Label>
        <Form.Control placeholder="Confirm Password"></Form.Control>
        </Form.Group>
        <Button className="btn w-100" type="submit" variant="primary">
        UPDATE
        </Button> 
        </Modal.Body>
      </Modal>

      <Container fluid >
      

        <Row>
          <Col>
            <Card className="vh-100 border-0">
                <Card.Body className="p-md-5">
               

                <Card>
                  <Card.Body>
                      <Row className="align-items-center">
                        <Col md="9">
                          <h4 className="m-0">Change Password</h4>
                          <p className="card-category m-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </Col>
                        <Col md="3" className="my-2">
                          <Button className="btn btn-md w-100 m-0" type="submit" variant="primary"  onClick={() => setLgShow1(true)}>Change</Button>
                        </Col>
                      </Row>
                  </Card.Body>
                </Card>

                <Card>
                  <Card.Body>
                      <Row className="align-items-center">
                        <Col md="3" className="my-1">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Points</Form.Label>
                      <Form.Control type="email" placeholder="100" />
                    </Form.Group>
                        </Col>
                        <Col md="3" className="my-1">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Points</Form.Label>
                      <Form.Control type="email" placeholder="2" />
                    </Form.Group>
                        </Col>
                        <Col md="2" className="my-1">
                          <h4 className="m-0"><small>Total:</small> 200 </h4>
                        </Col>
                      
                        
                        <Col md="3" className="my-1 ml-auto">
                          <Button className="btn btn-md w-100 m-0" type="submit" variant="success" >SAVE</Button>
                        </Col>
                      </Row>
                  </Card.Body>
                </Card>

                </Card.Body>
            </Card>
             

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Settings;
