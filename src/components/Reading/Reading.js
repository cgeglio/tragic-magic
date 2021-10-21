import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";
import { useReadingContext } from "../../contexts/ReadingContext";
import { getCards, getFortune } from "../../apiCalls";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import paths from "../../paths";
import "./reading.scss";

export default function Reading() {
  const isMobile = useIsMobile();
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

  const renderReadingDetails = () => {
    return (
      <section className="reading-details">
        <div>
          <h2 className="question">{question}</h2>
          <h2 className="fortune">{fortune}</h2>
        </div>
      </section>
    );
  };

  return isLoading ? (
    <Loading />
  ) : (
    <section className="card-container fade-in">
      {isMobile && renderReadingDetails()}
      <section className="cards">
        {readingCards.length &&
          readingCards.map((card) => {
            return <Card key={card.name_short + card.value} card={card} />;
          })}
      </section>
      {!isMobile && renderReadingDetails()}
      <Link to={paths.home()}>
        <Button onClick={resetReading} className="back-btn">
          Ask Another Question
        </Button>
      </Link>
    </section>
  );
}
