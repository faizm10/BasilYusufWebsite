import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Card,
  Button,
  Spacer,
  CardFooter,
  Image,
  CardHeader,
} from "@nextui-org/react";
import TwitterCard from "@/components/TwitterCard/page";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-700 ">
      <main className="min-h-screen container mx-auto mt-10 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold p-2">Basil Yusuf</h1>

          <p className="text-gray-700">
            Software Engineer | DevOps Specialist | Continuous Deployment
            Architect
          </p>
          <div className="p-4 flex gap-4 items-center">
            <Button radius="full" className="bg-blue-800 text-white">
              Instagram
            </Button>
            <Button radius="full" className="bg-blue-800 text-white">
              Twitter
            </Button>
          </div>
        </div>
        <div>
          <img
            src="./images/feelingProud.svg"
            alt="Basil Profile"
            className="w-126 p-6 h-auto"
          />
        </div>
      </main>
    </div>
  );
}
