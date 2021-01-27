import React, { useEffect } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import globalConfig from "@utils/globalConfig";

const UserLayout = ({ dispatch, route }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("user-layout");
    fetchUsers();
    return () => {
      document.querySelector("body").classList.remove("user-layout");
    };
  }, []);

  const fetchUsers = () =>
    dispatch({
      type: `FETCH_USERS${globalConfig.REQUESTED}`,
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
