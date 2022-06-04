import React from "react";
import { Col, Row } from "react-bootstrap";
import About from "../../assets/about.jpg";
import "./AboutAronsol.css";

function AboutAronsol(props) {
  return (
    <Row>
      <Col md={6} lg={6} xs={12} sm={12}>
        <div className="aboutAronsol_left pr-5">
          <div className="rare_box"></div>
          <img
            src={About}
            className="image-about position-relative w-100"
            alt=""
          ></img>
        </div>
      </Col>
      <Col md={6} lg={6} xs={12} sm={12}>
        <div className="aboutAronsol_right">
          <h2 className="aronsol_h2">ABOUT ARONSOL</h2>
          <p>
            <b>ARONSOL</b> is one of the renowned &amp; trusted platform for
            Performance Marketing. We make our clients to achieve their
            outrageous marketing goals by delivering the peerless &amp;
            result-driven solutions.
          </p>
          <div className="what_we_provide">
            <p className="color_blue font-weight-bold">
              <b>What We Provide?</b>
            </p>
            <ul>
              <li>A - Accountability</li>
              <li>R - Revenue From Validated Business Units</li>
              <li>O - Outrageous Performance Marketing Strategies</li>
              <li>N - Never-Ending Services to meet your business Needs.</li>
              <li>Sol - Solutions</li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default AboutAronsol;
