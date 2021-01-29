import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "@components/FormElements";

export function DefaultFooterActions({ onCancel, onSubmit, isSubmiting, submitLabel="Save" }) {
  return (
    <>
      <Button size={"sm"} onClick={onCancel} label={"Cancel"} variant={"light"}>
        Cancel
      </Button>
      <Button
        type={"submit"}
        size={"sm"}
        onClick={onSubmit}
        isSubmiting={isSubmiting}
        disabled={isSubmiting}
      >
        {submitLabel}
      </Button>
    </>
  );
}

export default function DialogFooter({ dialogFooter, ...props }) {
  const footer = dialogFooter ? (
    dialogFooter
  ) : (
    <DefaultFooterActions {...props} />
  );
  return <Modal.Footer>{footer}</Modal.Footer>;
}
