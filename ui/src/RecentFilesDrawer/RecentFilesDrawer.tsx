import {
  Text,
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Card,
  Box,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState, useRef } from "react";
import {
  Workflow,
  deleteFlow,
  listWorkflows,
  tagsTable,
  workspace,
} from "../WorkspaceDB";
import { IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import RecentFilesDrawerMenu from "./RecentFilesDrawerMenu";
<<<<<<< HEAD
import { sortFlows } from "../utils";
=======
import { insertWorkflowToCanvas, sortFlows } from "../utils";
>>>>>>> 505bdf7 (drag and drop is working but links are messed up)
import WorkflowListItem from "./WorkflowListItem";
import ImportJsonFlows from "./ImportJsonFlows";
import { ESortTypes, sortTypeLocalStorageKey } from "./types";
import { app } from "/scripts/app.js";

const MAX_TAGS_TO_SHOW = 6;
type Props = {
  isOpen: boolean;
  onclose: () => void;
  loadWorkflowID: (id: string) => void;
  onClickNewFlow: () => void;
};
export default function RecentFilesDrawer({
  onclose,
  loadWorkflowID,
  isOpen,
}: Props) {
  const [recentFlows, setRecentFlow] = useState<Workflow[]>([]);
  const { curFlowID } = useContext(WorkspaceContext);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [showAllTags, setShowAllTags] = useState(false);

  const draggingWorkflowID = useRef<string | null>(null);
  const sortTypeRef = useRef<ESortTypes>(
    (window.localStorage.getItem(sortTypeLocalStorageKey) as ESortTypes) ??
      ESortTypes.RECENTLY_MODIFIED
  );

  const onClickTag = (name: string) => {
    setSelectedTag(name);
    setRecentFlow(listWorkflows().filter((n) => n.tags?.includes(name)));
  };

  const loadLatestWorkflows = () => {
    const all = listWorkflows(sortTypeRef.current);
    setRecentFlow(all);
  };

  const onSort = (type: ESortTypes) => {
    setRecentFlow(sortFlows(recentFlows, type));
    sortTypeRef.current = type;
    window.localStorage.setItem(sortTypeLocalStorageKey, type);
  };

  const onDelete = (id: string) => {
    deleteFlow(id);
    loadLatestWorkflows();
  };

  // Define the event handlers
  const handleDragOver = (e) => {
    console.log("app.canvasEl.eventlistener dragover");
  };

  const handleDrop = (e) => {
    console.log("app.canvasEl.eventlistener drop", workspace);
    console.log(
      "app.canvasEl.eventlistener drop draggingWorkflowID",
      draggingWorkflowID
    );
    workspace &&
      draggingWorkflowID.current &&
      insertWorkflowToCanvas(workspace[draggingWorkflowID.current].json);
    console.log("app.canvasEl.eventlistener drop");
  };

  const handleClick = (e) => {
    onclose();
  };
  useEffect(() => {
    loadLatestWorkflows();
  }, [curFlowID]);

  return (
    <RecentFilesContext.Provider
      value={{
        setRecentFiles: setRecentFlow,
      }}
    >
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
  return (
    <RecentFilesContext.Provider value={{ setRecentFiles: setRecentFlow }}>
      <Box
        // direction="left"
        // in={isOpen}
        style={{ width: DRAWER_WIDTH, zIndex: 10 }}
        // transition={{ exit: { delay: 0.1 }, enter: { duration: 0.3 } }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
          <Card
            width={DRAWER_WIDTH}
            height={"100vh"}
            px={4}
            pt={4}
            overflowY={"auto"}
            overflowX={"hidden"}
            gap={6}
            position={"relative"}
          >
            <Stack>
              <Card
                alignItems={"center"}
                justifyContent={"space-between"}
                position={"sticky"}
                top={0}
                left={0}
                right={0}
                zIndex={2}
                shadow={"none"}
                direction={"row"}
              >
                {/* <Card > */}
                <HStack gap={4}>
                  <Text fontSize={20} fontWeight={600} mr={4}>
                    Workflows
                  </Text>
                  <ImportJsonFlows />
                </HStack>
                <HStack alignItems={"center"}>
                  <RecentFilesDrawerMenu />
                  <Button onClick={onclose}>CLOSE</Button>
                </HStack>
                {/* </Card> */}
              </Card>
              <Flex direction="column">
                <HStack spacing={2} wrap={"wrap"} mb={0}>
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
                      icon={
                        showAllTags ? <IconChevronUp /> : <IconChevronDown />
                      }
                      onClick={() => setShowAllTags(!showAllTags)}
                    />
                  )}
                </HStack>
                <HStack mb={2} p={0} justifyContent="end">
                  <Menu closeOnSelect={true}>
                    <MenuButton
                      as={Button}
                      variant={"ghost"}
                      size="xs"
                      pr={0}
                      rightIcon={<IconChevronDown size="16" />}
                    >
                      <HStack>
                        <Text>Sort by:</Text>
                        <Text display="inline-block">
                          {sortTypeRef.current}
                        </Text>
                      </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuOptionGroup
                        value={sortTypeRef.current}
                        type="radio"
                        onChange={(type) => onSort(type as ESortTypes)}
                      >
                        {Object.values(ESortTypes).map((sortType, index) => (
                          <MenuItemOption key={index} value={sortType}>
                            {sortType}
                          </MenuItemOption>
                        ))}
                      </MenuOptionGroup>
                    </MenuList>
                  </Menu>
                </HStack>
                {recentFlows.map((n) => (
                  <WorkflowListItem
                    isSelected={n.id === curFlowID}
                    workflow={n}
                    loadWorkflowID={loadWorkflowID}
                    onDelete={onDelete}
        <Card
          width={DRAWER_WIDTH}
          height={"100vh"}
          pl={4}
          pr={5}
          pt={4}
          gap={4}
          position={"absolute"}
          top={0}
          left={0}
          shadow={"xl"}
          zIndex={10}
          // boxShadow={"rgba(255, 255, 255, 0.4) 1px 4px 8px 1px"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <HStack gap={4}>
              <Text fontSize={20} fontWeight={600} mr={4}>
                Workflows
              </Text>
              <ImportJsonFlows />
            </HStack>
            <HStack alignItems={"center"}>
              <RecentFilesDrawerMenu />
              {/* <Button onClick={onclose}>CLOSE</Button> */}
            </HStack>
          </Flex>
          <Flex direction="column" overflowY={"auto"} overflowX={"hidden"}>
            <HStack spacing={2} wrap={"wrap"} mb={0}>
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
            <HStack mb={2} p={0} justifyContent="end">
              <Menu closeOnSelect={true}>
                <MenuButton
                  as={Button}
                  variant={"ghost"}
                  size="xs"
                  pr={0}
                  rightIcon={<IconChevronDown size="16" />}
                >
                  <HStack>
                    <Text>Sort by:</Text>
                    <Text display="inline-block">{sortTypeRef.current}</Text>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup
                    value={sortTypeRef.current}
                    type="radio"
                    onChange={(type) => onSort(type as ESortTypes)}
                  >
                    {Object.values(ESortTypes).map((sortType, index) => (
                      <MenuItemOption key={index} value={sortType}>
                        {sortType}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </HStack>
            {recentFlows.map((n) => (
              <WorkflowListItem
                isSelected={n.id === curFlowID}
                workflow={n}
                loadWorkflowID={loadWorkflowID}
                onDelete={onDelete}
                onDraggingWorkflowID={(id: string) => {
                  draggingWorkflowID.current = id;
                }}
              />
            ))}
          </Flex>
        </Card>
      </Box>
    </RecentFilesContext.Provider>
  );
}
