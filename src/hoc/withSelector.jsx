import React from "react";
import { useSelector, useDispatch } from "react-redux";

const withSelector = (OrginalComponent) =>
  function (props) {
    const dispatch = useDispatch();
    const properties = {
      ...props,
      useSelector,
      dispatch,
    };
    return <OrginalComponent {...properties} />;
  };
export default withSelector;
