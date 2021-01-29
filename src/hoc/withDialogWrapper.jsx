import React, { useEffect, useState } from "react";
import { Dialog } from "@components/Dialog";

const initialDialogState = {
  dialogHeader: "",
  dialogContent: "",
  dialogFooter: undefined,
};
export const withDialogWrapper = (OrginalComponent) =>
  function ({ ...props }) {
    const [show, setShow] = useState(false);
    const [isFullDialog, setIsFullDialog] = useState(false);
    const [onDismiss, setOnDismiss] = useState(null);
    const [dialogElements, setDialogElements] = useState(initialDialogState);

    useEffect(() => {
      return () => {
        setShow(false);
        setIsFullDialog(false);
        setOnDismiss(null);
        setDialogElements(initialDialogState);
      };
    }, []);

    function launchFullDialog({
      dialogHeader,
      dialogContent,
      dialogFooter,
      onHide,
      ...payload
    }) {
      setShow(true);
      setIsFullDialog(true);
      prepopulateStates({
        dialogHeader,
        dialogContent,
        dialogFooter,
        onHide,
        ...payload,
      });
    }

    function launchDialog({
      dialogHeader,
      dialogContent,
      dialogFooter,
      onHide,
      ...payload
    }) {
      setShow(true);
      setIsFullDialog(false);
      prepopulateStates({
        dialogHeader,
        dialogContent,
        dialogFooter,
        onHide,
        ...payload,
      });
    }

    function prepopulateStates({
      dialogHeader,
      dialogContent,
      dialogFooter,
      onHide,
      ...payload
    }) {
      onHide && setOnDismiss(onHide);
      setDialogElements({
        dialogHeader,
        dialogContent,
        dialogFooter,
        ...payload,
      });
    }

    function onHide() {
      setShow(false);
      onDismiss && onDismiss();
    }

    function handleCancel({ onCancel }) {
      onCancel ? onCancel() : onHide();
    }

    const properties = {
      ...props,
      launchFullDialog,
      launchDialog,
      isDialogLaunched: show,
    };

    const dialogProperties = {
      ...dialogElements,
      show,
      isFullDialog,
      onHide,
      onCancel: handleCancel,
    };

    return (
      <>
        <Dialog {...dialogProperties} />
        <OrginalComponent {...properties} />
      </>
    );
  };
