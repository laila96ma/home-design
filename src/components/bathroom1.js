import React from "react";
import { Row, Col } from "react-bootstrap";
import dataBathroom from "./data/databathroom.json";
import AccessItem from "./AccessItem";

const Bathroom1 = () => {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3 mt-3">
        {dataBathroom.map((item) => (
          <Col key={item.id}>
            <AccessItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Bathroom1;

