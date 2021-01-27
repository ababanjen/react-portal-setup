import React from "react";
import { Alert } from "react-bootstrap";

export default function SnackBar({
  children,
  variant = "primary",
  ...props
}) {
  const properties = {
    ...props,
    variant,
  };

  return <Alert {...properties}>{children}</Alert>;
}
