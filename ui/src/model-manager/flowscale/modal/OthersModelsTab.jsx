import { Box, Button, FormControl, TextInput } from "@primer/react";
import React, { useEffect, useState } from "react";
import { Card } from "../components";
import OtherSchema from "./DUMMY_DATA/others-schema.json";
import { MagnifyingGlass, XCircle } from "phosphor-react";

export const OthersModelsTab = ({ dropdownOptions }) => {
  const [models, setModels] = useState([]);
  const [searchModels, setSearchModels] = useState("");

  useEffect(() => {
    setModels(OtherSchema.models);
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
          gap: "12px",
        }}
      >
        <FormControl>
          <FormControl.Label visuallyHidden>Default label</FormControl.Label>
          <TextInput
            leadingVisual={MagnifyingGlass}
            placeholder="Search other models"
            sx={{ width: "320px" }}
            size="medium"
            value={searchModels}
            onChange={(e) => setSearchModels(e.target.value)}
            trailingAction={
              searchModels.length > 0 ? (
                <TextInput.Action
                  onClick={(e) => {
                    setSearchModels("");
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
            onSeachButtonClick(searchModels);
          }}
        >
          Search
        </Button>
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
            //   imageSrc="https://via.placeholder.com/300x150"
            title={model.name}
            description={model.description}
            label={model.type}
            size={model.size}
            onInstallClick={() => handleInstallClick(model.name)}
          />
        ))}
      </Box>
    </Box>
  );
};
