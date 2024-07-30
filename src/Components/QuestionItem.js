import React from "react";

const QuestionItem = ({ question, answer }) => (
  <div>
    <h3>{question}</h3>
    <p>{answer}</p>
  </div>
);

export default QuestionItem;
