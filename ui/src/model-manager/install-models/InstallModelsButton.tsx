import { useState } from "react";
import { Button } from "@chakra-ui/react";

import InatallModelsModal from "./InatallModelsModal";

export default function InstallModelsButton() {
  const [showInstallModels, setShowInstallModels] = useState(false);

  return (
    <>
      <Button
        size={"sm"}
        colorScheme="teal"
        onClick={() => setShowInstallModels(true)}
      >
        Install Models
      </Button>

      {showInstallModels && (
        <InatallModelsModal
          modelType="Checkpoint"
          onclose={() => setShowInstallModels(false)}
        />
      )}
    </>
  );
}
