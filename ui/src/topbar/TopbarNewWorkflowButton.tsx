import { Tooltip, Button } from "@chakra-ui/react";
import { IconDeviceFloppy, IconPlus } from "@tabler/icons-react";
import { useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { TOPBAR_BUTTON_HEIGHT } from "../const";
import { app } from "../utils/comfyapp";
import { workflowsTable } from "../db-tables/WorkspaceDB";

export default function TopbarNewWorkflowButton() {
  const { loadNewWorkflow, setCurFlowIDAndName, curFlowID } =
    useContext(WorkspaceContext);
  const saveNewWorkflow = async () => {
    const graph = JSON.stringify(app.graph.serialize());
    const workflowName = prompt("Enter workflow name", "Untitled");
    if (!workflowName) return;
    const flow = await workflowsTable?.createFlow({
      json: graph,
      name: workflowName,
    });
    flow && setCurFlowIDAndName(flow);
  };
  return (
    <Tooltip label={curFlowID ? "New workflow" : "Save workflow"}>
      <Button
        size={"sm"}
        variant={"outline"}
        colorScheme="teal"
        aria-label="new workflow"
        height={TOPBAR_BUTTON_HEIGHT + "px"}
        onClick={() => (curFlowID ? loadNewWorkflow() : saveNewWorkflow())}
        px={1}
      >
        {curFlowID ? (
          <IconPlus size={16} color={"white"} />
        ) : (
          <IconDeviceFloppy size={16} color={"white"} />
        )}
      </Button>
    </Tooltip>
  );
}
