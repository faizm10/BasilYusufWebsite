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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", emoji: "🏠", href: "/" },
    { name: "Experience", emoji: "🧳", href: "/experience" },
    { name: "Projects", emoji: "💻", href: "/projects" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      style={{
        padding: "16px",
        backgroundColor: "purple",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="text-white">
          <p className="font-bold text-inherit">Basil Yusuf</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Links */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`}>
            <Link href={item.href} className="text-white">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="sm:hidden w-full">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full flex justify-center"
              href={item.href}
              size="lg"
            >
              {item.emoji} 
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
