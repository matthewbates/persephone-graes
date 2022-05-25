import React from "react";
import { CategoryContainer, CategoryButton } from "./CategoryElements";

export default function Categories({ categories, filterItems }) {
  return (
    <CategoryContainer>
      {categories.map((category, index) => {
        return (
          <CategoryButton
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </CategoryButton>
        );
      })}
    </CategoryContainer>
  );
}
