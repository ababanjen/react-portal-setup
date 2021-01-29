import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { DialogHeader, DialogContent, DialogFooter } from "@components/Dialog";
import { stringAndObject } from "@utils/commonShapes";

export default function Dialog({
  show,
  keyboard = false,
  dialogContent,
  dialogHeader,
  dialogFooter,
  onSubmit,
  onCancel,
  isSubmiting,
  submitLabel,
  isFullDialog,
  ...props
}) {
  const properties = {
    ...props,
    show,
    keyboard,
    ...(isFullDialog && { dialogClassName: "modal-90w" }),
  };

  const footerProperties = {
    dialogFooter,
    onSubmit,
    onCancel,
    isSubmiting,
    submitLabel,
  };

  return (
    <Modal {...properties}>
      <DialogHeader dialogHeader={dialogHeader} />
      <DialogContent dialogContent={dialogContent} />
      <DialogFooter {...footerProperties} />
    </Modal>
  );
}

Dialog.propTypes = {
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  isSubmiting: PropTypes.bool,
  submitLabel: PropTypes.string,
  isFullDialog: PropTypes.bool,
  dialogHeader: stringAndObject.isRequired,
  dialogContent: stringAndObject.isRequired,
  dialogFooter: stringAndObject,
};
