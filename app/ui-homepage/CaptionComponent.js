'use client'
import React from "react";
import { Typography } from "@material-tailwind/react";

function CaptionComponent() {
  return (
    <section className="py-10 px-8 container mx-auto">
      <div className="mx-auto text-center mb-16">
        <Typography variant="h6" className="font-medium">
          Tailored Product Search
        </Typography>
        <Typography variant="h1" className="my-4 lg:text-5xl text-4xl">
          Find What You Need
        </Typography>
        <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
          Whether you&apos;re looking for specific features, price ranges, or
          brands, our filters help you quickly narrow down options, so you can
          find exactly what you need with ease.
        </Typography>
      </div>
    </section>
  );
}

export default CaptionComponent;
