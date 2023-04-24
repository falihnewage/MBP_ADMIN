import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

function LoginPage() {
  const [cardClasses, setCardClasses] = React.useState("card-hidden");
  React.useEffect(() => {
    setTimeout(function () {
      setCardClasses("");
    }, 1000);
  });
  return (
    <>
      <div
        className="full-page "
      >
        <div className="content d-flex align-items-center p-0">
          <Container>
            <Col className="mx-auto" lg="6" md="8">
              <Form action="" className="form" method="">
                <Card className={"card-login " + cardClasses}>
                  <Card.Header className="text-center pt-4">
                  <img
                            alt="..."
                            src={require("assets/img/logo.png").default}
                          ></img>
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <Form.Group>
                        <label>Email address</label>
                        <Form.Control
                          placeholder="Enter email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Button className="btn-lg w-100" type="submit" variant="warning">
                      Login
                    </Button>
                    </Card.Body>
                  </Card.Body>
               
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
   
      </div>
    </>
  );
}

export default LoginPage;
