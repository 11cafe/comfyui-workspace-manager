import { Box, Button, HStack } from "@chakra-ui/react";
// @ts-ignore
import { app } from "/scripts/app.js";
// @ts-ignore
import { api } from "/scripts/api.js";
import { useEffect, useState } from "react";
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
  const [missngCount, setMissingCount] = useState(0);
  useEffect(() => {
    const validateInput = async (input: string) => {};
    // monkey patch queue prompt api to catch errors
    const queuePrompt = app.queuePrompt as Function;
    app.queuePrompt = async function () {
      try {
        await queuePrompt.apply(app, [...arguments]);
      } finally {
        console.log("queuePrompt app.node err", app.lastNodeErrors);
        const nodeErrors = (app.lastNodeErrors ?? {}) as Record<
          string,
          NodeError
        >;
        setMissingCount(Object.keys(nodeErrors).length);
        Object.values(nodeErrors).forEach((nodeError) => {
          nodeError.errors.forEach((error) => {
            if (error.type === "value_not_in_list") {
              const { input_name, received_value } = error.extra_info;
              console.log(
                "invalid_input",
                nodeError.class_type,
                input_name,
                received_value
              );
            }
          });
        });
      }
    };
    const graphJson = app.graph.serialize();
    console.log(graphJson);
    fetch("/model_manager/find_missing_models", {
      method: "POST",
      body: JSON.stringify({
        workflow: graphJson,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <Button size={"sm"} aria-label="missing models" px={2}>
      Missing Models {missngCount > 0 ? `(${missngCount})` : ""}
    </Button>
  );
}
