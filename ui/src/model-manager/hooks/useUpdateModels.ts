import { useEffect, useRef, useState } from 'react';
import { getAllModelsList } from '../../Api';
import type { ModelsListRespItem } from '../types';
// @ts-ignore
import { api } from "/scripts/api.js";

export const useUpdateModels = () => {
  // all model types
  const [modelTypeList, setModelTypeList] = useState<string[]>(["checkpoints"]);

  // all models
  const [modelsList, setModelsList] = useState<ModelsListRespItem[]>([]);

  // loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initData();
    api.addEventListener("model_list", (e: { detail: ModelsListRespItem[] }) => {
        updateModels(e.detail);
    });
  }, []);

  const initData = async () => {
    const file_list = await getAllModelsList();
    updateModels(file_list);
  };

  const updateModels = async (file_list?: ModelsListRespItem[]) => {
    if (!file_list) return;
    setLoading(false);
    const modelTypeList = Array.from(
      new Set(file_list.map((item) => item.model_type))
    );
    // checkpoints must be in first
    const index = modelTypeList.indexOf("checkpoints");
    if (index >= 0) {
      modelTypeList.splice(index, 1);
    }
    modelTypeList.unshift("checkpoints");
    setModelTypeList(modelTypeList);
    setModelsList(file_list);
  };

  return {
    modelTypeList,
    modelsList,
    loading,
  };
};
