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
import { useState, ChangeEvent, useEffect, useContext, useRef } from "react";
import { RECENTLY_OPENED_FILE_LIST } from "../const";
import { indexdb } from "../db-tables/indexdb";
import {
  EOtherKeys,
  EShortcutKeys,
  RecentlyOpenedFile,
} from "../types/dbTypes";
import { formatTimestamp } from "../utils";
import { WorkspaceContext } from "../WorkspaceContext";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { scanLocalFiles } from "../apis/TwowaySyncApi";
import useDebounceFn from "../customHooks/useDebounceFn";
import { useStateRef } from "../customHooks/useStateRef";
import { getRecentlyOpenedFileList } from "../utils/recentOpenedFilesUtils";

export default function SpotlightSearch() {
  const { loadWorkflowID, setRoute, triggerShortcut } =
    useContext(WorkspaceContext);
  const [allFileList, setAllFileList] = useState<RecentlyOpenedFile[]>([]);
  const [searchKey, setSearchKey, searchKeyRef] = useStateRef("");
  const searchResultLengthRef = useRef(0);
  const recentlyOpenedFileListRef = useRef<RecentlyOpenedFile[]>([]);
  const [renderDataSource, setRenderDataSource, renderDataSourceRef] =
    useStateRef<RecentlyOpenedFile[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectIndex, setSelectIndex, selectIndexRef] = useStateRef(0);
  const keyRef = useRef({
    lastPressedKey: "",
    spotlightSearchShortcutFirstKey: "",
    spotlightSearchShortcutLastKey: "",
  });

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
    searchResultLengthRef.current = searchResult.length;
    setRenderDataSource(searchResult);
    setSelectIndex(0);
    setLoading(false);
  };

  const [debounceSearch, cancelDebounceSearch] = useDebounceFn(
    handlerSearch,
    300,
  );

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
    if (event.target.value) {
      debounceSearch();
      !loading && setLoading(true);
    } else {
      setLoading(false);
      cancelDebounceSearch();
      searchResultLengthRef.current = 0;
      setRenderDataSource(recentlyOpenedFileListRef.current);
    }
  };

  const renderSearchResult = () => {
    if (loading) return null;

    if (searchKey && searchResultLengthRef.current === 0) {
      return <Text ml={2}>No matching results</Text>;
    }

    return (
      <>
        {renderDataSource.map((result, index) => (
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
            isActive={index === selectIndex}
          >
            {result.name}
            {result.updateTime && (
              <Text color={"GrayText"} ml={2} fontSize={"sm"}>
                Updated: {formatTimestamp(result.updateTime)}
              </Text>
            )}
          </Button>
        ))}
      </>
    );
  };

  /**
   * Update the cache based on the latest full data obtained,
   * Avoid file name modification or file deletion in the cache.
   */
  const updateRecentlyOpenedFileList = async (
    allFiles: RecentlyOpenedFile[],
    recentlyOpenedFileList: RecentlyOpenedFile[],
  ) => {
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

    recentlyOpenedFileListRef.current = newRecentlyOpenedFileList;
    setRenderDataSource(newRecentlyOpenedFileList);

    indexdb.cache.put({
      id: RECENTLY_OPENED_FILE_LIST,
      value: JSON.stringify(newRecentlyOpenedFileList),
    });
  };

  const init = async () => {
    const recentlyOpenedFileList = await getRecentlyOpenedFileList();
    recentlyOpenedFileListRef.current = recentlyOpenedFileList;
    setRenderDataSource(recentlyOpenedFileList);

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
    updateRecentlyOpenedFileList(allFiles, recentlyOpenedFileList);
  };

  const changeSelectIndex = (num: number) => {
    setSelectIndex((preIndex) => {
      const nextIndex = preIndex + num;
      if (nextIndex < 0) {
        return renderDataSourceRef.current.length - 1;
      } else if (nextIndex > renderDataSourceRef.current.length - 1) {
        return 0;
      } else {
        return nextIndex;
      }
    });
  };

  useEffect(() => {
    init();

    userSettingsTable?.getSetting("shortcuts").then((res) => {
      const openSpotlightSearch =
        res.openSpotlightSearch ??
        userSettingsTable?.defaultSettings.shortcuts.openSpotlightSearch;

      const keys = openSpotlightSearch.split("+");
      keyRef.current.spotlightSearchShortcutFirstKey =
        keys[0] === "Command" ? "Meta" : keys[0];
      keyRef.current.spotlightSearchShortcutLastKey = keys[keys.length - 1];
    });

    const handleKeyUp = (event: KeyboardEvent) => {
      /**
       * Determine whether to open the selected file when the button is lifted. Conditions are met:
       * 1. The raised button is the first button among the shortcut keys that trigger focus search;
       * 2. The last pressed key is the last key to trigger the focus search shortcut key;
       * 3. The selected file exists;
       */
      if (
        event.key === keyRef.current.spotlightSearchShortcutFirstKey &&
        keyRef.current.lastPressedKey ===
          keyRef.current.spotlightSearchShortcutLastKey &&
        selectIndexRef.current > 0 &&
        renderDataSourceRef.current[selectIndexRef.current]
      ) {
        onOpen(renderDataSourceRef.current[selectIndexRef.current]);
      }
    };

    const keydownListener = (event: KeyboardEvent) => {
      keyRef.current.lastPressedKey = event.key.toUpperCase();
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", keydownListener);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", keydownListener);
    };
  }, []);

  useEffect(() => {
    if (triggerShortcut.shortcut) {
      switch (triggerShortcut.shortcut) {
        case EShortcutKeys.openSpotlightSearch:
          changeSelectIndex(1);
          break;
        case EOtherKeys.ArrowDown:
          changeSelectIndex(1);
          break;
        case EOtherKeys.ArrowUp:
          changeSelectIndex(-1);
          break;
        case EOtherKeys.Enter:
          onOpen(renderDataSourceRef.current[selectIndexRef.current]);
          break;
      }
    }
  }, [triggerShortcut]);

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
