import { useContext } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../auth/context/UserContext';
import "./styles/home.css"

function NavBar() {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      logout(); 
      navigate('/login');
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
            <span className="text-white fw-bold fs-5">spoty</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={handleLogout}>
                  logout
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
}
  
export default NavBar;
