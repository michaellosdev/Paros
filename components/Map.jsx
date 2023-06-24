"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import locationMarker from "@/public/static/images/location-pointer.png";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  version: "weekly",
});

function Map() {
  const [map, setMap] = React.useState(null);

  useEffect(() => {
    loader.load().then(() => {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 34.21975128611916, lng: -118.3661227670493 },
        zoom: 14,
        disableDefaultUI: true,
      });

      //add marker
      const marker = new google.maps.Marker({
        position: { lat: 34.22475128611916, lng: -118.3661227670493 },
        map: map,
        icon: {
          url: locationMarker.src,
          scaledSize: new google.maps.Size(150, 150),
        },
        title: "Paros Family Restaurant",
      });
      setMap(map);
    });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div id="map" className="h-screen md:h-[70vh] "></div>
      <div className="darker-blue-bg absolute bottom-0 flex h-[40vh] w-full flex-col px-6 text-white md:h-[20vh] md:flex-row md:px-24">
        <div className="flex h-1/3 w-full flex-col justify-center text-center md:h-full md:w-1/2 md:text-left ">
          <h3 className="text-xl font-medium lg:text-3xl">
            Hours of operations:
          </h3>
          <h4 className="text-xl font-thin lg:text-2xl">Monday - Sunday</h4>
          <h4 className="text-xl font-thin lg:text-2xl">11AM - 11PM</h4>
        </div>
        <div className="flex h-1/3 w-full flex-col justify-center text-center md:h-full md:w-1/2 md:text-right">
          <h3 className="text-xl font-medium lg:text-3xl">Address:</h3>
          <a href="https://goo.gl/maps/AvycpPFzAcvbdA6p9">
            <h4 className="text-xl font-thin lg:text-2xl">
              8499 Sunland Blvd, Sun Valley, CA
            </h4>
          </a>
          <a
            href="tel:+18189623480"
            className="hidden text-lg font-thin md:block lg:text-2xl"
          >
            (818) 962-3480
          </a>
        </div>
        <div className="text-center md:hidden">
          <h3 className="text-xl font-medium">Click to call us!</h3>
          <a
            href="tel:+18189623480"
            className=" w-full pb-4 text-center text-2xl font-thin  lg:text-2xl"
          >
            (818) 962-3480
          </a>
        </div>
      </div>
    </div>
  );
}

export default Map;
