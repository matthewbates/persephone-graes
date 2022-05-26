import React from "react";
import "./MenuImage.css";
import * as mdb from "mdb-ui-kit";
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
                    <h2>
                      
                    
                      <u>{menuItem.title}</u>
                    </h2>
                    <h3 className="price">{menuItem.price}</h3>
                  </header>
                  {menuItem.desc.split("\n").map((item, index) => {
                    return (
                      <p key={index} className="item-text">
                        {item}
                      </p>
                    );
                  })}
                  {/* <p className="item-text">{menuItem.desc}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
