import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "react-hamburgers";
import useIsMobile from "../../hooks/useIsMobile";
import { useReadingContext } from "../../contexts/ReadingContext";
import paths from "../../paths";
import "./navBar.scss";

export default function NavBar() {
  const isMobile = useIsMobile();
  const { resetReading } = useReadingContext();
  const [isActive, setIsActive] = React.useState(false);
  const toggleIsActive = () => setIsActive((prev) => !prev);

  const handleReturnToHome = () => {
    if (window.location.pathname !== paths.home()) {
      resetReading();
    }
  };

  const renderMenu = () => {
    return (
      <nav onClick={toggleIsActive}>
        {!isMobile && (
          <Link
            className="nav-item app-name"
            to={paths.home()}
            onClick={handleReturnToHome}
          >
            Tragic Magic
          </Link>
        )}
        <div className="nav-items">
          <Link
            className="nav-item"
            to={paths.home()}
            onClick={handleReturnToHome}
          >
            Home
          </Link>
          <Link className="nav-item" to={paths.about()}>
            About
          </Link>
          <Link className="nav-item" to={paths.deck()}>
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
          <Link to={paths.home()} onClick={handleReturnToHome}>
            Tragic Magic
          </Link>
        </div>
        <Hamburger active={isActive} type="squeeze" onClick={toggleIsActive} />
      </div>
      {isActive && renderMenu()}
    </>
  ) : (
    renderMenu()
  );
}
