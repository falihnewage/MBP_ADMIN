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

function ReactTables() {
  const [singleSelect, setSingleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState("");
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <h4 className="title mt-0">
            Property  <b>(38)</b>
            </h4>
            <Card>
              <Card.Body className="p-0">
              
                <Table
                  responsive
                  className="table-hover table-striped w-full mt-2"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Property Name</th>
                      <th>Property Number</th>
                      <th>General Manager	</th>
                      <th>Regional Director</th>
                      <th>Accounting Manager</th>
                      <th>Property Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>105 Hotel FiDi</td>
                      <td>105</td>
                      <td>Lauren Reynor</td>
                      <td>Louis Llach</td>
                      <td>Slyne Louissaint</td>
                      <td>Limited Service</td>
                      <td class="text-center"><a href="#"><i class="fa fa-edit text-primary"></i></a></td>
                      <td class="text-center"><a href="#"><i class="fa fa-trash text-danger"></i></a></td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </Container>
    </>
  );
}

export default ReactTables;
