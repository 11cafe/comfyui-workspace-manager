import { Checkbox, Stack } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";

export default function ShowNsfwModelThumbnailSettings() {
  const [checked, setChecked] = useState(false);

  const updateShowThumbnail = () => {
    userSettingsTable?.getSetting("showNsfwModelThumbnail").then((res) => {
      setChecked(res ?? false);
    });
  };

  useEffect(() => {
    updateShowThumbnail();
  }, []);

  const onShowThumbnailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const state = e.target.checked;
    userSettingsTable
      ?.upsert({
        showNsfwModelThumbnail: state,
      })
      .then(() => {
        updateShowThumbnail();
        window.dispatchEvent(new Event("showNsfwModelThumbnail"));
      });
  };

  return (
    <Stack>
      <Checkbox isChecked={checked} onChange={onShowThumbnailsChange}>
        Show NSFW model thumbnails
      </Checkbox>
    </Stack>
  );
}
