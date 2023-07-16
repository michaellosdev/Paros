"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

//this is the Button component
const ButtonComponent = ({ ...props }) => {
  // let style

  // switch (props.type) {
  //     case "large":
  //         style = "bg-primary text-white text-xl font-bold px-8 py-4 rounded-full"

  return (
    <button
      className={`flex items-center justify-center rounded-[12px] px-8 py-4 text-label uppercase ${props.className} `}
      type={props.type}
    >
      <Image src={props.iconStart} alt={props.alt} className=" pr-4"></Image>

      {props.label}
      <Image src={props.iconEnd} alt={props.alt} className="h-6 pl-4"></Image>
    </button>
  );
};

function Button({ ...props }) {
  // you have to specify type of the button if its internal or external link since Link component from nextjs only works with internal links, you can do it like this:
  // <Button external = {true} link="/about">About</Button>
  // by default its fasle, so if you dont specify it, it will be internal link
  const external = !props.external ? false : true;

  return (
    <div>
      {external ? (
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          {" "}
          <ButtonComponent
            className={props.className}
            label={props.label}
            iconStart={props.iconStart}
            iconEnd={props.iconEnd}
            alt={props.alt}
          />{" "}
        </a>
      ) : (
        <Link href={props.href}>
          {" "}
          <ButtonComponent
            className={props.className}
            label={props.label}
            iconStart={props.iconStart}
            iconEnd={props.iconEnd}
            alt={props.alt}
            type={props.type}
          />{" "}
        </Link>
      )}
    </div>
  );
}

export default Button;
