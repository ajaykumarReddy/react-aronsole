import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PageBanner.css";

function PageBanner(props) {
  const {
    pageBanner_img,
    pageBanner_img_text,
    pageBanner_bold_heading,
    pageBanner_normal_heading,
    pageTitleBox_icon,
    pageTitleBox_icon_text,
    pageTitleBox_heading,
  } = props;
  return (
    <div className="pageBanner_sec w-100 pb-0">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="position-relative"
          >
            <div className="banner_left_img position-relative">
              <img
                src={pageBanner_img}
                alt={pageBanner_img_text}
                className="w-100"
              />
            </div>
            <div className="title_box">
              <Container className="title_box_width">
                <div className="pageTitleBox_sec p-0">
                  <Row className="row-eq-height">
                    <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                      <div className="pageTitleBox_icon_sec d-flex justify-content-center align-items-center">
                        <img
                          src={pageTitleBox_icon}
                          alt={pageTitleBox_icon_text}
                        />
                      </div>
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                      <div className="pageTitleBox_heading_sec d-flex align-items-center row-eq-height">
                        <h3>{pageTitleBox_heading}</h3>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div className="pageBanner_heading_sec d-flex align-items-center justify-content-center h-100">
              <div className="pageBanner_heading">
                {pageBanner_bold_heading} <br />
                <div className="pageBanner_sub_text">
                  {pageBanner_normal_heading}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PageBanner;
