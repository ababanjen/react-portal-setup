import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const UserLayout = ({ dispatch, route }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("user-layout");
    fetchUsers();
    return () => {
      document.querySelector("body").classList.remove("user-layout");
    };
  }, []);

  const fetchUsers = (_) =>
    dispatch({
      type: "FETCH_USERS_REQUESTED",
      payload: "",
    });

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
  ...state.userLayout,
  ownProps,
});
export default connect(mapStateToProps)(UserLayout);
