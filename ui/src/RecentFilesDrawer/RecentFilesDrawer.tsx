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
  Tooltip,
  Input,
  Link,
} from "@chakra-ui/react";
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import {
  Workflow,
  deleteFlow,
  isFolder,
  listWorkflows,
  listFolderContent,
  tagsTable,
  workspace,
  foldersTable,
  Folder,
} from "../WorkspaceDB";
import {
  IconChevronDown,
  IconChevronUp,
  IconFolderPlus,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import RecentFilesDrawerMenu from "./RecentFilesDrawerMenu";
import { sortFlows, sortFileItem } from "../utils";
import WorkflowListItem from "./WorkflowListItem";
import ImportJsonFlows from "./ImportJsonFlows";
import MultipleSelectionOperation from "./MultipleSelectionOperation";
import { ESortTypes, sortTypeLocalStorageKey } from "./types";
// @ts-ignore
import { app } from "/scripts/app.js";
import { insertWorkflowToCanvas3 } from "./InsertWorkflowToCanvas";
import FilesListFolderItem from "./FilesListFolderItem";
import { useDebounce } from "../customHooks/useDebaunce";
import SeacrhInput from "../components/SearchInput";
import { openCognitoPopup } from "../auth/authUtils";

const MAX_TAGS_TO_SHOW = 6;
type Props = {
  onclose: () => void;
  onClickNewFlow: () => void;
};

export default function RecentFilesDrawer({ onclose, onClickNewFlow }: Props) {
  const [files, setFiles] = useState<Array<Folder | Workflow>>([]);
  const recentFlows = files.filter((n) => !isFolder(n)) as Workflow[];
  const { curFlowID } = useContext(WorkspaceContext);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [showAllTags, setShowAllTags] = useState(false);
  const [multipleState, setMultipleState] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [refreshFolderStamp, setRefreshFolderStamp] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const debaunceSearchValue = useDebounce(searchValue, 400);
  const draggingWorkflowID = useRef<string | null>(null);
  const [draggingFile, setDraggingFile] = useState<Workflow | Folder | null>(
    null
  );
  const sortTypeRef = useRef<ESortTypes>(
    (window.localStorage.getItem(sortTypeLocalStorageKey) as ESortTypes) ??
      ESortTypes.RECENTLY_MODIFIED
  );

  const onClickTag = (name: string) => {
    setSelectedTag(name);
    setFiles(listWorkflows().filter((n) => n.tags?.includes(name)));
  };

  const loadLatestWorkflows = () => {
    const all = listFolderContent();
    setFiles(sortFileItem(all, sortTypeRef.current));
    setRefreshFolderStamp(Date.now());
  };

  const onSort = (type: ESortTypes) => {
    setFiles(sortFileItem(files, type));
    sortTypeRef.current = type;
    window.localStorage.setItem(sortTypeLocalStorageKey, type);
  };

  const onDelete = useCallback((id: string) => {
    deleteFlow(id);
    loadLatestWorkflows();
  }, []);

  const handleDrop = (e: any) => {
    workspace &&
      draggingWorkflowID.current &&
      insertWorkflowToCanvas3(workspace[draggingWorkflowID.current].json, [
        e.canvasX,
        e.canvasY,
      ]);
  };

  const handleClick = (e: any) => {
    onclose();
  };

  useEffect(() => {
    app.canvasEl.addEventListener("drop", handleDrop);
    app.canvasEl.addEventListener("click", handleClick);
    // Cleanup function to remove event listeners
    return () => {
      app.canvasEl.removeEventListener("drop", handleDrop);
      app.canvasEl.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    loadLatestWorkflows();
  }, [curFlowID]);

  useEffect(() => {
    if (debaunceSearchValue === "") {
      loadLatestWorkflows();
    } else {
      setFiles(
        listWorkflows().filter((flow) =>
          flow.name
            .toLocaleLowerCase()
            .includes(debaunceSearchValue.toLocaleLowerCase())
        )
      );
    }
  }, [debaunceSearchValue]);

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
  const onDraggingFile = (file: Workflow | Folder) => {
    setDraggingFile(file);
    if (!isFolder(file)) {
      draggingWorkflowID.current = file.id;
    }
  };

  const onUpdateSearchValue = (newValue: string) => {
    setSearchValue(newValue);
  };

  const DRAWER_WIDTH = 440;
  return (
    <RecentFilesContext.Provider
      value={{
        onRefreshFilesList: loadLatestWorkflows,
        draggingFile: draggingFile ?? undefined,
        setDraggingFile: onDraggingFile,
        isMultiSelecting: multipleState,
        onMultiSelectFlow: onSelect,
        multiSelectedFlowsID: selectedKeys,
        onDeleteFlow: onDelete,
        refreshFolderStamp: refreshFolderStamp,
        setRefreshFolderStamp: setRefreshFolderStamp,
      }}
    >
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
          zIndex={1000}
          // boxShadow={"rgba(200, 200, 200, 0.4) 1px 4px 8px 1px"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <HStack gap={4}>
              <HStack gap={2}>
                <Text fontSize={19} fontWeight={600}>
                  ☕️Workspace
                </Text>
                <Tooltip label="Login to share and sync your workflows to cloud">
                  <Link onClick={openCognitoPopup}>Login</Link>
                </Tooltip>
              </HStack>
              <ImportJsonFlows />
              <Tooltip label="New workflow">
                <IconButton
                  aria-label="New workflow"
                  size={"sm"}
                  icon={<IconPlus />}
                  variant={"outline"}
                  colorScheme="teal"
                  onClick={onClickNewFlow}
                />
              </Tooltip>
            </HStack>
            <HStack alignItems={"center"}>
              <RecentFilesDrawerMenu />
              {/* <Button onClick={onclose}>CLOSE</Button> */}
            </HStack>
          </Flex>
          <Flex direction="column" h="calc(100% - 64px)">
            <HStack spacing={2} wrap={"wrap"} mb={0}>
              {selectedTag != null && (
                <IconButton
                  aria-label="Close"
                  size={"sm"}
                  icon={<IconX />}
                  onClick={() => {
                    setSelectedTag(undefined);
                    loadLatestWorkflows();
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
                    borderRadius={15}
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
            <HStack mb={2} mt={2} p={0} justifyContent="space-between">
              <HStack>
                {files.length > 0 ? (
                  <MultipleSelectionOperation
                    multipleState={multipleState}
                    changeMultipleState={(state) => {
                      setMultipleState(state);
                      !state && setSelectedKeys([]);
                    }}
                    selectedKeys={selectedKeys}
                    isSelectedAll={selectedKeys.length === recentFlows.length}
                    batchOperationCallback={batchOperationCallback}
                  />
                ) : (
                  <Box />
                )}
                {!multipleState && (
                  <Tooltip hasArrow label="New folder" placement="bottom-start">
                    <IconButton
                      size={"sm"}
                      variant={"outline"}
                      icon={<IconFolderPlus size={21} />}
                      onClick={() => {
                        foldersTable?.create({
                          name: "New Folder",
                        });
                        loadLatestWorkflows();
                      }}
                      aria-label="new folder button"
                    />
                  </Tooltip>
                )}
              </HStack>
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
            <SeacrhInput
              searchValue={searchValue}
              onUpdateSearchValue={onUpdateSearchValue}
            />
            <Flex overflowY={"auto"} overflowX={"hidden"} direction="column">
              {files.map((n) => {
                if (isFolder(n)) {
                  return <FilesListFolderItem folder={n} key={n.id} />;
                }
                return <WorkflowListItem key={n.id} workflow={n} />;
              })}
            </Flex>
          </Flex>
        </Card>
      </Box>
    </RecentFilesContext.Provider>
  );
}
