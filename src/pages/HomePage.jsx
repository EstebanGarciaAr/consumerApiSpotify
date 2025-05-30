
import { useEffect, useState, useContext } from "react";
import {
  getTopTracks,
  getTopArtists,
  getUserPlaylists,
} from "../apiConsumer/helpers/spotifyApi";

import NavBar from "../components/homePage/NavBar";
import Playlists from "../components/homePage/PlayLists";
import TopArtists from "../components/homePage/TopArtists"; 
import "../components/homePage/styles/home.css";
import SelectPlayListContext from "../context/SelectPlayListContext"

function HomePage() {
  const [topTrack, setTopTrack] = useState(null);
  const [topArtist, setTopArtist] = useState(null);
  const [topArtists, setTopArtists] = useState([]); 
  const [playlists, setPlaylists] = useState([]);
  const { selectPlaylists } = useContext(SelectPlayListContext);

  useEffect(() => {
    Promise.all([getTopTracks(1), getTopArtists(5), getUserPlaylists()])
      .then(([tracks, artists, userPlaylists]) => {
        setTopTrack(tracks.items?.[0] || null);
        setTopArtist(artists.items?.[0] || null);
        setTopArtists(artists.items || []);
        setPlaylists(userPlaylists.items || []);
      })
      .catch(console.error);
  }, []);

  const formatDuration = (ms) => {
    const minutos = Math.floor(ms / 60000);
    const segundos = Math.floor((ms % 60000) / 1000)
      .toString()
      .padStart(2, "0");
    return `${minutos}:${segundos}`;
  };

  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="container py-5 text-white">
          <br />
          <br />
          <h1 className="text-center mb-5">Tus playlists</h1>

          <div className="card bg-dark text-white p-3 shadow rounded-4 mb-5">
            <Playlists playlists={playlists} />
          </div>

          <div className="row justify-content-center text-center">
            {topTrack && (
              <div className="col-md-6 mb-5">
                <h1 className="mb-3">Canción más escuchada</h1>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="vinyl-image">
                        <img
                          src={
                            topTrack.album?.images?.[0]?.url ||
                            "/image/default.jpg"
                          }
                          alt="Canción"
                        />
                      </div>
                      <h5 className="mt-3">{topTrack.name}</h5>
                      <p>{topTrack.artists?.[0]?.name}</p>
                    </div>
                    <div className="flip-card-back">
                      <h5>{topTrack.name}</h5>
                      <p>Duración: {formatDuration(topTrack.duration_ms)}</p>
                      <p>Popularidad: {topTrack.popularity}/100</p>
                      <p>Álbum: {topTrack.album?.name}</p>
                      <p>Lanzamiento: {topTrack.album?.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {topArtist && (
              <div className="col-md-6 mb-5">
                <h1 className="mb-3">Artista más escuchado</h1>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="vinyl-image">
                        <img
                          src={
                            topArtist.images?.[0]?.url || "/image/default.jpg"
                          }
                          alt="Artista"
                        />
                      </div>
                      <h5 className="mt-3">{topArtist.name}</h5>
                    </div>
                    <div className="flip-card-back">
                      <h5>{topArtist.name}</h5>
                      <p>Géneros: {topArtist.genres?.join(", ") || "N/A"}</p>
                      <p>Popularidad: {topArtist.popularity}/100</p>
                      <p>
                        Seguidores:{" "}
                        {topArtist.followers.total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <TopArtists topArtists={topArtists} /> 

          <div className="mt-5">
            <h2 className="text-center mb-5">Playlists de Amigos</h2>
            {selectPlaylists.length > 0 ? (
              <div className="card bg-dark text-white p-3 shadow rounded-4">
                <Playlists playlists={selectPlaylists} showActions={false} />
              </div>
            ) : (
              <p className="mt-3">Descarga PlayList de tus Amigos.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
