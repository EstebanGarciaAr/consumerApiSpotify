import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../events/context/EventContext';
import NavBar from '../components/homePage/NavBar';
import PlayLists from '../components/homePage/PlayLists'; 
import "../components/homePage/styles/home.css";

const StoragePage = () => {
  const { fetchEvents } = useContext(EventContext);
  const [savedPlaylists, setSavedPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSavedPlaylists = async () => {
      setLoading(true);
      setError(null);
      try {
        const events = await fetchEvents();
        const playlistsFromEvents = events.filter(event => event.spotifyId);
        setSavedPlaylists(playlistsFromEvents);
      } catch (err) {
        console.error('Error al cargar playlists guardadas:', err);
        setError('Error al cargar las playlists guardadas.');
      } finally {
        setLoading(false);
      }
    };

    loadSavedPlaylists();
  }, [fetchEvents]);

  if (loading) {
    return (
      <div>
        <NavBar onStoragePage={true}/>
        <div className="container py-5 text-white">
          <h2>Cargando playlists guardadas...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <NavBar onStoragePage={true}/>
        <div className="container py-5 text-white">
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  
  return (
    <div className="home-container">
      <NavBar onStoragePage={true}/>
      <div className="container py-5 text-white">
        <br/>
        <br/>
        <h2 className="text-center mb-5">Playlists de Amigos</h2>
        {savedPlaylists.length > 0 ? (
            <PlayLists playlists={savedPlaylists} showActions={false} />
        ) : (
          <p>No has guardado ninguna playlist aun.</p>
        )}
      </div>
    </div>
  );
};

export default StoragePage;