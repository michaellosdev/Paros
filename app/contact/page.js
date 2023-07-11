"use client";

import Slideshow from "@/lib/Slideshow";
import { useState } from "react";
import Contact from "@/lib/sections/Contact";
import Menu from "@/lib/sections/Menu";

function page() {
  return (
    <>
      <div className="absolute top-0 z-[998] flex h-24 w-full  items-center justify-between  bg-darker px-8  md:px-16 lg:h-36 2xl:px-96"></div>
      <div className="h-fit bg-darker pt-24 lg:pt-36"></div>
    </>
  );
}

export default page;
