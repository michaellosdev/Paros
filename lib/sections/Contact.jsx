"use client";

import React from "react";
import Form from "../components/Form";

function Contact() {
  return (
    <div className="flex h-fit flex-col bg-dark px-8  py-16 text-white md:px-16 lg:flex-row 2xl:px-96">
      <div className="w-full  lg:w-1/2">
        <h3 className="text-h4 lg:text-h3">Hours of Operation:</h3>
        <p className="mt-4 text-[24px] text-h5">Monday - Sunday</p>
        <p className="text-[24px] text-h5">11AM - 11PM</p>
        <h3 className="mt-8 text-h4 lg:text-h3">Address:</h3>
        <a href="https://goo.gl/maps/AvycpPFzAcvbdA6p9">
          <p className="mt-4 text-[24px] text-h5">
            8499 Sunland Blvd, Sun Valley, CA
          </p>
        </a>
        <a href="tel:+18189623480" className="text-[24px] text-h5">
          (818) 962-3480
        </a>
      </div>
      <div className="mt-8  w-full  lg:mt-0 lg:w-1/2">
        <Form />
      </div>
    </div>
  );
}

export default Contact;
