import { useEffect, useRef, useState } from "react";
import { loadDBs } from "./db-tables/WorkspaceDB";
import { WorkspaceContext } from "./WorkspaceContext";
import { Topbar } from "./topbar/Topbar";
import { WorkflowVersion } from "./types/dbTypes";
import { Session, WorkspaceRoute } from "./types/types";
import { useStateRef } from "./customHooks/useStateRef";
import { fetchApi } from "./Api";
import { serverInfo } from "./utils/OsPathUtils";

export default function App() {
  const [route, setRoute] = useState<WorkspaceRoute>("root");
  const [loadingDB, setLoadingDB] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [isDirty, setIsDirty] = useState(false);
  const developmentEnvLoadFirst = useRef(false);
  const [curVersion, setCurVersion] = useStateRef<WorkflowVersion | null>(null);

  const graphAppSetup = async () => {
    localStorage.removeItem("workspace");
    localStorage.removeItem("comfyspace");
    try {
      await loadDBs();
    } catch (error) {
      console.error("error loading db", error);
    }
    setLoadingDB(false);

    fetchApi("/workspace/get_os")
      .then((resp) => resp.json())
      .then((data) => {
        if (data.os) {
          serverInfo.os = data.os;
        }
      });
  };

  useEffect(() => {
    /**
     * because we have turned on strict mode, useEffect will be executed twice in strict mode in the development environment.
     * and graphAppSetup contains DB related operations, repeated execution will bring some bad results.
     * so in development environment mode, the first execution is skipped.
     */
    if (
      // @ts-ignore
      process.env.NODE_ENV === "development" &&
      !developmentEnvLoadFirst.current
    ) {
      developmentEnvLoadFirst.current = true;
      return;
    }
    graphAppSetup();
  }, []);

  if (loadingDB) {
    return null;
  }

  return (
    <WorkspaceContext.Provider
      value={{
        isDirty: isDirty,
        setIsDirty: setIsDirty,
        setRoute: setRoute,
        route: route,
        curVersion: curVersion,
        setCurVersion: setCurVersion,
        session: session,
        updateSession: setSession,
      }}
    >
      <Topbar />
    </WorkspaceContext.Provider>
  );
}
