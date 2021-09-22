import React, { useState, useContext, createContext } from "react";

const ReadingContext = createContext();

export const useReadingContext = () => useContext(ReadingContext);

export default function ReadingProvider({ children }) {
  const [question, setQuestion] = useState("");
  const [spreadCount, setSpreadCount] = useState(4);

  const readingContext = () => ({
    spreadCount,
    question,
    setSpreadCount,
    setQuestion,
  });

  return (
    <ReadingContext.Provider value={readingContext()}>
      {children}
    </ReadingContext.Provider>
  );
}
