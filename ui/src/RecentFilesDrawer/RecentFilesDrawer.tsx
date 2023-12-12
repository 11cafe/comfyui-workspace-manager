import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
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
  IconButton,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Workflow, deleteFlow, listWorkflows, tagsTable } from "../WorkspaceDB";
import {
  IconChevronDown,
  IconChevronUp,
  IconPlus,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { WorkspaceContext } from "../WorkspaceContext";
import AddTagToWorkflowPopover from "./AddTagToWorkflowPopover";
import RecentFilesDrawerMenu from "./RecentFilesDrawerMenu";
import { formatTimestamp } from "../utils";
import WorkflowListItem from "./WorkflowListItem";
const MAX_TAGS_TO_SHOW = 6;
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
  const { curFlowID } = useContext(WorkspaceContext);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [showAllTags, setShowAllTags] = useState(false);
  useEffect(() => {
    const all = listWorkflows();
    setRecentFlow(all);
  }, []);

  const onClickTag = (name: string) => {
    setSelectedTag(name);
    setRecentFlow(listWorkflows().filter((n) => n.tags?.includes(name)));
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
          <DrawerHeader>
            <HStack alignItems={"center"} justifyContent={"space-between"}>
              <HStack>
                <Text mr={6}>Workflows</Text>
                <Button
                  leftIcon={<IconPlus />}
                  variant="outline"
                  size={"sm"}
                  colorScheme="teal"
                  onClick={onClickNewFlow}
                >
                  New
                </Button>
              </HStack>
              <HStack alignItems={"center"}>
                <RecentFilesDrawerMenu />
                {/* <DrawerCloseButton position={"relative"} /> */}
              </HStack>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            {/* <HStack spacing={4} mb={6}>
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
            </HStack> */}
            <HStack spacing={2} wrap={"wrap"} mb={6}>
              {selectedTag != null && (
                <IconButton
                  aria-label="Close"
                  size={"sm"}
                  icon={<IconX />}
                  onClick={() => {
                    setSelectedTag(undefined);
                    setRecentFlow(listWorkflows());
                  }}
                />
              )}
              {tagsTable
                ?.listAll()
                .slice(0, showAllTags ? undefined : MAX_TAGS_TO_SHOW)
                .map((tag) => (
                  <Button
                    variant="solid"
                    width={"auto"}
                    flexShrink={0}
                    size={"sm"}
                    py={4}
                    onClick={() => onClickTag(tag.name)}
                    isActive={selectedTag === tag.name}
                  >
                    {tag.name}
                  </Button>
                ))}
              {(tagsTable?.listAll().length ?? 0) > MAX_TAGS_TO_SHOW && (
                <IconButton
                  aria-label="Show-all-tags"
                  size={"sm"}
                  icon={showAllTags ? <IconChevronUp /> : <IconChevronDown />}
                  onClick={() => setShowAllTags(!showAllTags)}
                />
              )}
            </HStack>
            {recentFlows.map((n) => (
              <WorkflowListItem
                isSelected={n.id === curFlowID}
                workflow={n}
                loadWorkflowID={loadWorkflowID}
                setRecentFlow={setRecentFlow}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
