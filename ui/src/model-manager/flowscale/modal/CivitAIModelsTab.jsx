import { Box, Button, FormControl, TextInput } from "@primer/react";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Card, Dropdown } from "../components";
import CivitaiSchema from "./DUMMY_DATA/civitai-schema.json";

export const CivitAIModelsTab = ({ dropdownOptions }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchCivitAiProjects, setSearchCivitAiProjects] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    setModels(CivitaiSchema?.items);
  }, []);

  const handleInstallClick = () => {
    alert("Install button clicked");
  };

  const onSeachButtonClick = (searchCivitAiProjects) => {
    alert(`Search button clicked with value: ${searchCivitAiProjects}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
          }}
        >
          <FormControl>
            <FormControl.Label visuallyHidden>Default label</FormControl.Label>
            <TextInput
              leadingVisual={MagnifyingGlass}
              placeholder="Search CivitAI models"
              sx={{ width: "320px" }}
              size="medium"
              value={searchCivitAiProjects}
              onChange={(e) => setSearchCivitAiProjects(e.target.value)}
              trailingAction={
                searchCivitAiProjects.length > 0 ? (
                  <TextInput.Action
                    onClick={(e) => {
                      setSearchCivitAiProjects("");
                      e.preventDefault();
                    }}
                    icon={XCircle}
                    aria-label="Clear"
                    sx={{
                      color: "fg.subtle",
                    }}
                  />
                ) : undefined
              }
            />
          </FormControl>
          <Button
            onClick={() => {
              onSeachButtonClick(searchCivitAiProjects);
            }}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            width: "40%",
          }}
        >
          <Dropdown
            options={dropdownOptions}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            label="Category"
            labelDricetion="horizontal"
            overlayWidth="auto"
          />

          <Dropdown
            options={dropdownOptions}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            label="Path"
            labelDricetion="horizontal"
            overlayWidth="auto"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {models.map((model) => (
          <Card
            key={model.name}
            imageSrc="https://via.placeholder.com/300x150"
            title={model.name}
            label={model.type}
            size="1.2 GB"
            dropdownOptions={dropdownOptions}
            onInstallClick={() => handleInstallClick()}
          />
        ))}
      </Box>
    </Box>
  );
};
