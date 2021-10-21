import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image, Modal } from "antd";
import cardBack from "../../images/card-back-01.png";
import useIsMobile from "../../hooks/useIsMobile";
import "./card.scss";

export default function Card({ card }) {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const { name, name_short: nameShort, meaning_up: meaning, desc } = card;

  const imgSrc = `${process.env.PUBLIC_URL}/cardAssets/${nameShort}.jpg`;

  const cardDetails = (
    <div className="card-back-details">
      <div className="card-name">{name}</div>
      <div className="card-category">Meaning:</div>
      <div className="card-description">{meaning}</div>
      <div className="card-category">Description:</div>
      <div className="card-description">{desc}</div>
    </div>
  );

  const renderCardBack = () => {
    return (
      <Image
        preview={{ mask: cardDetails, maskClassName: "customize-mask" }}
        src={imgSrc}
        alt={name}
      />
    );
  };

  const renderMobileCardBack = () => {
    return (
      <>
        <div onClick={() => setIsVisible(true)}>
          <Image preview={false} src={imgSrc} alt={name} />
        </div>
        <Modal
          visible={isVisible}
          footer={null}
          onCancel={() => setIsVisible(false)}
        >
          {cardDetails}
        </Modal>
      </>
    );
  };

  return (
    <article className="flip-card fade-in">
      <div className="flip-card-inner">
        <div className="flip-card-back">
          {isMobile ? renderMobileCardBack() : renderCardBack()}
        </div>
        <img src={cardBack} alt="Tarot card back" className="flip-card-front" />
      </div>
    </article>
  );
}

Card.propTypes = {
  card: PropTypes.object,
};
