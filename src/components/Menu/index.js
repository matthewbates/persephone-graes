import React from "react";
import "./Menu.css";
import Categories from "../../components/Categories";

export default function Menu({ menu, categories, filterItems }) {
  return (
    <>
      <div className="menu-container">
        <div>
          <Categories
            menu={menu}
            categories={categories}
            filterItems={filterItems}
          />
        </div>
        <div className="section-center">
          {menu.map((menuItem) => {
            return (
              <div key={menuItem.id} className="menu-item">
                <img
                  src={menuItem.img}
                  alt={menuItem.title}
                  className="photo"
                />
                <div className="item-info">
                  <header>
                    <h4 style={{ fontFamily: "Great Vibes" }}>
                      {menuItem.title}
                    </h4>
                    <h4 className="price">{menuItem.price}</h4>
                  </header>
                  {menuItem.desc.split("\n").map((item, index) => {
                    return (
                      <p key={index} className="item-text">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
