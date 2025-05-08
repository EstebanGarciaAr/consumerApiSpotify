import PlayList from "../components/homePage/PlayList";
import NavBar from "../components/homePage/NavBar";
import "../components/homePage/styles/home.css"
const Playlists = [
  {
    title: "Play list de tus amigos",
    description: "escucha lo mejor de tus amigos.",
    imageUrl: "/image/ejercicio.jpg",
    spotifyUrl: "https://open.spotify.com/playlist/1",
  },
  {
    title: "Play list de tus amigos",
    description: "escucha lo mejor de tus amigos.",
    imageUrl: "/image/techno.jpg",
    spotifyUrl: "https://open.spotify.com/playlist/2",
  },
  {
    title: "Play list de tus amigos",
    description: "escucha lo mejor de tus amigos.",
    imageUrl: "/image/rock.jpg",
    spotifyUrl: "https://open.spotify.com/playlist/3",
  },
];

export function HomePage() {
  return (
    <>
      <NavBar/>
      <br />
      <br />
      <div className="home-container">
        <div className="container py-5">
          <h1 className="text-center mb-5 text-white">
            Playlists Destacadas de tus amigos{" "}
          </h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {Playlists.map((objet, i) => ( 
              <PlayList key={i} {...objet} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

