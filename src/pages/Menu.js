import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuItem from "../components/MenuItem";

export default function Menu({ items, categories, filterItems }) {
  return (
    <div>
      <Categories categories={categories} filterItems={filterItems} />
    </div>
  );
}
