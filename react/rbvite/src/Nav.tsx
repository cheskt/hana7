import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="/" replace>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/my">My</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/hello">About</Link>
        </li>
      </ul>
    </>
  );
}
