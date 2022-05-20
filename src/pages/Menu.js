import React, { useState } from "react";
import "../styles/Menu.css";
import Categories from "../components/Categories";

export default function Menu({ photos, items, categories, filterItems }) {
  return (
    <>
      <div>
        {/* this displays the categories filter */}
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      {/* this displays the items */}
      <div className="section-center">
        {items.map((item, index) => {
          return (
            <div key={index} className="menu-item">
              <img src={item.url} />
            </div>
          );
        })}
      </div>
    </>
  );
}
