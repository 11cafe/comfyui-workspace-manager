import { Button } from "@chakra-ui/react";
// @ts-ignore
import { api } from "/scripts/api.js";
import { useEffect, useState } from "react";
import MissingModelsListDrawer, {
  MissingModel,
} from "../missing-models-drawer/MissingModelsListDrawer";
import { COMFYSPACE_TRACKING_FIELD_NAME } from "../../const";
import { app } from "../../utils/comfyapp";
interface Props {}

interface NodeError {
  errors: Array<{
    type: string;
    message: string;
    details: string;
    extra_info: {
      input_name: string;
      input_config: string[][];
      received_value: string;
    };
  }>;
  dependent_outputs: string[];
  class_type: string;
}

export default function InstallMissingModelsButton({}: Props) {
  const [showMyModels, setShowMyModels] = useState(false);
  const [missingModels, setMissingModels] = useState<MissingModel[]>([]);
  useEffect(() => {
    // monkey patch queue prompt api to catch errors
    const queuePrompt = app.queuePrompt as Function;
    app.queuePrompt = async function () {
      try {
        await queuePrompt.apply(this, arguments);
      } finally {
        const deps = app.graph.extra?.[COMFYSPACE_TRACKING_FIELD_NAME]?.deps;
        if (!deps) {
          return;
        }
        const nodeErrors = (app.lastNodeErrors ?? {}) as Record<
          string,
          NodeError
        >;
        setMissingModels(
          Object.values(nodeErrors).flatMap((nodeError) =>
            nodeError?.errors
              ?.filter((error) => error?.type === "value_not_in_list")
              ?.map((error) => {
                const { input_name, received_value } = error.extra_info;
                return {
                  class_type: nodeError.class_type,
                  input_name,
                  received_value,
                };
              }),
          ),
        );
      }
    };
  }, []);
  if (missingModels.length === 0) {
    return null;
  }
  return (
    <>
      <Button
        size={"sm"}
        aria-label="missing models"
        px={2}
        onClick={() => setShowMyModels(true)}
        colorScheme="teal"
      >
        Install Missing ({missingModels.length})
      </Button>
      {showMyModels && (
        <MissingModelsListDrawer
          onClose={() => setShowMyModels(false)}
          missingModels={missingModels}
        />
      )}
    </>
  );
}
