import { Row, Col, Form, FormControl,Button } from "react-bootstrap";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <div>
    <Row>
      <Col>
      <Form>
      <Form.Control placeholder="Enter the Title" className="fbrow"/ >
      </Form>
      </Col>
    </Row>
    <Row>
    <Form>
    <FormControl as="textarea" placeholder="Enter Your Feedback" className="fbrow"  />
    </Form>
    </Row>
    <Row>
      <Col lg={10}></Col>
      <Col lg={1}>
        <Button>Sumbit</Button>
      </Col>
      <Col lg={1}>
        <Button>Cancel</Button>
      </Col>

      
    </Row>
    </div>
  );
};
