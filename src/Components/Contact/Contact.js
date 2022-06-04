import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
import ContactForm_Card from "./ContactForm_Card";
import Copyright from "../Copyright/Copyright";
import "./Contact.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Contact(props) {
  return (
    <>
      <div className="contact_sec" id="contact_section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <SectionHeader
                heading="Contact"
                smallHeading="US"
                headingStyle="text-light"
                smallHeaderStyle="colored_text_class"
              />
              <div className="address_div">
                <div className="us_address address">
                  116 village blvd, <br />
                  suite 200, Princeton, <br />
                  New Jersey US 08540
                  <br />
                  <br />
                  Phone: (201) 613-4452
                  <br />
                  <br />
                  Mail : <a href="mailto:info@aronsol.com">info@aronsol.com</a>
                </div>
                <div className="hyd_address address">
                  4th Floor, Vasista Bhavan, Opp to DLF Cyber City, APHB Colony,
                  Indira Nagar, Gachibowli, Hyderabad, Telangana-500032
                </div>
              </div>
              <div className="social_media_block">
                <a
                  href="https://www.facebook.com/Aronsol_media-100100822514637/?ref=pages_you_manage"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com/media_aronsol" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com/aronsol_media/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/company/aronsol"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
              <div className="form_card_div">
                <ContactForm_Card />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Copyright />
    </>
  );
}

export default Contact;
