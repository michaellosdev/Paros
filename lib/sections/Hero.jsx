"use client";

import React from "react";
import Button from "../components/Button";
import restaurantIcon from "@/public/restaurant.svg";

function Hero() {
  return (
    <div className=" flex h-[48rem] flex-col items-center justify-center bg-hero-mobile bg-contain bg-fixed  bg-no-repeat px-8  text-center text-white md:bg-cover md:px-16 lg:h-screen lg:bg-[url(/hero.webp)]  2xl:px-36">
      <h1 className=" text-center  text-h3 uppercase leading-none lg:text-[72px] lg:text-display ">
        <span
          className={`font-cursive font-normal capitalize text-gray-lightest`}
        >
          Welcome to
        </span>{" "}
        <br /> Paros Family Restaurant
      </h1>
      <p className=" mt-4 text-[1rem] text-h5 text-gray-lightest">
        Join the Tradition: Become Part of Paros, a Family and a Community
      </p>
      <Button
        href="/menu"
        className="mt-8 bg-darker transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
        label="see the menu"
        iconEnd={restaurantIcon}
      />
    </div>
  );
}

export default Hero;
