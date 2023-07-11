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
        position: { lat: 34.21575128611916, lng: -118.3661227670493 },
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
      <div id="map" className="h-screen md:h-[50vh] "></div>
    </div>
  );
}

export default Map;
