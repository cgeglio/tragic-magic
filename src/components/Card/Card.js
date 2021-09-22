import React from "react";
import PropTypes from "prop-types";
import cardBack from "../../images/cardBack.jpeg";
import "./card.scss";

export default function Card({ card }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const { name, name_short: nameShort, meaning_up: meaning, desc } = card;
  const imgSrc = `${process.env.PUBLIC_URL}/cardAssets/${nameShort}.jpg`;

  return (
    <article className="flip-card fade-in">
      <div className="flip-card-inner">
        <img
          style={{ opacity: isVisible ? "0.1" : 1 }}
          src={imgSrc}
          alt={name}
          className="flip-card-back"
          onMouseEnter={() => setIsVisible(true)}
        />
        {
          <div
            className={`overlay ${isVisible ? "visible" : "hidden"}`}
            onMouseLeave={() => setIsVisible(false)}
          >
            <div className="card-details">
              <h3>{name}</h3>
              <h4>Meaning:</h4>
              <p>{meaning}</p>
              <h4>Description:</h4>
              <p>{desc}</p>
            </div>
          </div>
        }
        <img src={cardBack} alt="Tarot card back" className="flip-card-front" />
      </div>
    </article>
  );
}

Card.propTypes = {
  card: PropTypes.object,
};
