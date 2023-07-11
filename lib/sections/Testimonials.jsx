"use client";

import React from "react";
import Card from "../components/Card";
import yelp1 from "@/public/static/images/yelp1.png";
import o from "@/public/static/images/o.jpg";
import o1 from "@/public/static/images/o1.jpg";
import stars from "@/public/static/images/large_5@3x.png";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="h-fit bg-gray-100 px-8 py-16 md:px-16  2xl:px-96">
      <div className="flex h-16 items-center ">
        <h2 className="text-h3 text-black lg:text-h2">
          What our customers say
        </h2>
      </div>
      <div className="mt-8 flex flex-col justify-between  lg:flex-row">
        <Card className={"flex w-full flex-col lg:w-[49%]"}>
          {/* header */}
          <div className="  flex h-24 w-full items-center ">
            <Image
              src={o}
              className="mr-4 h-16 w-16 rounded-full lg:h-24 lg:w-24"
            ></Image>
            <div>
              <h4 className="text-h4 md:text-h3">Anjelica H.</h4>
              <p className=" text-bodySmall text-gray-lighter">5/22/2023</p>
            </div>
          </div>
          {/* body */}
          <div className="h-fit md:h-72">
            <h5 className="mt-4 text-h4 md:text-h3">Very Good.</h5>
            <p className="mt-4 text-bodyLarge">
              Very Good , fresh with quality ingredients ! very impressive and
              the service was nice , the inside ambiance was very clean.
              Definitely a pleasure don't hesitate give it a try ! Tasted too
              good to take a pic ! Also very nice serving for the price I am
              definitely returning!
            </p>
          </div>
          {/* footer */}
          <div className="flex h-24 w-full items-center justify-between">
            <div className="h-fit">
              <Image src={stars} className="w-[65%] "></Image>
            </div>
            <div className="flex h-full w-[20%] items-center  ">
              <Image src={yelp1} className="h-16 w-full object-contain"></Image>
            </div>
          </div>
        </Card>
        <Card className={"flex w-full flex-col lg:w-[49%]"}>
          {/* header */}
          <div className="  flex h-24 w-full items-center ">
            <Image
              src={o1}
              className="mr-4 h-16 w-16 rounded-full lg:h-24 lg:w-24"
            ></Image>
            <div>
              <h4 className="text-h4 md:text-h3">Stewart H.</h4>
              <p className=" text-bodySmall text-gray-lighter">6/3/2023</p>
            </div>
          </div>
          {/* body */}
          <div className="h-72">
            <h5 className="mt-4 text-h4 md:text-h3">Great Service!</h5>
            <p className="mt-4 text-bodyLarge">
              Great Service!! Delicious Food!! Got the Beef & Chicken Lulu
              plate, with Baba Ganoush, Pilaf, and Yogurt/Cucumber with a stack
              of pita.
            </p>
          </div>
          {/* footer */}
          <div className="flex h-24 w-full items-center justify-between">
            <div className="h-fit">
              <Image src={stars} className="w-[65%] "></Image>
            </div>
            <div className="flex h-full w-[20%] items-center ">
              <Image src={yelp1} className="h-16 w-full object-contain"></Image>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Testimonials;
