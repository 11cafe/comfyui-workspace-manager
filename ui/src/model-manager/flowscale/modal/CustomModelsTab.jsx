import { Box, FormControl, TextInput } from "@primer/react";
import React, { useState } from "react";
import { Dropdown } from "../components";

export const CustomModelsTab = ({ dropdownOptions }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [modelDownloadUrl, setModelDownloadUrl] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <FormControl>
        <FormControl.Label>Model download url</FormControl.Label>
        <TextInput
          placeholder="Enter model download url"
          value={modelDownloadUrl}
          onChange={(e) => setModelDownloadUrl(e.target.value)}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #636C76",
            width: "60%",
          }}
        />
      </FormControl>
      <Dropdown
        options={dropdownOptions}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
        label="Choose model install folder"
        wrapperClassName={{
          width: "60%",
        }}
      />
    </Box>
  );
};
