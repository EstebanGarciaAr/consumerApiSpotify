
function PlayLists({ playlists }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {playlists.map((playlist, index) => (
        <div key={index} className="col">
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-white"
          >
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
                  Creada por: {playlist.owner.display_name}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PlayLists;


