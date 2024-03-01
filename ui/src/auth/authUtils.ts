import { COMFYSPACE_AUTH_REDIRECT_URL } from "../const";

const COGNITO_DOMAIN = import.meta.env.VITE_AWS_COGNITO_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_AWS_COGNITO_CLIENT_ID;
const redirectUri = encodeURIComponent(COMFYSPACE_AUTH_REDIRECT_URL);

export function openCognitoPopup() {
  const cognitoUrl = `${COGNITO_DOMAIN}/login`;
  const responseType = "token";

  const popupUrl = `${cognitoUrl}?response_type=${responseType}&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}`;
  const popupWindow = window.open(
    popupUrl,
    "ComfyspaceLogin",
    "width=800,height=600",
  );

  popupWindow?.focus();
}
