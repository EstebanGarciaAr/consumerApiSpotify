import { spotifyConfig } from "../config/spotifyConfig";

export const authenticateSpotify = async (code) => {
  const { clientId, redirectUri } = spotifyConfig;

  const codeVerifier = localStorage.getItem("spotify_code_verifier");
  console.log("codeVerifier:", codeVerifier); 

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    code_verifier: codeVerifier,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Spotify token error:", errorData);
    throw new Error("Spotify authentication failed: " + JSON.stringify(errorData));
  }

  return response.json();
};
