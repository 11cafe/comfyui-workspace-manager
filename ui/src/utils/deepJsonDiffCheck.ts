export const deepJsonDiffCheck = (oldData: any, newData: any) => {
  const oldDataNodes = oldData["nodes"] == null ? [] : oldData["nodes"];
  const newDataNodes = newData["nodes"] == null ? [] : newData["nodes"];
  oldData["nodes"] = [];
  newData["nodes"] = [];
  let equal = JSON.stringify(oldData) === JSON.stringify(newData);
  if (equal) {
    const array2Map = (map: any, obj: any) => {
      const oldOrder = obj["order"];
      const oldPos = obj["pos"];
      delete obj["order"];
      delete obj["pos"];
      map.set(obj["id"], JSON.stringify(obj));
      map.set(obj["id"] + "_pos", oldPos);
      obj["order"] = oldOrder;
      obj["pos"] = oldPos;
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
        if (typeof key === 'string' && key.includes("_pos")) {
          const newDataPos = newDataNodesMap.get(key);
          if (newDataPos == null || value == null || withoutDeviation(newDataPos[0], value[0], 5) || withoutDeviation(newDataPos[1], value[1], 5)) {
            equal = false;
            break;
          }
        } else if (newDataNodesMap.get(key) !== value) {
          equal = false;
          break;
        }
      }
    }
  }
  oldData["nodes"] = oldDataNodes;
  newData["nodes"] = newDataNodes;
  return equal;
};