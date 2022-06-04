import React from "react";
import { Col, Row } from "react-bootstrap";
import "./MediaCard.css";

function RightImgMediaCard(props) {
  const {
    right_img_media,
    right_img_media_name,
    right_img_media_card_content_class,
    right_img_media_card_content,
  } = props;

  return (
    <div className="media_card_sec">
      {props.children}
      <Row>
        <div className="media_right_img w-100">
          <Col className="offset-md-8">
            <div className="h-100">
              <img src={right_img_media} alt={right_img_media_name} />
            </div>
          </Col>
        </div>
        <Col md={10}>
          <div
            className={` ${right_img_media_card_content_class} img_media_card_content_div `}
          >
            <p>{right_img_media_card_content}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RightImgMediaCard;
