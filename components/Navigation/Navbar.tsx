import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "../index";
import { motion } from "framer-motion";
import { Button } from "../index";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div className="w-[100%] fixed top-0 left-0 z-40 backdrop-blur-lg bg-white/30">
      <div className="container m-auto flex items-center justify-between px-4 sm:px-0 py-4 sm:py-0">
        {/* Logo Start */}
        <Link href="/">
          <h1 className="text-black text-3xl font-semibold cursor-pointer">
            Kina<span className="text-secondary ml-[4px]">Kata</span>
          </h1>
        </Link>
        {/* Logo End */}
        {/* Normal Menu Start */}
        <div className="hidden sm:flex">
          <Link href="/">
            <button className="text-black px-3 py-7 transition ease-in focus:backdrop-blur-lg active:backdrop-blur-lg hover:backdrop-blur-lg focus:bg-purple/30  active:bg-purple/30 hover:bg-purple/30 ">
              Home
            </button>
          </Link>
          <Link href="/products">
            <button className="text-black px-3 py-7 transition ease-in focus:backdrop-blur-lg active:backdrop-blur-lg hover:backdrop-blur-lg focus:bg-purple/30  active:bg-purple/30 hover:bg-purple/30 ">
              Products
            </button>
          </Link>
          <Link href="/about">
            <button className="text-black px-3 py-7 transition ease-in focus:backdrop-blur-lg active:backdrop-blur-lg hover:backdrop-blur-lg focus:bg-purple/30  active:bg-purple/30 hover:bg-purple/30">
              About
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-black px-3 py-7 transition ease-in focus:backdrop-blur-lg active:backdrop-blur-lg hover:backdrop-blur-lg focus:bg-purple/30  active:bg-purple/30 hover:bg-purple/30">
              Contact
            </button>
          </Link>
        </div>
        {/* Normal Menu end */}
        {/* Normal Button Start */}
        <div className="hidden sm:flex items-center">
          <Button className="mr-2" type="secondary">
            <span className="text-lg xl:mr-2">{Icons.loginIcon}</span>
            <span className="hidden xl:block">Login</span>
          </Button>
          <Button type="secondary">
            <span className="text-lg xl:mr-2">{Icons.cartIcon}</span>
            <span className="hidden xl:block">Cart</span>
          </Button>
        </div>
        {/* Normal Button End */}
        {/* Menu Sidebar Start */}
        <div className="block sm:hidden">
          <span
            className="text-2xl cursor-pointer relative z-50"
            onClick={() => {
              setIsSidebar((result) => !result);
            }}
          >
            {!isSidebar ? Icons.menuIcon : Icons.closeIcon}
          </span>
          <motion.div
            animate={{
              width: isSidebar ? "300px" : "0",

              transition: {
                duration: 0.1,
                type: "spring",
                damping: 10,
              },
            }}
            className="w-0 h-[100vh] bg-white shadow-2xl fixed top-0 right-0"
          >
            <div className="flex flex-col mt-[52px]">
              <Link href="/">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-red hover:bg-primary">
                  Home
                </button>
              </Link>
              <Link href="/products">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-red hover:bg-primary">
                  Products
                </button>
              </Link>
              <Link href="/about">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-red hover:bg-primary">
                  About
                </button>
              </Link>
              <Link href="/contact">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-red hover:bg-primary">
                  Contact
                </button>
              </Link>
            </div>
            <div className="flex wrap mt-4 pl-6">
              <Button className="mr-2" type="secondary">
                <span className="text-lg mr-2">{Icons.loginIcon}</span>
                <span className="block">Login</span>
              </Button>
              <Button type="secondary">
                <span className="text-lg mr-2">{Icons.cartIcon}</span>
                <span className="block">Cart</span>
              </Button>
            </div>
          </motion.div>
        </div>
        {/* Menu Sidebar End */}
      </div>
    </div>
  );
};

export default Navbar;
