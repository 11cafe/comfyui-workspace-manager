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
  DarkMode,
} from "@chakra-ui/react";

interface DialogButton {
  label: string;
  onClick: () => void;
  colorScheme?: string;
  icon?: React.ReactElement;
}

interface DialogContextType {
  showDialog: (
    message: string,
    buttons: DialogButton[],
    hideCloseIcon?: boolean,
  ) => void;
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
  const [hideCloseIcon, setHideCloseIcon] = useState(false);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const showDialog: DialogContextType["showDialog"] = useCallback(
    (message, buttons, hideCloseIcon = false) => {
      setMessage(message);
      setButtons(buttons);
      setIsOpen(true);
      setHideCloseIcon(hideCloseIcon);
    },
    [],
  );

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
          <DarkMode>
            <AlertDialogOverlay>
              <AlertDialogContent className="workspace_manager">
                <AlertDialogHeader
                  fontSize="lg"
                  fontWeight="bold"
                ></AlertDialogHeader>
                {!hideCloseIcon ? <AlertDialogCloseButton /> : null}

                <AlertDialogBody whiteSpace="pre-wrap">
                  {message}
                </AlertDialogBody>

                <AlertDialogFooter>
                  {buttons.map((button, index) => (
                    <Button
                      colorScheme={button.colorScheme ?? "gray"}
                      onClick={() => {
                        button.onClick();
                        handleClose();
                      }}
                      iconSpacing={1}
                      leftIcon={button.icon}
                      ml={3}
                      key={index}
                    >
                      {button.label}
                    </Button>
                  ))}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </DarkMode>
        </AlertDialog>
      )}
    </DialogContext.Provider>
  );
};
