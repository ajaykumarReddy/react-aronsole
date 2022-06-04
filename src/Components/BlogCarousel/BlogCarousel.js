import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import SectionHeader from "../SectionHeader/SectionHeader";
import blog1 from "../../assets/blog1.png";
import blog8 from "../../assets/blog8.png";
import "./BlogCarousel.css";
import { useNavigate } from "react-router-dom";
import { BlogsContent } from "../BlogsPageContent";

function BlogCarousel() {
  let navigate = useNavigate();

  const WhatCanGoodBusiness = () => {
    navigate(`/blog-page/1`);
  };
  const SEOInDM = () => {
    navigate(`/blog-page/2`);
  };
  const ITStrategy = () => {
    navigate(`/blog-page/3`);
  };
  const UltraModern = () => {
    navigate(`/blog-page/4`);
  };
  const Website = () => {
    navigate(`/blog-page/5`);
  };
  const InnovativeIdeas = () => {
    navigate(`/blog-page/6`);
  };
  const BusinessWebsites = () => {
    navigate(`/blog-page/7`);
  };
  const SMMBoost = () => {
    navigate(`/blog-page/8`);
  };
  const ITStrategy01 = () => {
    navigate(`/blog-page/9`);
  };
  const AffiliateMarketing = () => {
    navigate(`/blog-page/10`);
  };
  const DigitalMarketing = () => {
    navigate(`/blog-page/11`);
  };
  const StartArtMobile = () => {
    navigate(`/blog-page/12`);
  };
  const CloudComputing = () => {
    navigate(`/blog-page/13`);
  };
  const ITOffShoring = () => {
    navigate(`/blog-page/14`);
  };

  return (
    <div className="blog_carousel_section">
      <div className="popular_blogs">
        <Container>
          <SectionHeader
            heading="Our best blogs"
            headingStyle="pub_head_class_01"
            smallHeading="Popular Blogs"
            smallHeaderStyle="pub_head_class_02"
          />
          <Carousel>
            <Carousel.Item interval={2000}>
              <div className="col-md-12 col-lg-12 col-xl-12 blog_posts_section1">
                <Row>
                  <Col md={4} lg={4} xl={4}>
                    <div className="top_left_sec" onClick={WhatCanGoodBusiness}>
                      <img src={blog1} alt="blog" width="100%" height="100%" />
                      <div className="inner_text_div">
                        <h4>
                          What can a good Digital Marketing campaign do to your
                          business?
                        </h4>
                        <div className="blog_read_more_div">
                          <button className="blog_read_more_btn">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={8} lg={8} xl={8}>
                    <Row className="blog_right_row">
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div" onClick={SEOInDM}>
                          <div className="blog_div_inner blog_div_two">
                            Is SEO important in digital marketing?
                          </div>
                        </div>
                      </Col>
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div" onClick={ITStrategy}>
                          <div className="blog_div_inner blog_div_three">
                            Best ways to improve IT strategy to implement in
                            your business
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3 blog_right_row">
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div " onClick={UltraModern}>
                          <div className="blog_div_inner blog_div_four">
                            Ultra-modern IT strategies for every business
                          </div>
                        </div>
                      </Col>
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div " onClick={Website}>
                          <div className="blog_div_inner blog_div_five">
                            What does a good business website should feature?
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md={4} lg={4} xl={4}>
                    <div className="blog_div " onClick={InnovativeIdeas}>
                      <div className="blog_div_inner blog_div_six">
                        Innovative ideas to develop your business.
                      </div>
                    </div>
                  </Col>
                  <Col md={8} lg={8} xl={8}>
                    <div className="blog_div " onClick={BusinessWebsites}>
                      <div className="blog_div_inner blog_div_seven">
                        <p>
                          Significance of Business websites in the Digital
                          competition.
                        </p>
                        <button className="blog_7_btn blog_read_more_btn">
                          Read More
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <div className="col-md-12 col-lg-12 col-xl-12 blog_posts_section2">
                <Row>
                  <Col md={4} lg={4} xl={4}>
                    <div className="top_left_sec" onClick={SMMBoost}>
                      <img src={blog8} alt="blog" width="100%" height="100%" />
                      <div className="inner_text_div">
                        <h4>
                          Can SMM boost your brand's awareness? If yes, then how
                          will we promote your brand via SMM?
                        </h4>
                        <div className="blog_read_more_div">
                          <button className="blog_read_more_btn">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={8} lg={8} xl={8}>
                    <Row className="blog_right_row">
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div " onClick={ITStrategy01}>
                          <div className="blog_div_inner blog_div_nine">
                            How IT strategy helps today's business?
                          </div>
                        </div>
                      </Col>
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div" onClick={AffiliateMarketing}>
                          <div className="blog_div_inner blog_div_ten">
                            How do we do affiliate marketing?
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="pt-3 blog_right_row">
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div " onClick={DigitalMarketing}>
                          <div className="blog_div_inner blog_div_eleven">
                            Reasons why digital marketing needs cloud computing?
                          </div>
                        </div>
                      </Col>
                      <Col md={6} lg={6} xl={6}>
                        <div className="blog_div " onClick={StartArtMobile}>
                          <div className="blog_div_inner blog_div_twelve">
                            Install the State-of-the-art mobile apps for your
                            device
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col md={4} lg={4} xl={4}>
                    <div className="blog_div " onClick={CloudComputing}>
                      <div className="blog_div_inner blog_div_thirteen">
                        how cloud computing works? Let's understand various
                        things about it!!!
                      </div>
                    </div>
                  </Col>
                  <Col md={8} lg={8} xl={8}>
                    <div className="blog_div " onClick={ITOffShoring}>
                      <div className="blog_div_inner blog_div_fourteen">
                        <p>
                          What is IT Offshoring? What are its Key benefits in
                          the IT business?
                        </p>
                        <button className="blog_7_btn blog_read_more_btn">
                          Read More
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </div>
  );
}

export default BlogCarousel;
