import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import { items } from "./helpers/menuImages";

const allCategories = ["all", ...new Set(items.map((item) => item.category))]

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  function renderMenuItems() {
    const menuItems = items.map((item, index) => {
      console.log(item.photo)
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });

  return (
    <div>
      {isLoading == true ? (
        <div className="loading-icon">
          <Loading />
        </div>
      ) : null}
      <div className="App" style={{ display: isLoading ? "none" : "block" }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={
                <Menu
                  items={menuItems}
                  categories={categories}
                  filterItems={filterItems}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
