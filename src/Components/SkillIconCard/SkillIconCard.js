import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import "./SkillIconCard.css";

function SkillIconCard(props) {
  // const {icon_img, icon_img_alt, icon_heading} = props;

  function SkillCardBox({
    icon_img,
    icon_img_alt,
    icon_heading,
    redirect_path,
  }) {
    return (
      <NavLink to={`/${redirect_path}`} className="SkillCardBox_sec">
        <img src={icon_img} alt={icon_img_alt} />
        <p className="text-uppercase text-center mb-0">{icon_heading}</p>
      </NavLink>
    );
  }

  return (
    <div className="skillCard_sec p-3">
      <div className="offset-3 skillCard_inner">
        <Row className="flex-grow-1">
          <Col>
            <SkillCardBox
              icon_img={icon1}
              icon_img_alt="affliate marketing text"
              icon_heading="AFFILIATE MARKETING"
              redirect_path="affiliate-marketing"
            />
          </Col>

          <Col>
            <SkillCardBox
              icon_img={icon3}
              icon_img_alt="DIGITAL MARKETING"
              icon_heading="DIGITAL MARKETING"
              redirect_path="digital-marketing"
            />
          </Col>

          <Col>
            <SkillCardBox
              icon_img={icon2}
              icon_img_alt="IT SOLUTIONS"
              icon_heading="IT SOLUTIONS"
              redirect_path="it-solutions"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SkillIconCard;
