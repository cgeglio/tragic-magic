import React from "react";
import PropTypes from "prop-types";
import cardBack from "../../images/cardBack.jpeg";
import "./card.scss";

Card.propTypes = {
  card: PropTypes.object,
};

export default function Card({ card }) {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div className="card flip-card fade-in">
      <div className="flip-card-inner">
        <img
          style={{ opacity: isVisible ? "0.1" : 1 }}
          src={process.env.PUBLIC_URL + `/cardAssets/${card.name_short}.jpg`}
          alt={card.name}
          className="flip-card-back"
          onMouseOver={() => setIsVisible(true)}
        />
        {
          <div
            className={`overlay ${isVisible ? "visible" : "hidden"}`}
            onMouseLeave={() => setIsVisible(false)}
          >
            <div className="card-details">
              <h3>{card.name}</h3>
              <h4>Meaning:</h4>
              <p>{card.meaning_up}</p>
              <h4>Description:</h4>
              <p>{card.desc}</p>
            </div>
          </div>
        }
        <img src={cardBack} alt="Tarot card back" className="flip-card-front" />
      </div>
    </div>
  );
}
