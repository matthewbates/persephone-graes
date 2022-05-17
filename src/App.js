import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Juices from "./components/Juices";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <div>
      {/* {isLoading == true ? (
        <div className="loading-icon">
          <Loading />
        </div>
      ) : null} */}
      {/* <div className="App" style={{ display: isLoading ? "none" : "block" }}> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/juice" element={<Juices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </div> */}
    </div>
  );
}
