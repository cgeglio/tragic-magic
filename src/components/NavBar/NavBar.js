import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Hamburger from "react-hamburgers";
import "./navBar.scss";

export default function NavBar() {
  const [isActive, setIsActive] = React.useState(false);

  const renderMenu = () => {
    return (
      <nav>
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/embroidery">Embroidery</Link>
        </div>
        <div className="nav-item">
          <Link to="/illustration">Illustration</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
      </nav>
    );
  };

  return isMobile ? (
    <>
      <Hamburger
        active={isActive}
        type="squeeze"
        onClick={() => setIsActive((prev) => !prev)}
      />
      {isActive && renderMenu()}
    </>
  ) : (
    renderMenu()
  );
}
