import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { Box, Button, Label } from "@primer/react";
import { DownloadSimple } from "phosphor-react";

export const Card = ({
  imageSrc,
  title,
  label,
  onInstallClick,
  dropdownOptions,
  size,
  description,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box
      sx={{
        borderRadius: "14px",
        border: "2px solid #343B45",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#22272F",
        padding: "0px",
        gap: "12px",
      }}
    >
      {imageSrc && (
        <Box
          sx={{
            height: "200px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#16191D",
          }}
        >
          <img
            src={imageSrc}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      )}
      {/* 
        TODO: Add a URL icon to visit the model page. 
       */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "12px",
          padding: "5px 20px 20px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {label && (
            <Label
              variant="accent"
              sx={{
                width: "fit-content",
              }}
            >
              {label}
            </Label>
          )}
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#C4C4CA",
              margin: "8px 0px",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "#ADBAC7",
              lineHeight: "18px",
              margin: "0",
            }}
          >
            {description}
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: !imageSrc ? "end" : "space-between",
            alignItems: "center",
            gap: "18px",
          }}
        >
          {imageSrc && (
            <Dropdown
              options={dropdownOptions}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
              overlayWidth="auto"
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="primary"
            onClick={onInstallClick}
            leadingVisual={DownloadSimple}
            sx={{
              color: "#fff",
              fontSize: "16px",
              textAlign: "center",
            }}
            block
          >
            Install [
            <span
              style={{
                fontSize: "14px",
              }}
            >
              {size}
            </span>
            ]
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
