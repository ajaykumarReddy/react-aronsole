import React from "react";
import { Col, Row } from "react-bootstrap";
// import aronsolUSP_img from "../../assets/aronsole.png";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./AronsolUSP.css";

function AronsolUSP(props) {
  return (
    <div className="aronsolUSP_sec pt-2 pb-2">
      <Row className="m-0">
        <Col xs={12} sm={12} md={12} lg={4} xl={4} className="p-0">
          <div className="aronsolUSP_img">
            {/* <img src={aronsolUSP_img} alt="AronsolUSP Image" width="100%" /> */}
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8} xl={8} className="p-5">
          <SectionHeader
            smallHeading="Aronsol USP"
            headingStyle="aronsolUSP_heading"
            smallHeaderStyle="aronsolUSP_smallHeading"
          />

          <div className="aronsolUSP_content mt-3">
            <p>
              Our portfolio of services includes a complete package of offerings
              for a business to grow. Right from a start-up looking to build a
              website, to enhance the online presence of a mid-size firm through
              Digital marketing services all the way to supporting an
              established firm by our offshore resources, we&#39;ve got our
              hands on every IT solution &#38; services offering.
            </p>
            <p>
              <span className="bold_text_class">"Cherry-on-the cake"</span>, we
              also offer a bunch of affiliate services and have an established
              record in the market. And we assure you no one&#39;s even close to
              us in it!
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AronsolUSP;
