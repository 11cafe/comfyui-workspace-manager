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
  const initDataInterval = useRef<number>();

  useEffect(() => {
    api.addEventListener("download_progress", (e: { detail: [] }) => {
      if (e.detail.length === 0) { // if download_progress is empty, that means download is done, so re-fetch data
        setLoading(true); // set loading to true to start interval
      }
    });
  }, []);

  useEffect(() => {
    if (loading && !initDataInterval.current) { // if loading and interval not started, start interval
      initDataInterval.current = setInterval(initData, 3000);
    } else if (!loading && initDataInterval.current) { // if not loading and interval is running, clear interval
      clearInterval(initDataInterval.current);
      initDataInterval.current = undefined;
    }

    return () => clearInterval(initDataInterval.current);
  }, [loading]);

  const initData = async () => {
    const res = await getAllModelsList();
    if (!res) return;
    const { file_list, populate_done } = res;
    if (populate_done) setLoading(false);
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

  const reFetchData = () => {
    setLoading(true);
  };

  return {
    modelTypeList,
    modelsList,
    loading,
    reFetchData,
  };
};
