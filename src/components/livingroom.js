import React from "react";
import { Row, Col } from "react-bootstrap";
import dataLivingroom from "./data/dataLivingroom.json";
import AccessItem from "./AccessItem";

const Livingroom = () => {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3 mt-3">
        {dataLivingroom.map((item) => (
          <Col key={item.id}>
            <AccessItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Livingroom;

