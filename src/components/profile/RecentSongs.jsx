function RecentSongs({ recentSongs }) {
  return (
    <div className="card bg-dark text-white mb-4 p-3 shadow rounded-4">
      <h4 className="mb-3">Reproducciones recientes</h4>
      {recentSongs.map((track, idx) => (
        <div key={idx} className="d-flex align-items-center mb-3">
          <img
            src={track.track.album.images[0]?.url || "/image/default.jpg"}
            alt={track.track.name}
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
            className="rounded me-3"
          />
          <p className="mb-0 fw-bold">{track.track.name}</p>
        </div>
      ))}
    </div>
  );
}

export default RecentSongs;

