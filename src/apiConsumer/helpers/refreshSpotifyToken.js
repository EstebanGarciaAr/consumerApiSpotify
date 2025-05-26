import { spotifyRequest } from "./spotifyRequest";

export const getUserProfile = async () => {
  return await spotifyRequest("me");
};

export const getUserPlaylists = async () => {
  return await spotifyRequest("me/playlists");
};

export const getTopTracks = async (limit = 1) => {
  return await spotifyRequest(`me/top/tracks?limit=${limit}`);
};

export const getTopArtists = async (limit = 1) => {
  return await spotifyRequest(`me/top/artists?limit=${limit}`);
};

