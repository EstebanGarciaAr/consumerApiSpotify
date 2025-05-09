import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../auth/context/UserContext"; 

const ApiLocalStorage = () => {
  const navigate = useNavigate();
  const { setUserState } = useContext(UserContext);

  useEffect(() => {
    //Get the token from localStorage
    const token = localStorage.getItem("spotify_token");

    if (token) {
  

      //Update the user state in context
      setUserState({
        isAuthenticated: true,
        token: token,
        provider: "spotify",
      });

      //Redirect the user to a protected route or homepage
      navigate("/homepage"); 
    } else {
      //No token, send user back to login
      navigate("/login");
    }
  }, [navigate, setUserState]);

  return null; //This component doesn't render anything
};

export default ApiLocalStorage;
