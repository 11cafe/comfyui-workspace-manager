import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, useDisclosure, Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  apiKey: string;
  setApiKey(apiKey: string): void;
}

export default function AddApiKeyPopover({ apiKey, setApiKey }: Props) {
  const [apiKeyInput, setApiKeyInput] = useState(apiKey);
  const { onOpen, onClose, isOpen } = useDisclosure();

  const saveApiKey = () => {
    setApiKey(apiKeyInput);
    onClose();
  }

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement='right'
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button size={"sm"} py={1} mr={8}>
          Set API Key
        </Button>
      </PopoverTrigger>
      <PopoverContent p={5}>
        <PopoverArrow />
        <PopoverCloseButton />
        <Stack spacing={4}>
          <Input value={apiKeyInput} onChange={e => setApiKeyInput(e.target.value)} placeholder="API Key" />
          <Button size={"sm"} py={1} mr={8} onClick={saveApiKey}>
            Save
          </Button>
        </Stack>
      </PopoverContent>
    </Popover>
  );
}