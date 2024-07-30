import React from "react";

const QuestionItem = ({ id, question, answer }) => (
  <div>
    <h3>
      {id}. {question}
    </h3>
    <p>{answer}</p>
  </div>
);

export default QuestionItem;
