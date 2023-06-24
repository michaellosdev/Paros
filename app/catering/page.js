import Gallery from "@/components/Gallery";
import OrderButton from "@/components/OrderButton";
import Link from "next/link";

export async function generateMetadata({ params }) {
  return {
    title: "Paros Catering Menu",
    description: "Catering menu page",
  };
}

function page() {
  return (
    <div className="flex h-fit w-full flex-col items-center ">
      <div className="darker-blue-bg mb-4 flex h-20 w-full items-center justify-center">
        <h1 className="text-3xl font-semibold text-white lg:text-4xl ">
          {" "}
          CATERING MENU
        </h1>
      </div>
      <div className=" h-fit w-[95%] py-16 lg:w-[80%] ">
        <div className="w-full">
          <div className="darker-blue-text darker-blue-border flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">PACKAGES</h2>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col text-xl lg:flex-row ">
            {/* left */}
            <div className="flex h-fit w-full flex-col justify-between text-center lg:w-1/2">
              <h3 className="darker-blue-text my-4 text-3xl font-bold">
                {" "}
                WRAP PACKAGE
              </h3>{" "}
              <h4 className="dark-blue-text">
                $17 p/p (Minimum 6 people, <br /> 1 Wrap p/p){" "}
              </h4>
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 2 Proteins:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Beef</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Kabob</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Beef Lule</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Lule</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Beef Ranchera</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Ranchera</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 1 Base:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Rice</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>French Fries</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Mixed Greens</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 2 Sides:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Hummus</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Spicy Hummus</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Bean Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Pickled Turnip</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Orzo Pasta</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Yogurt Cucumber</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Baba Ganush</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Ikra</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Cucumber Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Grilled Veggies</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Marinated Feta cheese</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Olives</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
            </div>
            {/* right */}
            <div className="flex h-fit w-full flex-col justify-between text-center lg:w-1/2">
              <h3 className="darker-blue-text my-4 text-3xl font-bold">
                {" "}
                CORPORATE LUCNH CATERING
              </h3>{" "}
              <h4 className="dark-blue-text">
                $20 p/p (Minimum 6 people){" "}
              </h4>{" "}
              <br />
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 1 Base:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Rice</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>French Fries</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Mixed Greens</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 2 Proteins:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Beef</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Kabob</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Beef Lule</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Lule</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>BEef Ranchera</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Chicken Ranchera</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 1 Salad:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Garden Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Greek Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Fatoush Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Cabbage Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
              <h3 className="darker-blue-text my-4 text-2xl font-normal">
                {" "}
                Pick 3 Sides:
              </h3>{" "}
              <ul>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Hummus</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Spicy Hummus</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Bean Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Pickled Turnip</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Orzo Pasta</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Yogurt Cucumber</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Baba Ganush</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Ikra</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Cucumber Salad</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Grilled Veggies</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Marinated Feta cheese</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex justify-center">
                    <p>Olives</p>
                    {/* <p className="font-semibold">+$6.50</p> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="darker-blue-bg flex h-fit w-full flex-col items-center justify-center py-16 text-white">
        <div className="flex h-fit w-[95%] flex-col items-center justify-center lg:w-[80%]">
          <h2 className="text-center text-3xl font-semibold md:text-4xl ">
            {" "}
            Contact us now to place an order!{" "}
          </h2>
          <Link href="/contact">
            <button className="primary-bg mt-8 rounded-xl px-14 py-4 text-lg font-semibold text-white shadow-lg duration-300 hover:bg-blue-300 lg:px-32 lg:py-6 lg:text-2xl ">
              CONTACT PAGE
            </button>
          </Link>
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center py-16">
        {" "}
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className="darker-blue-text darker-blue-border mb-6 flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">A LA CARTE</h2>
          </div>
          <div className="">
            <div className="flex flex-col text-xl lg:flex-row ">
              <div className="flex h-fit w-full flex-col justify-between ">
                <ul>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Beef Kabob</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$17.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Chicken Kabob</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Beef Lule Kabob</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$12.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Chicken Lule Kabob</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Lamb Chops</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$20.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Baby Back Ribs</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$15.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Salmon</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$15.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Beef Ranchera</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$17.00</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mb-2 flex justify-between ">
                      <p>Chicken Ranchera</p>
                      <div className="flex">
                        {/* <p className="mr-4 font-medium ">$4.00</p> */}
                        <p className="font-medium">$10.00</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="darker-blue-bg flex h-fit w-full flex-col items-center justify-center py-16 text-white">
        <div className="h-fit w-[95%] lg:w-[80%]">
          <div className=" mb-6 flex h-20 w-full items-end justify-between border-b-4 pb-2">
            <h2 className="text-2xl font-semibold lg:text-5xl">SIDES</h2>
          </div>
          <div className=" mb-2 flex h-8 w-full justify-end text-xl font-semibold">
            <p className="mx-4">Small</p>
            <p className="mx-2">Large</p>
          </div>
          <div className=" mb-2 flex h-8 w-full justify-between text-xl font-normal">
            <p>Serves</p>
            <div className="flex w-1/2 justify-end">
              <p className="mx-4">8-10</p>
              <p className="mx-2">15-20</p>
            </div>
          </div>
          <div className="">
            <div className="flex w-full flex-col text-xl  ">
              <ul>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Cabbage Salad</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$20.00</p>
                      <p className="font-medium">$40.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Bean Salad</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Garden Salad</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$20.00</p>
                      <p className="font-medium">$40.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Greek Salad</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Orzo Pasta Salad</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>French Fries</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$17.50</p>
                      <p className="font-medium">$35.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Rice</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$17.50</p>
                      <p className="font-medium">$35.00</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="darker-blue-text my-2 flex h-8 w-full justify-between text-xl font-normal">
            <p>Serves</p>
            <div className="flex w-1/2 justify-end">
              <p className="mx-4">10-15</p>
              <p className="mx-2">25-30</p>
            </div>
          </div>
          <div className="">
            <div className="flex w-full flex-col text-xl  ">
              <ul>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Humus</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Spicy Hummus</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Baba Ganush</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Yogurt Cucumber</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Pickled Turnip</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Fatoush Salad</p>
                    <div className="flex">
                      <p className="mr-4 font-medium ">$25.00</p>
                      <p className="font-medium">$50.00</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Tomato</p>
                    <div className="flex">
                      {/* <p className="mr-4 font-medium ">$25.00</p> */}
                      <p className="font-medium">$1.25ea</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-full justify-between">
                    <p>Jalapeno</p>
                    <div className="flex">
                      {/* <p className="mr-4 font-medium ">$25.00</p> */}
                      <p className="font-medium">$1.25ea</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-fit w-[100%] items-center justify-center ">
        <Gallery />
      </div>

      {/* <OrderButton /> */}
    </div>
  );
}

export default page;
