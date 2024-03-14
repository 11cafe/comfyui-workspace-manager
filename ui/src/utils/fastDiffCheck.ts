import isEqual from "lodash.isequal";

const removeProperty = (objs: Array<any>, props: Array<any>) => {
  const save = [];
  for (let i = 0; i < objs.length; i++) {
    const saveItem = new Map();

    for (let j = 0; j < props.length; j++) {
      const key = props[j];
      saveItem.set(key, objs[i][key]);
      delete objs[i][key];
    }
    save.push(saveItem);
  }
  return save;
};

const recoverProperty = (
  objs: Array<any>,
  props: Array<any>,
  save: Array<any>,
) => {
  for (let i = 0; i < objs.length; i++) {
    for (let j = 0; j < props.length; j++) {
      const key = props[j];
      objs[i][key] = save[i].get(key);
    }
  }
};

export const fastDiffCheck = (oldData: any, newData: any) => {
  const oldDataNodes = oldData["nodes"] == null ? [] : oldData["nodes"];
  const newDataNodes = newData["nodes"] == null ? [] : newData["nodes"];
  oldData["nodes"] = [];
  newData["nodes"] = [];
  let equal = isEqual(oldData, newData);
  if (equal) {
    const array2Map = (map: any, obj: any) => {
      map.set(obj["id"], obj);
      map.set(obj["id"] + "_pos", obj["pos"]);
      map.set(obj["id"] + "_size", obj["size"]);
      return map;
    };
    const withoutDeviation = (a: any, b: any, c: any) => {
      return Math.abs(a - b) > c;
    };
    if (oldDataNodes.length == newDataNodes.length) {
      const oldDataNodesMap = oldDataNodes.reduce(array2Map, new Map());
      const newDataNodesMap = newDataNodes.reduce(array2Map, new Map());
      for (let [key, value] of oldDataNodesMap) {
        if (!newDataNodesMap.has(key)) {
          equal = false;
          break;
        }
        if (typeof key === "string") {
          if (key.includes("_pos")) {
            const newDataPos = newDataNodesMap.get(key);
            if (
              newDataPos == null ||
              value == null ||
              withoutDeviation(newDataPos[0], value[0], 1) ||
              withoutDeviation(newDataPos[1], value[1], 1)
            ) {
              equal = false;
              break;
            }
          } else if (key.includes("_size")) {
            const newDataSize = newDataNodesMap.get(key);
            if (
              newDataSize == null ||
              value == null ||
              withoutDeviation(newDataSize[0], value[0], 1) ||
              withoutDeviation(newDataSize[1], value[1], 1)
            ) {
              equal = false;
              break;
            }
          }
        } else {
          const newValue = newDataNodesMap.get(key);
          const saveProperty = removeProperty(
            [newValue, value],
            ["order", "pos", "size"],
          );
          const isSame = isEqual(newValue, value);
          recoverProperty(
            [newValue, value],
            ["order", "pos", "size"],
            saveProperty,
          );
          if (!isSame) {
            equal = false;
            break;
          }
        }
      }
    } else {
      equal = false;
    }
  }
  oldData["nodes"] = oldDataNodes;
  newData["nodes"] = newDataNodes;
  return equal;
};
