import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionsLists({ questions }) {
  return (
    <div>
      {questions.map((q) => (
        <QuestionItem key={q.id} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
}

export default QuestionsLists;
