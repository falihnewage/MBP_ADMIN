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
import { Collapse } from 'antd';


function ReactTables() {
  const [singleSelect, setSingleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState("");
  const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, at natus! Rerum reprehenderit porro impedit hic voluptatum voluptatem id, cum deleniti et laudantium perferendis explicabo nam sed enim quisquam soluta 
`;
  return (
    <>
      <Container fluid>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="1. Lorem Ipsum is simply dummy text of the printing and typesetting industry?" key="1">
      <ol>
        <li className="my-1">Answer 1</li>
        <li className="my-1">Answer 2</li>
        <li className="my-1">Answer 3</li>
        <li className="my-1">Answer 4</li>
        <li className="my-1">Answer 5</li>
        <li className="my-1">Answer 6</li>
        <li className="my-1">Answer 7</li>
        <li className="my-1">Answer 8</li>
        <li className="my-1">Answer 9</li>
        <li className="my-1">Answer 10</li>
      </ol>
    </Panel>
    <Panel  header="2. This is panel header with no arrow icon" key="2">
    <ol>
        <li className="my-1">Answer 1</li>
        <li className="my-1">Answer 2</li>
        <li className="my-1">Answer 3</li>
        <li className="my-1">Answer 4</li>
        <li className="my-1">Answer 5</li>
        <li className="my-1">Answer 6</li>
        <li className="my-1">Answer 7</li>
        <li className="my-1">Answer 8</li>
        <li className="my-1">Answer 9</li>
        <li className="my-1">Answer 10</li>
        </ol>
    </Panel>
  </Collapse>,
        {/* <Row>
          <Col md="12">
            <h4 className="title mt-0">
            Assessments
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

              <Col lg="4"> */}
              {/* <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select> */}
              {/* </Col>
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
                      <th>Email</th>
                      <th>total cost</th>
                      <th>earned point</th>
                      <th>scan date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Olivia</td>
                      <td>olivia@gmail.com</td>
                      <td>$320</td>
                      <td className="text-primary "><b>42</b></td>
                      <td>Monday, 5 December 2022</td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Emma</td>
                      <td>emma@gmail.com</td>
                      <td>$320</td>
                      <td className="text-primary "><b>35</b></td>
                      <td>Monday, 5 December 2022</td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlotte</td>
                      <td>charlotte@gmail.com</td>
                      <td>$320</td>
                      <td className="text-primary "><b>12</b></td>
                      <td>Monday, 5 December 2022</td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Amelia</td>
                      <td>amelia@gmail.com</td>
                      <td>$320</td>
                      <td className="text-primary "><b>69</b></td>
                      <td>Monday, 5 December 2022</td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Amelia</td>
                      <td>amelia@gmail.com</td>
                      <td>$320</td>
                      <td className="text-primary "><b>69</b></td>
                      <td>Monday, 5 December 2022</td>
                      <td class="text-center"><h4 class="m-0"><a href="#"><i class="fa fa-eye text-primary"></i></a></h4></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-right mb-3">
        <button type="button" class="btn btn-outline-secondary"> <i class="nc-icon nc-stre-left mr-1"></i> Back </button>

        </div>

        <div className="border p-4">


          <Row>
            <Col lg="4">
            <div className="mb-2">
                <label className="text-gary">Name</label>
                <h5>Olivia</h5>
              </div>
              <div className="mb-2">
                <label className="text-gary">EMAIL</label>
                <h5>Olivia@gmail.com</h5>
              </div>
              
            <div className="mb-2">
                <label className="text-gary">Points</label>
                <h5>07</h5>
              </div>
              
              <div className="mb-2">
                <label className="text-gary">Receipt Id</label>
                <h5>BB123</h5>
              </div>
              <div className="mb-2">
                <label className="text-gary">Earned on </label>
                <h5>Monday, 5 December 2022</h5>
              </div>
              <div className="mb-2">
                <label className="text-gary">Transaction Id</label>
                <h5>#102345678</h5>
              </div>
              <div className="mb-2">
                <label className="text-gary">Total Cost</label>
                <h5>$320</h5>
              </div>
              <div className="mb-2">
                <label className="text-gary">Sportsbook</label>
                <h5>Sample name</h5>
              </div>
            </Col>
            <Col lg="8">
            <img
                        alt="..." className="img-fluid "
                        src={require("assets/img/receipt.jpg").default}
                      ></img>
            </Col>
         
          </Row>

       
        </div> */}
      </Container>
    </>
  );
}

export default ReactTables;
