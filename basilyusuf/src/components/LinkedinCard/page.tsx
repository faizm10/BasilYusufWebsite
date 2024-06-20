"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Link,
  Button,
} from "@nextui-org/react";

export default function LinkedInCard() {
  return (
    <Card className="max-w-[340px] bg-gray-700 rounded-lg text-white">
      <CardHeader className="justify-between">
        <div className="flex gap-1">
          <Avatar
            isBordered
            src="images/basillinkedin.jpeg"
            alt="Basil Yusuf"
            className="rounded-full w-16 h-16"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none">
              Basil Yusuf
            </h4>
            <h5 className="text-small tracking-tight">@basilyusuf</h5>
          </div>
        </div>

        <Button
          href="https://linkedin.com/in/basil-yusuf-388326273"
          as={Link}
          size="md"
          className="bg-blue-800 text-white rounded-lg"
          variant="solid"
        >
          Connect
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Professional networking and career development. Connect with me on
          LinkedIn to grow our professional network and collaborate on exciting
          projects!
        </p>
        <span className="pt-2">
          #Networking #Career 
          <span className="py-2" aria-label="briefcase" role="img">
             💼
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">500+</p>
          <p className="text-default-400 text-small">Connections</p>
        </div>
        {/* <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">100</p>
          <p className="text-default-400 text-small">Followers</p>
        </div> */}
      </CardFooter>
    </Card>
  );
}
