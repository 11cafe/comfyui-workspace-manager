import {
  Stack,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Popover,
  Text,
  PopoverHeader,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Tag, Workflow, tagsTable } from "./WorkspaceDB";
import { IconPlus, IconTag, IconTrash } from "@tabler/icons-react";
import { WorkspaceContext } from "./WorkspaceContext";

type Props = {
  workflow: Workflow;
};
export default function AddTagToWorkflowPopover({ workflow }: Props) {
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  useEffect(() => {
    tagsTable && setAllTags(tagsTable.listAll() ?? []);
  }, []);
  if (tagsTable == null) {
    return null;
  }
  return (
    <Popover>
      {({}) => (
        <>
          <PopoverTrigger>
            <Button variant={"ghost"} size={"sm"} colorScheme="teal">
              <IconTag color={"#718096"} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              Add Tags to <b>{workflow.name}</b>
            </PopoverHeader>
            <PopoverBody>
              <HStack>
                <Input
                  placeholder="New tag name"
                  size="sm"
                  value={newTagName}
                  onChange={(e) => {
                    setNewTagName(e.target.value);
                  }}
                />
                <Button
                  iconSpacing={1}
                  leftIcon={<IconPlus size={16} />}
                  colorScheme="teal"
                  variant="solid"
                  size={"xs"}
                  px={5}
                  isDisabled={newTagName.length === 0}
                  onClick={() => {
                    tagsTable?.upsert(newTagName);
                    setAllTags(tagsTable?.listAll() ?? []);
                    setNewTagName("");
                  }}
                >
                  New Tag
                </Button>
              </HStack>

              {allTags.map((t) => {
                return (
                  <Text mb={4} fontWeight={600}>
                    {t.name}
                  </Text>
                );
              })}
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
