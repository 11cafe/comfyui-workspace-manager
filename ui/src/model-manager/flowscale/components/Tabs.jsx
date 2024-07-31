import React from "react";
import { Box, Spinner } from "@primer/react";
import clsx from "clsx";
import { DotFillIcon } from "@primer/octicons-react";

export const Tabs = ({
  children,
  tabNames,
  tabClassName,
  onTabChange,
  wrapperClassName,
  activeTab,
  setActiveTab,
  isLoading,
}) => {
  const handleTabClick = (id) => {
    setActiveTab(id);
    onTabChange(id);
  };

  const enabledTabs = tabNames.filter((tab) => tab.enabled);

  return (
    <Box
      as="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: "12px",
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            padding: "0 120px",
            height: "48px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Spinner size="small" />
        </Box>
      ) : (
        <>
          <Box
            as="div"
            aria-label="Publish Workflow"
            sx={{
              display: "flex",
              gap: "4px",
              borderBottom: "1px solid #636C76",
              backgroundColor: "transparent",
              ...tabClassName,
            }}
          >
            {enabledTabs.map((tab) => (
              <Box
                as="div"
                sx={{
                  color: activeTab === tab.id ? "white" : "#A5A5AD",
                  fontSize: "16px",
                  cursor: "pointer",
                  // padding: "4px 0",
                  borderBottom: activeTab === tab.id ? "3px solid" : "none",
                  borderImageSource:
                    activeTab === tab.id
                      ? "linear-gradient(141.01deg, #1659da 3.02%, #16cfda 87.39%)"
                      : "none",
                  borderImageSlice: activeTab === tab.id ? 1 : "none",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                }}
                key={tab.id}
                aria-current={activeTab === tab.id ? "page" : undefined}
                onClick={() => handleTabClick(tab.id)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 10px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#22262C",
                    },
                  }}
                >
                  {tab.icon && <tab.icon sx={{ marginRight: "8px" }} />}
                  {tab.name}
                  {tab.active_status && (
                    <DotFillIcon
                      size={16}
                      style={{ marginLeft: "8px" }}
                      fill="#14C078"
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              minHeight: 0,
              overflowY: "auto",
              ...wrapperClassName,
            }}
          >
            {children[tabNames.findIndex((tab) => tab.id === activeTab)]}
          </Box>
        </>
      )}
    </Box>
  );
};
