import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/embroidery">Embroidery</Link>
        </li>
        <li>
          <Link to="/illustration">Illustration</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
