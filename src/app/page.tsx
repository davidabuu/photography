"use client";

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import SlideShow from "./components/SlideShow";
import "aos/dist/aos.css"; // Import the AOS CSS file
import AOS from "aos"; // Import the AOS libra
import ServicesPage from "./components/ServicePage";
import Footer from "./components/Footer";
import About from "./components/About";
const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <SlideShow />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <ServicesPage />
      </div>
      <Footer />
    </div>
  );
};

export default page;
