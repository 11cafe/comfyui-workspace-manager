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
  IconTag,
} from "@tabler/icons-react";
import ViewBackupsModal from "../ViewBackupsModal";
import ManageTagsModal from "./ManageTagsModal";
import { useState } from "react";
import WorkspaceSettingsModal from "./WorkspaceSettingsModal";

type Props = {
  //   onclose: () => void;
};
export default function RecentFilesDrawerMenu({}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isManageTagsOpen, setIsManageTagsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
            onClick={() => setIsSettingsOpen(true)}
            icon={<IconSettings size={16} />}
            fontSize={16}
          >
            Settings
          </MenuItem>
          <MenuItem
            onClick={() => setIsManageTagsOpen(true)}
            icon={<IconTag size={16} />}
            fontSize={16}
          >
            Manage Tags
          </MenuItem>
          <MenuItem
            onClick={onOpen}
            icon={<IconHistory size={16} />}
            fontSize={16}
          >
            Backups (Experimental)
          </MenuItem>
        </MenuList>
      </Menu>
      {isManageTagsOpen && (
        <ManageTagsModal onclose={() => setIsManageTagsOpen(false)} />
      )}
      {isSettingsOpen && (
        <WorkspaceSettingsModal onclose={() => setIsSettingsOpen(false)} />
      )}
      {isOpen && <ViewBackupsModal onclose={onClose} />}
    </>
  );
}
