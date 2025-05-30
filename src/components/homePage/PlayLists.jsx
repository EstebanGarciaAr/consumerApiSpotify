import { useContext, useState } from 'react';
import { EventContext } from '../../events/context/EventContext';
import SelectPlayListContext from '../../context/SelectPlayListContext';

function PlayLists({ playlists, showActions = true, onDeleteFromStorage }) {
  const { saveEvent } = useContext(EventContext);
  const { addSelectPlaylist, removeSelectPlaylist, isPlaylistSelected } = useContext(SelectPlayListContext);
  const [successMessageIndex, setSuccessMessageIndex] = useState(null); 
  const savePlayList = (event, playlist, index) => {
    event.stopPropagation();

    const { id, name, description, tracks, owner, images, external_urls } = playlist;

    saveEvent({
      spotifyId: id,
      name,
      description,
      tracks: { total: tracks.total, href: tracks.href },
      owner: { id: owner.id, displayName: owner.display_name },
      images,
      external_urls,
      savedAt: new Date().toISOString(),
    });

    
    setSuccessMessageIndex(index);
    setTimeout(() => setSuccessMessageIndex(null), 3000);
  };

  const showOnHome = (event, playlist) => {
    event.stopPropagation();
    if (isPlaylistSelected(playlist.id)) {
      removeSelectPlaylist(playlist.id);
    } else {
      addSelectPlaylist(playlist);
    }
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {playlists.map((playlist, index) => (
        <div key={index} className="col">
          <div className="card h-100 bg-secondary text-white">
            <img
              src={playlist.images?.[0]?.url || "/image/default.jpg"}
              className="card-img-top"
              alt={playlist.name}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{playlist.name}</h5>
              <p className="card-text">
                {playlist.description || "Playlist de Spotify"}
              </p>
              <p className="mb-0">
                {playlist.tracks.total} canciones <br />
                Creada por: {playlist.owner.display_name || playlist.owner.displayName}
              </p>
              {showActions && (
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <a
                    href={playlist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-light"
                    onClick={(event) => event.stopPropagation()}
                  >
                    Ver en Spotify
                  </a>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={(event) => savePlayList(event, playlist, index)}
                  >
                    Guardar PlayList
                  </button>
                </div>
              )}
              {!showActions && onDeleteFromStorage && (
                <button
                  className='btn btn-sm btn-danger mt-2'
                  style={{ marginRight: '10px' }}
                  onClick={(event) => {
                    event.stopPropagation();
                    onDeleteFromStorage(playlist.id)
                  }}
                >
                  Eliminar PlayList
                </button>
              )}
              {!showActions && onDeleteFromStorage && (
                  <button
                    className={`btn btn-sm ${isPlaylistSelected(playlist.id) ? 'btn-warning' : 'btn-info'} mt-2`}
                    onClick={(event) => showOnHome(event, playlist)}
                  >
                    {isPlaylistSelected(playlist.id) ? 'Eliminar de Home' : 'Descargar en Home'}
                  </button>
              {!showActions && (
                <button
                  className={`btn btn-sm ${isPlaylistSelected(playlist.id) ? 'btn-warning' : 'btn-info'} mt-2`}
                  onClick={(event) => showOnHome(event, playlist)}
                >
                  {isPlaylistSelected(playlist.id) ? 'Eliminar de Home' : 'Descargar en Home'}
                </button>
              )}
              {successMessageIndex === index && (
                <div className="alert alert-success mt-3 p-2 py-1">
                  Playlist guardada con éxito
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlayLists;
