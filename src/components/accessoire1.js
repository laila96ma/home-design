import React from "react";
import { Row, Col } from "react-bootstrap";
import dataAccess from "./data/dataAccess.json";
import AccessItem from "./AccessItem";

const Accessoires1 = () => {
  return (
    <div>
      <Row md={2} xs={1} lg={3} className="g-3 mt-3">
        {dataAccess.map((item) => (
          <Col key={item.id} >
            <AccessItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Accessoires1;

