"use client";

import React from "react";
import Image from "next/image";
import SwipeShow from "../utils/SwipeShow";
import a from "@/public/static/images/a.webp";
import k from "@/public/static/images/k.webp";
import c from "@/public/static/images/c.webp";
import m from "@/public/static/images/m.webp";
import e from "@/public/static/images/e.webp";
import l from "@/public/static/images/l.webp";
import g from "@/public/static/images/g.webp";
import skewer from "@/public/static/images/skewer.png";
import Button from "../components/Button";
import restaurantIcon from "@/public/static/icons/restaurant.svg";

function AboutUs() {
  return (
    <div className="h-fit bg-gray-100 px-8 py-16 md:px-16 2xl:px-96">
      {/* section header */}
      <div className="flex h-16 items-center ">
        <h2 className=" text-h3 text-darker lg:text-h2">Welcome to Paros</h2>
      </div>
      {/* section body */}
      <div className="mt-4 flex h-fit  flex-col py-4 lg:flex-row">
        <div className="flex flex-col lg:w-1/2 lg:pr-4">
          <p className="text-bodyLarge ">
            We are a Family Restaurant, a cherished cornerstone of Los Angeles,
            California. We're known not just for our excellent Mediterranean
            cuisine, but for our commitment to superior service and warm,
            welcoming atmosphere. Whether you're joining us for a meal, picking
            up a takeout order, or utilizing our efficient delivery service,
            you'll enjoy a taste of the Mediterranean prepared with care and the
            freshest ingredients. Our friendly staff is dedicated to making your
            experience memorable with every visit or order. Paros is more than a
            restaurant; it's a family tradition and a vital part of the Los
            Angeles community. Experience the magic of Mediterranean dining with
            us today at Paros Family Restaurant.
          </p>
          <div className="flex w-full flex-col lg:flex-row">
            <Button
              href="/menu"
              label="see the menu"
              className={
                "mt-4 border border-darker py-4 text-darker hover:opacity-75 sm:w-full "
              }
            />
            <Button
              external={true}
              href="https://order.toasttab.com/online/paros-family-restaurant-929-e-verdugo-ave"
              label="order online"
              className={
                "mt-4 bg-darker text-white hover:opacity-75 sm:w-full lg:ml-4 "
              }
              iconEnd={restaurantIcon}
            />
          </div>
        </div>
        <div className=" h-80 w-full object-center  pt-8 shadow-xl md:h-[40rem] lg:hidden">
          <SwipeShow images={[a, k, c, m, e]} />
        </div>

        <div className="hidden   flex-col lg:flex lg:w-1/2">
          <div className="flex w-full justify-between">
            <div className=" h-full w-[32%] border shadow-lg ">
              <Image src={k} className="h-full w-full object-cover"></Image>
            </div>
            <div className="h-full w-[32%]  border shadow-lg ">
              <Image src={a} className="h-full w-full object-cover"></Image>
            </div>
            <div className="h-full w-[32%] border shadow-lg">
              <Image src={c} className="h-full w-full object-cover"></Image>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <div className=" h-full w-[49%] border">
              <Image
                src={l}
                className="h-full w-full object-cover shadow-lg"
              ></Image>
            </div>
            <div className="h-full  w-[49%]">
              <Image
                src={g}
                className="h-full w-full object-cover shadow-lg"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 lg:h-48">
        <Image
          src={skewer}
          className="h-full object-contain opacity-25"
        ></Image>
      </div>
    </div>
  );
}

export default AboutUs;
