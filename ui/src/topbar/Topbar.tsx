import { Button, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import Draggable from "../components/Draggable";
import {
  IconDeviceFloppy,
  IconFolder,
  IconGripVertical,
  IconPhoto,
  IconTriangleInvertedFilled,
  IconLock,
} from "@tabler/icons-react";
import DropdownTitle from "../components/DropdownTitle";
import {
  Suspense,
  lazy,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import EditFlowName from "../components/EditFlowName";
import { WorkspaceContext } from "../WorkspaceContext";
import { PanelPosition } from "../types/dbTypes";
import "./Topbar.css";
import VersionNameTopbar from "./VersionNameTopbar";
import { userSettingsTable, workflowsTable } from "../db-tables/WorkspaceDB";
import { TOPBAR_BUTTON_HEIGHT } from "../const";
import TopbarNewWorkflowButton from "./TopbarNewWorkflowButton";
const AppIsDirtyEventListener = lazy(() => import("./AppIsDirtyEventListener"));
const ModelManagerTopbar = lazy(
  () => import("../model-manager/topbar/ModelManagerTopbar"),
);
const SpotlightSearch = lazy(() => import("../components/SpotlightSearch"));

interface Props {
  curFlowName: string | null;
  setCurFlowName: (newName: string) => void;
}
export function Topbar({ curFlowName, setCurFlowName }: Props) {
  const { isDirty, saveCurWorkflow, setRoute, curFlowID, route } =
    useContext(WorkspaceContext);
  const [positionStyle, setPositionStyle] = useState<PanelPosition>();
  const updatePanelPosition: (
    position?: PanelPosition,
    needUpdateDB?: boolean,
  ) => void = useCallback(
    (position?: PanelPosition, needUpdateDB: boolean = false) => {
      const { top: curTop = 0, left: curLeft = 0 } = positionStyle || {};
      let { top = 0, left = 0 } = position ?? {};
      top += curTop;
      left += curLeft;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      const panelElement = document.getElementById("workspaceManagerPanel");
      const offsetWidth = panelElement?.offsetWidth || 392;

      if (top + 36 > clientHeight) top = clientHeight - 36;
      if (left + offsetWidth >= clientWidth) left = clientWidth - offsetWidth;

      setPositionStyle({ top: Math.max(0, top), left: Math.max(0, left) });

      needUpdateDB &&
        userSettingsTable?.upsert({
          topBarStyle: { top, left },
        });
    },
    [positionStyle],
  );
  useEffect(() => {
    userSettingsTable?.getSetting("topBarStyle").then((res) => {
      updatePanelPosition(res, false);
    });
  }, []);
  if (!positionStyle) {
    return null;
  }
  return (
    <Draggable
      onDragEnd={(position: { x: number; y: number }) => {
        updatePanelPosition({ top: position.y, left: position.x }, true);
      }}
      dragIconId="dragPanelIcon"
    >
      <HStack
        style={{
          padding: 2,
          position: "fixed",
          ...positionStyle,
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        draggable={false}
        id="workspaceManagerPanel"
        className="workspaceManagerPanel"
      >
        <Button
          size={"sm"}
          aria-label="workspace folder"
          height={TOPBAR_BUTTON_HEIGHT + "px"}
          // backgroundColor={colorMode === "dark" ? "#333547" : undefined}
          onClick={() => setRoute("recentFlows")}
          px={2}
        >
          <HStack gap={1}>
            <IconFolder size={21} />
            <IconTriangleInvertedFilled size={8} />
          </HStack>
        </Button>
        <Suspense fallback={<div style={{ width: "60px" }} />}>
          <ModelManagerTopbar />
        </Suspense>
        <TopbarNewWorkflowButton />
        <EditFlowName
          isDirty={isDirty}
          displayName={curFlowName ?? ""}
          updateFlowName={(newName) => {
            setCurFlowName(newName);
            requestAnimationFrame(() => {
              updatePanelPosition();
            });
          }}
        />
        {workflowsTable?.curWorkflow?.saveLock && (
          <IconLock color="#FFF" size={20} />
        )}
        {curFlowID && (
          <HStack gap={"4px"}>
            <Tooltip label="Open gallery">
              <IconButton
                onClick={() => setRoute("gallery")}
                icon={<IconPhoto size={22} color="white" />}
                size={"sm"}
                aria-label="open gallery"
                variant={"ghost"}
              />
            </Tooltip>
            <DropdownTitle />
          </HStack>
        )}
        {curFlowID && isDirty ? (
          <Tooltip label="Save workflow">
            <IconButton
              onClick={() => saveCurWorkflow()}
              icon={<IconDeviceFloppy size={23} color="white" />}
              size={"xs"}
              paddingY={4}
              aria-label="save workspace"
              variant={"ghost"}
            />
          </Tooltip>
        ) : (
          <div style={{ width: 1 }} />
        )}
        <VersionNameTopbar />
        <AppIsDirtyEventListener />
        <IconGripVertical
          id="dragPanelIcon"
          className="dragPanelIcon"
          cursor="move"
          size={15}
          color="#FFF"
        />
        {route === "spotlightSearch" && <SpotlightSearch />}
      </HStack>
    </Draggable>
  );
}
