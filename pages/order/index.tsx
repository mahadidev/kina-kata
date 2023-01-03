import React from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { type RootState } from "../../redux";

const Template = () => {
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  const breadcrumbHeight = useSelector(
    (state: RootState) => state.basic.breadcrumbHeight
  );

  return (
    <div
      className="bg-white"
      style={{
        marginTop: navigationHeight + "px",
      }}
    >
      <div className="relative">
        <div
          className="container m-auto flex items-center justify-center relative z-10 text-4xl text-center"
          style={{
            height: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
          }}
        >
          Coming Soon.
        </div>
      </div>
    </div>
  );
};

export default Template;
