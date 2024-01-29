import { Button, HStack, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Tag } from "../types/dbTypes";
import { tagsTable } from "../db-tables/WorkspaceDB";
import { IconChevronDown, IconChevronUp, IconX } from "@tabler/icons-react";
const MAX_TAGS_TO_SHOW = 6;

interface Props {
  selectedTag?: string;
  setSelectedTag: (tag?: string) => void;
}
export default function MyTagsRow({ setSelectedTag, selectedTag }: Props) {
  const [showAllTags, setShowAllTags] = useState(false);

  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    tagsTable?.listAll().then((tags) => {
      setTags(tags);
    });
  }, []);
  return (
    <HStack spacing={2} wrap={"wrap"} mb={0}>
      {selectedTag != null && (
        <IconButton
          aria-label="Close"
          size={"sm"}
          icon={<IconX />}
          onClick={() => {
            setSelectedTag(undefined);
          }}
        />
      )}
      {tags.slice(0, showAllTags ? undefined : MAX_TAGS_TO_SHOW).map((tag) => (
        <Button
          key={tag.name}
          variant="solid"
          width={"auto"}
          flexShrink={0}
          size={"sm"}
          borderRadius={15}
          py={4}
          onClick={() => {
            setSelectedTag(tag.name);
          }}
          isActive={selectedTag === tag.name}
        >
          {tag.name}
        </Button>
      ))}
      {(tags.length ?? 0) > MAX_TAGS_TO_SHOW && (
        <IconButton
          aria-label="Show-all-tags"
          size={"sm"}
          icon={showAllTags ? <IconChevronUp /> : <IconChevronDown />}
          onClick={() => setShowAllTags(!showAllTags)}
        />
      )}
    </HStack>
  );
}
