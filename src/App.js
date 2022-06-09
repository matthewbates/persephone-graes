import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loader from "./components/Loader";
import Menu from "./pages/Menu";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { menu } from "./helpers/data";

const allCategories = [...new Set(menu.map((menu) => menu.category))];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [showFooter, setShowFooter] = useState(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function filterItems(category) {
    const newItems = menu.filter((menu) => menu.category === category);
    setMenuItems(newItems);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      {isLoading == true ? (
        <div className="loading-icon">
          <Loader />
        </div>
      ) : null}
      <div className="App" style={{ display: isLoading ? "none" : "block" }}>
        <Router>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Navbar toggleSidebar={toggleSidebar} />
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
        </Router>
      </div>
    </>
  );
}
