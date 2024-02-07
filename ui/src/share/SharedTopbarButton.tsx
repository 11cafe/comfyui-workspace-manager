import { Button } from "@chakra-ui/react";
import { IconUsersGroup } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { workflowsTable } from "../db-tables/WorkspaceDB";

export function SharedTopbarButton({}) {
  return (
    <>
      <Button
        onClick={() => {}}
        aria-label={"Shared"}
        size={"sm"}
        leftIcon={<IconUsersGroup />}
      >
        Public
      </Button>
    </>
  );
}
