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
} from "@chakra-ui/react";
import { useEffect, useState, useRef, useCallback, useContext } from "react";
import {
  workflowsTable,
  isFolder,
  foldersTable,
} from "../db-tables/WorkspaceDB";
import {
  IconChevronDown,
  IconFolderPlus,
  IconPlus,
  IconFolder,
} from "@tabler/icons-react";
import { RecentFilesContext, WorkspaceContext } from "../WorkspaceContext";
import RecentFilesDrawerMenu from "./RecentFilesDrawerMenu";
import { insertWorkflowToCanvas, sortFileItem } from "../utils";
import MultipleSelectionOperation from "./MultipleSelectionOperation";
import { ESortTypes, sortTypeLocalStorageKey } from "./types";
import { useDebounce } from "../customHooks/useDebounce";
import SearchInput from "../components/SearchInput";
import { openWorkflowsFolder } from "../Api";
import { Folder, Workflow } from "../types/dbTypes";
import MyTagsRow from "./MyTagsRow";
import ImportFlowsFileInput from "./ImportFlowsFileInput";
import ItemsList from "./ItemsList";
import { DRAWER_Z_INDEX } from "../const";
import { app } from "../utils/comfyapp";

type Props = {
  onClose: () => void;
  onClickNewFlow: () => void;
};

export default function RecentFilesDrawer({ onClose, onClickNewFlow }: Props) {
  const [currentRenderingData, setCurrentRenderingData] = useState<
    Array<Folder | Workflow>
  >([]);
  const allFlowsRef = useRef<Array<Workflow>>([]);
  const { loadWorkflowID, curFlowID } = useContext(WorkspaceContext);
  const [selectedTag, setSelectedTag] = useState<string>();
  const [multipleState, setMultipleState] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [refreshFolderStamp, setRefreshFolderStamp] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 400);
  const draggingWorkflowID = useRef<string | null>(null);
  const [draggingFile, setDraggingFile] = useState<Workflow | Folder | null>(
    null,
  );
  const sortTypeRef = useRef<ESortTypes>(
    (window.localStorage.getItem(sortTypeLocalStorageKey) as ESortTypes) ??
      ESortTypes.RECENTLY_MODIFIED,
  );
  const isFilter = !!selectedTag || !!debounceSearchValue.length;

  const loadLatestWorkflows = async () => {
    const curFolderContent = (await workflowsTable?.listFolderContent()) ?? [];
    setCurrentRenderingData(
      sortFileItem(curFolderContent, sortTypeRef.current),
    );
    setRefreshFolderStamp(Date.now());
    allFlowsRef.current = (await workflowsTable?.listAll()) ?? [];
  };

  const filterFlows = () => {
    const filterResult = allFlowsRef.current.filter((flow) => {
      let tagFlag = true;
      let keywordFlag = true;
      if (selectedTag) {
        tagFlag = !!flow.tags?.includes(selectedTag);
      }
      if (debounceSearchValue) {
        keywordFlag = !!flow.name
          .toLocaleLowerCase()
          .includes(debounceSearchValue.toLocaleLowerCase());
      }

      return tagFlag && keywordFlag;
    });
    setCurrentRenderingData(sortFileItem(filterResult, sortTypeRef.current));
  };

  const onSort = (type: ESortTypes) => {
    setCurrentRenderingData(sortFileItem(currentRenderingData, type));
    sortTypeRef.current = type;
    window.localStorage.setItem(sortTypeLocalStorageKey, type);
    !isFilter && setRefreshFolderStamp(Date.now());
  };

  useEffect(() => {
    if (isFilter) {
      filterFlows();
    } else {
      loadLatestWorkflows();
    }
  }, [debounceSearchValue, selectedTag]);

  const onDelete = useCallback(
    async (id: string) => {
      await workflowsTable?.deleteFlow(id);
      if (workflowsTable?.curWorkflow?.id === id) {
        await loadWorkflowID?.(null);
      }
      await loadLatestWorkflows();
    },
    [selectedTag, debounceSearchValue],
  );

  useEffect(() => {
    const handleDrop = async (e: { canvasX: number; canvasY: number }) => {
      if (draggingWorkflowID.current) {
        const flow = await workflowsTable?.get(draggingWorkflowID.current);
        flow &&
          flow.json &&
          insertWorkflowToCanvas(flow.json, [e.canvasX, e.canvasY]);
      }
    };

    app.canvasEl.addEventListener("drop", handleDrop);
    app.canvasEl.addEventListener("click", onClose);
    // Cleanup function to remove event listeners
    return () => {
      app.canvasEl.removeEventListener("drop", handleDrop);
      app.canvasEl.removeEventListener("click", onClose);
    };
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
        curFlowID &&
          workflowsTable?.get(curFlowID).then((res) => {
            if (!res) {
              loadWorkflowID?.(null);
            }
          });
        loadLatestWorkflows();
        setMultipleState(false);
        setSelectedKeys([]);
        return;
      case "selectAll":
        setSelectedKeys(
          value ? allFlowsRef.current.map((flow) => flow.id) : [],
        );
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

  const DRAWER_WIDTH = 450;
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
          pl={2}
          pr={2}
          pt={4}
          gap={4}
          position={"absolute"}
          top={0}
          left={0}
          shadow={"xl"}
          zIndex={DRAWER_Z_INDEX}
          // boxShadow={"rgba(200, 200, 200, 0.4) 1px 4px 8px 1px"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <HStack gap={4}>
              <HStack gap={2}>
                <Text fontSize={19} fontWeight={600}>
                  🦄Workspace
                </Text>
                {/* <Tooltip label="Login to share and sync your workflows to cloud">
                  <Link onClick={openCognitoPopup}>Login</Link>
                </Tooltip> */}
              </HStack>
              <ImportFlowsFileInput />
              <Tooltip label="Open workspace save directory">
                <IconButton
                  aria-label="Open workspace save directory"
                  size={"sm"}
                  icon={<IconFolder />}
                  variant={"outline"}
                  colorScheme="teal"
                  onClick={() => openWorkflowsFolder()}
                />
              </Tooltip>
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
            <MyTagsRow
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />
            <HStack mb={2} mt={2} p={0} justifyContent="space-between">
              <HStack>
                <MultipleSelectionOperation
                  multipleState={multipleState}
                  changeMultipleState={(state) => {
                    setMultipleState(state);
                    !state && setSelectedKeys([]);
                  }}
                  selectedKeys={selectedKeys}
                  isSelectedAll={
                    selectedKeys.length === allFlowsRef.current.length
                  }
                  batchOperationCallback={batchOperationCallback}
                />
                {!multipleState && (
                  <Tooltip hasArrow label="New folder" placement="bottom-start">
                    <IconButton
                      size={"sm"}
                      variant={"outline"}
                      icon={<IconFolderPlus size={21} />}
                      onClick={async () => {
                        await foldersTable?.create({
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
                    {[
                      ESortTypes.RECENTLY_MODIFIED,
                      ESortTypes.OLDEST_MODIFIED,
                      ESortTypes.AZ,
                      ESortTypes.ZA,
                    ].map((sortType, index) => (
                      <MenuItemOption key={index} value={sortType}>
                        {sortType}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </HStack>
            <SearchInput
              searchValue={searchValue}
              onUpdateSearchValue={onUpdateSearchValue}
            />
            <Flex
              overflowY={"auto"}
              overflowX={"hidden"}
              direction="column"
              style={{
                overflowY: "scroll",
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // For Internet Explorer and Edge
              }}
            >
              <ItemsList items={currentRenderingData} />
            </Flex>
          </Flex>
        </Card>
      </Box>
    </RecentFilesContext.Provider>
  );
}
