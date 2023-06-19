"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

function Slideshow({ images, ...props }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Increment the currentIndex every 3 seconds (adjust the duration as needed)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => {
      // Clear the interval on component unmount
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`${props.styles}`}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={
            index === currentIndex
              ? "slide active max-h-[100%] max-w-[100%] object-cover"
              : "slide max-h-[100%] max-w-[100%] object-cover"
          }
        />
      ))}
    </div>
  );
}

export default Slideshow;
