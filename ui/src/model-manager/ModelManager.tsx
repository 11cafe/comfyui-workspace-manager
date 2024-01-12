import { useRef, useState } from "react";
// @ts-ignore
import { app } from "/scripts/app.js";
// @ts-ignore
import { api } from "/scripts/api.js";
import { Box, Portal } from "@chakra-ui/react";

import { Topbar } from "./topbar/ModelManagerTopbar";
import { Route } from "./types";
import InatallModelsModal from "./install-models/InatallModelsModal";
import { ManagerContext } from "./ManagerContext";

export default function ModelManager() {
  const [route, setRoute] = useState<Route>("root");

  return (
    <ManagerContext.Provider value={{ setRoute }}>
      <Box
        style={{
          width: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
        zIndex={1000}
        draggable={false}
      >
        <Topbar />

        {route === "models" && (
          <InatallModelsModal onclose={() => setRoute("root")} />
        )}
      </Box>
    </ManagerContext.Provider>
  );
}
