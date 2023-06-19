import Image from "next/image";

//images import
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

const allImages = [a, b, c, d, e, f];

function Gallery() {
  return (
    <div className="flex h-fit w-full flex-wrap justify-center py-8">
      {allImages.map((src, index) => (
        <div key={index} className="m-4 h-60 lg:w-[30%]">
          <Image
            src={src}
            alt={`Gallery ${index}`}
            className="max-h-[100%] max-w-[100%] object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
