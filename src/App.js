import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Breakfast from "./pages/Breakfast";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import HotColdSandwiches from "./pages/HotColdSandwiches";
import Juices from "./pages/Juices";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Menu from "./pages/Menu";
import Navbar from "./components/Navbar";
import NavbarMenu from "./components/NavbarMenu";
import SaladsWraps from "./pages/SaladsWrap";
import SidesDrinks from "./pages/SidesDrinks";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading == true ? (
        <div className="loading-icon">
          <Loading />
        </div>
      ) : null}
      <div className="App" style={{ display: isLoading ? "none" : "block" }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/breakfast" element={<Breakfast />} />
            <Route path="/sandwiches" element={<HotColdSandwiches />} />
            <Route path="/salads" element={<SaladsWraps />} />
            <Route path="/sides" element={<SidesDrinks />} />
            <Route path="/juice" element={<Juices />} />
            <Route path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}
