import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import blog_bg from "../../assets/blog_bg.png";
import Blog_icon from "../../assets/Blog_icon.png";
import segment1 from "../../assets/segment1.png";
import segment2 from "../../assets/segment2.png";
import segment3 from "../../assets/segment3.png";
import testimonial_img1 from "../../assets/testimonial1.png";
import testimonial_img2 from "../../assets/testimonial2.png";
import testimonial_img3 from "../../assets/testimonial3.png";
import testimonial_img4 from "../../assets/testimonial4.png";
import testimonial_img5 from "../../assets/testimonial5.png";
import testimonial_img6 from "../../assets/testimonial6.png";
import PageBanner from "../../Components/PageBanner/PageBanner";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import Contact from "../../Components/Contact/Contact";
import "./style.css";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";
import BlogCarousel from "../../Components/BlogCarousel/BlogCarousel";
import Helmet from "react-helmet";

function BlogPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog_section page_bg_image">
      <Helmet>
        <title>
          Professional Blog on SEO, IT Services &#38; Affiliate Marketing
        </title>
        <meta
          name="description"
          content="Subscribe to our weekly blog newsletter for the latest industry news on IT Services, SEO, social media, content, ecommerce and Affiliate marketing"
        />
        <meta name="ROBOTS" content="INDEX, FOLLOW" />
        <meta name="ROBOTS" content="ALL" />
        <meta name="googlebot" content="index,follow,archive" />
        <meta name="msnbot" content="index,follow,archive" />
        <meta name="Slurp" content="index,follow,archive" />
        <meta name="author" content="Aronsol" />
        <meta name="publisher" content="Aronsol" />
        <meta name="owner" content="Aronsol" />
        <meta http-equiv="content-language" content="English" />
        <meta name="doc-type" content="Web Page" />
        <meta name="doc-rights" content="Copywritten Work" />
        <meta name="rating" content="All" />
        <meta name="distribution" content="Global" />
        <meta name="document-type" content="Public" />
        <meta name="revisit-after" CONTENT="daily" />
        <meta name="geo.region" content="IN-TS" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta content="       " name="site" />
        <meta content="       " name="page-topic" />
        <link rel="canonical" href="https://aronsol.com/blog" />
      </Helmet>
      <div className="service_page_banner position-relative">
        <PageBanner
          pageBanner_img={blog_bg}
          pageBanner_img_text="Blog image"
          pageBanner_bold_heading="Inspiring Blogs for Entrepreneurs"
          pageBanner_normal_heading="Start Small. Dream Big. Rule your Business."
          pageTitleBox_icon={Blog_icon}
          pageTitleBox_icon_text="Blog_icon"
          pageTitleBox_heading="BLOGS"
        />
      </div>
      <div className="service_page_image_sec">
        <Container>
          <div className="service_page_image_inner_sec position-relative">
            <SectionHeader
              heading="OUR BLOG SEGMENTS"
              headingStyle="blog_head_class_01"
              smallHeading="We provide high quality knowledge that are mainly focusing on 3 niches."
              smallHeaderStyle="blog_head_class_02"
            />
            <Row>
              <Col sm={12} md={4} lg={4} xl={4}>
                <div className="segment_block">
                  <img src={segment1} alt="Digital Marketing" />
                  <h5>Digital Marketing</h5>
                  <p>
                    Digi-techs provide the best marketing solutions for your
                    business.
                  </p>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4} xl={4}>
                <div className="segment_block">
                  <img src={segment2} alt="Affiliate Marketing" />
                  <h5>Affiliate Marketing</h5>
                  <p>Let's together grow with our connectivity.</p>
                </div>
              </Col>
              <Col sm={12} md={4} lg={4} xl={4}>
                <div className="segment_block">
                  <img src={segment3} alt="IT Technology Services" />
                  <h5>IT Solutions</h5>
                  <p>
                    Get all-in-all IT solutions for your business from our
                    determined experts”.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <BlogCarousel />

      <div className="testimonial_sec">
        <div className="left_wall_line"></div>
        <Container>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={5} lg={5} xl={5}>
                  <div className="testimonial_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p className="quote">
                      If your business is not on the internet then, your
                      business will be soon out of business"
                    </p>
                    <p className="person_name">-Bill Gates.</p>
                  </div>
                </Col>
                <Col md={7} lg={7} xl={7}>
                  <img
                    className="person_img"
                    src={testimonial_img1}
                    alt="testimonial_img1"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={5} lg={5} xl={5}>
                  <div className="testimonial_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p className="quote">
                      Business has only two function - marketing &#38;
                      innovation"
                    </p>
                    <p className="person_name">-Milan Kundera.</p>
                  </div>
                </Col>
                <Col md={7} lg={7} xl={7}>
                  <img
                    className="person_img"
                    src={testimonial_img2}
                    alt="testimonial_img2"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={5} lg={5} xl={5}>
                  <div className="testimonial_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p className="quote">
                      Content is the atomic particle of all digital marketing"
                    </p>
                    <p className="person_name">-Rebecca lieb.</p>
                  </div>
                </Col>
                <Col md={7} lg={7} xl={7}>
                  <img
                    className="person_img"
                    src={testimonial_img3}
                    alt="testimonial_img3"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={5} lg={5} xl={5}>
                  <div className="testimonial_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p className="quote">
                      Stopping advertising to save money is like stopping your
                      watch to save money"
                    </p>
                    <p className="person_name">-Henry Ford.</p>
                  </div>
                </Col>
                <Col md={7} lg={7} xl={7}>
                  <img
                    className="person_img"
                    src={testimonial_img4}
                    alt="testimonial_img4"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={5} lg={5} xl={5}>
                  <div className="testimonial_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p className="quote">
                      Ignoring online marketing is like opening a business and
                      not telling anyone"
                    </p>
                    <p className="person_name">-Kevin B Agency.</p>
                  </div>
                </Col>
                <Col md={7} lg={7} xl={7}>
                  <img
                    className="person_img"
                    src={testimonial_img5}
                    alt="testimonial_img5"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={5} lg={5} xl={5}>
                  <div className="testimonial_text">
                    <FontAwesomeIcon icon={faQuoteLeft} />
                    <p className="quote">
                      Good marketing makes the company looks smart, Great
                      marketing makes the customer feel smart"
                    </p>
                    <p className="person_name">-Joe Chernov.</p>
                  </div>
                </Col>
                <Col md={7} lg={7} xl={7}>
                  <img
                    className="person_img"
                    src={testimonial_img6}
                    alt="testimonial_img6"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <div className="contacat_section mt-5" ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default BlogPage;
