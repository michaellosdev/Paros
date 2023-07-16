"use client";

import React from "react";
import Card from "../components/Card";
import n from "@/public/n.webp";
import k from "@/public/k.webp";
import g from "@/public/g.webp";
import Button from "../components/Button";

function Products() {
  return (
    <div className="h-fit bg-primary px-8 py-16 md:px-16  2xl:px-48">
      {/* section header */}
      <div className="flex h-16 items-center ">
        <h2 className=" text-h3 text-white lg:text-h2">
          Order Something for Takeout
        </h2>
      </div>
      {/* section body */}
      <div className="mt-16 flex  flex-col justify-between md:flex-row lg:mt-8">
        <Card
          header="Beef Ranchera"
          body="Juicy, flavorful beef, slow-cooked to perfection and accompanied by your choice of two delicious sides."
          img={n}
          className="w-full md:w-[49%] lg:w-[32%]"
          alt="Beef Ranchera"
        >
          <Button
            external
            href="https://order.toasttab.com/online/paros-family-restaurant-929-e-verdugo-ave/item-build-a-plate_0ccdf905-8de5-4ec9-bf65-4c578aa7d1fc"
            label="order online"
            className="w-full bg-dark text-white hover:opacity-75"
          />
        </Card>
        <Card
          header="Chicken Lule Kabob"
          body="Savor our Chicken Lule Kabob: Perfectly grilled, spice-marinated chicken served with your choice of two sides"
          img={k}
          className="w-full md:w-[49%] lg:w-[32%]"
          alt="Chicken Lule Kabob"
        >
          <Button
            external
            href="https://order.toasttab.com/online/paros-family-restaurant-929-e-verdugo-ave/item-build-a-plate_0ccdf905-8de5-4ec9-bf65-4c578aa7d1fc"
            label="order online"
            className="w-full bg-dark text-white hover:opacity-75"
          />
        </Card>
        <Card
          header="Lamb Chops"
          body="Tender, succulent cuts of lamb expertly grilled and paired with your selection of two sides"
          img={g}
          className="w-full md:hidden md:w-[49%] lg:block lg:w-[32%]"
          alt="Lamb Chops"
        >
          <Button
            external
            href="https://order.toasttab.com/online/paros-family-restaurant-929-e-verdugo-ave/item-build-a-plate_0ccdf905-8de5-4ec9-bf65-4c578aa7d1fc"
            label="order online"
            className="w-full bg-dark text-white hover:opacity-75"
          />
        </Card>
      </div>
    </div>
  );
}

export default Products;
