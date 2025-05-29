import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../auth/context/UserContext";
import { getUserProfile } from "../../apiConsumer/helpers/spotifyApi";
import "./styles/home.css";

function NavBar({ onStoragePage = false }) {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getUserProfile()
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error("Error cargando perfil:", err);
        if (
          err.message?.includes("access token") ||
          err.message?.includes("401")
        ) {
          logout();
          navigate("/login");
        }

        setProfile(null);
      });
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/image/spotifyIcon.png"
            alt="spoty"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="text-white fw-bold fs-5">Spoty</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {location.pathname === "/" && (
              <li className="nav-item me-3">
                <Link to="/profile" className="nav-link p-0">
                  <img
                    src={profile?.images?.[0]?.url || "/image/default.jpg"}
                    alt="Profile"
                    className="rounded-circle"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </li>
            )}

            {location.pathname === "/profile" && (
              <Link to="/" className="btn btn-outline-light me-3">
                Home
              </Link>
            )}

            {onStoragePage ? ( 
              <li className="nav-item me-3">
                <Link to="/" className="btn btn-outline-light">
                  Home
                </Link>
              </li>
            ) : ( 
              <li className="nav-item me-3">
                <Link to="/storage" className="btn btn-outline-light">
                  Descargar
                </Link>
              </li>
            )}

            <li className="nav-item">
              <button
                type="button"
                className="btn btn-outline-light ms-2"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
