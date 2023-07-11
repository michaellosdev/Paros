"use client";

import React from "react";
import Image from "next/image";

function Card({ children, ...props }) {
  return (
    <div
      className={`my-4 flex  flex-col rounded-2xl border bg-white px-6 py-14 text-black shadow-elevation3 ${props.className}`}
    >
      {/* card header */}

      {props.header ? (
        <h4 className="text-h4 lg:h-24 lg:text-h3">{props.header}</h4>
      ) : (
        ""
      )}
      {props.body ? <p className="mt-4  text-body">{props.body}</p> : ""}

      {props.img ? (
        <div className={`mb-4 mt-4 h-64 w-full rounded-2xl `}>
          <Image
            src={props.img}
            className="h-full w-full rounded-2xl object-cover"
          ></Image>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
}

export default Card;
