import React from "react";
import { Spinner as RBSpinner } from "react-bootstrap";

export default function Spinner({ ...props }) {
  const properties = {
    ...props,
  };

  return <RBSpinner {...properties} />;
}
