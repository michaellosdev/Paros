import React from "react";
import Image from "next/image";
import logo from "@/public/Logo-white.png";
import yelp from "@/public/yelp.png";
import facebook from "@/public/facebook.png";
import instagram from "@/public/instagram.png";
// import menu from "@/public/menu.png";
import menu from "@/public/menu.jpg";

function Footer() {
  return (
    <div className="h-fit bg-darker text-white md:h-[60vh]">
      {/* footer container */}
      <div className="flex h-fit w-full flex-col items-center justify-center md:h-[70%] md:flex-row">
        {/* footer top */}
        <div className="flex h-full w-full flex-col items-center md:w-1/2 ">
          <div className="flex h-4/6 w-2/3 items-center justify-center md:w-full  ">
            <Image
              src={logo}
              className="max-h-[100%] max-w-[100%] object-contain"
              alt="logo"
            />
          </div>
          <h3 className="text-center text-xl font-thin md:text-3xl">
            KEEPING YOUR TASTE <br /> BUDS HAPPY SINCE 1982
          </h3>
        </div>
        <div className="flex h-full w-1/2 flex-col items-center ">
          <a href={menu.src} target="_blank">
            <div className="flex h-4/6 w-full items-center justify-center p-10  ">
              <Image
                src={menu}
                className="max-h-[100%] max-w-[100%] object-contain"
                alt="menu"
              />
            </div>
            <h3 className="text-center text-xl font-thin md:text-3xl">
              DOWNLOAD OUR MENU
            </h3>
          </a>
        </div>
      </div>
      {/* footer bottom */}
      <div className="flex h-[30%] items-center justify-center py-12">
        <a
          href="https://www.yelp.com/biz/paros-family-restaurant-san-fernando-valley"
          className="mx-4 h-full w-[10%] "
        >
          <Image
            alt="yelp logo"
            src={yelp}
            className="max-h-[100%] max-w-[100%] object-contain"
          />
        </a>
        <a href="#f" className="mx-4 h-full w-[10%]">
          <Image
            alt="facebook logo"
            src={facebook}
            className="max-h-[100%] max-w-[100%] object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/parosfamilyrestaurant/"
          className="mx-4 h-full w-[10%]"
        >
          <Image
            alt="instagram logo"
            src={instagram}
            className="max-h-[100%] max-w-[100%] object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
