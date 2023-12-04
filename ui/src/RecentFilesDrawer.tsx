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
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Workflow, listWorkflows, workspace } from "./WorkspaceDB";
import { IconPlus } from "@tabler/icons-react";

type Props = {
  onclose: () => void;
  isOpen: boolean;
};
export default function RecentFilesDrawer({ isOpen, onclose }: Props) {
  const [recentFlows, setRecentFlow] = useState<Workflow[]>([]);

  useEffect(() => {
    const all = listWorkflows();
    setRecentFlow(all);
  }, []);
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
      <Drawer
        isOpen={isOpen}
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
            >
              New
            </Button>
            {recentFlows.map((n) => {
              return (
                <Stack
                  gap={0}
                  borderRadius={6}
                  p={2}
                  mb={2}
                  backgroundColor={"#EEF2F6"}
                  cursor={"pointer"}
                >
                  <Text fontWeight={"500"}>{n.name}</Text>
                  <Text color={"GrayText"} ml={2} fontSize={"sm"}>
                    Updated: {formatTimestamp(n.updateTime)}
                  </Text>
                </Stack>
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
  const date = new Date(unixTimestamp * 1000);

  // Get the day, month, year, hours, and minutes from the Date object
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Format the date and time string
  return `${month}-${day}-${year} ${hours}:${minutes}`;
}
