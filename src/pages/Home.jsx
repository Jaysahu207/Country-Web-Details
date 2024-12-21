import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import "../App.css";
import HeroSection from "../components/UI/HeroSection";
import About from "./About";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
};

export default Home;
