import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { items } from "./helpers/menuImages";
import { menu } from "./helpers/data";

const allCategories = [...new Set(menu.map((menu) => menu.category))];
// const allItems = ["all", ...new Set(items.map((item) => item.category))];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [showFooter, setShowFooter] = useState(true);

  function toggleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((menu) => menu.category === category);
    setMenuItems(newItems);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {/* {isLoading == true ? (
        <div className="loading-icon">
          <Loader />
        </div>
      ) : null}
      <div className="App" style={{ display: isLoading ? "none" : "block" }}> */}
      <Router>
        {showFooter && (
          <nav>
            {" "}
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <Navbar toggleSidebar={toggleSidebar} />
          </nav>
        )}
        {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/menu"
            element={
              <Menu
                menu={menuItems}
                categories={categories}
                filterItems={filterItems}
              />
            }
          />
          <Route path="/about" element={<About noFooter={setShowFooter} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      {/* </div> */}
    </>
  );
}
