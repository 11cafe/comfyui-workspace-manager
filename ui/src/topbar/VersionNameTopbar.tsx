import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { WorkspaceContext } from "../WorkspaceContext";

export default function VersionNameTopbar({}: {}) {
  const { setRoute, curVersion, isDirty, setCurVersion } =
    useContext(WorkspaceContext);
  useEffect(() => {
    if (isDirty && curVersion && curVersion?.name.endsWith("*") === false) {
      setCurVersion?.({ ...curVersion, name: curVersion.name + "*" });
    }
  }, [isDirty]);
  if (!curVersion) {
    return null;
  }
  return (
    <Flex alignItems="center">
      <ButtonGroup size="sm" isAttached variant="outline">
        {/* <IconButton aria-label="Add to friends" icon={<IconPlus size={18} />} /> */}
        <Button
          rightIcon={<IconTriangleInvertedFilled size={10} />}
          onClick={() => setRoute("versionHistory")}
        >
          {curVersion.name}
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
