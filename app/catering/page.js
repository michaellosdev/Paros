import Gallery from "@/lib/Gallery";
import OrderButton from "@/lib/OrderButton";
import Link from "next/link";
import { AnimateOnView } from "@/lib/utils/AnimateOnVies";
import Contact from "@/lib/sections/Contact";
import CateringMenu from "@/lib/sections/CateringMenu";

export async function generateMetadata({ params }) {
  return {
    title: "Paros Catering Menu",
    description: "Catering menu page",
  };
}

function page() {
  return (
    <>
      <div className="absolute top-0 z-[998] flex h-24 w-full  items-center justify-between  bg-darker px-8  md:px-16 lg:h-36 2xl:px-96"></div>
      <CateringMenu />
    </>
  );
}

export default page;
