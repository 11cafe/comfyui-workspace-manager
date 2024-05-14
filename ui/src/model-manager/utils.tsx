// @ts-ignore
import { deleteFile } from "./Api";
export function formatTimestamp(
  unixTimestamp: number,
  showSec: boolean = false,
) {
  // Create a new Date object from the UNIX timestamp
  const date = new Date(unixTimestamp);

  // Get the day, month, year, hours, and minutes from the Date object
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // Format the date and time string
  const res = `${month}-${day}-${year} ${hours}:${minutes}`;
  if (showSec) {
    return res + `:${seconds}`;
  }
  return res;
}

export function KBtoGB(kilobytes: number, decimalPlaces: number = 1) {
  const KB_IN_MB = 1024;
  const MB_IN_GB = 1024;
  // Convert KB to MB
  const sizeInMB = kilobytes / KB_IN_MB;

  // If size is larger than or equal to 1 GB, format it in GB
  if (sizeInMB >= MB_IN_GB) {
    return (sizeInMB / MB_IN_GB).toFixed(decimalPlaces) + " GB";
  }
  // Otherwise, format it in MB
  else {
    return sizeInMB.toFixed(decimalPlaces) + " MB";
  }
}

// fro folder_path.py
export const modelExtensions = [
  "ckpt",
  "pt",
  "bin",
  "pth",
  "safetensors",
  "onnx",
];
