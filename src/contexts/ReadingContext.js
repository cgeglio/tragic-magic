import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const ReadingContext = createContext();

export const useReadingContext = () => useContext(ReadingContext);

export default function ReadingProvider({ children }) {
  const [question, setQuestion] = useState("");
  const [spreadCount, setSpreadCount] = useState(4);

  const resetReading = () => {
    setQuestion("");
    setSpreadCount(4);
  };

  const readingContext = () => ({
    spreadCount,
    question,
    setSpreadCount,
    setQuestion,
    resetReading,
  });

  return (
    <ReadingContext.Provider value={readingContext()}>
      {children}
    </ReadingContext.Provider>
  );
}

ReadingProvider.propTypes = {
  children: PropTypes.element,
};
