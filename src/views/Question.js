import { Table } from 'antd';
import update from 'immutability-helper';
import React, { useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  Badge,
  Button,
  Card,
  InputGroup,
  Navbar,
  Nav,
  OverlayTrigger,
  Tooltip,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const type = 'DraggableBodyRow';

const DraggableBodyRow = ({ index, moveRow, className, style, ...restProps }) => {
  const ref = useRef(null);
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};

      if (dragIndex === index) {
        return {};
      }

      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: (item) => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: {
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ''}`}
      style={{
        cursor: 'move',
        ...style,
      }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const App = () => {
  const [data, setData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ]);
  const components = {
    body: {
      row: DraggableBodyRow,
    },
  };
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = data[dragIndex];
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [data],
  );
  return (
    <>
<div className="row">
    <Col lg="9">
    
  <h4 className="title mt-0">
      Question Management
              </h4>
    </Col>
    <Col lg="3">
    ---select-------
    {/* <Form.Select size="lg">
        <option>Large select</option>
      </Form.Select> */}
    </Col>
</div>
    <div class="card border-0">
            <div class="card-body">
              <div className="bg-first p-2">
              <Row className="align-items-center">
                <Col className="" md="6"><h5 className="m-0 ">ADMINISTRATION</h5></Col>
                <Col className="" md="2">
                <h5 className=" m-0">Points Available</h5>
                </Col>
                <Col className="" md="2">
                <h5 className="  m-0">Points Applicable</h5>
                </Col>
                <Col className="" md="2">
               <div className="d-flex">
               <a href="#" className="p-3"><i class="fa fa-edit text-primary"></i></a>
                <a href="#" className="p-3"><i class="fa fa-trash text-danger"></i></a>
                <button type="submit" class="btn btn-primary btn-md w-100 text-uppercase m-0">Add Subtitle</button>
               </div>
               </Col>
              </Row>
              </div>
              <div className="bg-sec p-2">
              <Row className="align-items-center">
                <Col className="" md="10"><h5 className="m-0">Subtitle if needed</h5></Col>
                <Col className="" md="2">
               <div className="d-flex">
               <a href="#" className="p-3"><i class="fa fa-edit text-primary"></i></a>
                <a href="#" className="p-3"><i class="fa fa-trash text-danger"></i></a>
                <button type="submit" class="btn btn-primary btn-md w-100 text-uppercase">Add Subtitle</button>
               </div>
               </Col>
              </Row>

              </div>
             
              <div className="p-2">
              <Row className="align-items-center">
                <Col className="" md="10"><h5 className="m-0">Subtitle if needed</h5></Col>
                <Col className="" md="2">
               <div className="d-flex">
               <a href="#" className="p-3"><i class="fa fa-edit text-primary"></i></a>
                <a href="#" className="p-3"><i class="fa fa-trash text-danger"></i></a>
                <button type="submit" class="btn btn-primary btn-md w-100  text-uppercase">Add Question</button>
               </div>
               </Col>
              </Row>
              </div>
            </div>
          </div>
    <DndProvider backend={HTML5Backend}>
      <Table
        columns={columns}
        dataSource={data}
        components={components}
        onRow={(_, index) => {
          const attr = {
            index,
            moveRow,
          };
          return attr;
        }}
      />
    </DndProvider>
    </>
  );
};

export default App;