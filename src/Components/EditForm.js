import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import "./form.css";
const apiUrl = process.env.REACT_APP_API_URL;

export default function EditForm() {
  let navigate = useNavigate();
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

  const [song, setSong] = useState({});

  function handleTextChange(event) {
    setSong({
      ...song,
      [event.target.id]: event.target.value,
    });
  }

  function handleCheckBoxChange(event) {
    setSong({
      ...song,
      is_favorite: !song.is_favorite,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${apiUrl}/songs`, song)
      .then(() => {
        navigate("/songs");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(song);

  return (
    <div className="form_wrapper">
      <h1>Add a new song</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="name"
          value={song.name}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="Artist">Artist</label>
        <input
          type="text"
          id="artist"
          value={song.artist}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="Album">Album</label>
        <input
          type="text"
          id="album"
          value={song.album}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="Favorited">Favorited</label>
        <input
          type="checkbox"
          id="is_favorite"
          value={song.is_favorite}
          onChange={handleCheckBoxChange}
        />
        <br />
        <label htmlFor="Time">Time</label>
        <input
          type="text"
          id="time"
          value={song.time}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
