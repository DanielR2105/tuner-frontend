import { Link } from "react-router-dom";

export default function Song({ song }) {
  let favorite = "";
  if (song.is_favorite === true) {
    favorite = "⭐";
  } else if (song.is_favorite === false) {
    favorite = "❌";
  }
  return (
    <div className="song">
      <Link to={`/songs/${song.id}`}>
        <h3>{song.name}</h3>
      </Link>
      <Link to={`/songs/${song.id}`}>
        <h3>{song.artist}</h3>
      </Link>
      <Link to={`/songs/${song.id}`}>
        <h3>{song.album}</h3>
      </Link>
      <Link to={`/songs/${song.id}`}>
        <h3>{favorite}</h3>
      </Link>
      <Link to={`/songs/${song.id}`}>
        <h3>{song.time}</h3>
      </Link>
    </div>
  );
}
