export function openCognitoPopup() {
  const cognitoUrl = import.meta.env.VITE_AWS_COGNITO_URL;
  const responseType = "code";
  const clientId = import.meta.env.VITE_AWS_COGNITO_CLIENT_ID;
  const redirectUri = encodeURIComponent(
    "http://localhost:8188/comfyspace_auth"
  );

  const popupUrl = `${cognitoUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}`;
  const popupWindow = window.open(
    popupUrl,
    "CognitoLogin",
    "width=800,height=600"
  );

  popupWindow?.focus();
}
