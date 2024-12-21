import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// import img from "../../assets/world.webp";
import img from "../../assets/gif.gif";
const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content ">
          <h1 className="heading-xl">
            Explore the World , One Country at a time
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ut
            itaque hic aut voluptatem ipsum illo voluptatum eveniet expedita{" "}
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img src={img} alt="world Map" className="banner-image" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
