export const deepJsonDiffCheck = (oldData: any, newData: any) => {
  const oldDataNodes = oldData["nodes"] == null ? [] : oldData["nodes"];
  const newDataNodes = newData["nodes"] == null ? [] : newData["nodes"];
  oldData["nodes"] = [];
  newData["nodes"] = [];
  let equal = JSON.stringify(oldData) === JSON.stringify(newData);
  if (equal) {
    if (oldDataNodes.length == newDataNodes.length) {
      const oldDataNodesMap = oldDataNodes.reduce((map: any, obj: any) => {
        map.set(obj["id"], JSON.stringify(obj));
        return map;
      }, new Map());
      const newDataNodesMap = newDataNodes.reduce((map: any, obj: any) => {
        map.set(obj["id"], JSON.stringify(obj));
        return map;
      }, new Map());
      for (let [key, value] of oldDataNodesMap) {
        if (!newDataNodesMap.has(key) || newDataNodesMap.get(key) !== value) {
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
