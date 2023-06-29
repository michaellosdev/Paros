"use client";

import Slideshow from "@/components/Slideshow";
import { useState } from "react";

import a from "@/public/static/images/a.webp";
import b from "@/public/static/images/b.webp";
import c from "@/public/static/images/c.webp";
import d from "@/public/static/images/d.webp";
import e from "@/public/static/images/e.webp";
import f from "@/public/static/images/f.webp";
import g from "@/public/static/images/g.webp";
import h from "@/public/static/images/h.webp";
import i from "@/public/static/images/i.webp";
import j from "@/public/static/images/j.webp";
import k from "@/public/static/images/k.webp";
import l from "@/public/static/images/l.webp";
import m from "@/public/static/images/m.webp";
import n from "@/public/static/images/n.webp";
import p from "@/public/static/images/p.webp";
import q from "@/public/static/images/q.webp";

const images = [a, p, b, c, j, d, q, e, m, f, g, h, i, k, l, n];

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
        images={images}
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
