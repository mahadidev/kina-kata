import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import { Breadcrumb } from "../index";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../../assets/lotties/about_animation.json";

const Contact = () => {
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  const breadcrumbHeight = useSelector(
    (state: RootState) => state.basic.breadcrumbHeight
  );

  return (
    <>
      <div className="relative">
        <div className="bg-primaryLight absolute top-0 left-0 bottom-0 leading-5 h-full w-full overflow-hidden z-0" />
        <svg
          className="absolute bottom-0 left-0  z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div
          className="container m-auto flex items-center relative z-10"
          style={{
            height: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
          }}
        >
          <div className="w-full 2xl:w-[30%] xl:w-[50%] lg:w-[70%] m-auto">
            <h1 className="text-4xl font-bold font-title text-black mb-2">
              Contact us.
            </h1>
            <p className="text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="pt-4">
              <input
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
                name="name"
                placeholder="Full Name"
              />
              <input
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
                name="email"
                placeholder="Email adress"
              />
              <input
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
                name="name"
                placeholder="Subject"
              />

              <textarea
                className="w-full rounded py-3 px-3 mb-4 text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none  focus:border-primary"
                rows={6}
                placeholder="Message"
              ></textarea>

              <Button className="w-100">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
