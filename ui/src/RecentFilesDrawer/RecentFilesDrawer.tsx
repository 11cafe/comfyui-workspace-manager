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
} from "@chakra-ui/react";
import { useContext, useEffect, useState, useRef, useCallback } from "react";
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
import { insertWorkflowToCanvas, sortFlows } from "../utils";
import WorkflowListItem from "./WorkflowListItem";
import ImportJsonFlows from "./ImportJsonFlows";
import MultipleSelectionOperation from "./MultipleSelectionOperation";
import { ESortTypes, sortTypeLocalStorageKey } from "./types";
// @ts-ignore
import { app } from "/scripts/app.js";
import { insertWorkflowToCanvas2 } from "./InsertWorkflowToCanvas";

const MAX_TAGS_TO_SHOW = 6;
type Props = {
  onclose: () => void;
  loadWorkflowID: (id: string) => void;
  onClickNewFlow: () => void;
};
export default function RecentFilesDrawer({ onclose, loadWorkflowID }: Props) {
  const [recentFlows, setRecentFlow] = useState<Workflow[]>([]);
  const { curFlowID } = useContext(WorkspaceContext);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [showAllTags, setShowAllTags] = useState(false);
  const [multipleState, setMultipleState] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
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

  const onDelete = useCallback((id: string) => {
    deleteFlow(id);
    loadLatestWorkflows();
  }, []);

  // const handleDragOver = (e) => {
  //   console.log("dragover", e);
  // };

  const handleDrop = (e: any) => {
    workspace &&
      draggingWorkflowID.current &&
      insertWorkflowToCanvas2(workspace[draggingWorkflowID.current].json, [
        e.canvasX,
        e.canvasY,
      ]);
  };

  const handleClick = (e: any) => {
    onclose();
  };
  useEffect(() => {
    loadLatestWorkflows();
    // app.canvasEl.addEventListener("dragover", handleDragOver);
    app.canvasEl.addEventListener("drop", handleDrop);
    app.canvasEl.addEventListener("click", handleClick);

    // Cleanup function to remove event listeners
    return () => {
      // app.canvasEl.removeEventListener("dragover", handleDragOver);
      app.canvasEl.removeEventListener("drop", handleDrop);
      app.canvasEl.removeEventListener("click", handleClick);
    };
  }, [curFlowID]);

  const updateDraggingWorkflowID = useCallback((id: string) => {
    draggingWorkflowID.current = id;
  }, []);

  const onSelect = useCallback((flowId: string, selected: boolean) => {
    setSelectedKeys((preState) => {
      const copyKeys = [...preState];
      if (selected) {
        copyKeys.push(flowId);
      } else {
        copyKeys.splice(copyKeys.indexOf(flowId), 1);
      }
      return copyKeys;
    });
  }, []);

  const batchOperationCallback = (type: string, value: unknown) => {
    switch (type) {
      case "batchDelete":
        loadLatestWorkflows();
        setMultipleState(false);
        setSelectedKeys([]);
        return;
      case "selectAll":
        setSelectedKeys(value ? recentFlows.map((flow) => flow.id) : []);
        return;
    }
  };

  const DRAWER_WIDTH = 440;
  return (
    <RecentFilesContext.Provider value={{ setRecentFiles: setRecentFlow }}>
      <Box style={{ width: DRAWER_WIDTH }}>
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
            <HStack mb={2} p={0} justifyContent="space-between">
              {recentFlows.length > 0 ? (
                <MultipleSelectionOperation
                  multipleState={multipleState}
                  changeMultipleState={(state) => {
                    setMultipleState(state);
                    !state && setSelectedKeys([]);
                  }}
                  selectedKeys={selectedKeys}
                  batchOperationCallback={batchOperationCallback}
                />
              ) : (
                <Box />
              )}
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
                key={n.id}
                isSelected={n.id === curFlowID}
                workflow={n}
                loadWorkflowID={loadWorkflowID}
                onDelete={onDelete}
                onDraggingWorkflowID={updateDraggingWorkflowID}
                multipleState={multipleState}
                isChecked={
                  selectedKeys.length > 0 && selectedKeys.includes(n.id)
                }
                onSelect={onSelect}
              />
            ))}
          </Flex>
        </Card>
      </Box>
    </RecentFilesContext.Provider>
  );
}
