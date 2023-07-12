"use client";

import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import { menu } from "../localData/MenuData";

function CateringMenu() {
  const [size, setSize] = useState(true);

  return (
    <div className="h-fit bg-darker pt-24 lg:pt-36">
      <h1 className="text-center text-h3 text-white lg:text-h1">
        Catering Menu
      </h1>
      <div className=" h-fit bg-white px-8 pb-16  md:px-16 2xl:px-96">
        <div className="mt-8 w-full  ">
          <div className=" mt-8 border-b-4 border-darker py-2">
            <h2 className="mt-8 text-left text-h4 text-darker lg:text-h3">
              Packages
            </h2>
          </div>{" "}
          <div className="mb-8 flex w-full flex-col justify-between lg:mb-0 lg:flex-row">
            <Card header="Wrap Package" className="w-full lg:w-[49%]">
              <p className="text-body text-dark">
                $17 p/p (Minimum 6 people, 1 Wrap p/p)
              </p>
              <p className="mt-4 text-bodyLarge font-semibold">Pick 1 Base:</p>
              <ul>
                {menu.Base.map((side, index) => (
                  <li key={index}>{side.name}</li>
                ))}
              </ul>
              <p className="mt-4 text-bodyLarge font-semibold">
                Pick 2 Proteins:
              </p>
              <ul>
                {menu.Protein.map((protein, index) => (
                  <li key={index}>{protein.name}</li>
                ))}
              </ul>

              <p className="mt-4 text-bodyLarge font-semibold">Pick 3 Sides:</p>
              <ul>
                {menu.Sides.map((side, index) => (
                  <li key={index}>{side.name}</li>
                ))}
              </ul>
            </Card>
            <Card header="Corporate Lunch" className="w-full lg:w-[49%]">
              <p className="text-body text-dark">$20 p/p (Minimum 6 people)</p>
              <p className="mt-4 text-bodyLarge font-semibold">Pick 1 Base:</p>
              <ul>
                {menu.Base.map((side, index) => (
                  <li key={index}>{side.name}</li>
                ))}
              </ul>
              <p className="mt-4 text-bodyLarge font-semibold">
                Pick 2 Proteins:
              </p>
              <ul>
                {menu.Protein.map((protein, index) => (
                  <li key={index}>{protein.name}</li>
                ))}
              </ul>

              <p className="mt-4 text-bodyLarge font-semibold">Pick 1 Salad:</p>
              <ul>
                {menu.Salads.map((side, index) => (
                  <li key={index}>{side.name}</li>
                ))}
              </ul>
              <p className="mt-4 text-bodyLarge font-semibold">Pick 3 Sides:</p>
              <ul>
                {menu.Sides.map((side, index) => (
                  <li key={index}>{side.name}</li>
                ))}
              </ul>
            </Card>
          </div>
          <div className=" my-4 flex justify-between border-b-4 border-darker py-2">
            <h2 className="text-left text-h4 text-darker lg:text-h3">
              Catering
            </h2>
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
          <p>{size ? "8 - 10 people" : "15 - 20 people"}</p>
          <div className="mt-4 flex flex-wrap ">
            {menu.CateringSmall.map((item, index) => (
              <div
                className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
              >
                <h4 className=" text-[16px] text-body font-semibold">
                  {item.name}
                </h4>
                {size ? (
                  item.price?.small ? (
                    <p className=" text-body font-semibold">
                      ${item.price?.small?.toFixed(2)}
                    </p>
                  ) : (
                    ""
                  )
                ) : (
                  <p className=" text-body font-semibold">
                    ${item.price?.large?.toFixed(2)}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4">{size ? "10 - 15 people" : "25 - 30 people"}</p>
          <div className="mt-4 flex flex-wrap ">
            {menu.CateringLarge.map((item, index) => (
              <div
                className={`my-2 flex w-full items-center justify-between   rounded-2xl border bg-white px-4 py-6 text-black shadow-elevation3 md:mr-[1%] md:w-[32%] lg:my-4 lg:w-[24%]`}
              >
                <h4 className=" text-[16px] text-body font-semibold">
                  {item.name}
                </h4>
                {size ? (
                  item.price?.small ? (
                    <p className=" text-body font-semibold">
                      ${item.price?.small?.toFixed(2)}
                    </p>
                  ) : (
                    ""
                  )
                ) : (
                  <p className=" text-body font-semibold">
                    ${item.price?.large?.toFixed(2)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-fit  px-8  py-8 md:px-16 2xl:px-96">
        <div className=" mb-4 border-b-4 border-white py-2  ">
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
                  ${item.price.toFixed(2)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CateringMenu;
