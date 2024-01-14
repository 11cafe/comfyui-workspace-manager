import { Box, Button, HStack } from "@chakra-ui/react";
import Draggable from "../components/Draggable";
import { IconGripVertical } from "@tabler/icons-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { ManagerContext } from "../ManagerContext";
import { PanelPosition } from "../types";
interface Props {}

const WIDTH = 200;
export function Topbar({}: Props) {
  const [positionStyle, setPositionStyle] = useState<PanelPosition>({
    top: 0,
    left: 0,
  });
  // Adjust the initial position to top-right
  useEffect(() => {
    const handleResize = () => {
      const cache = localStorage.getItem("model_manager_position");
      if (cache != null) {
        setPositionStyle(JSON.parse(cache));
        return;
      }
      setPositionStyle({ left: window.innerWidth - WIDTH, top: 0 }); // 200 is an example width of your component
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const { setRoute } = useContext(ManagerContext);
  const updatePanelPosition = useCallback(
    (position?: PanelPosition) => {
      const { top: curTop = 0, left: curLeft = 0 } = positionStyle || {};
      let { top = 0, left = 600 } = position ?? {};
      top += curTop;
      left += curLeft;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      const panelElement = document.getElementById("modelManagerPanel");
      const offsetWidth = panelElement?.offsetWidth || 392;

      if (top + 36 > clientHeight) top = clientHeight - 36;
      if (left + offsetWidth >= clientWidth) left = clientWidth - offsetWidth;
      const cachePos: PanelPosition = {
        top: Math.max(0, top),
        left: Math.max(0, left),
      };
      setPositionStyle(cachePos);
      localStorage.setItem("model_manager_position", JSON.stringify(cachePos));
    },
    [positionStyle]
  );

  return (
    <Draggable
      onDragEnd={(position: { x: number; y: number }) => {
        updatePanelPosition({ top: position.y, left: position.x });
      }}
    >
      <HStack
        width={`${WIDTH}px`}
        style={{
          padding: 2,
          position: "fixed",
          ...positionStyle,
          // top:0,
          // left:0,
        }}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={2}
        draggable={false}
        id="modelManagerPanel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <IconGripVertical
            id="dragPanelIcon"
            cursor="move"
            size={15}
            color="#FFF"
            width={"20px"}
          />
        ) : (
          <Box width={"20px"}></Box>
        )}
        <Button
          size={"sm"}
          aria-label="models"
          onClick={() => setRoute("models")}
          px={2}
        >
          Models
        </Button>
      </HStack>
    </Draggable>
  );
}
