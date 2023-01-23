import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Song from "./Song";
import "./songs.css";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/songs`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Here are your songs</h1>
      <Link to={"/songs/new"}>
        <h2>Click to add a new song</h2>
      </Link>
      <div className="headings">
        <h2>Name</h2>
        <h2>Artist</h2>
        <h2>Album</h2>
        <h2>Favorited</h2>
        <h2>Runtime</h2>
      </div>

      <div className="songs-grid">
        {songs.map((song, index) => {
          return <Song key={index} song={song} />;
        })}
      </div>
    </div>
  );
}
