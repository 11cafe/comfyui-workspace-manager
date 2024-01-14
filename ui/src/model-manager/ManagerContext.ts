import { createContext } from "react";
import { Route } from "./types";

export const ManagerContext = createContext<{
  setRoute: (route: Route) => void;
}>({
  setRoute: () => {},
});
