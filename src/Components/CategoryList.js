import React from "react";
import CategoryItem from "./CategoryItem";
import data from "./data/data";

function CategoryList() {
  return (
    <div>
      {Object.values(data).map((category) => (
        <CategoryItem
          key={category.id}
          name={category.name}
          questions={category.qs}
        />
      ))}
    </div>
  );
}

export default CategoryList;
