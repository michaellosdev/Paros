"use client";

import React from "react";
import Button from "../components/Button";
import { useState } from "react";

const Form = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phoneNum: "",
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
          fullName: formState.fullName,
          email: formState.email,
          phoneNum: formState.phoneNum,
          messageBody: formState.messageBody,
        }), // <-- this is the important part
      });
      console.log(response);

      if (response.ok) {
        alert("Thank you for your message! We will get back to you shortly.");
        setFormState({
          fullName: "",
          email: "",
          phoneNum: "",
          messageBody: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-fit w-full  rounded-xl bg-white px-6 py-14 shadow-2xl">
      <h3 className="text-h3 text-black">Send us a message</h3>
      <form
        className="mt-8 flex h-[60vh] w-full flex-col items-center justify-between"
        onSubmit={handleSubmit}
      >
        {/* <input type="hidden" name="form-name" value="contact" /> */}
        <div className="border-accent flex h-[10%] w-full items-center justify-between rounded-xl border-4 ">
          <label className="sr-only">Name</label>
          <input
            className="bg-secondary placeholder:text-dark-grey25 h-full w-full rounded-xl px-4 text-[1.25rem] text-h4 font-normal text-black placeholder:font-light md:text-h4"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formState.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="border-accent flex h-[10%] w-full items-center  justify-between rounded-xl border-4">
          <label className="sr-only">Email</label>
          <input
            className="bg-secondary placeholder:text-dark-grey25 h-full w-full rounded-xl px-4 text-[1.25rem] text-h4 font-normal text-black placeholder:font-light md:text-h4"
            type="email"
            name="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="border-accent flex h-[10%] w-full items-center justify-between rounded-xl border-4 ">
          <label className="sr-only">Phone</label>
          <input
            className="bg-secondary placeholder:text-dark-grey25 h-full w-full rounded-xl px-4 text-[1.25rem] text-h4 font-normal text-black placeholder:font-light md:text-h4"
            type="number"
            name="phoneNum"
            value={formState.phoneNum}
            onChange={handleChange}
            placeholder="Phone"
          />
        </div>
        <div className="border-accent flex h-[45%] w-full items-center justify-between rounded-xl border-4 ">
          <label className="sr-only">Message</label>
          <textarea
            className="bg-secondary placeholder:text-dark-grey25 h-full w-full resize-none rounded-xl px-4 pt-4 text-[1.25rem] text-h4 font-normal text-black placeholder:font-light md:text-h4"
            type="text"
            name="messageBody"
            placeholder="Message"
            value={formState.messageBody}
            onChange={handleChange}
          />
        </div>
        <div className="flex h-[10%] w-full items-center justify-center lg:justify-end ">
          <Button
            type="submit"
            external
            className="mt-8 bg-darker transition-all duration-200 ease-in-out hover:bg-primary hover:text-white"
            label="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
