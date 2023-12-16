import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverBody,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons-react";

type Props = {
  promptMessage: string;
  isDisabled?: boolean;
  variant?: string;
  onDelete: () => void;
};

export default function DeleteConfirm(props: Props) {
  const {
    promptMessage = "Are you sure you want to delete this?",
    variant = "ghost",
    onDelete,
    isDisabled = false,
  } = props;
  return (
    <Popover isLazy={true} placement="auto">
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <IconButton
              aria-label="Delete confirm"
              size={"sm"}
              icon={<IconTrash color="#F56565" />}
              isDisabled={isDisabled}
              variant={variant}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Text mb={4} pr={4} fontWeight={600}>
                {promptMessage}
              </Text>
              <Button
                colorScheme="red"
                size={"sm"}
                onClick={() => {
                  onDelete();
                  onClose();
                }}
              >
                Yes, delete
              </Button>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
