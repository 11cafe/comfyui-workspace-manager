import { Button } from "@chakra-ui/react";
// @ts-ignore
import { app } from "/scripts/app.js";
// @ts-ignore
import { api } from "/scripts/api.js";
import { useEffect, useState } from "react";
import MissingModelsListDrawer, {
  MissingModel,
} from "../missing-models-drawer/MissingModelsListDrawer";
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
    // diable until it is working
    return;
    // monkey patch queue prompt api to catch errors
    const queuePrompt = app.queuePrompt as Function;
    app.queuePrompt = async function () {
      try {
        await queuePrompt.apply(app, [...arguments]);
      } finally {
        const nodeErrors = (app.lastNodeErrors ?? {}) as Record<
          string,
          NodeError
        >;
        setMissingModels(
          Object.values(nodeErrors).flatMap((nodeError) =>
            nodeError.errors
              ?.filter((error) => error?.type === "value_not_in_list")
              .map((error) => {
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
    // const graphJson = app.graph.serialize();
    // console.log(graphJson);
    // fetch("/model_manager/find_missing_models", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     workflow: graphJson,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
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
