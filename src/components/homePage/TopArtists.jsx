
const TopArtists = ({ topArtists }) => {
  return (
    <div className="card bg-dark text-white p-4 mb-4 shadow rounded-4">
      <h4 className="mb-4">Top artistas más escuchados</h4>
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {topArtists.map((artist, idx) => (
          <div key={idx} className="col text-center">
            <div className="position-relative">
              <span
                className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-success"
                style={{ fontSize: "0.75rem" }}
              >
                #{idx + 1}
              </span>
              <img
                src={artist.images[0]?.url || "/image/default.jpg"}
                alt={artist.name}
                className="rounded-circle mb-2"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
            </div>
            <p className="mb-0">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
