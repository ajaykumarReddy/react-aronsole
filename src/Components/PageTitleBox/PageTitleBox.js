import React from "react";
import { Col, Row } from "react-bootstrap";
import "./PageTitleBox.css";

function PageTitleBox(props) {
  const { pageTitleBox_icon, pageTitleBox_icon_text, pageTitleBox_heading } =
    props;

  return (
    <div className="pageTitleBox_sec p-0">
      <Row className="row-eq-height">
        <Col xs={5} sm={5} md={5} lg={5} xl={5}>
          <div className="pageTitleBox_icon_sec d-flex justify-content-center align-items-center">
            <img src={pageTitleBox_icon} alt={pageTitleBox_icon_text} />
          </div>
        </Col>
        <Col xs={7} sm={7} md={7} lg={7} xl={7}>
          <div className="pageTitleBox_heading_sec d-flex align-items-center row-eq-height">
            <h3>{pageTitleBox_heading}</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PageTitleBox;
