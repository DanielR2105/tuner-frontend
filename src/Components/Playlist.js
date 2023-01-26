import { Link } from "react-router-dom";

export default function Playlist({ playlist }) {
  return (
    <div className="song">
      <Link to={`/playlists/${playlist.id}`}>
        <h3>{playlist.name}</h3>
      </Link>
      <Link to={`/playlists/${playlist.id}`}>
        <h3>{playlist.creator}</h3>
      </Link>
    </div>
  );
}
