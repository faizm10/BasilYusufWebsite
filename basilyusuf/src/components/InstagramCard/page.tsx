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

export default function InstagramCard() {
  return (
    <Card className="max-w-[340px] bg-gray-700 rounded-lg text-white">
      <CardHeader className="justify-between">
        <div className="flex gap-1">
          <Avatar
            isBordered
            src="images/basilinstagram.png"
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
          href="https://www.instagram.com/basilysf1709/"
          as={Link}
          size="md"
          className="bg-pink-700 text-white rounded-lg"
          variant="solid"
        >
          Follow
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Capturing moments and sharing stories. Follow me on Instagram to see
          my latest adventures and projects!
        </p>
        <span className="pt-2">
          #Photography #Travel
          <span className="py-2" aria-label="camera" role="img">
            📷
          </span>
        </span>
      </CardBody>
    </Card>
  );
}
