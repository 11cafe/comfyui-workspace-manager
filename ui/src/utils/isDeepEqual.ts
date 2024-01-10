export function isDeepEqual(obj1: Object, obj2: Object) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 == null ||
    obj2 == null
  ) {
    console.log("1111111");
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    console.log("keys1", keys1);
    console.log("keys2", keys2);
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      console.log("333333");
      return false;
    }

    if (typeof obj1[key] === "function" || typeof obj2[key] === "function") {
      if (obj1[key].toString() !== obj2[key].toString()) {
        console.log("44444444");
        return false;
      }
    } else {
      if (!isDeepEqual(obj1[key], obj2[key])) {
        // console.log("555555555");
        return false;
      }
    }
  }

  return true;
}
