import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UserLayout = ({ route }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("user-layout");
    return () => {
      document.querySelector("body").classList.remove("user-layout");
    };
  }, []);
  return (
    <div className="user-layout-wrapper">
      User Layout
      {renderRoutes(route.routes)}
    </div>
  );
};

UserLayout.propTypes = {
  route: PropTypes.object,
  services: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ownProps,
});
export default connect(mapStateToProps)(UserLayout);
