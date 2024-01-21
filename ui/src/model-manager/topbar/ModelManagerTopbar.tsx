import { Button } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import React from "react";
import ModelsListDrawer from "../models-list-drawer/ModelsListDrawer";

// const AddMissingModelsButton = React.lazy(
//   () => import("./InstallMissingModelsButton"),
// );
interface Props {}

export default function ModelManagerTopbar({}: Props) {
  const [showMyModels, setShowMyModels] = useState(false);
  return (
    <>
      <Button
        size={"sm"}
        colorScheme="blue"
        aria-label="My models"
        onClick={() => setShowMyModels(true)}
        px={1}
      >
        Models
      </Button>
      {/* <AddMissingModelsButton /> */}
      {showMyModels && (
        <ModelsListDrawer onClose={() => setShowMyModels(false)} />
      )}
    </>
  );
}
