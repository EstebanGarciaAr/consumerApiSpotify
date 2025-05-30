import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authenticateSpotify } from "../helpers/authenticateSpotify";
import { authTypes } from "../../auth/types/authTypes";


export const useSpotifyAuth = (dispatch) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code && !localStorage.getItem("spotify_code_used")) {
      localStorage.setItem("spotify_code_used", "true");

      authenticateSpotify(code)
        .then((data) => {
          const { access_token } = data;

          const user = {
            name: "Spotify User",
            provider: "spotify",
            token: access_token,
          };

          localStorage.setItem("user", JSON.stringify(user));

          dispatch({
            type: authTypes.login,
            payload: user,
          });

          const cleanUrl = new URL(window.location.href);
          cleanUrl.searchParams.delete("code");
          window.history.replaceState({}, document.title, cleanUrl.toString());
          localStorage.removeItem("spotify_code_verifier");
          localStorage.removeItem("spotify_code_used");
          navigate("/");
        })
        .catch(() => {
          localStorage.removeItem("spotify_code_verifier");
          localStorage.removeItem("spotify_code_used");
          navigate("/login");
        });
    }
  }, [location, navigate, dispatch]);
};
