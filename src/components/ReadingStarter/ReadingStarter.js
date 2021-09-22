import { Input, Select } from "antd";
import React from "react";
import { useReadingContext } from "../../contexts/ReadingContext";
import golden from "../../images/golden.png";
import "./readingStarter.scss";

const { Option } = Select;

export default function ReadingStarter() {
  const { question, setQuestion, setSpreadCount } = useReadingContext();
  const [errorMessage, setErrorMessage] = React.useState("");

  const goToReading = () => (window.location.href = "/reading");

  const handleSpreadCount = (value) => {
    setSpreadCount(value);
  };
  const handleNewQuestion = (event) => setQuestion(event.target.value);
  const verifyQuestionInput = () =>
    question ? goToReading() : setErrorMessage("Please enter a question.");

  return (
    <div className="reading-starter-container">
      <div className="reading-starter fade-in">
        <img src={golden} alt="The Future Is Golden" className="golden-text" />
        <div className="reading-starter-circle">
          <div className="circle" />
          <div className="inner-circle-content">
            <Select onChange={handleSpreadCount} placeholder="Select a reading">
              <Option value={4}>4 Card Spread</Option>
              <Option value={3}>3 Card Spread</Option>
              <Option value={1}>1 Card Spread</Option>
            </Select>
            <Input
              placeholder="Enter a question..."
              maxLength={55}
              value={question}
              onChange={handleNewQuestion}
            />
            <button className="ask-btn" onClick={verifyQuestionInput}>
              ASK THE CARDS
            </button>
            <p className="error-message">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
