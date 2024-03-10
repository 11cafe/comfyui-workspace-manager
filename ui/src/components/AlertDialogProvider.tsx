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
    message: string | React.ReactNode,
    buttons?: (DialogButton | null)[],
    options?: {
      hideCloseIcon?: boolean;
      closeOnOverlayClick?: boolean;
    },
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
  const [message, setMessage] = useState<string | React.ReactNode>("");
  const [buttons, setButtons] = useState<(DialogButton | null)[]>([]);
  const [hideCloseIcon, setHideCloseIcon] = useState(false);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const showDialog: DialogContextType["showDialog"] = useCallback(
    (message, buttons, options) => {
      setMessage(message);
      setButtons(buttons ?? []);
      setIsOpen(true);
      setHideCloseIcon(options?.hideCloseIcon ?? false);
      setCloseOnOverlayClick(options?.closeOnOverlayClick ?? true);
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
          size={"xl"}
          closeOnOverlayClick={closeOnOverlayClick}
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
                  {buttons.map(
                    (button, index) =>
                      button && (
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
                      ),
                  )}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </DarkMode>
        </AlertDialog>
      )}
    </DialogContext.Provider>
  );
};
