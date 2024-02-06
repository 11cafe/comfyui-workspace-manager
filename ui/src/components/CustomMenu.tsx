import React, { useRef } from "react";
import { Box, useOutsideClick } from "@chakra-ui/react";

type Props = {
  menuButton: React.ReactElement;
  options: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
};
export default function CustomMenu({
  options,
  menuButton,
  isOpen,
  onClose,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  return (
    <Box position="relative">
      <Box>{menuButton}</Box>
      {isOpen && (
        <Box
          ref={ref}
          mt="8px"
          shadow="md"
          p="2"
          position="absolute"
          zIndex="dropdown"
        >
          {options}
        </Box>
      )}
    </Box>
  );
}
