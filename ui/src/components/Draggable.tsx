import {
  useState,
  useCallback,
  MouseEvent,
  useRef,
  PropsWithChildren,
} from "react";

const POSITION = { x: 0, y: 0 };

interface Props {
  onDragEnd: (position: { x: number; y: number }) => void;
  dragIconId: string;
}

export default function Draggable({
  children,
  onDragEnd,
  dragIconId,
}: PropsWithChildren<Props>) {
  const originRef = useRef(POSITION);
  const isDraggingRef = useRef(false);
  const [translation, setTranslation] = useState(POSITION);

  const handleMouseDown = (e: MouseEvent) => {
    if (
      !(e.target instanceof Element) ||
      !(e.target.parentNode instanceof Element)
    ) {
      return;
    }
    if ([e.target?.id, e.target?.parentNode?.id].includes(dragIconId)) {
      originRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
      isDraggingRef.current = true;
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      const bodyEle = document.getElementsByTagName("body")[0];
      bodyEle.style.userSelect = "none";
    }
  };

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    const translation = {
      x: e.clientX - originRef.current.x,
      y: e.clientY - originRef.current.y,
    };

    setTranslation(translation);
  }, []);

  const handleMouseUp = useCallback(() => {
    setTranslation((state) => {
      setTimeout(() => {
        onDragEnd(state);
      }, 0);
      return POSITION;
    });
    isDraggingRef.current = false;
    const bodyEle = document.getElementsByTagName("body")[0];
    bodyEle.style.userSelect = "auto";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }, [onDragEnd, handleMouseMove]);

  const styles = {
    transform: `translate(${translation.x}px, ${translation.y}px)`,
    zIndex: isDraggingRef.current ? 1000 : 1,
  };

  return (
    <div style={styles} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
}
