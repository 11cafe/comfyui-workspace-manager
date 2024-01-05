import { COMFYSPACE_AUTH_REDIRECT_URL } from "../const";

export let popupWindow: Window | null = null;
const COGNITO_DOMAIN = import.meta.env.VITE_AWS_COGNITO_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_AWS_COGNITO_CLIENT_ID;
const redirectUri = encodeURIComponent(COMFYSPACE_AUTH_REDIRECT_URL);

export function openCognitoPopup() {
  const cognitoUrl = `${COGNITO_DOMAIN}/login`;
  const responseType = "token";

  const popupUrl = `${cognitoUrl}?response_type=${responseType}&client_id=${CLIENT_ID}&redirect_uri=${redirectUri}`;
  popupWindow = window.open(
    popupUrl,
    "ComfyspaceLogin",
    "width=800,height=600"
  );

  popupWindow?.focus();
}

export function pullAuthTokenCloseIfExist() {
  console.log("window.location.href", window.location.href);
  if (window.location.href.includes(COMFYSPACE_AUTH_REDIRECT_URL + "#")) {
    const paramsString = window.location.href.split("#")[1];
    let params = new URLSearchParams(paramsString);

    let accessToken = params.get("access_token");
    console.log("accessToken", accessToken);
    window.opener.postMessage(
      { comfyspace_authToken: accessToken },
      "http://127.0.0.1:8188/"
    );
    window.close();
  }
}

export function authTokenListener(event: MessageEvent) {
  const { comfyspace_authToken } = event.data;
  if (comfyspace_authToken) {
    console.log("received new code", comfyspace_authToken);
    fetch(`${COGNITO_DOMAIN}/oauth2/userInfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${comfyspace_authToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User Info:", data);
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
      });
  }
}

const exchangeCodeForToken = async (code: string) => {
  const tokenUrl = `${COGNITO_DOMAIN}/oauth2/token`;
  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  const details = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    code: code,
    redirect_uri: redirectUri,
  };

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: headers,
      body: details,
    });
    console.log("response", response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("retrieved token", data);
    // Use the tokens as per your requirement
    // For example: setUserInfo(data.id_token);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
