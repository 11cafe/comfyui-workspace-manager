import React, { useState, useRef } from "react";
import { Box, Button, Card, useOutsideClick } from "@chakra-ui/react";
import { IconChevronDown } from "@tabler/icons-react";

export interface CustomSelectorOption {
  label: string;
  value: string;
  icon?: React.ReactElement;
}

type Props = {
  menuButton: React.ReactElement;

  options: CustomSelectorOption[];
};
export default function CustomSelector({ options, menuButton }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: ref,
    handler: () => setIsOpen(false),
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Box position="relative">
      <Box onClick={toggleDropdown}>{menuButton}</Box>
      {isOpen && (
        <Card
          gap={4}
          ref={ref}
          mt="2"
          shadow="md"
          borderWidth="1px"
          p="2"
          position="absolute"
          zIndex="dropdown"
        >
          {options.map((option) => (
            <Button
              key={option.value}
              onClick={() => {
                setIsOpen(false);
              }}
              leftIcon={option.icon}
              justifyContent="flex-start"
              variant="ghost"
              width="full"
            >
              {option.label}
            </Button>
          ))}
        </Card>
      )}
    </Box>
  );
}
