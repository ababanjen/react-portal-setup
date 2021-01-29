import React from "react";
import { Modal } from "react-bootstrap";

export default function DialogContent({ dialogContent }) {
  return (
    <Modal.Body>
      {dialogContent}
    </Modal.Body>
  );
}
