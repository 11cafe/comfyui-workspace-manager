import { Button, ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import { IconPlus, IconTriangleInvertedFilled } from "@tabler/icons-react";
import { useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";

export default function VersionNameTopbar(
  {
    //   onClick,
  }: {
    //   onClick: () => void;
  },
) {
  const { route, setRoute } = useContext(WorkspaceContext);
  return (
    <Flex alignItems="center">
      <ButtonGroup size="sm" isAttached variant="outline">
        <IconButton aria-label="Add to friends" icon={<IconPlus size={18} />} />
        <Button
          rightIcon={<IconTriangleInvertedFilled size={10} />}
          onClick={() => setRoute("versionHistory")}
        >
          Version20110304
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
