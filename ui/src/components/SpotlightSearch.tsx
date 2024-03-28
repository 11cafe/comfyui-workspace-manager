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
  useColorMode,
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import { useState, ChangeEvent, useEffect, useContext, useRef } from "react";
import { SHORTCUT_TRIGGER_EVENT } from "../const";
import {
  EOtherKeys,
  EShortcutKeys,
  RecentlyOpenedFile,
  Workflow,
} from "../types/dbTypes";
import { formatTimestamp } from "../utils";
import { WorkspaceContext } from "../WorkspaceContext";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import useDebounceFn from "../customHooks/useDebounceFn";
import { useStateRef } from "../customHooks/useStateRef";
import { ESortTypes } from "../RecentFilesDrawer/types";

export default function SpotlightSearch() {
  const { colorMode } = useColorMode();
  const { loadWorkflowID, setRoute } = useContext(WorkspaceContext);
  const [allFileList, setAllFileList] = useState<RecentlyOpenedFile[]>([]);
  const [searchKey, setSearchKey, searchKeyRef] = useStateRef("");
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
      setRenderDataSource(recentlyOpenedFileListRef.current);
    }
  };

  const renderSearchResult = () => {
    if (loading) return null;

    if (searchKey && renderDataSource.length === 0) {
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
            color={
              colorMode === "light" ? "#1A202C" : "rgba(255, 255, 255, 0.92)"
            }
            onClick={() => {
              onOpen(result);
            }}
            minH="26px"
            isActive={index === selectIndex}
          >
            {result.name}
            {result.updateTime && (
              <Text
                color={
                  colorMode === "light" ? "GrayText" : "rgb(255, 255, 255, 0.6)"
                }
                ml={2}
                fontSize={"sm"}
              >
                Updated: {formatTimestamp(result.updateTime)}
              </Text>
            )}
          </Button>
        ))}
      </>
    );
  };

  const init = async () => {
    const getData = (list: Workflow[]) =>
      list.map(
        (flow) =>
          ({
            type: "workflow",
            updateTime: flow?.updateTime ?? Date.now(),
            id: flow.id,
            name: flow.name.replace(/\.json$/, ""),
          }) as RecentlyOpenedFile,
      ) ?? [];

    const allFiles =
      (await workflowsTable?.listAll(ESortTypes.RECENTLY_OPENED)) ?? [];

    setAllFileList(getData(allFiles));

    const recentlyOpenedFileList = getData(allFiles.slice(0, 20));

    recentlyOpenedFileListRef.current = recentlyOpenedFileList;
    setRenderDataSource(recentlyOpenedFileList);
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
      const key = event.key.toUpperCase();
      keyRef.current.lastPressedKey = key;
      switch (key) {
        case "ARROWDOWN":
          changeSelectIndex(1);
          break;
        case "ARROWUP":
          changeSelectIndex(-1);
          break;
        case "ENTER":
          onOpen(renderDataSourceRef.current[selectIndexRef.current]);
          break;
      }
    };

    const shortcutTrigger = (event: CustomEvent) => {
      switch (event.detail.shortcutType) {
        case EShortcutKeys.openSpotlightSearch:
          changeSelectIndex(1);
          break;
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", keydownListener);
    window.addEventListener(SHORTCUT_TRIGGER_EVENT, shortcutTrigger);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", keydownListener);
      window.removeEventListener(SHORTCUT_TRIGGER_EVENT, shortcutTrigger);
    };
  }, []);

  return (
    <Modal isOpen={true} onClose={onClose} size="xl">
      <ModalContent
        bg={
          colorMode === "light"
            ? "rgba(255, 255, 255, 0.8)"
            : "rgb(45, 55, 72, 0.8)"
        }
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
