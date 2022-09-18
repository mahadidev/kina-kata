import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../../utils";
import { Button } from "../index";

const PromoBanner = () => {
  return (
    <div className="sm:h-[500px] flex items-center relative">
      <motion.img
        animate={{ scale: 1.1 }}
        transition={{
          ease: "linear",
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="m-auto hidden xl:block absolute top-0 bottom-0 left-0 right-0 w-[50%] sm:w-auto sm:h-[500px] z-10"
        src={"https://www.freeiconspng.com/uploads/iphone-x-new-model-13.png"}
        alt="Iphone Image"
      />
      <div className="container relative bg-white rounded-xl py-8 px-2 mx-2 sm:mx-auto shadow-sm">
        <h1 className="text-primary text-3xl title-font font-bold ml-4">
          NEW GAMING EXPERIENCE.
        </h1>
        <div className="flex flex-wrap max-w-[580px]">
          <div className="flex max-w-[280px] p-2 items-center">
            <span className="text-6xl text-primary">{Icons.mobileIcon}</span>
            <div className="pl-2">
              <h2 className="text-lg">DISPLAY SIZE</h2>
              <p className="text-sm">
                Capacitive touch screen / 6.2 inch LCD / 1280×720 resolution
              </p>
            </div>
          </div>
          <div className="flex max-w-[280px] p-2 items-center">
            <span className="text-6xl text-primary">{Icons.cpuIcon}</span>
            <div className="pl-2">
              <h2 className="text-lg">CPU/GPU</h2>
              <p className="text-sm">NVIDIA customised Tegra processor</p>
            </div>
          </div>
          <div className="flex max-w-[280px] p-2 items-center">
            <span className="text-6xl text-primary">{Icons.batteryIcon}</span>
            <div className="pl-2">
              <h2 className="text-lg">NTERNAL BATTERY</h2>
              <p className="text-sm">
                Lithium-ion battery / battery capacity 4310mA
              </p>
            </div>
          </div>
          <div className="flex max-w-[280px] p-2 items-center">
            <span className="text-6xl text-primary">{Icons.batteryIcon}</span>
            <div className="pl-2">
              <h2 className="text-lg">NINTENDO DOCK</h2>
              <p className="text-sm">
                Dock used for charging and connecting to TV
              </p>
            </div>
          </div>
          <Button className="md:absolute ml-4 md:ml-0 mt-2 md:mt-0 right-8 bottom-8">
            View Product
            <span className="text-2xl ml-3">{Icons.arrowLongRightIcon}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
