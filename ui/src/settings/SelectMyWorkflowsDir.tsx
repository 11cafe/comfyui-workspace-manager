import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  Box,
  Tag,
  IconButton,
  Button,
  Flex,
  Input,
  Stack,
  useToast,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons-react";
import { useRef, useState, useEffect } from "react";
import {
  copyFlowsToNewDirectory,
  fetchMyWorkflowsDir,
  getSystemDir,
} from "../Api";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { useDialog } from "../components/AlertDialogProvider";

export default function SelectMyWorkflowsDir() {
  const [isManualEntry, setIsManualEntry] = useState(false);
  const [isEditDirectory, setIsEditDirectory] = useState(false);
  const [subdirectoryList, setSubdirectoryList] = useState<string[]>([]);
  const [currentDirectory, setCurrentDirectory] = useState("");
  const [dirPathList, setDirPathList] = useState<string[]>([]);
  const [twoWaySync, setTwoWaySync] = useState(false);
  const [noPermission, setNoPermission] = useState(false);
  const [isWindows, setIsWindows] = useState(false);
  const manualEntryRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const { showDialog } = useDialog();
  const slash = isWindows ? "\\" : "/";

  useEffect(() => {
    fetchMyWorkflowsDir().then((res) => {
      setCurrentDirectory(res.path ?? "");
      setIsWindows(res.os === "win32");
    });
    userSettingsTable?.getSetting("twoWaySync").then((res) => {
      setTwoWaySync(res ?? false);
    });
  }, []);

  const getDir = async (root?: string) => {
    const {
      dir_path = "",
      dir_contents = [],
      error = "",
    } = await getSystemDir(root ?? "");
    if (error.includes("Operation not permitted")) {
      setNoPermission(true);
      onCloseEditDirectory();
      return {
        isError: true,
      };
    } else {
      return {
        dirList: dir_contents,
        dirPath: dir_path,
      };
    }
  };

  const onOpenEditDirectory = async () => {
    const { isError = false, dirList = [] } = await getDir(currentDirectory);
    if (!isError) {
      setSubdirectoryList(dirList);
      setIsEditDirectory(true);
      setDirPathList(
        (currentDirectory &&
          currentDirectory.split(slash).filter((p) => !!p)) ||
          [],
      );
    }
  };

  const onCloseEditDirectory = () => {
    setIsEditDirectory(false);
    setIsManualEntry(false);
    setDirPathList([]);
  };

  const saveDirectory = async (
    newPath: string,
    needCopy: boolean = false,
    isManualEntry: boolean = false,
  ) => {
    if (needCopy) {
      const { path } = await fetchMyWorkflowsDir();
      path && (await copyFlowsToNewDirectory(path, newPath));
    }
    await userSettingsTable?.upsert({
      myWorkflowsDir: newPath,
    });
    const getNewPath =
      (await userSettingsTable?.getSetting("myWorkflowsDir")) ?? "";
    setCurrentDirectory(getNewPath);
    isManualEntry && setNoPermission(false);
    onCloseEditDirectory();
    toast({
      title: "Directory saved successfully. Please refresh the page.",
      status: "success",
      duration: 4000,
      position: "top",
      isClosable: true,
    });
  };

  const onSubmit = async (manualEntry?: string) => {
    if (manualEntry) {
      const { error = "" } = await getSystemDir(manualEntry);
      if (error.includes("Not a directory")) {
        toast({
          title:
            "The directory address you entered is invalid, please re-enter it.",
          status: "warning",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
        return;
      }
    }
    const newPath =
      manualEntry ?? `${isWindows ? "" : slash}${dirPathList.join(slash)}`;

    saveDirectory(newPath, false, !!manualEntry);
  };

  const onReset = async () => {
    const { dirPath, dirList } = await getDir("");
    setDirPathList(dirPath.split(slash).filter((p: string) => !!p));
    setSubdirectoryList(dirList);
  };

  const onDirJump = async (index: number, nextDir?: string) => {
    let nextDirPath = "";
    if (index === -1 && nextDir) {
      nextDirPath = `${isWindows ? "" : slash}${dirPathList.concat([nextDir]).join(slash)}`;
    } else {
      nextDirPath = `${isWindows ? "" : slash}${dirPathList.slice(0, index + 1).join(slash)}`;
    }
    const { isError = false, dirList = [] } = await getDir(nextDirPath);

    if (!isError) {
      setSubdirectoryList(dirList);
      setDirPathList(
        isWindows
          ? nextDirPath.split(slash)
          : nextDirPath.slice(1)?.split(slash),
      );
    }
  };
  const enterFolderAddressComp = (
    <Box textAlign="end" mb={4}>
      <Input
        placeholder="Please enter the absolute path directory address"
        ref={manualEntryRef}
        mt={2}
        mb={2}
      />
      <Button
        colorScheme="teal"
        mr={3}
        size="sm"
        onClick={() => {
          manualEntryRef?.current?.value &&
            onSubmit(manualEntryRef?.current?.value);
        }}
      >
        Save
      </Button>
    </Box>
  );

  const onOpenEnter = () => {
    setIsEditDirectory(true);
    setIsManualEntry(true);
  };
  return (
    <>
      <Box mb={4}>
        <Text mb={2} fontWeight={500}>
          My Workflows Save Directory
        </Text>
        {!isEditDirectory ? (
          <Flex>
            <Tag overflowWrap="anywhere">{currentDirectory}</Tag>
            <Tooltip
              label={
                twoWaySync
                  ? "Choose folder"
                  : "Enable two way sync to link local folder"
              }
            >
              <IconButton
                aria-label="Select folder"
                size={"sm"}
                ml={2}
                isDisabled={!twoWaySync}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#EFC54D"
                    style={{ width: "1.4rem", height: "1.4srem" }}
                  >
                    <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                  </svg>
                }
                onClick={onOpenEditDirectory}
              />
            </Tooltip>
            <Tooltip
              label={
                twoWaySync
                  ? "Input absolute path"
                  : "Enable two way sync to link local folder"
              }
            >
              <IconButton
                isDisabled={!twoWaySync}
                aria-label="Enter folder address"
                size={"sm"}
                ml={2}
                icon={<IconEdit size={19} />}
                onClick={onOpenEnter}
                variant={"ghost"}
              />
            </Tooltip>
          </Flex>
        ) : isManualEntry ? (
          enterFolderAddressComp
        ) : (
          <VStack spacing={2} alignItems="start">
            <Stack spacing="2px" direction="row" wrap="wrap">
              {dirPathList.map((dir, index) => (
                <span key={dir}>
                  {index > 0 && slash}
                  <Button
                    colorScheme="teal"
                    variant="link"
                    minW={1}
                    key={`${dir}-${index}`}
                    onClick={() => {
                      onDirJump(index);
                    }}
                  >
                    {dir}
                  </Button>
                </span>
              ))}
            </Stack>
            <SimpleGrid
              columns={2}
              spacing={3}
              maxHeight={500}
              width="100%"
              overflowY="auto"
            >
              {subdirectoryList.map((sub, index) => (
                <Button
                  key={`${sub}-${index}`}
                  size="sm"
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#EFC54D"
                      style={{ width: "1.2rem", height: "1.2rem" }}
                    >
                      <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                    </svg>
                  }
                  justifyContent="start"
                  onClick={() => {
                    onDirJump(-1, sub);
                  }}
                >
                  {sub}
                </Button>
              ))}
            </SimpleGrid>
            <Box w="100%" textAlign="end">
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  onSubmit();
                }}
              >
                Save
              </Button>
              <Button size="sm" onClick={onReset} mr={2} ml={2}>
                Reset
              </Button>
              <Button size="sm" onClick={onCloseEditDirectory}>
                Cancel
              </Button>
            </Box>
          </VStack>
        )}
      </Box>
      <Modal
        isOpen={noPermission}
        onClose={() => setNoPermission(false)}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Kind tips</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              {navigator.userAgent.indexOf("Mac OS X") !== -1 ? (
                <Text fontWeight={500}>
                  There is no permission to access the folder. You need to grant
                  full disk access permission to the terminal that starts the
                  ComfyUI program. For details, refer to the
                  <Button
                    colorScheme="teal"
                    variant="link"
                    as="a"
                    ml={2}
                    target="_block"
                    href="https://stackoverflow.com/questions/58479686/permissionerror-errno-1-operation-not-permitted-after-macos
                -catalina-update"
                  >
                    Document
                  </Button>
                  , or you can manually enter the absolute path of the folder in
                  the input box below to save.
                </Text>
              ) : (
                <Text fontWeight={500}>
                  You do not have permission to access the folder. It is
                  recommended that you manually enter the absolute path address
                  of the required folder.
                </Text>
              )}
              {enterFolderAddressComp}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
