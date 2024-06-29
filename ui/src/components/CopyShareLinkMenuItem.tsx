import { HStack, MenuItem, Spinner, useToast } from "@chakra-ui/react";
import { IconLink } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { WorkspaceContext } from "../WorkspaceContext";
import { copySharelink } from "./copySharelink";
import { Workflow } from "../types/dbTypes";

export default function CopyShareLinkMenuItem({
  curFlow,
}: {
  curFlow: Workflow;
}) {
  const { session } = useContext(WorkspaceContext);
  const toast = useToast();
  const [loading, setloading] = useState(false);

  return (
    <MenuItem
      onClick={async () => {
        if (!curFlow) {
          return;
        }
        if (!session?.shareKey) {
          alert(
            "Please set your share key first in Settings to enable cloud share.",
          );
          return;
        }
        setloading(true);
        const res = await copySharelink(session.shareKey, curFlow!);
        if (res?.link) {
          navigator.clipboard.writeText(res.link);
          toast({
            title: "Link copied",
            status: "success",
            duration: 2000,
          });
        } else {
          toast({
            title: "Failed to copy link",
            status: "error",
            description: res?.error,
            duration: null,
          });
        }
        setloading(false);
      }}
      icon={loading ? <Spinner /> : <IconLink size={20} />}
      iconSpacing={1}
      alignItems={"center"}
      isDisabled={loading}
    >
      <HStack>
        <p>Copy share link</p>
      </HStack>
    </MenuItem>
  );
}
