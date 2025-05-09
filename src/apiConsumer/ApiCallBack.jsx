import { useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../auth/context/UserContext";
import { authTypes } from "../auth/types/authTypes";

// These are your Spotify credentials and redirect URI
const clientId = "8f253d07d35c44f9b78250440688ffe9";
const clientSecret = "1affe5dd4d8d4313acd4af76e64e5896";
const redirectUri = "https://2b29-2800-484-976f-bb00-acc1-bb52-d403-9396.ngrok-free.app/CallBack";

const ApiCallBack = () => {
  const navigate = useNavigate(); // Used to redirect to another page
  const location = useLocation(); // Get the current URL info
  const { dispatch } = useContext(UserContext); // Access global user state
  const calledRef = useRef(false); // Prevent calling the effect twice

  useEffect(() => {
    // If already called, do nothing
    if (calledRef.current) return;
    calledRef.current = true;

    // Get the "code" from the URL (sent by Spotify)
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");

    // If code exists, exchange it for an access token
    if (code) {
      fetchAccessToken(code);
    } else {
      console.error("No authorization code found");
    }
  }, [location]);

  // This function exchanges the code for an access token
  const fetchAccessToken = async (code) => {
    try {
      // Prepare the request body for Spotify
      const body = new URLSearchParams();
      body.append("grant_type", "authorization_code");
      body.append("code", code);
      body.append("redirect_uri", redirectUri);
      body.append("client_id", clientId);
      body.append("client_secret", clientSecret);

      // Send the request to Spotify
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Access token:", data.access_token);

        // Save the token in localStorage so you can use it later
        localStorage.setItem("spotify_token", data.access_token);

        // Mark the user as logged in in the global state
        dispatch({
          type: authTypes.login,
          payload: {
            user: {
              name: "Spotify User", // You can replace this with real data from Spotify
              provider: "spotify"
            }
          }
        });

        // Go to the homepage
        navigate("/");
      } else {
        console.error("Token exchange failed", data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div>
      <h2>Processing Spotify login...</h2>
    </div>
  );
};

export default ApiCallBack;
