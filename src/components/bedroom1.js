import React from "react";
import { Row, Col } from "react-bootstrap";
import databedroom from "./data/dataBedroom.json";
import AccessItem from "./AccessItem";

const Bedroom1 = () => {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3 mt-3">
        {databedroom.map((item) => (
          <Col key={item.id}>
            <AccessItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Bedroom1;

