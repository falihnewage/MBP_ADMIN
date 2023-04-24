import React from 'react'
import { Tabs } from 'antd';
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
const Viewuser = () => {
    const onChange = (key) => {
        console.log(key);
      };
    const items = [
        {
          key: '1',
          label: `Tab 1`,
          children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem distinctio veritatis id, voluptates numquam beatae repellendus facere magnam fugiat molestias sit deleniti iure impedit, voluptate repellat nisi quas necessitatibus.`,
        },
        {
          key: '2',
          label: `Tab 2`,
          children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. A doloribus tenetur commodi provident iusto aut neque autem reiciendis repellendus dolor! Architecto, cumque consectetur excepturi earum accusantium ipsa eos necessitatibus dolor.`,
        },
        {
          key: '3',
          label: `Tab 3`,
          children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, at natus! Rerum reprehenderit porro impedit hic voluptatum voluptatem id, cum deleniti et laudantium perferendis explicabo nam sed enim quisquam soluta.`,
        },
      ];
  return (
    <div className='w-100'>
      <Card className="border-0">
        <Card.Body className="p-0">
          <div className="p-4">
            <Row className=''>
              <Col lg="6 my-2">
                <div className='d-flex align-items-center'>
                <div className='profile-img'>
                <img
                    alt="..."
                    src={require("assets/img/default-avatar.png").default}
                  ></img>
                </div>
                <div>
                <h3 className='mb-2'>Bettie Bee</h3>
                <p className='m-0'>bettie@gmail.com	<br/>
                <small>+1 1234567890</small>	
                </p>
                </div>
                </div>
              </Col>
              <Col lg="6 my-2" className='text-right'>
              <Button
                      className="btn-fill mr-2"
                      variant="success"
                    >
                      SUBSCRIBED
                    </Button>
              <Button
                      className="btn-fill"
                      variant="danger"
                    >
                      Block
                    </Button>
              </Col>
            </Row>
          <Tabs defaultActiveKey="1"  items={items} onChange={onChange} />

          </div>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Viewuser