import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <header>
        <article>
          <h1>
            <Link to="/">
              Tuner App
            </Link>
          </h1>
        </article>
        <nav>
            <div>
              <Link to="/songs">All Songs</Link>
              </div>
              <div>
              <Link to="/songs/new">Add Song</Link>
              </div>
        </nav>
      </header>
    );
  }