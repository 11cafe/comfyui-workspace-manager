import { useEffect, useRef, useState } from 'react';
import { getAllModelsList } from '../../Api';
import type { ModelsListRespItem } from '../types';
// @ts-ignore
import { api } from "/scripts/api.js";

export const useUpdateModels = () => {
  // all model types
  const [modelTypeList, setModelTypeList] = useState<string[]>([]);

  // all models
  const [modelsList, setModelsList] = useState<ModelsListRespItem[]>([]);

  // loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initData();
    api.addEventListener("model_list", (e: { detail: ModelsListRespItem[] | "done" }) => {
      if (e.detail === "done") {
        setLoading(false);
      } else {
        updateModels(e.detail);
      }
    });
  }, []);

  const initData = async () => {
    const res = await getAllModelsList();
    if (!res) return;
    const { file_list, populate_done } = res;
    if (populate_done) setLoading(false);
    updateModels(file_list);
  };

  const updateModels = async (file_list: ModelsListRespItem[]) => {
    const modelTypeList = Array.from(
      new Set(file_list.map((item) => item.model_type))
    );
    // checkpoints must be in first
    const index = modelTypeList.indexOf("checkpoints");
    if (index > 0) {
      modelTypeList.splice(index, 1);
      modelTypeList.unshift("checkpoints");
    }
    setModelTypeList(modelTypeList);
    setModelsList(file_list);
  };

  return {
    modelTypeList,
    modelsList,
    loading,
  };
};
