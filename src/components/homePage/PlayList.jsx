
function Playlist({ title, description, imageUrl }) {
    return (
      <div className="col">
        <div className="card h-100 shadow bg-dark text-white">
          <img src={imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="boton-card">
              Seguir playlist
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Playlist;