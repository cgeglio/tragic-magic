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
          <div className="nav-item app-name">
            <Link to="/">Tragic Magic</Link>
          </div>
        )}
        <div className="nav-items">
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-item">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-item">
            <Link to="/deck">Deck</Link>
          </div>
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
