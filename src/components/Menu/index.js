import React from "react";
import { MenuContainer, MenuWrapper } from "./MenuElements";
import Categories from "../Categories";

export default function Menu({ menuItems, items, categories, filterItems }) {
  return (
    <MenuContainer>
      <MenuWrapper>
        <Categories categories={categories} filterItems={filterItems} />
        {menuItems.map((item, index) => {
          return (
            <img
              style={{
                backgroundColor: "#414042",
                height: "100px",
                width: "100px",
              }}
              key={index}
              className="item"
              src={item.url}
            />
          );
        })}
      </MenuWrapper>
    </MenuContainer>
  );
}
