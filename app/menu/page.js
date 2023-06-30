import Gallery from "@/components/Gallery";
import OrderButton from "@/components/OrderButton";
import { AnimateOnView } from "@/components/AnimateOnVies";

export async function generateMetadata({ params }) {
  return {
    title: "Paros Menu",
    description: "Menu page",
  };
}

function page() {
  return (
    <AnimateOnView
      activeStyleClass="flex h-fit w-full flex-col items-center "
      activeStyle={{
        opacity: 1,
        transform: "translateY(0)",
        transition: "all 1s ease-in-out",
      }}
      inactiveStyle={{
        opacity: 0,
        transform: "translateY(100px)",
      }}
    >
      {/* menu banner */}
      <div className="darker-blue-bg mb-4 flex h-20 w-full items-center justify-center">
        <h1 className="text-3xl font-semibold text-white lg:text-4xl ">
          {" "}
          MENU
        </h1>
      </div>
      <div className=" h-fit w-[95%] py-16 lg:w-[80%] ">
        {/* build your plate section*/}
        <div className="w-full">
          {/* header */}

          <div className="darker-blue-text darker-blue-border flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">
              BUILD YOUR PLATE
            </h2>
            <h2 className="text-2xl font-light lg:text-5xl">$16.00</h2>
          </div>

          {/* build your plate body */}
          {/* base section */}

          <div>
            <h3 className="darker-blue-text my-4 text-2xl font-medium">BASE</h3>
            <div className="flex h-fit w-full flex-col justify-between text-xl">
              <ul>
                <li className="mb-2">Fries</li>
                <li className="mb-2">Rice |Pilaf|</li>
                <li className="mb-2">Mixed Greens</li>
              </ul>
            </div>
          </div>

          {/* protein section */}
          <div className="">
            <h3 className="darker-blue-text my-4 text-2xl font-medium">
              {" "}
              PROTEIN
            </h3>

            <div className="flex flex-col text-xl lg:flex-row ">
              {/* left */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Chicken Kabob</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Chicken Lule Kabob</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Chicken Ranchera</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Baby Back Ribs</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Lamb Chops</p>
                      <p className="font-medium">+$6.50</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* right */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2 ">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Beef Kabob</p>

                      <p className="font-medium">+$3.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Beef Lule Kabob</p>
                      <p className="font-medium">+$1.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Salmon</p>
                      <p className="font-medium">+$3.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Gyros</p>
                      <p className="font-medium">+$1.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Beef Ranchera</p>
                      <p className="font-medium">+$3.00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* sides section */}
          <div className="">
            <h3 className="darker-blue-text my-4 text-2xl font-medium">
              {" "}
              SIDES
            </h3>
            <div className="flex flex-col text-xl lg:flex-row ">
              {/* left */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Hummus</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Spicy Hummus</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Yogurt Cucumber</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Ikra</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Baba Ganush</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Tomato & Jalapeno</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Garden Salad</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Cabbage Salad</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Orzo Pasta Salad</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Bean Salad</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* right */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2 ">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Fatoush Salad</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Greek Salad</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Pickled Turnip</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>French Fries</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Rice |Pilaf|</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Grilled Veggies</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Marinated Feta Cheese</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Olives</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Cucumber Salad</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wraps salads section */}
      <div className="darker-blue-bg flex h-fit w-full flex-col items-center justify-center py-16 text-white">
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className="flex h-20 w-full items-end justify-between border-b-4 border-white pb-2 text-white">
            <h2 className="text-2xl font-semibold lg:text-5xl">WRAPS</h2>
            <h2 className="text-2xl font-light lg:text-5xl">$11.00</h2>
          </div>
          <div className="my-6 w-full text-center text-sm text-white lg:text-lg">
            <p>
              All wraps include Lettuce, Tomato, Marinated Onions, House Sauce*
            </p>
          </div>
          {/* wraps section */}
          <div className="">
            <div className="flex flex-col text-xl lg:flex-row ">
              {/* left */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Chicken Kabob</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Chicken Lule Kabob</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Chicken Ranchera</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Gyros</p>
                      {/* <p className="font-semibold">+$6.50</p> */}
                    </div>
                  </li>
                </ul>
              </div>
              {/* right */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2 ">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Beef Kabob</p>

                      <p className="font-medium">+$1.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Beef Lule Kabob</p>
                      <p className="font-medium">+$1.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Salmon</p>
                      <p className="font-medium">+$1.00</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Beef Ranchera</p>
                      <p className="font-medium">+$1.00</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* salads section */}
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className="mb-6 flex h-20 w-full items-end justify-between border-b-4 border-white pb-2 text-white">
            <h2 className="text-2xl font-semibold lg:text-5xl">SALADS</h2>
          </div>
          {/* wraps section */}
          <div className="">
            <div className="flex flex-col text-xl lg:flex-row ">
              {/* left */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Cabbage Salad</p>
                      <p className="font-medium">$8.50</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Fatoush Salad</p>
                      <p className="font-medium">$8.50</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  lg:pr-8">
                      <p>Garden Salad</p>
                      <p className="font-medium">$8.50</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* right */}
              <div className="flex h-fit w-full flex-col justify-between lg:w-1/2 ">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Greek Salad</p>
                      <p className="font-medium">$8.50</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PROTEIN ADDON START */}
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className="flex h-20 w-full items-end justify-center  pb-2 text-white">
            <h2 className="text-xl font-semibold lg:text-2xl">
              PROTEIN ADD ON
            </h2>
          </div>
          {/* wraps section */}
          <div className="">
            <div className="flex flex-col text-xl lg:flex-row ">
              <div className="flex h-fit w-full flex-col justify-between ">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Any Beef</p>
                      <p className="font-medium">$7.50</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Any Chicken</p>
                      <p className="font-medium">$5.50</p>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between  ">
                      <p>Salmon</p>
                      <p className="font-medium">$7.50</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* PROTEIN ADDON END */}
      </div>

      {/*SIDES START  */}
      <div className="flex h-fit w-full flex-col items-center justify-center py-16">
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className="darker-blue-text darker-blue-border mb-6 flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">SIDES</h2>
          </div>
          <div className="darker-blue-text flex h-8 w-full justify-end text-xl font-normal">
            <p className="mx-4">8oz</p>
            <p className="mx-2">16oz</p>
          </div>
          {/* wraps section */}
          <div className="">
            <div className="flex flex-col text-xl lg:flex-row ">
              {/* left */}
              <div className="flex h-fit w-full flex-col justify-between ">
                {" "}
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Hummus</p>
                      <div className="flex">
                        <p className="mr-4 font-medium ">$4.00</p>
                        <p className="font-medium">$8.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Spicy Hummus</p>
                      <div className="flex">
                        <p className="mr-4 font-medium">$4.00</p>
                        <p className="font-medium">$8.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Yogurt Cucumber</p>
                      <div className="flex">
                        <p className="mr-3 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Ikra</p>
                      <div className="flex">
                        <p className="mr-3 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Baba Ganush</p>
                      <div className="flex">
                        <p className="mr-3 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className=" mb-2 flex  justify-between">
                      <p>Orzo Pasta Salad</p>
                      <div className="flex">
                        <p className="mr-3 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Bean Salad</p>
                      <div className="flex">
                        <p className="mr-3 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Pickled Turnip</p>
                      <div className="flex">
                        <p className="mr-4 font-medium">$4.00</p>
                        <p className="font-medium">$8.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Grilled Veggies</p>
                      <div className="flex">
                        <p className="mr-3 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Marinated Feta</p>
                      <div className="flex">
                        <p className="mr-4 font-medium">$4.00</p>
                        <p className="font-medium">$8.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Olives</p>
                      <div className="flex">
                        <p className="mr-4 font-medium">$4.00</p>
                        <p className="font-medium">$8.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Cucumber Salad</p>
                      <div className="flex">
                        <p className="mr-4 font-medium">$5.00</p>
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Meatball Soup</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium">$5.00</p> */}
                        <p className="font-medium">$6.50ea</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Rice</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium">$5.00</p> */}
                        <p className="font-medium">$4.50ea</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>French Fries</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium">$5.00</p> */}
                        <p className="font-medium">$3.50ea</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Tomato</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium">$5.00</p> */}
                        <p className="font-medium">$1.50ea</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Jalapeno</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium">$5.00</p> */}
                        <p className="font-medium">$1.00ea</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SIDES END */}
      {/*  DRINKS SECTION START */}
      <div className="darker-blue-bg flex h-fit w-full flex-col items-center justify-center py-16 text-white">
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className="  mb-6 flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">DRINKS</h2>
          </div>
          <div className=" flex h-8 w-full justify-end text-xl font-normal">
            <p className="mx-4">16oz</p>
            <p className="mx-2">24oz</p>
          </div>
          <div className="flex flex-col text-xl lg:flex-row ">
            <div className="flex h-fit w-full flex-col justify-between ">
              <ul>
                <li>
                  <div className="mb-2 flex w-full justify-between ">
                    <p>Fountain Drink</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$2.50</p>
                      <p className="font-medium">$3.75</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-8 w-full"></div>
          <div className="flex flex-col text-xl lg:flex-row ">
            {/* left */}
            <div className="flex h-fit w-full flex-col justify-between lg:w-1/2">
              {" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-between  lg:pr-8">
                    <p>Pepsi</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  lg:pr-8">
                    <p> Diet Pepsi</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  lg:pr-8">
                    <p>Pepsi Zero</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  lg:pr-8">
                    <p>Mtn Dew</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  lg:pr-8">
                    <p>Perrier</p>
                    <p className="font-medium">$2.50</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* right */}
            <div className="flex h-fit w-full flex-col justify-between lg:w-1/2 ">
              {" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-between  ">
                    <p>Starry</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  ">
                    <p>Brisk</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  ">
                    <p>Crush Orange</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  ">
                    <p>Dr. Pepper</p>
                    <p className="font-medium">$2.75</p>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-between  ">
                    <p>Water</p>
                    <p className="font-medium">$2.00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ALACARTE DRINKS SECTION END */}
      <div className=" h-fit w-[95%] py-16 lg:w-[80%] ">
        <div className="w-full">
          <div className="darker-blue-text darker-blue-border mb-6 flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">SAUCES</h2>
            <h2 className="text-2xl font-light lg:text-5xl">$0.75</h2>
          </div>
        </div>
        <div className="flex h-fit w-full flex-col justify-between text-xl">
          <ul>
            <li className="mb-2">Ranch</li>
            <li className="mb-2">Thousand Island</li>
            <li className="mb-2">Home Made Salad Dressing</li>
            <li className="mb-2">House Salsa</li>
            <li className="mb-2">Garlic</li>
          </ul>
        </div>
      </div>
      <div className=" h-fit w-[95%] py-16 lg:w-[80%] ">
        <Gallery />
      </div>
      <OrderButton />
    </AnimateOnView>
  );
}

export default page;
