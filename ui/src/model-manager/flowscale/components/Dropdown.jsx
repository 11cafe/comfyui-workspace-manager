import React from "react";
import { ActionMenu, ActionList, Box } from "@primer/react";

export const Dropdown = ({
  options,
  selectedIndex,
  onSelect,
  label,
  wrapperClassName,
  labelClassName,
  borderColor = "#636C76",
  overlayWidth = "medium",
  labelDricetion = "vertical",
}) => {
  const selectedOption = options[selectedIndex];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: labelDricetion === "horizontal" ? "row" : "column",
        alignItems: labelDricetion === "horizontal" ? "center" : "start",
        gap: "4px",
        width: "100%",
        ...wrapperClassName,
      }}
    >
      {label && (
        <Box
          sx={{
            color: "#ADBAC7",
            fontSize: "14px",
            fontWeight: "600",
            display: "inline-block",
            ...labelClassName,
          }}
        >
          {label}
        </Box>
      )}
      <ActionMenu>
        <ActionMenu.Button
          alignContent="start"
          sx={{
            width: "100%",
            border: `1px solid ${borderColor}`,
            backgroundColor: "transparent",
          }}
        >
          {selectedOption?.name || "Select an option"}
        </ActionMenu.Button>
        <ActionMenu.Overlay width={overlayWidth}>
          <ActionList selectionVariant="single">
            {options.length === 0 ? (
              <ActionList.Item disabled>No options available</ActionList.Item>
            ) : (
              options.map((option, index) => (
                <ActionList.Item
                  key={index}
                  selected={index === selectedIndex}
                  onSelect={() => onSelect(index)}
                >
                  {option.name}
                </ActionList.Item>
              ))
            )}
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Box>
  );
};
