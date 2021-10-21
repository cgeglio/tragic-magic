import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { getDeck } from "../../apiCalls";
import Card from "../Card/Card";
import "./deck.scss";

export default function Deck() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    getDeck()
      .then((res) => setDeck(res.cards))
      .catch((error) => console.log(error));

    return setDeck([]);
  }, []);

  const getCards = () => {
    return (
      <div className="deck-cards">
        {deck.map((card, i) => (
          <Card
            key={card.name_short + card.name_short}
            card={card}
            number={i}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="deck">
      {!deck.length ? <Loading /> : getCards()}
    </section>
  );
}
