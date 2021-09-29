import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useReadingContext } from "../../contexts/ReadingContext";
import { getCards, getFortune } from "../../apiCalls";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import "./reading.scss";

export default function Reading() {
  const { question, spreadCount, resetReading } = useReadingContext();

  const [readingCards, setReadingCards] = React.useState([]);
  const [fortune, setFortune] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchFortune = () => {
    getFortune()
      .then((f) => setFortune(f.content))
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    getCards(spreadCount)
      .then((res) => setReadingCards(res.cards))
      .then(() => fetchFortune())
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, []);

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
        <Button onClick={resetReading} className="back-btn">
          Ask Another Question
        </Button>
      </Link>
    </section>
  );
}
