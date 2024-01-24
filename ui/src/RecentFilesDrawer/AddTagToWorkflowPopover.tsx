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
  IconButton,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
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
  const [submitError, setSubmitError] = useState(false);
  const initialTags =
    workflow.tags?.map((t) => ({
      value: t,
      label: t,
    })) ?? [];

  const [selectedTags, setSelectedTags] =
    useState<MultiValue<{ value: string; label: string }>>(initialTags);

  const addTag = async () => {
    const tagNameList =
      (await tagsTable?.listAll().then((list) => list.map((f) => f.name))) ??
      [];
    if (tagNameList.includes(newTagName)) {
      console.log(1111);
      setSubmitError(true);
    } else {
      await tagsTable?.create(newTagName);
      await tagsTable?.listAll().then((tags) => setAllTags(tags ?? []));
      setNewTagName("");
      setSubmitError(false);
    }
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
    <Popover isLazy={true} onOpen={onOpen}>
      <PopoverTrigger>
        <IconButton
          aria-label="Delete confirm"
          size={"sm"}
          variant="ghost"
          icon={<IconTag color={"#718096"} />}
        />
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
              await workflowsTable?.updateFlow(workflow.id, {
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
          {submitError ? (
            <Alert status="error" size="small">
              <AlertIcon />
              The name is duplicated, please modify it and submit again.
            </Alert>
          ) : (
            ""
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
