import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;

export default function SongDetails() {
  const [song, setSong] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${apiUrl}/songs/${id}`)
      .then((res) => {
        setSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const navigate = useNavigate();

  let favorite = "";
  if (song.is_favorite === true) {
    favorite = "⭐";
  } else if (song.is_favorite === false) {
    favorite = "❌";
  }

  function handleDelete() {
    axios
      .delete(`${apiUrl}/songs/${id}`)
      .then(() => {
        navigate("/songs");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function goBack() {
    navigate("/songs");
  }

  return (
    <div>
      <h1>Song Details</h1>
      <h2>Name: {song.name}</h2>
      <h2>Artist: {song.artist}</h2>
      <h2>Album: {song.album}</h2>
      <h2>Favorited: {favorite}</h2>
      <h2>Runtime: {song.time}</h2>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={goBack}>Back</button>
      <Link to={`/songs/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}
