import React from "react";

export const ReadingContext = React.createContext({
  spreadCount: "",
  question: "",
  setSpreadCount: () => {},
  setQuestion: () => {},
});
