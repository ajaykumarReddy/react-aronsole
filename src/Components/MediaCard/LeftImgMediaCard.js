import React from "react";
import { Col, Row } from "react-bootstrap";
import "./MediaCard.css";

function LeftImgMediaCard(props) {
  const {
    left_img_media,
    left_img_media_name,
    left_img_media_card_content_class,
    left_img_media_card_content,
  } = props;

  return (
    <div className="media_card_sec">
      {props.children}
      <Row>
        <div className="media_left_img w-100 ">
          <Col md={4}>
            <div className="h-100">
              <img src={left_img_media} alt={left_img_media_name} />
            </div>
          </Col>
        </div>
        <Col className="offset-md-2">
          <div
            className={` ${left_img_media_card_content_class} img_media_card_content_div `}
          >
            <div>{left_img_media_card_content}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LeftImgMediaCard;
