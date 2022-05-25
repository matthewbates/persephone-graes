import React from "react";
import "./MenuImage.css";
import * as mdb from "mdb-ui-kit";
import Categories from "../../components/Categories";

export default function Menu({ menu, categories, filterItems }) {
  return (
    <div className="section-center">
      <Categories categories={categories} filterItems={filterItems} />
      {menu.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem;

        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
