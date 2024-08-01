// components/Navbar.tsx
"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import ThemeSwitch from "../ThemeContext/page";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
  
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-purple-600">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-white ">Basil</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" className=" text-white hover:text-black">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/experience" className=" text-white hover:text-black">Experience</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/projects" className="text-white hover:text-black">Project</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

// import React, { useState } from "react";
// import ThemeSwitch from "../ThemeContext/page";
// import "./Navbar.css";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar bg-purple-600">
//       <div className="container">
//         <div className="navbar-brand">
//           <button
//             className="navbar-toggle"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             ☰
//           </button>

//           <span className="brand-name">Basil</span>
//         </div>
//         <div
//           className={`navbar-menu ${isMenuOpen ? "active" : ""} justify-center`}
//         >
//           <a href="/home" className="navbar-item hover:text-black">
//             Home
//           </a>
//           <a href="/experience" className="navbar-item hover:text-black">
//             Experience
//           </a>
//           <a href="/projects" className="navbar-item hover:text-black">
//             Projects
//           </a>
//         </div>
//         <div className="justify-end">
//           <ThemeSwitch />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
