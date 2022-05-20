import React, { useState } from "react";
import "../styles/Menu.css";
import Categories from "../components/Categories";

export default function Menu({
  items,
  categories,
  filterItems,
  select,
  setSelect,
}) {
  return (
    <div className="menu">
      <Categories categories={categories} filterItems={filterItems} />
      <div className="menu-list">
        {items.map((item, index) => {
          return <img key={index} className="items" src={item.url} />;
        })}
      </div>
    </div>
    // <>
    //   <div>
    //     {/* this displays the categories filter */}
    //     <Categories
    //       categories={categories}
    //       filterItems={filterItems}
    //       select={select}
    //       setSelect={setSelect}
    //     />
    //   </div>
    //   {/* this displays the items */}
    //   <div className="section-center">
    //     {items.map((item, index) => {
    //       return (
    //         <div key={index} className="menu-item">
    //           <img src={item.url} />
    //         </div>
    //       );
    //     })}
    //   </div>
    // </>
  );
}
