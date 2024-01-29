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

export function pullAuthTokenCloseIfExist() {
  if (window.location.href.includes(COMFYSPACE_AUTH_REDIRECT_URL + "#")) {
    const paramsString = window.location.href.split("#")[1];
    const params = new URLSearchParams(paramsString);

    const accessToken = params.get("access_token");
    window.opener.postMessage(
      { comfyspace_authToken: accessToken },
      "http://127.0.0.1:8188/",
    );
    window.close();
  }
}

export function authTokenListener(event: MessageEvent) {
  const { comfyspace_authToken } = event.data;
  if (comfyspace_authToken) {
    fetch(`${COGNITO_DOMAIN}/oauth2/userInfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${comfyspace_authToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("User Info:", data);
      })
      .catch(error => {
        console.error("Error fetching user info:", error);
      });
  }
}
