import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { getNodeDefs } from "../share/shareUtils";
import { EWorkflowPrivacy, Workflow } from "../types/dbTypes";
import { ShareWorkflowData } from "../types/types";
import { app } from "../utils/comfyapp";

export async function copySharelink(
  shareKey: string,
  curWorkflow: Workflow,
): Promise<{
  link?: string | null;
  error?: string | null;
} | null> {
  if (curWorkflow.cloudID) {
    const link =
      userSettingsTable?.settings?.cloudHost +
      "/workflow/" +
      curWorkflow.cloudID;
    return {
      link,
    };
  }
  const prompt = await app.graphToPrompt();
  const graph = app.graph.serialize();
  if (!graph.extra) {
    graph.extra = {};
  }
  graph.extra.apiPrompt = prompt.output ?? null;
  const input: ShareWorkflowData = {
    workflow: {
      name: curWorkflow?.name ?? "Untitled",
      cloudID: curWorkflow?.cloudID,
    },
    version: {
      name: "v1",
      json: JSON.stringify(graph),
    },
    nodeDefs: getNodeDefs(),
    privacy: EWorkflowPrivacy.UNLISTED,
  };
  return await fetch(
    userSettingsTable?.settings?.cloudHost + "/api/createCloudflow",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${shareKey}`,
      },
      body: JSON.stringify(input),
    },
  )
    .then((resp) => resp.json())
    .then((data) => {
      if (data?.data) {
        const cloudID = data.data.workflowID;
        workflowsTable?.updateMetaInfo(curWorkflow?.id!, {
          cloudID,
        });

        const link =
          userSettingsTable?.settings?.cloudHost + "/workflow/" + cloudID;
        return {
          link,
        };
      } else {
        return {
          error: "Failed to create version. " + (data?.error ?? ""),
        };
      }
    })
    .catch((e) => {
      return {
        error: "Failed to create version. " + (e?.error ?? ""),
      };
    });
}
