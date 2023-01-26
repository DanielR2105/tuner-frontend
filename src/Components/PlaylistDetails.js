import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Song from "./Song";
const apiUrl = process.env.REACT_APP_API_URL;

export default function PlaylistDetails() {
  const [playlistSongs, setPlaylistSongs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${apiUrl}/songs/playlistsongs/${id}`)
      .then((res) => {
        setPlaylistSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const navigate = useNavigate();

  function goBack() {
    navigate("/playlists");
  }

  return (
    <div>
      <h1>Playlist Details</h1>
      {playlistSongs.map((song, id) => {
        return <Song key={id} song={song} />;
      })}
      <button onClick={goBack}>Back</button>
    </div>
  );
}
