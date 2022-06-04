import React from "react";
import {
  MenuContainer,
  MenuCenter,
  MenuWrapper,
  MenuImage,
  MenuInfo,
  MenuText,
  MenuHeader,
  MenuH4,
  MenuItem,
  MenuPrice,
  MenuSubtext,
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
              <MenuWrapper key={id}>
                {/* <MenuImage src={img} alt={title} /> */}
                <MenuInfo>
                  <MenuHeader>
                    <MenuH4>{title}</MenuH4>
                  </MenuHeader>
                  <MenuText>
                    {desc.split("\n").map((item, index) => {
                      return <MenuItem key={index}>{item}</MenuItem>;
                    })}
                    <MenuPrice>{price}</MenuPrice>
                  </MenuText>
                </MenuInfo>
              </MenuWrapper>
            );
          })}
        </MenuCenter>
        <MenuSubtext>
          *Indicates precooked weight
          <br /> **Conuming raw or undercooked meats, poultry, seafood,
          shellfish or eggs may increase your risk of foodborne illness,
          especially if you have certain medical conditions.
          <br /> Pries do not include tax
        </MenuSubtext>
      </MenuContainer>
    </>
  );
}
