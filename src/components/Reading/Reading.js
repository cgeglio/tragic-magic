import React from "react";
import { Link } from "react-router-dom";
import ReadingContext from "../../contexts/ReadingContext";
import { getCards, getFortune } from "../../apiCalls";
import Card from "../Card";
import Loading from "../Loading/Loading";
import "./reading.scss";

export default function Reading() {
  const {
    question,
    spreadCount,
    setQuestion,
    setSpreadCount,
  } = React.useContext(ReadingContext);
  const [readingCards, setReadingCards] = React.useState([]);
  const [fortune, setFortune] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchFortune = () => {
    getFortune()
      .then((res) => setFortune(res.content))
      .catch((error) => console.log(error)); // eslint-disable-line
  };

  React.useEffect(() => {
    getCards(spreadCount)
      .then((res) => setReadingCards(res.cards))
      .then(() => fetchFortune())
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error)); // eslint-disable-line
  }, []);

  const resetReading = () => {
    setQuestion("");
    setSpreadCount("");
  };

  return isLoading ? (
    <Loading />
  ) : (
    <section className="card-container fade-in">
      <section className="cards">
        {readingCards.length &&
          readingCards.map((card) => {
            return <Card key={card.name_short + card.value} card={card} />;
          })}
      </section>
      <section className="reading-details">
        <div>
          <h2 className="question">{question}</h2>
          <h2 className="fortune">{fortune}</h2>
        </div>
      </section>
      <Link to="/">
        <button onClick={resetReading} id="ask-another" className="back-btn">
          Ask Another Question
        </button>
      </Link>
    </section>
  );
}
