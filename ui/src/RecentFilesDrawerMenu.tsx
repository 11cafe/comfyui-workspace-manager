import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from "@chakra-ui/react";
import {
  IconBurger,
  IconHistory,
  IconMenu2,
  IconSettings,
} from "@tabler/icons-react";
import ViewBackupsModal from "./ViewBackupsModal";
import ManageTagsModal from "./ManageTagsModal";
import { useState } from "react";

type Props = {
  //   onclose: () => void;
};
export default function RecentFilesDrawerMenu({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isManageTagsOpen, setIsManageTagsOpen] = useState(false);
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
            icon={<IconSettings size={16} />}
            fontSize={16}
          >
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => setIsManageTagsOpen(true)}
            icon={<IconHistory size={16} />}
            fontSize={16}
          >
            Manage Tags
          </MenuItem>
          <MenuItem
            onClick={onOpen}
            icon={<IconHistory size={16} />}
            fontSize={16}
          >
            Backups
          </MenuItem>
        </MenuList>
      </Menu>
      {isManageTagsOpen && (
        <ManageTagsModal onclose={() => setIsManageTagsOpen(false)} />
      )}
      {isOpen && <ViewBackupsModal onclose={onClose} />}
    </>
  );
}
