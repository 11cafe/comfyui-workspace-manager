import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  Stack,
  Button,
  HStack,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Popover,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Workflow, deleteFlow, listWorkflows, workspace } from "./WorkspaceDB";
import { IconPlus, IconTag, IconTrash } from "@tabler/icons-react";
import { WorkspaceContext } from "./WorkspaceContext";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import RecentFilesDrawerMenu from "./RecentFilesDrawerMenu";
import { formatTimestamp } from "./utils";

type Props = {
  onclose: () => void;
  loadWorkflowID: (id: string) => void;
  onClickNewFlow: () => void;
};
export default function RecentFilesDrawer({
  onclose,
  loadWorkflowID,
  onClickNewFlow,
}: Props) {
  const [recentFlows, setRecentFlow] = useState<Workflow[]>([]);
  const { colorMode } = useColorMode();
  const { curFlowID } = useContext(WorkspaceContext);
  useEffect(() => {
    const all = listWorkflows();
    setRecentFlow(all);
  }, []);
  const onClickDelete = (id: string) => {
    deleteFlow(id);
    const all = listWorkflows();
    setRecentFlow(all);
  };
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
      <Drawer
        isOpen={true}
        placement="left"
        onClose={() => onclose()}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack alignItems={"center"}>
              <Text mr={6}>Recent Workflows</Text>
              <Button
                leftIcon={<IconPlus />}
                variant="outline"
                size={"sm"}
                colorScheme="teal"
                onClick={onClickNewFlow}
              >
                New
              </Button>
              <RecentFilesDrawerMenu />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <HStack spacing={4} mb={6}>
              <Button
                leftIcon={<IconTag />}
                colorScheme="gray"
                variant="solid"
                size={"sm"}
                px={3}
                borderRadius={16}
              >
                New Tag
              </Button>
            </HStack>
            {recentFlows.map((n) => {
              const selected = n.id === curFlowID;
              return (
                <HStack w={"100%"} justify={"space-between"}>
                  <Box
                    as="button"
                    textAlign={"left"}
                    backgroundColor={selected ? "teal.200" : undefined}
                    color={selected ? "#333" : undefined}
                    w={"90%"}
                    borderRadius={6}
                    p={2}
                    mb={2}
                    onClick={() => {
                      loadWorkflowID(n.id);
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
                    <Text fontWeight={"500"}>{n.name ?? "untitled"}</Text>
                    <Text color={"GrayText"} ml={2} fontSize={"sm"}>
                      Updated: {formatTimestamp(n.updateTime)}
                    </Text>
                    {/* </Stack> */}
                  </Box>
                  <AddTagToWorkflowPopover workflow={n} />
                  <Popover>
                    {({ isOpen, onClose }) => (
                      <>
                        <PopoverTrigger>
                          {/* <Button>Trigger</Button> */}
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
                                onClickDelete(n.id);
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
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
