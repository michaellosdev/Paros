"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/public/static/images/Logo-copy.png";

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="flex h-24 w-full items-center justify-between  px-2 md:px-14 lg:h-36">
      <div className="flex h-[100%] w-3/4 items-center justify-center md:w-[25%] md:p-4 ">
        <Image
          src={logo}
          alt="logo"
          className="max-h-[100%] max-w-[100%] object-contain"
        />
      </div>
      {/* desktop menu */}
      <nav className="primary-text hidden h-full w-[50%] items-center justify-center justify-self-center text-xl font-semibold lg:flex">
        <div
          className={`menu-item mx-4 flex  h-8 w-24 flex-col items-center justify-between`}
        >
          <Link
            href="/"
            className={`  ${pathname === "/" ? "dark-blue-text " : ""} `}
          >
            {" "}
            Home
          </Link>
        </div>
        <div
          className={`menu-item mx-4 flex  h-8 w-24 flex-col items-center justify-between`}
        >
          <Link
            href="/menu"
            className={` ${pathname === "/menu" ? "dark-blue-text" : ""} `}
          >
            {" "}
            Menu
          </Link>
        </div>
        <div
          className={`menu-item mx-4 flex  h-8 w-24 flex-col items-center justify-between`}
        >
          <Link
            href="/catering"
            className={` ${pathname === "/catering" ? "dark-blue-text" : ""} `}
          >
            Catering
          </Link>
        </div>
        <div
          className={`menu-item mx-4 flex  h-8 w-24 flex-col items-center justify-between`}
        >
          <Link
            href="/contact"
            className={`${pathname === "/contact" ? "dark-blue-text" : ""} `}
          >
            {" "}
            Contact
          </Link>
        </div>
      </nav>

      {/* mobile menu */}
      <div className="flex w-full justify-end lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="z-[999] mr-4 flex h-6 w-6 flex-col justify-around"
        >
          <div
            className={`h-0.5 w-6 bg-black transition-transform duration-500 ${
              open ? "mt-[45%] h-10 rotate-45 transform bg-white" : ""
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 bg-black transition-opacity duration-500 ${
              open ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 bg-black transition-transform duration-500 ${
              open ? " mb-[50%] h-10 -rotate-45 transform bg-white" : ""
            }`}
          ></div>
        </button>

        <div
          className={`fixed inset-0 z-50  transform bg-gray-900 transition-transform duration-500 ease-in-out ${
            open ? " translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-[90vh] flex-col items-center justify-center pt-20 text-center text-3xl font-bold text-white">
            <Link
              href="/"
              className={pathname === "/" ? "dark-blue-text my-2" : "my-2"}
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={pathname === "/menu" ? "dark-blue-text my-2" : " my-2"}
              onClick={() => setOpen(!open)}
            >
              Menu
            </Link>
            <Link
              href="/catering"
              className={
                pathname === "/catering" ? "dark-blue-text my-2" : "my-2"
              }
              onClick={() => setOpen(!open)}
            >
              Catering
            </Link>
            <Link
              href="/contact"
              className={
                pathname === "/contact" ? "dark-blue-text my-2" : " my-2"
              }
              onClick={() => setOpen(!open)}
            >
              Contact
            </Link>

            <div className=" ">
              <a
                href="https://www.toasttab.com/paros-family-restaurant-929-e-verdugo-ave/v3/?mode=fulfillment"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-dark-blue darker-blue-bg mx-4 mt-8 rounded-xl px-14 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-300 lg:px-16 lg:py-4 lg:text-2xl">
                  Order Online
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-full w-[25%] items-center justify-center lg:flex ">
        <a
          href="https://www.toasttab.com/paros-family-restaurant-929-e-verdugo-ave/v3/?mode=fulfillment"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-dark-blue darker-blue-bg mx-4  rounded-xl px-10 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-300 lg:px-10 lg:py-4 lg:text-xl">
            Order Online
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
