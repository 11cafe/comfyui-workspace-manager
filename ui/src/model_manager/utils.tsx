// @ts-ignore
import { deleteFile } from "./Api";
// @ts-ignore
import { app, ComfyApp } from "/scripts/app.js";

export function formatTimestamp(
  unixTimestamp: number,
  showSec: boolean = false
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
  let res = `${month}-${day}-${year} ${hours}:${minutes}`;
  if (showSec) {
    return res + `:${seconds}`;
  }
  return res;
}

export function KBtoGB(kilobytes: number, decimalPlaces: number = 1) {
  var sizeInGB = kilobytes / 1048576; // 1024 * 1024
  return Number(sizeInGB.toFixed(decimalPlaces));
}
