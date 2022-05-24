import React, { useState, useEffect } from "react";
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
import Loader from "./components/Loader";
import Menu from "./pages/Menu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { items } from "./helpers/menuImages";

const allCategories = [...new Set(items.map((item) => item.category))];

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  function toggleSidebar() {
    setIsOpen((isOpen) => !isOpen);
  }

  function filterItems(category) {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  function renderMenuItems() {
    const menuItems = items.map((item, index) => {
      console.log(item.photo);
    });
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // });

  return (
    <div>
      {/* {isLoading == true ? (
        <div className="loading-icon">
          <Loading />
        </div>
      ) : null}
      <div className="App" style={{ display: isLoading ? "none" : "block" }}> */}
      <Router>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} />
        {/* <Hero /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
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
      {/* </div> */}
    </div>
  );
}
