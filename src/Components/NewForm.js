import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./form.css";
const apiUrl = process.env.REACT_APP_API_URL;

export default function NewForm() {
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    is_favorite: false,
    time: "",
  });

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
        <input type="text" id="name" onChange={handleTextChange} />
        <br />
        <label htmlFor="Artist">Artist</label>
        <input type="text" id="artist" onChange={handleTextChange} />
        <br />
        <label htmlFor="Album">Album</label>
        <input type="text" id="album" onChange={handleTextChange} />
        <br />
        <label htmlFor="Favorited">Favorited</label>
        <input
          type="checkbox"
          id="is_favorite"
          onChange={handleCheckBoxChange}
        />
        <br />
        <label htmlFor="Time">Time</label>
        <input type="text" id="time" onChange={handleTextChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
