import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Card,
  Button,
} from "@nextui-org/react";
import TwitterCard from "@/components/TwitterCard/page";

export default function Portfolio() {
  return (
    <div className="flex h-screen w-full">
      <div
        className="bg-purple-400 w-3/5 p-4 text-white flex flex-col justify-center items-center"
      >
        <Card className="">
          <h2 className=" text-green-800 text-3xl font-bold">Hey There, I'm Basil Yusuf</h2>
          <p>
            I am A Software Engineer
          </p>
        </Card>
      </div>
      <div className="bg-pink-400 w-2/5 p-4 text-white flex justify-center items-end gap-4">
        <TwitterCard />
        <TwitterCard />
      </div>
    </div>
  );
}
