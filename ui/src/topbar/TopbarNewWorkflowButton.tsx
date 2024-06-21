import { Tooltip, Button } from "@chakra-ui/react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useContext } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { COMFYSPACE_TRACKING_FIELD_NAME, TOPBAR_BUTTON_HEIGHT } from "../const";
import { app } from "../utils/comfyapp";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { nanoid } from "nanoid";

export default function TopbarNewWorkflowButton() {
  const { setCurFlowIDAndName, curFlowID } = useContext(WorkspaceContext);
  const saveNewWorkflow = async () => {
    const workflowName = prompt("Enter workflow name", "Untitled");
    if (!workflowName) return;
    const id = nanoid();
    const graph = app.graph.serialize();
    if (!graph.extra) {
      graph.extra = {};
    }
    if (!graph.extra[COMFYSPACE_TRACKING_FIELD_NAME]) {
      graph.extra[COMFYSPACE_TRACKING_FIELD_NAME] = {};
    }
    graph.extra[COMFYSPACE_TRACKING_FIELD_NAME].id = id;
    const flow = await workflowsTable?.createFlow({
      id,
      json: JSON.stringify(graph),
      name: workflowName,
    });
    flow && setCurFlowIDAndName(flow);
  };
  if (curFlowID) {
    return null;
  }
  return (
    <Tooltip label={"Save workflow"}>
      <Button
        size={"sm"}
        variant={"outline"}
        colorScheme="teal"
        aria-label="new workflow"
        height={TOPBAR_BUTTON_HEIGHT + "px"}
        onClick={() => saveNewWorkflow()}
        px={1}
      >
        <IconDeviceFloppy size={16} color={"white"} />
      </Button>
    </Tooltip>
  );
}
