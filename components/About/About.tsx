import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Player } from "@lottiefiles/react-lottie-player";
import aboutAnimation from "../../assets/lotties/about_animation.json";

const About = () => {
  const contentRef = useRef(null);
  const [offsetTop, setOffsetTop] = useState(null);

  useEffect(() => {
    setOffsetTop(contentRef?.current?.offsetTop);
  }, []);

  return (
    <>
      <div
        className="border border-black-light border-r-0 border-l-0 border-b-0 bg-gray"
        style={{
          height: `calc(100vh - ${offsetTop}px)`,
        }}
      >
        <div className="container m-auto flex py-3">
          <Link href={"/"}>
            <p className="text-black cursor-pointer">Home</p>
          </Link>
          <span className="mx-2">/</span>
          <Link href={"/about"}>
            <p className="text-primary cursor-pointer">About</p>
          </Link>
        </div>
        <div
          className="bg-white h-[100%]"
          ref={contentRef}
        >
          <div className="container m-auto flex items-center justify-between">
            <div className="w-[100%] max-w-[600px]">
              <h1 className="text-4xl font-bold font-title text-black mb-2">
                About us.
              </h1>
              <p className="text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div>
              <Player autoplay loop src={aboutAnimation} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
