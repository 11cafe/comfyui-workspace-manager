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
  Tooltip,
  Box,
} from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons-react";

type Props = {
  promptMessage: string;
  isDisabled?: boolean;
  variant?: string;
  tooltipText?: string;
  onDelete: () => void;
};

export default function DeleteConfirm(props: Props) {
  const {
    promptMessage = "Are you sure you want to delete this?",
    variant = "ghost",
    onDelete,
    isDisabled = false,
    tooltipText,
  } = props;

  return (
    <Popover isLazy={true} placement="auto" gutter={0}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Box>
              <Tooltip hasArrow label={tooltipText} placement="bottom">
                <IconButton
                  aria-label="Delete confirm"
                  size={"sm"}
                  icon={<IconTrash color="#F56565" size={"20px"} />}
                  isDisabled={isDisabled}
                  variant={variant}
                />
              </Tooltip>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverCloseButton onClick={onClose} />
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
