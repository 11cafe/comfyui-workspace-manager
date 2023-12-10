import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import { IconBurger, IconHistory, IconMenu2 } from "@tabler/icons-react";
import ViewBackupsModal from "./ViewBackupsModal";

type Props = {
  //   onclose: () => void;
};
export default function RecentFilesDrawerMenu({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<IconMenu2 />}
          size={"sm"}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            onClick={onOpen}
            icon={<IconHistory size={16} />}
            fontSize={16}
          >
            Backups
          </MenuItem>
        </MenuList>
      </Menu>
      {isOpen && <ViewBackupsModal onclose={onClose} />}
    </>
  );
}
