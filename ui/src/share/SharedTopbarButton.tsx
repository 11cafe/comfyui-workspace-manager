import { Button, DarkMode, Tag } from "@chakra-ui/react";
import { IconCloud } from "@tabler/icons-react";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { WorkflowPrivacy } from "../types/dbTypes";
import { PrivacyLabel, fetchCloudWorkflowPrivacy } from "./shareUtils";

export function SharedTopbarButton({}) {
  const [cloudURL, setCloudURL] = useState<string>();
  const [privacy, setPrivacy] = useState<WorkflowPrivacy>();
  const { curFlowID } = useContext(WorkspaceContext);

  useEffect(() => {
    if (curFlowID) {
      workflowsTable?.get(curFlowID).then((flow) => {
        if (flow?.cloudID) {
          setCloudURL(flow.cloudOrigin + "/workflow/" + flow.cloudID);
          fetchCloudWorkflowPrivacy(flow).then((privacy) => {
            setPrivacy(privacy);
          });
        } else {
          setCloudURL(undefined);
        }
      });
    }
  }, [curFlowID]);
  if (!cloudURL) return null;

  return (
    <a href={cloudURL} style={{ textDecoration: "none" }} target="_blank">
      <DarkMode>
        <Tag>
          {privacy === "PUBLIC" ? "🌐" : privacy === "UNLISTED" ? "🔗" : "🔒"}
        </Tag>
      </DarkMode>
    </a>
  );
}
