import { useRef, useState } from "react";
import CustomMenu from "./CustomMenu";
import { Box, Menu, MenuList } from "@chakra-ui/react";
type Props = {
  menuButton: React.ReactElement;
  menuContent: React.ReactElement;
  onClose?: () => void;
};
export default function HoverMenu({ menuButton, menuContent, onClose }: Props) {
  const closeTimeoutId = useRef<number>();
  const [isOpen, setIsOpen] = useState(false);
  const delayedClose = () => {
    closeTimeoutId.current = setTimeout(() => setIsOpen(false), 400); // delay of 300ms
  };

  const onOpen = () => {
    setIsOpen(true);
    clearTimeout(closeTimeoutId.current);
    closeTimeoutId.current = undefined;
  };
  return (
    <CustomMenu
      isOpen={isOpen}
      onClose={delayedClose}
      menuButton={
        <Box
          aria-label="menu"
          onClick={onOpen}
          onMouseEnter={onOpen}
          onMouseLeave={delayedClose}
        >
          {menuButton}
        </Box>
      }
      options={
        <Menu isOpen={true}>
          <MenuList
            minWidth={150}
            zIndex={1000}
            onMouseEnter={onOpen}
            onMouseLeave={delayedClose}
          >
            {menuContent}
          </MenuList>
        </Menu>
      }
    />
  );
}
