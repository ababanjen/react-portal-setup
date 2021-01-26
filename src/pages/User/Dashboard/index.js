import React from "react";
import { connect } from "react-redux";
import { compareObjectValues } from "@utils/helpers";

const DashboardPage = () => {
  console.log({compareObjectValues});
  return <>Welcome to your Dashboard</>;
};

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ownProps,
});
export default connect(mapStateToProps)(DashboardPage);
