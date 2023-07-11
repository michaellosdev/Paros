"use client";

import Image from "next/image";
import user from "@/public/static/images/user.png";
import o from "@/public/static/images/o.jpg";
import o1 from "@/public/static/images/o1.jpg";
import yelp5stars from "@/public/static/images/large_5@3x.png";
import yelpLogo from "@/public/static/images/yelp1.png";
import { AnimateOnView } from "./utils/AnimateOnVies";

// const config = {
//   headers: {
//     Authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`,
//   },
// };

// const getData = async () => {
//   const res = await fetch(
//     `https://api.yelp.com/v3/businesses/paros-family-restaurant-san-fernando-valley/review_highlights`,
//     config
//   );

//   if (!res.ok) {
//     console.log("error");
//   }

//   return res.json();
// };

const Review = async () => {
  // const data = await getData();
  const data = {
    reviews: [
      {
        id: "EhWRMoVaGoymifKCIvRrMQ",
        url: "https://www.yelp.com/biz/paros-family-restaurant-san-fernando-valley?adjust_creative=loWnsFhA-DukHNN9fVjmjQ&hrid=EhWRMoVaGoymifKCIvRrMQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=loWnsFhA-DukHNN9fVjmjQ",
        text: "As a local to the Sunland area. I came across this new joint  today and I am glad I decided to stop by. The owner suggested the baby back ribs and the...",
        rating: 5,
        time_created: "2023-05-11 20:01:14",
        user: {
          id: "Yg47N_R7gztXS-HwgdB6ow",
          profile_url:
            "https://www.yelp.com/user_details?userid=Yg47N_R7gztXS-HwgdB6ow",
          image_url: user,
          name: "Daniel K.",
        },
      },
      {
        id: "CuPVCjB50byfvwSgWAvF2w",
        url: "https://www.yelp.com/biz/paros-family-restaurant-san-fernando-valley?adjust_creative=loWnsFhA-DukHNN9fVjmjQ&hrid=CuPVCjB50byfvwSgWAvF2w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=loWnsFhA-DukHNN9fVjmjQ",
        text:
          "Great Service!!\n" +
          "Delicious Food!!\n" +
          "Got the Beef & Chicken Lulu plate, with Baba Ganoush, Pilaf, and Yogurt/Cucumber with a stack of pita.",
        rating: 5,
        time_created: "2023-06-03 16:36:07",
        user: {
          id: "auSrAuZT4-DKd6yhnf6wKg",
          profile_url:
            "https://www.yelp.com/user_details?userid=auSrAuZT4-DKd6yhnf6wKg",
          image_url: o1,
          name: "Stewart H.",
        },
      },
      {
        id: "WjsBobAWv_I1fNtQ81tNOQ",
        url: "https://www.yelp.com/biz/paros-family-restaurant-san-fernando-valley?adjust_creative=loWnsFhA-DukHNN9fVjmjQ&hrid=WjsBobAWv_I1fNtQ81tNOQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=loWnsFhA-DukHNN9fVjmjQ",
        text: "Very Good , fresh with quality ingredients ! very impressive and the service was nice , the inside ambiance was very clean. Definitely a pleasure don't...",
        rating: 5,
        time_created: "2023-05-22 15:16:16",
        user: {
          id: "zdbuA6MC3Jg_YO26ugLMDg",
          profile_url:
            "https://www.yelp.com/user_details?userid=zdbuA6MC3Jg_YO26ugLMDg",
          image_url: o,
          name: "Anjelica H.",
        },
      },
    ],
    total: 29,
    possible_languages: ["en"],
  };

  return (
    <div className="flex h-fit w-full flex-col items-center">
      {data.reviews.map((review) => (
        <AnimateOnView
          activeStyle={{
            opacity: 1,
            transform: "translateY(0)",
            transition: "all 1s ease-in-out",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          inactiveStyle={{
            opacity: 0,
            transform: "translateY(100px)",
            transition: "all 1s ease-in-out",
          }}
        >
          <div className=" my-4 flex h-60 w-[100%] rounded-lg bg-gray-100 shadow-lg xl:w-[60%]">
            {/* left side */}
            <div className="flex h-full w-1/3 flex-col items-center justify-center ">
              <div>
                <Image
                  alt="user image"
                  src={review.user.image_url}
                  className="h-20 w-20 rounded-full object-cover"
                ></Image>
              </div>
              <h3 className="text-lg font-semibold">{review.user.name}</h3>
              <div className="mt-2 w-[70%] md:w-[40%]">
                <Image
                  src={yelp5stars}
                  alt="yelp 5 start rating"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            {/* right side */}
            <div className="flex h-full w-2/3 flex-col justify-between px-3 pt-3 md:p-8">
              <div className="h-2/3">
                <p className="text-md">
                  {review.text}{" "}
                  {review.text.endsWith("...") ? (
                    <a
                      href={review.url}
                      className="darker-blue-text"
                      aria-label="read more"
                    >
                      Whole review
                    </a>
                  ) : null}
                </p>
              </div>
              <div className="flex h-1/4 items-center justify-between">
                <p className="text-gray-500">
                  {new Date(review.time_created).toLocaleDateString()}
                </p>
                <a
                  href="https://www.yelp.com/biz/paros-family-restaurant-san-fernando-valley"
                  className="w-[10%]"
                >
                  <Image
                    src={yelpLogo}
                    alt="yelp logo"
                    className=" h-12 object-contain"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnView>
      ))}
    </div>
  );
};

export default Review;
