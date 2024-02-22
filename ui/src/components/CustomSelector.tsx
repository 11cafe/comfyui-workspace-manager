import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Card } from "@chakra-ui/react";
import { IconChevronDown } from "@tabler/icons-react";

export interface CustomSelectorOption<T> {
  label: string;
  value: T;
  icon?: React.ReactElement;
}

type Props<T> = {
  options: CustomSelectorOption<T>[];
  value: T;
  onChange: (value: T) => void;
};
export default function CustomSelector<T>({
  options,
  value,
  onChange,
}: Props<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
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
          zIndex={100}
        >
          {options.map((option) => (
            <Button
              key={option.label}
              onClick={() => {
                setIsOpen(false);
                onChange(option.value);
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
