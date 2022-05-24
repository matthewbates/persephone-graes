import React from "react";
import { container } from "mdb-ui-kit";
import "../styles/Categories.css";

export default function Categories({ categories, filterItems }) {
  return (
    <div className="container" style={{ alignItems: "center" }}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
