import {
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  Grid,
  GridItem,
  Heading,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
import InstallModelsButton from "../install-models/InstallModelsButton";
import InatallModelsModal from "../install-models/InatallModelsModal";

export interface MissingModel {
  class_type: string;
  input_name: string;
  received_value: string;
}

interface Props {
  onClose: () => void;
  missingModels: MissingModel[];
}

export default function MissingModelsListDrawer({ onClose, missingModels }: Props) {
  const [showInstallModels, setShowInstallModels] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    app.canvasEl.addEventListener("click", onClose);
    return () => {
      app.canvasEl.removeEventListener("click", onClose);
    };
  }, []);

  const DRAWER_WIDTH = 440;

  return (
    <>
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
              {missingModels.map((model) => {
                return (
                  <GridItem p={5} shadow="md" borderWidth="1px">
                    <VStack align="start">
                      <Text fontWeight="bold">Class Type:</Text>
                      <Text>{model.class_type}</Text>
                      <Text fontWeight="bold">Input Name:</Text>
                      <Text>{model.input_name}</Text>
                      <Text fontWeight="bold">Received Value:</Text>
                      <Text>{model.received_value}</Text>
                    </VStack>
                    <Button colorScheme="blue" mt={5} onClick={() => {
                      setSearchQuery(formatSearchQuery(model.received_value));
                      setShowInstallModels(true);
                    }}>
                      Search in CivitAI
                    </Button>
                  </GridItem>
                );
              })}
            </Grid>
          </Card>
        </Box>
      </Portal>
      {showInstallModels && (
        <InatallModelsModal searchQuery={searchQuery} onclose={() => setShowInstallModels(false)} />
      )}
    </>
  );
}

function formatSearchQuery(query: string): string {
  // Remove file extension
  let formattedQuery = query.replace(/\.[^/.]+$/, "")
    // Remove everything after underscore
    .split('_')[0]
    // Replace special characters with space
    .replace(/[^a-zA-Z0-9]/g, " ")
    // Add space before capital letters
    .replace(/([A-Z])/g, " $1").trim();

  return formattedQuery;
}
