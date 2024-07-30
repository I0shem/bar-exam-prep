import React, { useState } from "react";
import QuestionsLists from "./QuestionsLists";

function CategoryItem({ key, name, questions }) {
  const [open, setIsOpen] = useState(false);
  return (
    <div>
      {key}
      <h3 onClick={() => setIsOpen(!open)}>{name}</h3>
      {open && <QuestionsLists questions={questions} />}
    </div>
  );
}

export default CategoryItem;
