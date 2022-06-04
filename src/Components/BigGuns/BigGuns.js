import React from "react";
import { Col, Row } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./BigGuns.css";
import krish from "../../assets/krish.png";
import lateesh from "../../assets/lateesh.png";
import hr from "../../assets/hr.png";
import rajee from "../../assets/rajee.png";
import ish from "../../assets/ish.png";

function BigGuns(props) {
  return (
    <div className="big_guns_section">
      <SectionHeader
        heading="Our"
        smallHeading="Big Guns"
        headingStyle="big_guns_head01"
        smallHeaderStyle="big_guns_head02"
      />
      <Row className="mt-5 mb-5">
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={krish} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={lateesh} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4}>
          <img src={hr} />
        </Col>
      </Row>
      <Row className="bigGuns_row2 mb-5">
        <Col xs={12} sm={12} md={6} lg={4} xl={4} className="offset-2">
          <img src={rajee} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={4} className="offset-1">
          <img src={ish} />
        </Col>
      </Row>
    </div>
  );
}

export default BigGuns;
