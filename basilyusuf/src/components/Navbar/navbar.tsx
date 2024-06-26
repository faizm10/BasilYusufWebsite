"use client";
import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar bg-purple-600">
      <div className="container">
        <div className="navbar-brand">
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <span className="brand-name">Basil</span>
        </div>
        <div className={`navbar-menu bg-purple-600 ${isMenuOpen ? "active" : ""} justify-end `}>
          <a href="/home" className="navbar-item hover:text-black">
            Home
          </a>
          <a href="/experience" className="navbar-item hover:text-black">
            Experience
          </a>
          <a href="/projects" className="navbar-item hover:text-black">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
