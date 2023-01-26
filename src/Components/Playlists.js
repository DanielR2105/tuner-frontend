import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Playlist from "./Playlist";
import "./songs.css";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/playlists`)
      .then((res) => {
        setPlaylists(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Here are your playlists</h1>
      <div className="headings">
        <h2>Name</h2>
        <h2>Creator</h2>
      </div>
      <div className="songs-grid">
        {playlists.map((playlist, index) => {
          return <Playlist key={index} playlist={playlist} />;
        })}
      </div>
    </div>
  );
}
