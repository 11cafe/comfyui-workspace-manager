type JsonValue =
  | string
  | number
  | boolean
  | { [key: string]: JsonValue }
  | JsonValue[]
  | undefined;

export function deepCompare(
  json1: JsonValue,
  json2: JsonValue,
  path: string = "",
): boolean {
  if (
    typeof json1 === "object" &&
    json1 !== null &&
    typeof json2 === "object" &&
    json2 !== null
  ) {
    const keys1 = Object.keys(json1);
    const keys2 = Object.keys(json2);
    const allKeys = new Set([...keys1, ...keys2]);

    for (const key of allKeys) {
      const newPath = path ? `${path}.${key}` : key;
      const value1 = (json1 as { [key: string]: JsonValue })[key];
      const value2 = (json2 as { [key: string]: JsonValue })[key];

      if (
        (value1 === undefined && !keys2.includes(key)) ||
        (value2 === undefined && !keys1.includes(key))
      ) {
        continue; // Skip comparison if the value is undefined in one and missing in the other
      }

      if (!keys1.includes(key)) {
        console.log(
          `${newPath}: Missing in first JSON keys1`,
          keys1,
          "keys2",
          keys2,
          value1,
          value2,
        );
        return false;
      } else if (!keys2.includes(key)) {
        console.log(
          `${newPath}: Missing in 222 JSON keys2`,
          keys1,
          "keys2",
          keys2,
          value1,
          value2,
        );
        return false;
      } else {
        const isEqual = deepCompare(value1, value2, newPath);
        if (!isEqual) {
          return false;
        }
      }
    }
  } else if (json1 !== json2 && json1 !== undefined && json2 !== undefined) {
    console.log(`${path}: ${json1} != ${json2}`);
    return false;
  }
  return true;
}
