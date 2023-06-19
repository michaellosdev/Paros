"use client";

import Slideshow from "@/components/Slideshow";
import { useState } from "react";

export async function generateMetadata({ params }) {
  return {
    title: "Contact Us",
    description: "Contact page",
  };
}

import DSC06579 from "@/public/static/images/DSC06579.jpg";
import DSC06593 from "@/public/static/images/DSC06593.jpg";
import DSC07767 from "@/public/static/images/DSC07767.jpg";
import DSC06768 from "@/public/static/images/DSC06768.jpg";
import DSC06799 from "@/public/static/images/DSC06799.jpg";
import DSC06845 from "@/public/static/images/DSC06845.jpg";
import DSC06864 from "@/public/static/images/DSC06864.jpg";

const heroImages = [
  DSC06579,
  DSC06593,
  DSC07767,
  DSC06768,
  DSC06799,
  DSC06845,
  DSC06864,
];

function page() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    messageBody: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          firstName: formState.firstName,
          lastName: formState.lastName,
          email: formState.email,
          messageBody: formState.messageBody,
        }), // <-- this is the important part
      });
      console.log(response);

      if (response.ok) {
        alert("Thank you for your message! We will get back to you shortly.");
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          messageBody: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-fit w-full flex-col items-center ">
      <Slideshow
        images={heroImages}
        styles="relative h-[30vh] w-[100%] lg:h-[60vh]"
      />
      <div className=" h-fit w-[95%] py-16 lg:w-[80%] ">
        <h1 className="darker-blue-text  py-8 text-center text-3xl font-bold lg:text-5xl ">
          {" "}
          Contact Us
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-1/2 rounded border px-4 py-2"
              value={formState.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-1/2 rounded border px-4 py-2"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded border px-4 py-2"
            value={formState.email}
            onChange={handleChange}
          />
          <textarea
            name="messageBody"
            placeholder="Message"
            className="w-full rounded border px-4 py-2"
            value={formState.messageBody}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="dark-blue-bg rounded px-4 py-2 text-white shadow-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
