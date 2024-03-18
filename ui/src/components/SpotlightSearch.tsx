import {
  Modal,
  ModalContent,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Button,
  HStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import { useState, ChangeEvent, useEffect, useContext } from "react";
import { RECENTLY_OPENED_FILE_LIST } from "../const";
import { indexdb } from "../db-tables/indexdb";
import { RecentlyOpenedFile } from "../types/dbTypes";
import { formatTimestamp, getRecentlyOpenedFileList } from "../utils";
import { WorkspaceContext } from "../WorkspaceContext";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { scanLocalFiles } from "../apis/TwowaySyncApi";
import useDebounceFn from "../customHooks/useDebounceFn";
import { useStateRef } from "../customHooks/useStateRef";

export default function SpotlightSearch() {
  const { loadWorkflowID, setRoute } = useContext(WorkspaceContext);
  const [recentlyOpenedFileList, setRecentlyOpenedFileList] = useState<
    RecentlyOpenedFile[]
  >([]);
  const [allFileList, setAllFileList] = useState<RecentlyOpenedFile[]>([]);
  const [searchKey, setSearchKey, searchKeyRef] = useStateRef("");
  const [searchResult, setSearchResult] = useState<RecentlyOpenedFile[]>([]);
  const [loading, setLoading] = useState(false);

  const onClose = () => {
    setRoute("root");
  };

  const onOpen = (fileInfo: RecentlyOpenedFile) => {
    loadWorkflowID(fileInfo.id);
    onClose();
  };

  const handlerSearch = () => {
    const searchResult = allFileList.filter(
      (file) =>
        !!file.name
          .toLocaleLowerCase()
          .includes(searchKeyRef.current.toLocaleLowerCase()),
    );
    setSearchResult(searchResult);
    setLoading(false);
  };

  const [debounceAutoSaveWorkflow] = useDebounceFn(handlerSearch, 300);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
    if (event.target.value) {
      debounceAutoSaveWorkflow();
      !loading && setLoading(true);
    } else {
      setSearchResult([]);
    }
  };

  const renderSearchResult = () => {
    if (loading) return null;

    if (searchKey && searchResult.length === 0) {
      return <Text ml={2}>No matching results</Text>;
    }

    return (
      <>
        {(searchResult.length > 0 ? searchResult : recentlyOpenedFileList).map(
          (result) => (
            <Button
              colorScheme="teal"
              variant="ghost"
              key={result.id}
              size="sm"
              justifyContent="start"
              px={2}
              color="#1A202C"
              onClick={() => {
                onOpen(result);
              }}
              minH="26px"
            >
              {result.name}
              {result.updateTime && (
                <Text color={"GrayText"} ml={2} fontSize={"sm"}>
                  Updated: {formatTimestamp(result.updateTime)}
                </Text>
              )}
            </Button>
          ),
        )}
      </>
    );
  };

  /**
   * Update the cache based on the latest full data obtained,
   * Avoid file name modification or file deletion in the cache.
   */
  const updateRecentlyOpenedFileList = async (
    allFiles: RecentlyOpenedFile[],
  ) => {
    console.log("allFiles", allFiles);
    const recentlyOpenedFileList = await getRecentlyOpenedFileList();

    const recentlyOpenedFileMap: Map<string, RecentlyOpenedFile> = new Map();
    const allFilesMap: Map<string, RecentlyOpenedFile> = new Map();

    recentlyOpenedFileList.forEach((file) => {
      recentlyOpenedFileMap.set(file.id, file);
    });

    allFiles.forEach((file) => {
      allFilesMap.set(file.id, file);
    });

    recentlyOpenedFileMap.forEach((value, key) => {
      if (allFilesMap.has(key)) {
        recentlyOpenedFileMap.set(key, allFilesMap.get(key)!);
      } else {
        recentlyOpenedFileMap.delete(key);
      }
    });

    const newRecentlyOpenedFileList = Array.from(
      recentlyOpenedFileMap.values(),
    );

    setRecentlyOpenedFileList(newRecentlyOpenedFileList);

    indexdb.cache.put({
      id: RECENTLY_OPENED_FILE_LIST,
      value: JSON.stringify(newRecentlyOpenedFileList),
    });
  };

  const init = async () => {
    const twoWaySyncEnabled = await userSettingsTable?.getSetting("twoWaySync");
    let allFiles;
    if (twoWaySyncEnabled) {
      const fileList = await scanLocalFiles("", true);
      const allFilesPromises = fileList
        .filter((f) => f?.type === "workflow")
        .map(async (file) => {
          const fileInfoInDB = await workflowsTable?.get(file.id);

          return {
            type: "workflow",
            updateTime: fileInfoInDB?.updateTime ?? Date.now(),
            id: file.id,
            name: file.name.replace(/\.json$/, ""),
          } as RecentlyOpenedFile;
        });

      allFiles = await Promise.all(allFilesPromises);
    } else {
      allFiles =
        (await workflowsTable?.listAll())?.map(
          (flow) =>
            ({
              type: "workflow",
              updateTime: flow?.updateTime ?? Date.now(),
              id: flow.id,
              name: flow.name.replace(/\.json$/, ""),
            }) as RecentlyOpenedFile,
        ) ?? [];
    }
    setAllFileList(allFiles);
    updateRecentlyOpenedFileList(allFiles);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Modal isOpen={true} onClose={onClose} size="xl">
      <ModalContent
        bg="rgba(255, 255, 255, 0.8)"
        backdropFilter="auto"
        backdropBlur="8px"
      >
        <HStack
          spacing={1}
          px={4}
          py={2}
          borderBottom="1px"
          borderColor="gray.400"
        >
          <IconSearch size={20} />
          <InputGroup>
            <Input
              value={searchKey}
              onChange={onSearchChange}
              autoFocus
              variant="unstyled"
              fontSize={18}
            />
            {loading && (
              <InputRightElement h="27px">
                <Spinner size="sm" />
              </InputRightElement>
            )}
          </InputGroup>
        </HStack>
        <VStack
          spacing={1}
          align="stretch"
          px={2}
          py={2}
          maxHeight="calc(100vh - 200px)"
          overflowY="auto"
        >
          {renderSearchResult()}
        </VStack>
      </ModalContent>
    </Modal>
  );
}
