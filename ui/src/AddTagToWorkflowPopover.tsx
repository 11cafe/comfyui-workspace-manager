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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Tag, Workflow, tagsTable, updateFlow } from "./WorkspaceDB";
import { IconPlus, IconTag, IconTrash } from "@tabler/icons-react";
import { WorkspaceContext } from "./WorkspaceContext";
import { MultiValue, Select } from "chakra-react-select";

type Props = {
  workflow: Workflow;
};
export default function AddTagToWorkflowPopover({ workflow }: Props) {
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const initialTags =
    workflow.tags?.map((t) => ({
      value: t,
      label: t,
    })) ?? [];
  const [selectedTags, setSelectedTags] =
    useState<MultiValue<{ value: string; label: string }>>(initialTags);
  useEffect(() => {
    tagsTable && setAllTags(tagsTable.listAll() ?? []);
  }, []);
  if (tagsTable == null) {
    alert("Error: TagsTable is not loaded");
    return null;
  }
  const tagOptions = allTags.map((t) => ({
    value: t.name,
    label: t.name,
  }));
  const maxTagMenuHeight = 37 * 5;

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
              <b>{workflow.name}</b>
            </PopoverHeader>
            <PopoverBody>
              <Select
                isMulti
                name="tags"
                options={tagOptions}
                menuIsOpen={true}
                value={selectedTags}
                defaultValue={initialTags}
                onChange={(selected) => {
                  console.log(selected);
                  setSelectedTags(selected);
                  updateFlow(workflow.id, {
                    tags: selected.map((s) => s.value),
                  });
                }}
                chakraStyles={{
                  dropdownIndicator: (provided, state) => ({
                    ...provided,
                    p: 0,
                    w: "30px",
                  }),
                  menuList: (provided, state) => ({
                    ...provided,
                    shadow: "none",
                    pt: 0,
                  }),
                }}
                placeholder="Select tags"
                closeMenuOnSelect={false}
                maxMenuHeight={maxTagMenuHeight}
              />
              <HStack
                gap={4}
                mt={Math.min(maxTagMenuHeight, allTags.length * 37)}
              >
                <Input
                  placeholder="New tag name"
                  size="sm"
                  mt={6}
                  mb={6}
                  variant={"flushed"}
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
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
}
