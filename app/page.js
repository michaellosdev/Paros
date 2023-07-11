import Image from "next/image";
import Link from "next/link";
import Slideshow from "@/lib/Slideshow";
import Review from "@/lib/Review";
import { AnimateOnView } from "@/lib/utils/AnimateOnVies";
import Hero from "@/lib/sections/Hero";
import AboutUs from "@/lib/sections/AboutUs";
import Products from "@/lib/sections/Products";
import Services from "@/lib/sections/Services";
import Testimonials from "@/lib/sections/Testimonials";
import Contact from "@/lib/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Products />
      <Services />
      <Testimonials />
    </>
  );
}
