// utils/encryptUtils
const defaultSalt = import.meta.env.VITE_SHARE_KEY_ENCODE_KEY;

export function encodeKey(text: string, salt: string = defaultSalt): string {
  const randomLength = Math.floor(Math.random() * 13) + 1; // Random length between 1 and 13
  const randomPadding = Math.random()
    .toString(36)
    .substring(2, 2 + randomLength);
  const input = randomPadding + salt + text;
  return btoa(encodeURIComponent(input));
}

export function decodeKey(encoded: string, salt: string = defaultSalt): string {
  const decoded = decodeURIComponent(atob(encoded));
  const saltIndex = decoded.indexOf(salt);
  if (saltIndex === -1) throw new Error("Invalid encoded string or salt");
  return decoded.slice(saltIndex + salt.length);
}
