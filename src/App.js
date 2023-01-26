import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import NewForm from "./Components/NewForm";
import EditForm from "./Components/EditForm";
import Songs from "./Components/Songs";
import SongDetails from "./Components/SongDetails";
import Playlists from "./Components/Playlists";
import PlaylistDetails from "./Components/PlaylistDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/new" element={<NewForm />} />
          <Route path="/songs/:id" element={<SongDetails />} />
          <Route path="/songs/:id/edit" element={<EditForm />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:id" element={<PlaylistDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
