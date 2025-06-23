import React from "react";
import "./Navbar.css"; 
import imge from "./assets/شعار وزارة التعليم الجديد بدقة عالية .png";

const Navbar = ({ onMenuClick }) => {
  return (
    <div className="navbar">
      <img
        src={imge}
        alt="شعار وزارة التعليم"
        className="logo"
      />
      <button className="menu-button" onClick={onMenuClick}>
        ☰
      </button>
    </div>
  );
};

export default Navbar;
