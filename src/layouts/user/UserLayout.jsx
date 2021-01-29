import React, { useEffect, useState } from "react";
import { renderRoutes } from "react-router-config";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import globalConfig from "@utils/globalConfig";
import { Button } from "@components/FormElements";
import { withSnackBar, withDialogWrapper } from "@hoc";

const UserLayout = ({
  dispatch,
  showSnackBar,
  route,
  isDialogLaunched,
  ...props
}) => {
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

  //-------------TESTING PURPOSES--------------
  const dialogPayload = {
    dialogContent: <h1>FULL DIALOG</h1>,
    dialogHeader: "HEADER",
    isSubmiting,
    onSubmit: handleSubmit,
    disabled: isSubmiting,
  };
  useEffect(() => {
    isDialogLaunched && props.launchDialog(dialogPayload);
  }, [isSubmiting, isDialogLaunched]);

  function handleSubmit() {
    setIsSubmiting(true);
    props.launchDialog({ ...dialogPayload });
    setTimeout(() => {
      setIsSubmiting(false);
      props.launchDialog(dialogPayload);
    }, [3000]);
  }

  function handleClick() {
    props.launchDialog(dialogPayload);
  }
  function handleShowSnackBar() {
    setIsSubmiting(true);
    setTimeout(() => {
      setIsSubmiting(false);
      showSnackBar({
        message: "Success message goes here!",
        variant: "success",
      });
    }, [3000]);
  }
  //---------------END TEST-------------
  return (
    <div className="user-layout-wrapper">
      Sample Layout:
      <br />
      <Button size={"sm"} onClick={handleClick}>
        Launch Dialog
      </Button>
      <br />
      <br />
      <Button
        type={"submit"}
        size={"sm"}
        onClick={handleShowSnackBar}
        isSubmiting={isSubmiting}
        disabled={isSubmiting}
      >
        Launch Snackbar
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
export default connect(mapStateToProps)(withSnackBar(withDialogWrapper(UserLayout)));
