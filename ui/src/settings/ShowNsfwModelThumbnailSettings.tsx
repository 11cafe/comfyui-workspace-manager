import { Checkbox } from "@chakra-ui/react";
import { useEffect, ChangeEvent, useState } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Model } from "../types/dbTypes";
import { fetchCivitModelFromHashKey } from "../utils/civitUtils";

export default function ShowNsfwModelThumbnailSettings() {
  const [checkedState, setChecked] = useState(false);

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
        reFetchThumbnails();
        window.dispatchEvent(new Event("showNsfwModelThumbnail"));
      });
  };

  const reFetchThumbnails = async () => {
    const models = await indexdb.models.toArray();
    for (let i = 0; i < models.length; i += 5) {
      // fetch 5 at a time, to avoid rate limit
      const slice = models.slice(i, i + 5);
      await Promise.all(slice.map(getThumbnail));
    }
  };
  const getThumbnail = async (model: Model) => {
    try {
      if (model.fileHash == null) return;
      const json = await fetchCivitModelFromHashKey(model.fileHash);
      const imageUrl = json.imageUrl;
      indexdb.models.update(model.id, {
        imageUrl: imageUrl ?? null,
      });
    } catch (e) {}
  };

  return (
    <Checkbox isChecked={checkedState} onChange={onShowThumbnailsChange}>
      Show NSFW
    </Checkbox>
  );
}
