import React from "react";
import { ButtonContainer, ButtonFilter } from "./CategoryElements";

export default function Categories({ menu, categories, filterItems }) {
  return (
    <ButtonContainer>
      {categories.map((category, index) => {
        return (
          <ButtonFilter key={index} onClick={() => filterItems(category)}>
            {category}
          </ButtonFilter>
        );
      })}
    </ButtonContainer>
  );
}
