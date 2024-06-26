import { IconLink, IconLock, IconWorld } from "@tabler/icons-react";
import { CustomSelectorOption } from "../components/CustomSelector";
import { Workflow, WorkflowPrivacy } from "../types/dbTypes";
import { app } from "../utils/comfyapp";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export function generateRandomKey(length: number) {
  // Generate a random array of bytes
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);

  // Convert the bytes to a hex string
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    "",
  );
}

export const privacyOptions: CustomSelectorOption<WorkflowPrivacy>[] = [
  { label: "Private", value: "PRIVATE", icon: <IconLock /> },
  {
    label: "Unlisted, anyone with the link can view",
    value: "UNLISTED",
    icon: <IconLink />,
  },
  { label: "Public", value: "PUBLIC", icon: <IconWorld /> },
];

export const getNodeDefs = () => {
  const allNodes = app.graph._nodes;

  const nodeDefs = {};
  for (let n of allNodes) {
    // @ts-ignore
    if (n.type in LiteGraph.registered_node_types) {
      const nodeDef = structuredClone(
        // @ts-ignore
        LiteGraph.registered_node_types[n.type].nodeData,
      );
      if (nodeDef == null) {
        continue;
      }
      for (let key in nodeDef.input) {
        // key = required | optional
        const fields = nodeDef.input[key];
        for (let fieldKey in fields) {
          const keyConfig = fields[fieldKey];
          if (Array.isArray(keyConfig[0])) {
            // for list input type, do not upload the values to protect user's privacy
            keyConfig[0] = ["value_1", "value_2"];
          }
        }
      }
      // TODO: js only nodes has no nodeData field, need to handle this....
      // @ts-ignore
      nodeDefs[n.type] = nodeDef;
    }
  }
  return nodeDefs;
};

export async function fetchCloudWorkflowPrivacy(
  workflow: Workflow,
): Promise<WorkflowPrivacy> {
  const cloudOrigin = userSettingsTable?.settings?.cloudHost;
  return fetch(cloudOrigin + `/api/getWorkflow?id=${workflow.cloudID}`)
    .then((res) => res.json())
    .then((json) => {
      const privacy = json.data?.privacy;
      return privacy ?? "PRIVATE";
    });
}

export function PrivacyLabel({
  privacy,
  showEmoji = false,
}: {
  privacy: WorkflowPrivacy;
  showEmoji?: boolean;
  verboseText?: boolean;
}) {
  let text;
  if (privacy === "PRIVATE") {
    text = "Private";
    if (showEmoji) {
      text = "🔒 Private";
    }
  } else if (privacy === "UNLISTED") {
    text = "Unlisted";
    if (showEmoji) {
      text = "🔗 Unlisted";
    }
  } else if (privacy === "PUBLIC") {
    text = "Public";
    if (showEmoji) {
      text = "🌐 Public";
    }
  }
  return <span>{text}</span>;
}

export function getCurDateString() {
  const currentDate = new Date();
  // const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(currentDate.getDate()).padStart(2, "0");

  return `${month}-${day}`;
}
