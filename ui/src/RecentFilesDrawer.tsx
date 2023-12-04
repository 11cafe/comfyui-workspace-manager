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
  IconButton,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Popover,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Workflow, deleteFlow, listWorkflows, workspace } from "./WorkspaceDB";
import { IconPlus, IconTrash } from "@tabler/icons-react";

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
          <DrawerHeader>Recent Workflows</DrawerHeader>
          <DrawerBody>
            <Button
              leftIcon={<IconPlus />}
              variant="outline"
              size={"sm"}
              colorScheme="teal"
              mb={6}
              onClick={onClickNewFlow}
            >
              New
            </Button>
            {recentFlows.map((n) => {
              return (
                <HStack w={"100%"} justify={"space-between"}>
                  <Stack
                    gap={0}
                    w={"90%"}
                    borderRadius={6}
                    p={2}
                    mb={2}
                    backgroundColor={"#EEF2F6"}
                    cursor={"pointer"}
                    onClick={() => {
                      loadWorkflowID(n.id);
                    }}
                  >
                    <Text fontWeight={"500"}>{n.name ?? "untitled"}</Text>
                    <Text color={"GrayText"} ml={2} fontSize={"sm"}>
                      Updated: {formatTimestamp(n.updateTime)}
                    </Text>
                  </Stack>
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

function formatTimestamp(unixTimestamp: number) {
  // Create a new Date object from the UNIX timestamp
  const date = new Date(unixTimestamp);

  // Get the day, month, year, hours, and minutes from the Date object
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Format the date and time string
  return `${month}-${day}-${year} ${hours}:${minutes}`;
}
