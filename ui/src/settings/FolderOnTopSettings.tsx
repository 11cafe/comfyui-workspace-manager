import { Checkbox, Stack } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent, useContext } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { RecentFilesContext } from "../WorkspaceContext";

export default function FolderOnTopSettings() {
  const { setRefreshFolderStamp } = useContext(RecentFilesContext);
  const [checked, setChecked] = useState(false);

  const getAutoSave = () => {
    userSettingsTable?.getSetting("foldersOnTop").then((res) => {
      setChecked(!!res);
    });
  };

  const onFolderOnTopChange = (e: ChangeEvent<HTMLInputElement>) => {
    const state = e.target.checked;
    userSettingsTable
      ?.upsert({
        foldersOnTop: state,
      })
      .then(() => {
        getAutoSave();
        setRefreshFolderStamp(Date.now());
      });
  };

  useEffect(() => {
    getAutoSave();
  }, []);

  return (
    <Stack>
      <Checkbox isChecked={checked} onChange={onFolderOnTopChange}>
        Folders always on top
      </Checkbox>
    </Stack>
  );
}
