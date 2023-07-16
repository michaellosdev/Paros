"use client";

import React from "react";
import Button from "../components/Button";

function Services() {
  return (
    <div className="bg-darker px-8 py-16 md:px-16 2xl:px-48">
      <h2 className="text-h3 text-white  lg:text-h2">Or let us come to you</h2>
      <p className="mt-8 text-bodyLarge text-white ">
        Whether you want to visit us or prefer us to bring Paros experience to
        you, the choice is yours. Our comprehensive catering services extend the
        ambiance and culinary excellence of Paros Family Restaurant to your
        special events. From private parties to corporate gatherings, our
        dedicated team is ready to create an unforgettable Mediterranean feast
        for you and your guests. We handle all the details so you can savor the
        moments with your guests. For more information, navigate to our
        'Catering' page or get in touch with us directly.
      </p>
      <div className="mt-8 flex w-full flex-col lg:flex-row">
        <Button
          href="/menu"
          label="see the menu"
          className={
            "mt-4 border border-white py-4 text-white hover:opacity-75 sm:w-full "
          }
        />
        <Button
          external={true}
          href="https://order.toasttab.com/online/paros-family-restaurant-929-e-verdugo-ave"
          label="order online"
          className={
            "mt-4 bg-white text-black hover:opacity-75 sm:w-full lg:ml-4 "
          }
        />
      </div>
    </div>
  );
}

export default Services;
