const CIVIT_API_KEY_STORAGE_KEY = "WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";
export function getCivitApiKey() {
  return localStorage.getItem(CIVIT_API_KEY_STORAGE_KEY);
}

export function setCivitApiKey(apiKey: string) {
  localStorage.setItem(CIVIT_API_KEY_STORAGE_KEY, apiKey);
}
