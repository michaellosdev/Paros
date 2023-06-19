import Image from "next/image";

//images import
import DSC06579 from "@/public/static/images/DSC06579.jpg";
import DSC06593 from "@/public/static/images/DSC06593.jpg";
import DSC07767 from "@/public/static/images/DSC07767.jpg";
import DSC06768 from "@/public/static/images/DSC06768.jpg";
import DSC06799 from "@/public/static/images/DSC06799.jpg";
import DSC06845 from "@/public/static/images/DSC06845.jpg";
import DSC06864 from "@/public/static/images/DSC06864.jpg";
import DSC06876 from "@/public/static/images/DSC06876.jpg";
import DSC06882 from "@/public/static/images/DSC06882.jpg";

const allImages = [
  DSC06579,
  DSC06593,
  DSC07767,
  DSC06768,
  DSC06799,
  DSC06845,
  DSC06864,
  DSC06876,
  DSC06882,
];

function Gallery() {
  return (
    <div className="flex h-fit w-full flex-wrap py-8">
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
