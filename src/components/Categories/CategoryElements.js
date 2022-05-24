import React from "react";
import "./CategoryElements.js";

export default function CategoryList({ categories, filterItems }) {
  return (
    <div style={{ display: "flex" }} className="btn-container">
      {categories.map((category, id) => {
        return (
          <div key={id}>
            <button
              // type="button"
              // className="filter-btn"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}
