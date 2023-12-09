import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IconBurger, IconHistory, IconMenu2 } from "@tabler/icons-react";

type Props = {
  //   onclose: () => void;
};
export default function RecentFilesDrawerMenu({}: Props) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IconMenu2 />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<IconHistory />}>Backups</MenuItem>
      </MenuList>
    </Menu>
  );
}
