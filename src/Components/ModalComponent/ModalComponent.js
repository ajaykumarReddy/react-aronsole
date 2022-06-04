import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./ModalComponent.css";

function ModalComponent(props) {
  const {
    modalBannerText,
    modalBannerImg,
    modalBodyText,
    modalShow,
    setModalShow,
  } = props;

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable
        className="modal_section"
      >
        <Modal.Header closeButton>
          <div className="modal_banner">
            <div className="modal_banner_img">
              <img src={modalBannerImg} alt="modal banner image" width="100%" />
              <div className="banner_text">{modalBannerText}</div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p>{modalBodyText}</p>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="modal_contain">
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ModalComponent;
