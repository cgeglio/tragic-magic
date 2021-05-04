import React from "react";

const ReadingContext = React.createContext({
  spreadCount: "",
  question: "",
  setSpreadCount: () => {},
  setQuestion: () => {},
});

export default ReadingContext;
