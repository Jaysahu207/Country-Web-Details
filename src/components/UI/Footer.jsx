import React from "react";
import "../../App.css";
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid-two-cols grid">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024 All Right Reserved
                <Link to="" target="_blank">
                  Jay sahu
                </Link>
              </p>
            </div>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  {" "}
                  Social
                </Link>
              </li>
              <li>
                <Link to="/contact" target="_blank">
                  {" "}
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank">
                  {" "}
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
