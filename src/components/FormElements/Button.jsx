import React from "react";
import { Button as RBButton } from "react-bootstrap";
import Spinner from "./Spinner";

export default function Button({
  children,
  variant = "primary",
  type,
  submitLabel = "Submiting",
  isSubmiting = false,
  ...props
}) {
  const properties = {
    ...props,
    variant,
    type,
  };

  const bntLabel =
    type !== "submit" ? (
      children
    ) : isSubmiting ? (
      <>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        {submitLabel}
      </>
    ) : (
      children
    );
  return <RBButton {...properties}>{bntLabel}</RBButton>;
}
