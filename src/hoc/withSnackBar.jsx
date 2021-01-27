import React, { useEffect, useState } from "react";
import { SnackBar } from "@components";

export const withSnackBar = (OrginalComponent) =>
  function ({ ...props }) {
    const [message, setMessage] = useState(null);
    const [actionHandler, setActionHandler] = useState(null);
    const [snackBarProp, setSnackBarProp] = useState({});

    useEffect(() => {
      message && autoDismiss();
    }, [message]);

    let cnt = 0;
    let timeout;
    function autoDismiss() {
      cnt += 1;
      if (cnt === 2) {
        clearTimeout(timeout);
        setMessage(null);
        return false;
      }
      timeout = setTimeout(autoDismiss, 2000); //2 sec
    }

    function showSnackBar({ message, variant, action }) {
      setMessage(message);
      setActionHandler(action);
      setSnackBarProp({
        variant,
      });
    }

    const properties = {
      ...props,
      showSnackBar,
    };

    return (
      <>
        {message && <SnackBar {...snackBarProp}>{message}</SnackBar>}
        <OrginalComponent {...properties} />
      </>
    );
  };
