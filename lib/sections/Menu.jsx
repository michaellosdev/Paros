"use client";

import React from "react";
import { useState } from "react";
import { menu } from "../localData/MenuData";
import Card from "../components/Card";

function Menu() {
  const [size, setSize] = useState(true);

  return (
    <div className="h-fit bg-darker pt-24 lg:pt-36">
      <h1 className="text-center text-h3 text-white lg:text-h1">Menu</h1>
      <div className=" h-fit bg-white px-8 pb-16  md:px-16 2xl:px-96">
        <div className="mt-8 w-full  ">
          <div className=" mt-8 border-b-4 border-darker py-2">
            <h2 className="mt-8 text-left text-h4 text-darker lg:text-h3">
              Build Your Plate
            </h2>
          </div>
          <h3 className="mt-4 text-h4 lg:text-h3">Base</h3>
          <div className="mt-4 flex flex-wrap ">
            {menu.Base.map((item, index) => (
              <div
                className={`my-2 flex w-full flex-col  rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
              >
                <h4 className=" text-[16px] text-body font-semibold">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
          <h3 className="mt-4 text-h4 lg:text-h3">Protein</h3>
          <div className="mt-4 flex flex-wrap ">
            {menu.Protein.map((item, index) => (
              <div
                className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
              >
                <h4 className=" text-[16px] text-body font-semibold">
                  {item.name}
                </h4>
                {item.addOnPrice ? (
                  <p className=" text-body font-semibold">
                    +${item.addOnPrice.toFixed(2)}
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <h3 className="mt-4 text-h4 lg:text-h3">Sides</h3>
          <div className="mt-4 flex flex-wrap ">
            {menu.Sides.map((item, index) => (
              <div
                className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
              >
                <h4 className=" text-[16px] text-body font-semibold">
                  {item.name}
                </h4>
                {/* {item.addOnPrice ? (
                  <p className=" text-body font-semibold">
                    +${item.addOnPrice}
                  </p>
                ) : (
                  ""
                )} */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-fit  px-8  py-8 md:px-16 2xl:px-96">
        <div className=" mb-4 border-b-4 border-white py-2">
          <h2 className="text-left text-h4 text-white lg:text-h3">Wraps</h2>
        </div>
        <p className="text-body text-white">
          All wraps include Lettuce, Tomato, Marinated Onions, House Sauce*
        </p>
        <div className="mt-4 flex flex-wrap ">
          {menu.Wraps.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">
                {item.name}
              </h4>
              {item.price ? (
                <p className=" text-body font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className=" my-4 border-b-4 border-white py-2">
          <h2 className="text-left text-h4 text-white lg:text-h3">Salads</h2>
        </div>

        <div className="mt-4 flex flex-wrap ">
          {menu.Salads.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">
                {item.name}
              </h4>
              {item.price ? (
                <p className=" text-body font-semibold">
                  ${item.price.toFixed(2)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className=" my-4 py-2">
          <h2 className="text-left text-h4 text-white lg:text-h3">
            Protein Add-on
          </h2>
        </div>

        <div className="mt-4 flex flex-wrap ">
          {menu.ProteinAddOns.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">
                {item.name}
              </h4>
              {item.price ? (
                <p className=" text-body font-semibold">
                  +${item.price.toFixed(2)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit  bg-white  px-8 py-8 md:px-16 2xl:px-96">
        <div className=" my-4 flex justify-between border-b-4 border-darker py-2">
          <h2 className="text-left text-h4 text-darker lg:text-h3">Salads</h2>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              value=""
              className="peer sr-only"
              onChange={(e) => setSize((prev) => !prev)}
            />

            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[6px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 lg:after:top-[14px]"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {size ? "Small" : "Large"}
            </span>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap ">
          {menu.Sides.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">
                {item.name}
              </h4>
              {size ? (
                item.price?.small ? (
                  <p className=" text-body font-semibold">
                    +${item.price?.small?.toFixed(2)}
                  </p>
                ) : (
                  ""
                )
              ) : (
                <p className=" text-body font-semibold">
                  +${item.price?.large?.toFixed(2)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit  px-8  py-8 md:px-16 2xl:px-96">
        <div className=" mb-4 border-b-4 border-white py-2">
          <h2 className="text-left text-h4 text-white lg:text-h3">
            A La Carte
          </h2>
        </div>
        <div className="mt-4 flex flex-wrap ">
          {menu.Protein.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">
                {item.name}
              </h4>
              {item.price ? (
                <p className=" text-body font-semibold">
                  +${item.price.toFixed(2)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <div className=" mb-4 border-b-4 border-white py-2">
          <h2 className="text-left text-h4 text-white lg:text-h3">Drinks</h2>
        </div>
        <div className="mt-4 flex flex-wrap ">
          {menu.Drinks.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">
                {item.name}
              </h4>
              {item.price ? (
                <p className=" text-body font-semibold">
                  +${item.price.toFixed(2)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit  bg-white  px-8 py-8 md:px-16 2xl:px-96">
        <div className=" my-4 flex justify-between border-b-4 border-darker py-2">
          <h2 className="text-left text-h4 text-darker lg:text-h3">Sauces</h2>
        </div>
        <div className="mt-4 flex flex-wrap ">
          {menu.Sauces.map((item, index) => (
            <div
              className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
            >
              <h4 className=" text-[16px] text-body font-semibold">{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
