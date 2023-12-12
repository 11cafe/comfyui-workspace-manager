import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  MenuItem,
  Menu,
  MenuList,
  AccordionButton,
  Accordion,
  AccordionItem,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { IconBurger, IconHistory, IconMenu2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { listBackup } from "./Api";
import { formatTimestamp } from "./utils";
import { Workflows } from "./WorkspaceDB";

type Props = {
  onclose: () => void;
};
export default function ViewBackupsModal({ onclose }: Props) {
  const [backups, setBackups] = useState<
    { fileName: string; jsonStr: Workflows }[]
  >([]); // {fileName: string, jsonStr: string}[]
  const fetchBackups = async () => {
    const res = await listBackup("workflows");
    if (res == null) {
      return;
    }
    const workflows: { fileName: string; jsonStr: Workflows }[] =
      JSON.parse(res);
    setBackups(workflows);
  };
  useEffect(() => {
    fetchBackups();
  }, []);
  return (
    <Modal onClose={onclose} size={"xl"} isOpen={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Backups</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Accordion allowToggle>
            {backups.map((b) => {
              const date = parseInt(b.fileName.split(".")[0]);

              return (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Saved on {formatTimestamp(date)}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {Object.values(b.jsonStr).map((workflow) => (
                      <Box>{workflow.name}</Box>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
