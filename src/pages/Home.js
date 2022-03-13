import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Dream from "../components/Dream";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Restaurant from "../components/Restaurant";
import MenuSideBar from "../components/SideBar/MenuSideBar";

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const getSideBar = () => {
    if (window.scrollY >= 800) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  };

  window.addEventListener("scroll", getSideBar);

  return (
    <>
      <div id="home">
        <MenuSideBar showSideBar={showSideBar} />
        <Navbar />
        <Hero />
        <About />
        <Dream />
        {/* <Restaurant /> */}
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
