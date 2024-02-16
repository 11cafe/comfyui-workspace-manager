import { IconLink, IconLock, IconWorld } from "@tabler/icons-react";
import { CustomSelectorOption } from "../components/CustomSelector";
import { WorkflowPrivacy } from "../types/dbTypes";
// @ts-expect-error
import { app } from "/scripts/app.js";

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
    label: "Anyone with the link can access",
    value: "UNLISTED",
    icon: <IconLink />,
  },
  { label: "Public", value: "PUBLIC", icon: <IconWorld /> },
];

export const getNodeDefs = () => {
  const allNodes = app.graph._nodes;
  // console.log("allNodes", allNodes);
  // console.log(
  //   "LiteGraph.registered_node_types",
  //   LiteGraph.registered_node_types,
  // );
  const nodeDefs = {};
  for (let n of allNodes) {
    // @ts-ignore
    if (n.type in LiteGraph.registered_node_types) {
      // TODO: js only nodes has no nodeData field, need to handle this....
      // @ts-ignore
      nodeDefs[n.type] = LiteGraph.registered_node_types[n.type].nodeData;
    }
  }
  return nodeDefs;
};
