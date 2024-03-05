import { Checkbox } from "@chakra-ui/react";
import { useEffect, ChangeEvent } from "react";
import { userSettingsTable } from "../db-tables/WorkspaceDB";
import { indexdb } from "../db-tables/indexdb";
import { Model } from "../types/dbTypes";
import { useStateRef } from "../customHooks/useStateRef";

interface ResponsePartial {
  id: number;
  modelId: number;
  name: string;
  model: {
    name: string;
    type: string;
    nsfw: boolean;
  };
  images: {
    url: string;
    nsfw: "None" | "Soft" | "Mature" | "X";
    width: number;
    height: number;
    hash: string;
  }[];
}

export default function ShowNsfwModelThumbnailSettings() {
  const [checkedState, setChecked, checked] = useStateRef(false);

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
      const url = `https://civitai.com/api/v1/model-versions/by-hash/${model.fileHash}`;
      const resp = await fetch(url);
      const json: ResponsePartial = await resp.json();
      let image_url: string | undefined;
      if (checked.current) {
        image_url = json?.images?.[0]?.url;
      } else if (!json.model.nsfw) {
        const sfwImage = json.images.find((i) => i.nsfw === "None");
        image_url = sfwImage?.url;
      }

      indexdb.models.update(model.id, {
        imageUrl: image_url ?? null,
      });
    } catch (e) {
      /* ignore */
    }
  };

  return (
    <Checkbox isChecked={checkedState} onChange={onShowThumbnailsChange}>
      Show NSFW
    </Checkbox>
  );
}
