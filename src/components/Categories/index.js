import React from "react";
import "./Categories.css";

export default function Categories({ menu, categories, filterItems }) {
  return (
    // <div className="btn-display">
      <div className="btn-container">
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
    // </div>
  );
}
