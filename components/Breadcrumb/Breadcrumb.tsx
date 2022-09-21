import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../../assets/lotties/about_animation.json";
import Button from "../Button/Button";

const Breadcrumb = () => {
  const contentRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(null);

  useEffect(() => {
    setOffsetTop(contentRef?.current?.offsetTop);
  }, []);

  return (
    <>
      <div className="border border-black-light border-r-0 border-l-0 border-b-0 bg-gray">
        <div className="container m-auto flex py-3">
          <Link href={"/"}>
            <p className="text-black cursor-pointer">Home</p>
          </Link>
          <span className="mx-2">/</span>
          <Link href={"/contact"}>
            <p className="text-primary cursor-pointer">Contact</p>
          </Link>
        </div>
      </div>
      <div
        className="container m-auto flex items-center relative"
        style={{
          height: `calc(100vh - ${offsetTop}px)`,
        }}
        ref={contentRef}
      >
        <div className="w-[30%]">
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
        <div className="w-[70%]">
          <div className="mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
