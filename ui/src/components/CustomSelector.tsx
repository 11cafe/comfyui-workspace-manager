import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Card } from "@chakra-ui/react";
import { IconChevronDown } from "@tabler/icons-react";

export interface CustomSelectorOption {
  label: string;
  value: string;
  icon?: React.ReactElement;
}

type Props = {
  options: CustomSelectorOption[];
};
export default function CustomSelector({ options }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState<
    CustomSelectorOption | undefined
  >(options[0]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Box position="relative">
      <Button
        onClick={toggleDropdown}
        rightIcon={<IconChevronDown />}
        leftIcon={selectedOption?.icon}
      >
        {selectedOption?.label}
      </Button>
      {isOpen && (
        <Card
          gap={4}
          ref={ref}
          mt="2"
          shadow="md"
          borderWidth="1px"
          p="2"
          position="absolute"
        >
          {options.map((option) => (
            <Button
              key={option.value}
              onClick={() => {
                setSelectedOption(option);
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
