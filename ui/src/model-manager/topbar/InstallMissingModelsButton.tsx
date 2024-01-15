import { Box, Button, HStack } from "@chakra-ui/react";
// @ts-ignore
import { app } from "/scripts/app.js";
import { useEffect } from "react";
interface Props {}

export default function InstallMissingModelsButton({}: Props) {
  useEffect(() => {
    setTimeout(() => {
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
    }, 2000);
  }, []);
  return (
    <Button size={"sm"} aria-label="missing models" px={2}>
      Install Missing Models
    </Button>
  );
}
