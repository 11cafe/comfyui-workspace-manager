import { Button, Link, HStack, IconButton } from "@chakra-ui/react";
import { IconCloud, IconCopy } from "@tabler/icons-react";
import { workflowsTable } from "../db-tables/WorkspaceDB";
import { useContext, useEffect, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import HoverMenu from "../components/HoverMenu";
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
          setCloudURL(flow.cloudURL);
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
    <>
      <HoverMenu
        menuButton={
          <Button
            variant={"outline"}
            colorScheme="white"
            onClick={() => {
              window.open(workflowsTable?.curWorkflow?.cloudURL);
            }}
            aria-label={"Shared"}
            size={"xs"}
            iconSpacing={"2px"}
            leftIcon={<IconCloud />}
            height={"27px"}
            px={1}
          >
            {privacy ? <PrivacyLabel privacy={privacy} /> : "Shared"}
          </Button>
        }
        menuContent={
          <HStack width={"200px"} p={1} color={"blue.400"}>
            <Link href={cloudURL} noOfLines={1} isExternal>
              {cloudURL}
            </Link>
            <IconButton
              size={"xs"}
              variant={"ghost"}
              icon={<IconCopy size={19} />}
              aria-label="copy link"
            ></IconButton>
          </HStack>
        }
      />
    </>
  );
}
