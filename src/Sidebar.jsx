import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>×</button>
      <ul>
        <li >
          <Link to="/" onClick={onClose}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
