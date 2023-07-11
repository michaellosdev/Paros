import Gallery from "@/lib/Gallery";
import OrderButton from "@/lib/OrderButton";
import Contact from "@/lib/sections/Contact";
import Menu from "@/lib/sections/Menu";
import { AnimateOnView } from "@/lib/utils/AnimateOnVies";

export async function generateMetadata({ params }) {
  return {
    title: "Paros Menu",
    description: "Menu page",
  };
}

function page() {
  return (
    <>
      <div className="absolute top-0 z-[998] flex h-24 w-full  items-center justify-between  bg-darker px-8  md:px-16 lg:h-36 2xl:px-96"></div>
      <Menu />
    </>
  );
}

export default page;
