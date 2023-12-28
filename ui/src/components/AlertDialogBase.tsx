import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  Button,
} from "@chakra-ui/react";

interface DialogButton {
  label: string;
  onClick: () => void;
}

interface AlertDialogProps {
  message: string;
  buttons?: DialogButton[];
  onClose: () => void;
}

export const AlertDialogBase: React.FC<AlertDialogProps> = ({
  message,
  buttons,
  onClose,
}) => {
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={true}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Alert
          </AlertDialogHeader>

          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter>
            {buttons?.map((button, index) => (
              <Button
                colorScheme="blue"
                onClick={() => {
                  button.onClick();
                  onClose();
                }}
                ml={3}
                key={index}
              >
                {button.label}
              </Button>
            ))}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

import ReactDOM from "react-dom";
export const showDialog = (message: string, buttons?: DialogButton[]) => {
  const div = document.createElement("div");
  document.body.appendChild(div);

  const closeDialog = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  ReactDOM.render(
    <AlertDialogBase
      message={message}
      buttons={buttons}
      onClose={closeDialog}
    />,
    div
  );
};
