import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, setCartSidebar, type RootState } from "../../redux";
import { Button, Icons, Logo } from "../index";
import Menu from "./Menu";
import { AuthButton, CartButton } from "./NavButtons";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-between items-center">
      <Logo />
      <span
        className="flex items-center sm:hidden text-2xl cursor-pointer ml-auto z-20"
        onClick={() => {
          setIsSidebar((result) => !result);
          {
            document.body.setAttribute(
              "style",
              `overflow: ${isSidebar ? "auto" : "hidden"}`
            );
          }
        }}
      >
        {!isSidebar ? Icons.menuIcon : Icons.closeIcon}
      </span>
      <motion.div
        animate={{
          width: isSidebar ? "90%" : "",

          transition: {
            type: "spring",
            stiffness: 260,
            damping: 30,
          },
        }}
        className="absolute sm:relative top-0 right-0 bg-white w-0 sm:w-full h-[100vh] sm:h-auto sm:bg-transparent sm:grid sm:grid-cols-2 sm:items-center sm:col-span-2 z-10 shadow-xl sm:shadow-none"
      >
        <Menu
          onRoute={() => {
            setIsSidebar(false);
            {
              document.body.setAttribute("style", `overflow: auto`);
            }
          }}
        />

        <div
          className={`w-full flex ml-3 sm:ml-0 mt-3 sm:mt-0 justify-start sm:justify-end`}
        >
          <CartButton />
          <AuthButton
            onRoute={() => {
              setIsSidebar(false);
              {
                document.body.setAttribute("style", `overflow: auto`);
              }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
