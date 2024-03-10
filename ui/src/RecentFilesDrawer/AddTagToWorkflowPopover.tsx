import {
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Popover,
  PopoverHeader,
  Input,
  HStack,
  MenuItem,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { tagsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { IconPlus, IconTag } from "@tabler/icons-react";
import { MultiValue, Select } from "chakra-react-select";
import { RecentFilesContext } from "../WorkspaceContext";
import { Tag, Workflow } from "../types/dbTypes";

type Props = {
  workflow: Workflow;
};
export default function AddTagToWorkflowPopover({ workflow }: Props) {
  const { onRefreshFilesList } = useContext(RecentFilesContext);
  const [allTags, setAllTags] = useState<Tag[]>([]);
  const [newTagName, setNewTagName] = useState("");
  const initialTags =
    workflow.tags?.map((t) => ({
      value: t,
      label: t,
    })) ?? [];

  const [selectedTags, setSelectedTags] =
    useState<MultiValue<{ value: string; label: string }>>(initialTags);

  const addTag = async () => {
    await tagsTable?.put({
      name: newTagName,
      workflowIDs: [],
      updateTime: Date.now(),
    });
    await tagsTable?.listAll().then((tags) => setAllTags(tags ?? []));
    setNewTagName("");
  };

  const onOpen = async () => {
    const tags = await tagsTable?.listAll();
    setAllTags(tags ?? []);
  };

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
    <Popover isLazy={true} onOpen={onOpen} closeOnBlur={false} placement="auto">
      <PopoverTrigger>
        <MenuItem icon={<IconTag />}>Add Tag</MenuItem>
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
            onChange={async (selected) => {
              setSelectedTags(selected);
              await workflowsTable?.updateMetaInfo(workflow.id, {
                tags: selected.map((s) => s.value),
              });
              await onRefreshFilesList?.();
            }}
            chakraStyles={{
              dropdownIndicator: (provided) => ({
                ...provided,
                p: 0,
                w: "30px",
              }),
              menuList: (provided) => ({
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
            mt={Math.min(maxTagMenuHeight, Math.max(allTags.length, 3) * 37)}
          >
            <Input
              placeholder="New tag name"
              size="sm"
              mt={6}
              mb={6}
              variant={"flushed"}
              value={newTagName}
              onChange={(e) => {
                setNewTagName(e.target.value.trim());
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
              onClick={addTag}
            >
              New Tag
            </Button>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
