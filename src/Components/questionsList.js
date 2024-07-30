import React from "react";
import QuestionItem from "./QuestionItem";
import questions from "./data/questions";

const QuestionList = () => (
  <div>
    {questions.map((q, index) => (
      <QuestionItem key={index} question={q.question} answer={q.answer} />
    ))}
  </div>
);

export default QuestionList;
