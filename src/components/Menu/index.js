import React from "react";
import "./MenuImage.css";
import {
  MenuContainer,
  MenuWrapper,
  MenuCategories,
  MenuItems,
} from "./MenuElements";
import * as mdb from "mdb-ui-kit";
import Categories from "../../components/Categories";

export default function Menu({ menuItems, items, categories, filterItems }) {
  return (
    <MenuContainer>
      <MenuCategories>
        <Categories categories={categories} filterItems={filterItems} />
      </MenuCategories>
      <MenuItems>
        {menuItems.map((item, index) => {
          return (
            <img
              style={{
                backgroundColor: "#414042",
              }}
              className="menu-image"
              key={index}
              src={item.url}
            />
          );
        })}
      </MenuItems>
    </MenuContainer>
  );
}
