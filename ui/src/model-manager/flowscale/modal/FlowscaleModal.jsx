import React, { useState } from "react";
import { Modal, Tabs } from "../components";
import { Box, IconButton, Spinner } from "@primer/react";
import { X } from "phosphor-react";
import { CivitAIModelsTab } from "./CivitAIModelsTab";
import { OthersModelsTab } from "./OthersModelsTab";
import { CustomModelsTab } from "./CustomModelsTab";

const dropdownOptions = [
  { name: "opt 1" },
  { name: "opt 2" },
  { name: "opt 3" },
  { name: "opt 4" },
  { name: "opt 5" },
];

export const FlowscaleModal = ({ isOpen, isClose, modelType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const tabNames = [
    { id: 1, name: "CivitAI Models", enabled: true },
    // {
    //   id: 2,
    //   name: "Other Models",
    //   enabled: true,
    // },
    {
      id: 2,
      name: "Install Custom URL",
      enabled: true,
    },
  ];

  function CustomHeader() {
    return (
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #636C76",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            style={{
              marginLeft: "10px",
            }}
            height={30}
            src="https://hub.flowscale.ai/assets/logo-with-fullname-B69rI_hH.svg"
          />
        </Box>
        <IconButton
          aria-label=""
          icon={X}
          onClick={() => isClose()}
          unsafeDisableTooltip={false}
          variant="invisible"
          sx={{
            fontSize: "18px",
          }}
        />
      </Box>
    );
  }

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <Modal
      isOpen={isOpen}
      onDismiss={isClose}
      customHeader={CustomHeader}
      showButtons={false}
      sx={{
        width: "75%",
        height: "90%",
        maxHeight: "95%",
        overflow: "hidden",
        position: "absolute",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            margin: "16px 0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner size="large" />
        </Box>
      ) : (
        <Tabs
          tabNames={tabNames}
          tabClassName={{
            position: "sticky",
            top: 0,
            zIndex: 0.5,
          }}
          onTabChange={handleTabChange}
          wrapperClassName="px-[120px] py-4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <CivitAIModelsTab modelType={modelType} />
          {/* <OthersModelsTab /> */}
          <CustomModelsTab dropdownOptions={dropdownOptions} />
        </Tabs>
      )}
    </Modal>
  );
};
