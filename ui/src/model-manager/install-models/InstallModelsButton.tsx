import { useContext } from "react";
import { Button } from "@chakra-ui/react";
import { WorkspaceContext } from "../../WorkspaceContext";

export default function InstallModelsButton() {
  const { setRoute } = useContext(WorkspaceContext);
  return (
    <>
      <Button
        size={"sm"}
        colorScheme="teal"
        onClick={() => setRoute("installModels")}
      >
        Install Models
      </Button>
    </>
  );
}
