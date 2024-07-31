import React, { useRef } from "react";
import { Box, Button } from "@primer/react";
import { Dialog } from "@primer/react/experimental";

export const Modal = ({
  isOpen,
  onDismiss,
  children,
  sx = {},
  buttonText = "",
  showButtons = true,
  customHeader,
  primaryButtonOnClick,
  disablePrimaryButton = false,
  warningModal = false,
  cancelButtonOnClick = () => {},
  disableCancelButton = false,
}) => {
  const returnFocusRef = useRef();

  const CustomFooter = () => {
    return (
      <Box
        sx={{
          display: "flex",
          borderTop: "1px solid #636C76",
          justifyContent: "flex-end",
          gap: "8px",
          padding: "12px",
        }}
      >
        <Button
          variant="invisible"
          disabled={disableCancelButton}
          onClick={() => {
            onDismiss();
            cancelButtonOnClick();
          }}
          sx={{
            color: "#fff",
          }}
        >
          Cancel
        </Button>
        {warningModal ? (
          <button
            onClick={primaryButtonOnClick}
            disabled={disablePrimaryButton}
            style={{
              fontSize: "14px",
              borderRadius: "24px",
              padding: "8px 12px",
              color: "#fff",
              backgroundColor: "#E83F3F",
              cursor: "pointer",
              opacity: disablePrimaryButton ? 0.6 : 1,
              pointerEvents: disablePrimaryButton ? "none" : "auto",
              border: "none",
              textAlign: "center",
            }}
          >
            {buttonText}
          </button>
        ) : (
          <Button
            onClick={primaryButtonOnClick}
            disabled={disablePrimaryButton}
            sx={{
              fontSize: "14px",
              backgroundColor: "#fff",
              borderRadius: "24px",
              color: "#16191D",
              "&:hover": {
                color: "#fff",
              },
              "&:disabled": {
                backgroundColor: "#D3D3D3",
                color: "#A9A9A9",
                "&:hover": {
                  color: "#A9A9A9",
                  border: "1px solid #A9A9A9",
                },
              },
            }}
          >
            {buttonText}
          </Button>
        )}
      </Box>
    );
  };

  return (
    <>
      {isOpen && (
        <Dialog
          sx={sx}
          renderHeader={customHeader}
          renderFooter={showButtons ? CustomFooter : undefined}
          returnFocusRef={returnFocusRef}
          onClose={onDismiss}
        >
          <div
            style={{
              overflow: "auto",
            }}
          >
            {children}
          </div>
        </Dialog>
      )}
    </>
  );
};
