"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SwipeShow = ({ ...props }) => {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const images = props.images;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 100 && index < images.length - 1) {
      // right swipe
      setIndex((prevState) => prevState + 1);
    }
    if (endX - startX > 100 && index > 0) {
      // left swipe
      setIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setTranslateX(-index * 100);
  }, [index]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="absolute right-4 top-[45%] z-[999] opacity-50">
        <div className="h-2 w-6 rotate-45 bg-white"></div>
        <div className="mt-[5px] h-2 w-6 -rotate-45 bg-white"></div>
      </div>
      <div className="absolute left-4 top-[45%] z-[999] opacity-50">
        <div className="h-2 w-6 -rotate-45 bg-white"></div>
        <div className="mt-[5px] h-2 w-6 rotate-45 bg-white"></div>
      </div>
      <div
        style={{
          display: "flex",
          transform: `translateX(${translateX}%)`,
          transition: "transform 0.5s ease-out",
        }}
      >
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="slideshow"
            style={{
              flexShrink: 0,
              width: "100%",
              height: "100%",
              objectPosition: "center",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeShow;
