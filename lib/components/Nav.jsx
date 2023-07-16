"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/public/Logo-white.png";

function Nav({ ...props }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = props.navLinks;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className=" absolute top-0 z-[999] flex h-24 w-full  items-center justify-between  bg-transparent px-8 py-12 text-h2  md:px-16 lg:h-36 2xl:px-96">
      <div className="z-[999] flex h-36 w-36 items-center justify-center">
        <Image src={logo} alt="logo" className="object-fit " />
      </div>
      {/* desktop menu */}
      <nav className="mx-8 hidden h-full w-fit items-center justify-end text-xl  font-bold text-white lg:flex">
        {links.map((link, index) => (
          <div
            className={`menu-item mx-4 flex  h-8  flex-col items-center justify-between`}
            key={index}
          >
            <Link
              href={link.path}
              className={`  ${pathname === link.path ? "text-dark " : ""} `}
            >
              {" "}
              {link.name}
            </Link>
          </div>
        ))}
      </nav>

      {/* mobile menu */}
      <div className="flex w-full justify-end lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="z-[999] mr-4 flex h-10 w-10 flex-col justify-around"
          aria-label="menu button"
          alt="menu button"
        >
          <div
            className={`h-1 w-1/2 self-end bg-white transition-transform duration-500 ${
              open
                ? " h-1 -translate-x-1 translate-y-2 -rotate-45 transform bg-white"
                : ""
            }`}
          ></div>
          <div
            className={`h-1 w-full bg-white transition-transform duration-500  ${
              open ? "rotate-45 " : ""
            }`}
          ></div>
          <div
            className={`h-1 w-1/2 bg-white transition-transform duration-500 ${
              open
                ? " h-1 -translate-y-1.5 translate-x-1 -rotate-45 transform bg-white"
                : ""
            }`}
          ></div>
        </button>

        <div
          className={`fixed inset-0 z-50  transform bg-darker transition-transform duration-500 ease-in-out ${
            open ? " translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[90vh] flex-col items-center justify-center pt-20 text-center text-3xl font-bold text-white">
            {links.map((link, index) => (
              <Link
                href={link.path}
                className={
                  pathname === link.path ? "my-2 text-primary" : "my-2"
                }
                onClick={() => setOpen(!open)}
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
