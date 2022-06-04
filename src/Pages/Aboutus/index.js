import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageBanner from "../../Components/PageBanner/PageBanner";
import aboutus_banner from "../../assets/aboutus_banner.png";
import about_us_icon from "../../assets/about_us_icon.svg";
import aboutus_why from "../../assets/aboutus_why.png";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import "./style.css";
import LeftImgMediaCard from "../../Components/MediaCard/LeftImgMediaCard";
import Contact from "../../Components/Contact/Contact";
import it_consulting from "../../assets/it_consulting.svg";
import content_writing from "../../assets/content_writing.svg";
import virtual_staffing from "../../assets/virtual_staffing.svg";
import yellow_box from "../../assets/yellow_box.svg";
import blue_box from "../../assets/blue_box.svg";
import web_designing from "../../assets/web_designing.svg";
import mbl_apps from "../../assets/mbl_apps.svg";
import promoting_brands from "../../assets/promoting_brands.svg";
import cloud_support from "../../assets/cloud_support.svg";
import Helmet from "react-helmet";

function AboutusPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function AboutUs_why_aronsol_text() {
    return (
      <>
        <h5 className="about_why_aronsol_head">
          The answer is simple: We leverage uniqueness!
        </h5>
        <div className="aboutus_why_aronsole_text_div">
          Unique strategies, modernized techniques, and advanced stratagems are
          all that a business mind needs currently to stand apart from its
          competitors. We are custom-built to deliver these requirements to our
          clients ensuring a hassle-free experience for them.
        </div>
      </>
    );
  }

  return (
    <div className="about_us_page_section page_bg_image">
      <Helmet>
        <title>About Us | Aronsol</title>
        <meta
          name="description"
          content="Aronsol is an leading online marketing company in Hyderabad with IT Services, SEO, social, ecommerce, Affiliate and Content marketing as their core business."
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
        <link rel="canonical" href="https://aronsol.com/about" />
      </Helmet>
      <div className="service_page_banner position-relative">
        <PageBanner
          pageBanner_img={aboutus_banner}
          pageBanner_img_text="aboutus_banner image"
          pageBanner_bold_heading="About ARONSOL"
          pageBanner_normal_heading="Add a magical touch to your business with our emphasized services!"
          pageTitleBox_icon={about_us_icon}
          pageTitleBox_icon_text="aboutus_banner icon"
          pageTitleBox_heading="ABOUT US"
        />
      </div>
      <div className="service_page_image_sec">
        <Container className="position-relative">
          <div className="service_page_image_inner_sec aboutus_imageBox">
            <SectionHeader
              heading="Welcome to"
              headingStyle="pub_head_class_01"
              smallHeading="Aronsol"
              smallHeaderStyle="pub_head_class_02"
            />
            <div className="aboutus_imageBox_text">
              An independent result-acquainted global technology &#38; marketing
              services provider. We operate with an experienced skilful team
              with smart business brains who have practical exposure in tackling
              simple to complex situations in time. We deal with wide-ranging
              services under one roof starting with <br />
              <div className="services_list">
                <Row className="about_us_service_img_row1">
                  <Col md={3} lg={3}>
                    {/* <img
                      src={it_consulting}
                      alt="it_consulting"
                      className="about_us_service_img1"
                    /> */}
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">IT consulting</div>
                      <img
                        src={yellow_box}
                        alt="it_consulting"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                  <Col md={3} lg={3}>
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">Content writing</div>
                      <img
                        src={yellow_box}
                        alt="content_writing"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                  <Col md={3} lg={3}>
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">
                        Virtual staffing
                      </div>
                      <img
                        src={yellow_box}
                        alt="virtual_staffing"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                  <Col md={3} lg={3}>
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">Web designing</div>
                      <img
                        src={yellow_box}
                        alt="web_designing"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="about_us_service_img_row2">
                  <Col className="second_row_image" md={3} lg={3}>
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">Mobile apps</div>
                      <img
                        src={blue_box}
                        alt="mbl_apps"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                  <Col md={3} lg={3}>
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">
                        Promoting brands
                      </div>
                      <img
                        src={blue_box}
                        alt="promoting_brands"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                  <Col md={3} lg={3}>
                    <div className="aboutus_strips">
                      <div className="aboutus_strips_text">Cloud support</div>
                      <img
                        src={blue_box}
                        alt="cloud_support"
                        className="about_us_service_img3"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="aboutus_why_aronsol">
        <Container>
          <SectionHeader
            heading="Why"
            headingStyle="pub_head_class_01"
            smallHeading="Aronsol?"
            smallHeaderStyle="pub_head_class_02"
          />
          <LeftImgMediaCard
            left_img_media={aboutus_why}
            left_img_media_name="publisher image"
            left_img_media_card_content_class="aff_pub_bg whyAronsol_text_class"
            left_img_media_card_content={<AboutUs_why_aronsol_text />}
          />
        </Container>
      </div>
      <div className="about_us_info_text">
        <Container>
          <p>
            Develop your business with the innovative strategies and marketing
            tactics we offer. Our leading strategies without a doubt will serve
            as a bridge for the future business world. We are already known for
            result-driven ideas among our clients. We are always committed to
            offer complete digital marketing services starting from
          </p>
          <ul className="about_us_info_text_ul">
            <li>Search Engine Optimization (SEO),</li>
            <li>Search Engine Marketing (SEM),</li>
            <li>Website Strategies,</li>
            <li>Social Media Marketing (SMM),</li>
            <li>Email Outreach,</li>
            <li>Re-Targeting,</li>
            <li>Content Generation And Optimization,</li>
            <li>Affiliate Marketing,</li>
            <li>Quality Link Building And</li>
            <li>Integrated Online Marketing Strategies.</li>
          </ul>
          <p>
            "Opt-in" our digital services to increase your business. We will put
            forth smart efforts to enhance your business growth and revenue.
          </p>
        </Container>
      </div>
      <div className="contacat_section mt-5" ref={props.myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default AboutusPage;
