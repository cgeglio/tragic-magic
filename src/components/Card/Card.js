import React from "react";
import PropTypes from "prop-types";
import { Image } from "antd";
import cardBack from "../../images/cardBack.jpeg";
import "./card.scss";

export default function Card({ card }) {
  const { name, name_short: nameShort, meaning_up: meaning, desc } = card;
  const imgSrc = `${process.env.PUBLIC_URL}/cardAssets/${nameShort}.jpg`;

  const cardDetails = (
    <div className="card-details">
      <div className="card-name">{name}</div>
      <div className="card-category">Meaning:</div>
      <div className="card-description">{meaning}</div>
      <div className="card-category">Description:</div>
      <div className="card-description">{desc}</div>
    </div>
  );

  return (
    <article className="flip-card fade-in">
      <div className="flip-card-inner">
        <div className="flip-card-back">
          <Image
            preview={{ mask: cardDetails, maskClassName: "customize-mask" }}
            src={imgSrc}
            alt={name}
          />
        </div>
        <img src={cardBack} alt="Tarot card back" className="flip-card-front" />
      </div>
    </article>
  );
}

Card.propTypes = {
  card: PropTypes.object,
};
