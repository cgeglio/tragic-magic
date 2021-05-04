import { Input, Select } from "antd";
import React from "react";
import { useHistory } from "react-router";
import ReadingContext from "../../contexts/ReadingContext";
import golden from "../../images/golden.png";
import "./readingStarter.scss";

const { Option } = Select;

export default function ReadingStarter() {
  const history = useHistory();
  const { question, setQuestion, setSpreadCount } = React.useContext(
    ReadingContext
  );
  const [errorMessage, setErrorMessage] = React.useState("");

  const goToReading = () => history.push("/reading");

  const handleSpreadCount = (value) => {
    setSpreadCount(value);
  };
  const handleNewQuestion = (event) => setQuestion(event.target.value);
  const verifyQuestionInput = () =>
    question ? goToReading() : setErrorMessage("Please enter a question.");

  return (
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
  );
}
