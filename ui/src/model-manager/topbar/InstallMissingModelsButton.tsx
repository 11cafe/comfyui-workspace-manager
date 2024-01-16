import { Box, Button, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
interface Props {}

export default function InstallMissingModelsButton({}: Props) {
  useEffect(() => {
    const graphJson = window.app.graph.serialize();
    console.log(graphJson);
  }, []);
  return (
    <Button size={"sm"} aria-label="missing models" px={2}>
      Install Missing Models
    </Button>
  );
}
