import React from "react";
import { Modal } from "react-bootstrap";

export default function DialogHeader({ dialogHeader }) {
  return (
    <Modal.Header closeButton>
      <Modal.Title>{dialogHeader}</Modal.Title>
    </Modal.Header>
  );
}
