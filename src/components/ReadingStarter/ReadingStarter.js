import { Button, Input, Select } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { useReadingContext } from "../../contexts/ReadingContext";
import golden from "../../images/golden.png";
import paths from "../../paths";
import crystal from "../../images/crystal.png";
import "./readingStarter.scss";

const { Option } = Select;

function ReadingStarter({ history }) {
  const { question, setQuestion, setSpreadCount } = useReadingContext();
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSpreadCount = (value) => {
    setSpreadCount(value);
  };
  const handleNewQuestion = (event) => setQuestion(event.target.value);
  const verifyQuestionInput = () =>
    question
      ? history.push(paths.reading())
      : setErrorMessage("Please enter a question.");

  return (
    <div className="reading-starter-container">
      <div className="reading-starter fade-in">
        <img src={golden} alt="The Future Is Golden" className="golden-text" />
        <div className="reading-starter-circle">
          <img src={crystal} className="crystal" />
          <div className="circle" />
          <div className="inner-circle-content">
            <Select
              onChange={handleSpreadCount}
              placeholder="Select a spread"
              defaultValue={4}
              dropdownClassName="spread-dropdown"
            >
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
            <Button className="ask-btn" onClick={verifyQuestionInput}>
              ASK THE CARDS
            </Button>
            <div className="error-message">{errorMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReadingStarter.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ReadingStarter);
