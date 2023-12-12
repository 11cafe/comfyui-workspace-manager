import {
  Box,
  HStack,
  useColorMode,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  Button,
  PopoverBody,
} from "@chakra-ui/react";
import { Workflow, deleteFlow, listWorkflows } from "../WorkspaceDB";
import { formatTimestamp } from "../utils";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import { IconTrash } from "@tabler/icons-react";

type Props = {
  isSelected: boolean;
  workflow: Workflow;
  loadWorkflowID: (id: string) => void;
  setRecentFlow: (flows: Workflow[]) => void;
};
export default function WorkflowListItem({
  isSelected,
  workflow,
  loadWorkflowID,
  setRecentFlow,
}: Props) {
  const { colorMode } = useColorMode();
  const onClickDelete = (id: string) => {
    deleteFlow(id);
    const all = listWorkflows();
    setRecentFlow(all);
  };
  return (
    <HStack w={"100%"} justify={"space-between"}>
      <Box
        as="button"
        textAlign={"left"}
        backgroundColor={isSelected ? "teal.200" : undefined}
        color={isSelected ? "#333" : undefined}
        w={"90%"}
        borderRadius={6}
        p={2}
        mb={2}
        onClick={() => {
          loadWorkflowID(workflow.id);
        }}
        _hover={{
          bg: colorMode === "light" ? "gray.200" : "#4A5568",
        }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
      >
        {/* <Stack gap={0} cursor={"pointer"}> */}
        <Text fontWeight={"500"}>{workflow.name ?? "untitled"}</Text>
        <Text color={"GrayText"} ml={2} fontSize={"sm"}>
          Updated: {formatTimestamp(workflow.updateTime)}
        </Text>
        {/* </Stack> */}
      </Box>

      <AddTagToWorkflowPopover workflow={workflow} />
      <Popover isLazy={true}>
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <IconTrash color="#F56565" cursor={"pointer"} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
              <PopoverBody>
                <Text mb={4} fontWeight={600}>
                  Are you sure you want to delete this workflow?
                </Text>
                <Button
                  colorScheme="red"
                  size={"sm"}
                  onClick={() => {
                    onClickDelete(workflow.id);
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
    </HStack>
  );
}
