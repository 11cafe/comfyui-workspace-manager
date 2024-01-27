import {
  Box,
  Card,
  CardHeader,
  Flex,
  Grid,
  Heading,
  Portal,
} from "@chakra-ui/react";
import { useEffect } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import MissingModelItem from "./MissingModelItem";

export interface MissingModel {
  class_type: string;
  input_name: string;
  received_value: string;
}

interface Props {
  onClose: () => void;
  missingModels: MissingModel[];
}

export default function MissingModelsListDrawer({
  onClose,
  missingModels,
}: Props) {
  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  const DRAWER_WIDTH = 440;

  return (
    <Portal>
      <Box style={{ width: DRAWER_WIDTH }}>
        <Card
          width={DRAWER_WIDTH}
          height={"100vh"}
          p={4}
          gap={2}
          position={"fixed"}
          top={0}
          left={0}
          shadow={"xl"}
          zIndex={1000}
          overflowY={"auto"}
        >
          <CardHeader>
            <Flex justifyContent={"space-between"} alignContent={"center"}>
              <Heading size={"md"} mr={2}>
                Models
              </Heading>
              <InstallModelsButton />
            </Flex>
          </CardHeader>
          <Grid templateColumns="1" gap={1} marginTop={2}>
            {missingModels.map((model) => (
              <MissingModelItem key={model.received_value} model={model} />
            ))}
          </Grid>
        </Card>
      </Box>
    </Portal>
  );
}
