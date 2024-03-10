import { Button, HStack, Radio, Text } from "@chakra-ui/react";
import { WorkflowVersion } from "../types/dbTypes";
import { formatTimestamp } from "../utils";
import { IconCloud, IconExternalLink } from "@tabler/icons-react";

export default function ShareDialogWorkflowVersionRadio({
  version,
  cloudHost,
  cloudWorkflowID,
}: {
  version: WorkflowVersion;
  cloudHost: string;
  cloudWorkflowID: string | null;
}) {
  const ver = version;
  const content = (
    <HStack spacing={4} alignItems={"center"}>
      <Text>{ver.name}</Text>
      <Text color={"GrayText"}>{formatTimestamp(ver.createTime, false)}</Text>
      {ver.cloudID && cloudWorkflowID && (
        <a
          href={cloudHost + "/workflow/" + cloudWorkflowID + "/" + ver.cloudID}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            size={"xs"}
            colorScheme="teal"
            variant={"outline"}
            leftIcon={<IconCloud />}
            rightIcon={<IconExternalLink size={18} />}
          >
            Shared
          </Button>
        </a>
      )}
    </HStack>
  );
  if (!version.cloudID) {
    return (
      <Radio key={ver.id} value={ver.id} mb={5}>
        {content}
      </Radio>
    );
  }

  return <>{content}</>;
}
