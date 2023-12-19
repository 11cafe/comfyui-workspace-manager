import {
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Select,
  StackDivider,
  VStack,
  Box,
  Tag,
  IconButton,
  Button,
  Flex,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons-react";
import { useRef, useState, useContext } from "react";
import { getSystemDir } from "../Api";
import { EWorkspacePosition } from "./types";
import { userSettingsTable } from "../WorkspaceDB";
import { WorkspaceContext } from "../WorkspaceContext";

export default function WorkspaceSettingsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const { onPositionChange } = useContext(WorkspaceContext);
  const [isEditDirectory, setIsEditDirectory] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState(
    userSettingsTable?.records.myWorkflowsDir
  );
  const [dirPathList, setDirPathList] = useState<string[]>([]);
  const [subdirectoryList, setSubdirectoryList] = useState<string[]>([]);
  const [noPermission, setNoPermission] = useState(false);
  const manualEntryRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

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
        (currentDirectory && currentDirectory.split("/").filter((p) => !!p)) ||
          []
      );
    }
  };

  const onCloseEditDirectory = () => {
    setIsEditDirectory(false);
    setDirPathList([]);
  };

  const onSaveDirectory = async (manualEntry?: string) => {
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
    const newPath = manualEntry ?? `/${dirPathList.join("/")}`;
    userSettingsTable?.upsert({
      myWorkflowsDir: newPath,
    });
    setCurrentDirectory(userSettingsTable?.getSetting("myWorkflowsDir"));
    manualEntry ? setNoPermission(false) : onCloseEditDirectory();
  };

  const onReset = async () => {
    const { dirPath, dirList } = await getDir("");
    setDirPathList(dirPath.split("/").filter((p: string) => !!p));
    setSubdirectoryList(dirList);
  };

  const onDirJump = async (index: number, nextDir?: string) => {
    let nextDirPath = "";
    if (index === -1 && nextDir) {
      nextDirPath = `/${dirPathList.concat([nextDir]).join("/")}`;
    } else {
      nextDirPath = `/${dirPathList.slice(0, index + 1).join("/")}`;
    }
    const { isError = false, dirList = [] } = await getDir(nextDirPath);

    if (!isError) {
      setSubdirectoryList(dirList);
      setDirPathList(nextDirPath.slice(1)?.split("/"));
    }
  };

  return (
    <>
      <Modal isOpen={true} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
                w="100%"
              >
                <Box>
                  <Text fontWeight={500}>Workspace Position</Text>
                  <Select
                    mt={2}
                    defaultValue={userSettingsTable?.records.topBarLocation}
                    onChange={(selected) => {
                      userSettingsTable?.upsert({
                        topBarLocation: selected.target
                          .value as EWorkspacePosition,
                      });
                      onPositionChange &&
                        onPositionChange(
                          selected.target.value as EWorkspacePosition
                        );
                    }}
                  >
                    {Object.values(EWorkspacePosition).map((position) => (
                      <option value={position} key={position}>
                        {position}
                      </option>
                    ))}
                  </Select>
                </Box>
                <Box mb={4}>
                  <Text mb={2} fontWeight={500}>
                    Workspace Save Directory
                  </Text>
                  {!isEditDirectory ? (
                    <Flex>
                      <Tag>{currentDirectory}</Tag>
                      <IconButton
                        aria-label="Start edit"
                        size={"sm"}
                        ml={2}
                        icon={<IconEdit />}
                        onClick={onOpenEditDirectory}
                      />
                    </Flex>
                  ) : (
                    <VStack spacing={2} alignItems="start">
                      <Stack spacing="2px" direction="row" wrap="wrap">
                        {dirPathList.map((dir, index) => (
                          <>
                            /
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
                          </>
                        ))}
                      </Stack>
                      <Stack spacing={2} direction="row" wrap="wrap">
                        {subdirectoryList.map((sub, index) => (
                          <Button
                            key={`${sub}-${index}`}
                            size="xs"
                            onClick={() => {
                              onDirJump(-1, sub);
                            }}
                          >
                            {sub}
                          </Button>
                        ))}
                      </Stack>
                      <Box w="100%" textAlign="end">
                        <Button
                          colorScheme="teal"
                          size="sm"
                          onClick={() => {
                            onSaveDirectory();
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
              </VStack>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
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
              {navigator.userAgent.indexOf("Mac OS X") === -1 ? (
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
                    onSaveDirectory(manualEntryRef?.current?.value);
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
