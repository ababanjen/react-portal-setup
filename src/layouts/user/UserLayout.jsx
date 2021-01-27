import React, { useEffect, useState } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import globalConfig from "@utils/globalConfig";
import { Button } from "@components/FormElements";
import { withSnackBar } from "@hoc";

const UserLayout = ({ dispatch, showSnackBar, route }) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
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

  function handleClick() {
    setIsSubmiting(true);
    setTimeout(() => {// fake delay for future api call
      setIsSubmiting(false);
      showSnackBar({
        message: "Success message goes here!",
        variant:"success"
      });
    }, [3000]);
  }

  return (
    <div className="user-layout-wrapper">
      Sample Layout:
      <br />
      <Button
        type={"submit"}
        size={"sm"}
        onClick={handleClick}
        isSubmiting={isSubmiting}
        disabled={isSubmiting}
      >
        Click me
      </Button>
      <br />
      {renderRoutes(route.routes)}
    </div>
  );
};

UserLayout.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  ...state.userLayout,
  ownProps,
});
export default connect(mapStateToProps)(withSnackBar(UserLayout));
