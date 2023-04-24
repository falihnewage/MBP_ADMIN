import React from "react";
import Select from "react-select";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

// core components
import ReactTable from "components/ReactTable/ReactTable.js";
import { Label } from "reactstrap";
import { useHistory } from "react-router";

function ReactTables() {
  const [singleSelect, setSingleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState("");
  const navigate = useHistory();
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <h4 className="title mt-0">
              Users
            </h4>
        
            <Card className="border-0">
              <Card.Body className="p-0">
              <div className="p-3">
              <Row>
                <Col lg="4">
                <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary" className="m-0">Search</Button>
              </Form>
              </Col>

              <Col lg="4">
              {/* <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select> */}
              </Col>
              </Row>
             </div>
                <Table
                  responsive
                  className="table-hover table-striped w-full mt-2"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Nick Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Joined Date</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i onClick={() => navigate.push(`/admin/view-user`)}  class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>
                      
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr><tr>
                      <td>3</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr><tr>
                      <td>7</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Bettie Bee</td>
                      <td>Bet</td>
                      <td>bettie@gmail.com</td>
                      <td>+1 1234567890</td>
                      <td class="">
                      19 April 2023, 12:04 pm
                      </td>
                      
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i   class="fa fa-trash text-danger"></i></a></h4></td>

                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>


        </Row>

        {/* <div className="border p-4">
          <Card className="border-0">
            <Card.Body>
              <Row className="align-items-center">
                <Col xl="6">
                  <div className="d-flex align-items-center">
                    <div className="thumbnail-round-lg mr-3">
                      <img
                        alt="..." className="w-100"
                        src={require("assets/img/margot.jpg").default}
                      ></img>
                    </div>
                    <div>
                      <h2 className="m-0">Bettie Bee</h2>
                      <p className="text-gary m-0">bettiebee@gmail.com</p>
                      <h6 className="mb-2 mt-1"><small className="mr-1 text-gary">AGE :</small>28</h6>

                    </div>
                   
                  </div>
                </Col>
                <Col xl="4" className="py-3">
                  
                  <p className="text-gary m-0"><small>REGISTRATION TYPE	</small></p>
                  <h6 className="m-0 mb-2">App Login	</h6>
                  <p className="text-gary m-0"><small>POINT</small></p>
                  <h6 className="m-0 text-primary"><b>3223</b></h6>
                </Col>
                <Col xl="2" className="py-2">
                  <button type="button" class="btn btn-danger w-100 m-0">Block</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>


          

          <Card className="border-0 m-0">
            <Card.Body className="p-0">
              <Table
                responsive
                className="table-hover table-striped w-full mt-2"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Receipt Id</th>
                    <th>Earned on </th>
                    <th>Transaction Id</th>
                    <th>Total Cost</th>
                    <th>Sportsbook</th>
                    <th>Receipt</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td className="text-primary">BB123</td>
                    <td>Monday, 5 December 2022</td>
                    <td>#1023456789</td>
                    <td>$320</td>
                    <td>Sample name</td>
                    <td className="receipt-img">
                    <img
                        alt="..." className="img-fluid "
                        src={require("assets/img/receipt.jpg").default}
                      ></img>
                    </td>
                  </tr>

                </thead>
               
              </Table>
            </Card.Body>
          </Card>
        </div> */}

      </Container>
    </>
  );
}

export default ReactTables;
