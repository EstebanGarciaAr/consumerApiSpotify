import { useEffect, useState } from "react";
import {
  getUserProfile,
  getTopTracks,
  getTopArtists,
  getRecentlyPlayedTracks,
  getUserPlaylists,
} from "../apiConsumer/helpers/spotifyApi";

import NavBar from "../components/homePage/NavBar";
import Playlists from "../components/homePage/PlayLists";
import RecentSongs from "../components/profile/RecentSongs";
import "../components/homePage/styles/home.css";

export const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [recentSongs, setRecentSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    Promise.all([
      getUserProfile(),
      getTopTracks(5),
      getTopArtists(5),
      getRecentlyPlayedTracks(5),
      getUserPlaylists(),
    ])
      .then(
        ([
          profileData,
          topTracksData,
          topArtistsData,
          recentSongsData,
          playlistData,
        ]) => {
          setProfile(profileData);
          setTopTracks(topTracksData.items || []);
          setTopArtists(topArtistsData.items || []);
          setRecentSongs(recentSongsData.items || []);
          setPlaylists(playlistData.items || []);
        }
      )
      .catch(console.error);
  }, []);

  if (!profile) {
    return <p className="text-white">Cargando perfil...</p>;
  }

  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="container py-5 text-white">
          <br />
          <br />
          <div className="text-center mb-5">
            <img
              src={profile.images?.[0]?.url || "/image/default.jpg"}
              alt="Foto de perfil"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h2>{profile.display_name}</h2>
            <p>{profile.email}</p>
            <p>Seguidores: {profile.followers.total}</p>
          </div>

          <div className="card bg-dark text-white p-3 shadow rounded-4 mb-5">
            <h4>Tus playlist</h4>
            <Playlists playlists={playlists} />
          </div>

          <RecentSongs recentSongs={recentSongs} />

          <div className="row mb-4">
            {topTracks[0] && (
              <div className="col-md-6">
                <div className="card bg-dark text-white p-3 shadow rounded-4">
                  <h4>Canción más escuchada</h4>
                  <p>
                    {topTracks[0].name} - {topTracks[0].artists?.[0]?.name}
                  </p>
                  <img
                    src={topTracks[0].album?.images?.[0]?.url}
                    alt="Álbum"
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            )}
            {topArtists[0] && (
              <div className="col-md-6 mt-3 mt-md-0">
                <div className="card bg-dark text-white p-3 shadow rounded-4">
                  <h4>Artista más escuchado</h4>
                  <p>{topArtists[0].name}</p>
                  <img
                    src={topArtists[0].images?.[0]?.url}
                    alt="Artista"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    className="rounded-circle"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
