import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const menuItems = ["Home", "About Me", "Experience"];

  return (
    <Navbar isBordered className="bg-blue">
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Basil</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">Basil</p>
        </NavbarBrand>
        <NavbarItem>
          <Link href="#" className=" font-bold text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="font-bold text-white">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="font-bold text-white">
            Experience
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
