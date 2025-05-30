export const spotifyRequest = async (endpoint, method = "GET", body = null) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.token) {
    throw new Error("No Spotify access token available");
  }

  const headers = {
    Authorization: `Bearer ${user.token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    const error = await response.json();
    console.error("Spotify API error:", error);
    throw new Error(`Spotify API error: ${error.error?.message || "Unknown error"}`);
  }

  return response.json();
};
