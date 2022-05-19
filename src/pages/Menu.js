import React, { useState } from "react";
import "../styles/Menu.css";
import Categories from "../components/Categories";
import MenuItem from "../components/MenuItem";

export default function Menu({ items, categories, filterItems }) {
  return (
    <>
      <div>
        {/* this displays the categories filter */}
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      {/* this displays the items */}
      <div className="section-center">
        {items.map((item) => {
          const { id, name, category, price } = item;
          return (
            <article key={id} className="menu-item">
              <div className="item-info">
                <header>
                  <h4>{name}</h4>
                  <h4 className="price"></h4>
                </header>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
