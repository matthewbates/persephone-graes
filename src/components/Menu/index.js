import React from "react";
import {
  MenuContainer,
  MenuCenter,
  MenuItem,
  MenuImage,
  MenuInfo,
} from "./MenuElements";
import "./Menu.css";
import Categories from "../../components/Categories";

export default function Menu({ menu, categories, filterItems }) {
  return (
    <>
      <MenuContainer>
        <div>
          <Categories
            menu={menu}
            categories={categories}
            filterItems={filterItems}
          />
        </div>
        <MenuCenter>
          {menu.map(({ id, img, title, desc, price }) => {
            return (
              <MenuItem key={id}>
                <MenuImage src={img} alt={title} />
                <div className="item-info">
                  <header>
                    <h4
                      style={{
                        fontFamily: "Great Vibes",
                        fontSize: "1.6rem",
                        width: "100%",
                        fontWeight: "bold",
                      }}
                    >
                      {title}
                    </h4>
                  </header>
                  <div className="item-text">
                    {desc.split("\n").map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                    <p>
                      <b>{price}</b>
                    </p>
                  </div>
                </div>
              </MenuItem>
            );
          })}
        </MenuCenter>
      </MenuContainer>
    </>
  );
}
