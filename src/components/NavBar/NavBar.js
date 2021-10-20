import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Hamburger from "react-hamburgers";
import "./navBar.scss";

export default function NavBar() {
  const [isActive, setIsActive] = React.useState(false);

  const toggleIsActive = () => setIsActive((prev) => !prev);

  const renderMenu = () => {
    return (
      <nav onClick={toggleIsActive}>
        {!isMobile && (
          <Link className="nav-item app-name" to="/">
            Tragic Magic
          </Link>
        )}
        <div className="nav-items">
          <Link className="nav-item" to="/">
            Home
          </Link>
          <Link className="nav-item" to="/about">
            About
          </Link>
          <Link className="nav-item" to="/deck">
            Deck
          </Link>
        </div>
      </nav>
    );
  };

  return isMobile ? (
    <>
      <div className="mobile-nav-container">
        <div className="nav-item app-name">
          <Link to="/">Tragic Magic</Link>
        </div>
        <Hamburger active={isActive} type="squeeze" onClick={toggleIsActive} />
      </div>
      {isActive && renderMenu()}
    </>
  ) : (
    renderMenu()
  );
}
