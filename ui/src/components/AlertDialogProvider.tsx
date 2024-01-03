import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

interface DialogButton {
  label: string;
  onClick: () => void;
  colorScheme?: string;
}

interface DialogContextType {
  showDialog: (message: string, buttons: DialogButton[]) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export const AlertDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [buttons, setButtons] = useState<DialogButton[]>([]);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const showDialog = useCallback((message: string, buttons: DialogButton[]) => {
    setMessage(message);
    setButtons(buttons);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <DialogContext.Provider value={{ showDialog }}>
      {children}
      {isOpen && (
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={handleClose}
          size={"lg"}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader
                fontSize="lg"
                fontWeight="bold"
              ></AlertDialogHeader>
              <AlertDialogCloseButton />

              <AlertDialogBody>{message}</AlertDialogBody>

              <AlertDialogFooter>
                {buttons.map((button, index) => (
                  <Button
                    colorScheme={button.colorScheme ?? "gray"}
                    onClick={() => {
                      button.onClick();
                      handleClose();
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
      )}
    </DialogContext.Provider>
  );
};
