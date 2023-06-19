import Image from "next/image";
import Link from "next/link";
import Slideshow from "@/components/Slideshow";
import Review from "@/components/Review";

//hero images
import a from "@/public/static/images/a.jpg";
import b from "@/public/static/images/b.jpg";
import c from "@/public/static/images/c.jpg";
import d from "@/public/static/images/d.jpg";
import e from "@/public/static/images/e.jpg";
import f from "@/public/static/images/f.jpg";
import g from "@/public/static/images/g.jpg";
import h from "@/public/static/images/h.jpg";
import i from "@/public/static/images/i.jpg";
import j from "@/public/static/images/j.jpg";
import k from "@/public/static/images/k.jpg";
import l from "@/public/static/images/l.jpg";
import m from "@/public/static/images/m.jpg";
import n from "@/public/static/images/n.jpg";
import p from "@/public/static/images/p.jpg";
import q from "@/public/static/images/q.jpg";

const images = [a, p, b, c, j, d, q, e, m, f, g, h, i, k, l, n];

export default function Home() {
  return (
    <div id="main" className="flex flex-col items-center">
      <Slideshow
        images={images}
        styles="relative h-[30vh] w-[100%] lg:h-[90vh]"
      />
      {/* welcome to paros container */}
      <div
        className={` flex h-fit w-[90%] flex-col items-center justify-center py-12 text-justify lg:h-fit lg:w-[70%]`}
      >
        <h1 className="darker-blue-text opa py-8 text-3xl font-bold lg:text-5xl ">
          Welcome to Paros
        </h1>

        <p className="darker-blue-text mb-8 text-lg lg:text-2xl">
          <b>We are</b> Family Restaurant, a cherished cornerstone of Los
          Angeles, California. We're known not just for our excellent
          Mediterranean cuisine, but for our commitment to superior service and
          warm, welcoming atmosphere. <br /> <br /> &nbsp; &nbsp; Whether you're
          joining us for a meal, picking up a takeout order, or utilizing our
          efficient delivery service, you'll enjoy a taste of the Mediterranean
          prepared with care and the freshest ingredients. Our friendly staff is
          dedicated to making your experience memorable with every visit or
          order. <br /> <br /> &nbsp; &nbsp; Paro's is more than a restaurant;
          it's a family tradition and a vital part of the Los Angeles community.
          Experience the magic of Mediterranean dining with us today at Paro's
          Family Restaurant.
        </p>

        <Slideshow
          images={images}
          styles="relative h-[30vh] w-[100%] lg:h-[90vh] lg:hidden"
        />
        <div
          id="picture-box-desktop"
          className=" hidden h-[35vh] w-[100%] flex-col justify-between lg:flex lg:flex-row"
        >
          <div className="  w-full lg:h-full lg:w-[32%]  ">
            <Image src={m} className="h-[100%] w-[100%] object-cover " />
          </div>
          <div className="h-full w-[32%]  ">
            <Image src={d} className="h-[100%] w-[100%] object-cover" />
          </div>
          <div className="h-full w-[32%]  ">
            <Image src={l} className="h-[100%] w-[100%] object-cover " />
          </div>
        </div>
        <Link href="/menu">
          <button className="darker-blue-bg mt-8 rounded-xl px-14 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-300 lg:px-32 lg:py-6 lg:text-2xl ">
            ORDER ONLINE
          </button>
        </Link>
      </div>
      {/* let us come to you */}
      <div className="primary-bg flex h-fit w-full flex-col items-center justify-center py-8 text-justify text-white lg:h-[75vh] ">
        <div className="flex  w-[90%] flex-col items-center justify-center lg:w-[70%] ">
          <h2 className="my-8 flex-col text-center text-3xl font-semibold lg:text-5xl ">
            Let us come to you!
          </h2>
          <p className=" mb-8 text-lg lg:text-2xl">
            Whether you want to visit us or prefer us to bring Paro's experience
            to you, the choice is yours. Our comprehensive catering services
            extend the ambiance and culinary excellence of Paro's Family
            Restaurant to your special events. From private parties to corporate
            gatherings, our dedicated team is ready to create an unforgettable
            Mediterranean feast for you and your guests. We handle all the
            details so you can savor the moments with your guests. For more
            information, navigate to our 'Catering' page or get in touch with us
            directly.
          </p>

          <Link href="/catering">
            <button className=" bg-dark-blue darker-blue-bg mt-8 rounded-xl px-14 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-300 lg:px-32 lg:py-6 lg:text-2xl ">
              CATERING MENU
            </button>
          </Link>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center px-6 py-12 text-justify lg:h-fit ">
        <div className="flex h-fit w-[100%] flex-col items-center justify-center lg:w-[70%] ">
          <h2 className="darker-blue-text my-8 flex-col text-center text-5xl font-semibold">
            What our customers say!
          </h2>
          <Review />
        </div>
      </div>
    </div>
  );
}
