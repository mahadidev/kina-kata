import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icons } from "../index";
import { motion } from "framer-motion";
import { Button } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { setNavigationHeight } from "../../redux/BasicSlice";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { totalProduct } = useSelector((state: RootState) => state.cart);
  const navbarRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigationHeight(navbarRef?.current?.offsetHeight));
  }, []);

  const router = useRouter();

  return (
    <div className="w-[100%] fixed top-0 left-0 z-40 bg-white" ref={navbarRef}>
      <div className="container m-auto flex items-center justify-between py-4 sm:py-0">
        {/* Logo Start */}
        <Link href="/">
          <h1 className="text-black text-3xl font-semibold cursor-pointer">
            Kina<span className="text-primary ml-[4px]">Kata</span>
          </h1>
        </Link>
        {/* Logo End */}
        {/* Normal Menu Start */}
        <div className="hidden sm:flex">
          {[
            {
              title: "Home",
              href: "/",
            },
            {
              title: "Shop",
              href: "/shop",
            },
            {
              title: "About",
              href: "/about",
            },
            {
              title: "Contact",
              href: "/contact",
            },
          ].map((item, i) => (
            <Link href={item.href} key={i}>
              <button
                className={`${
                  router.pathname == item.href ? "text-primary" : "text-black"
                } px-3 py-7 transition ease-in focus:text-primary active:text-primary hover:text-primary  `}
              >
                {item.title}
              </button>
            </Link>
          ))}
        </div>
        {/* Normal Menu end */}
        {/* Normal Button Start */}
        <div className="hidden sm:flex items-center">
          <Button className="mr-2" type="primary" href={"login"}>
            <span className="text-lg xl:mr-2  flex items-center">
              {Icons.loginIcon}
            </span>
            <span className="hidden xl:block">Login</span>
          </Button>
          <Button
            type="primary"
            href={"cart"}
            btnBadge={totalProduct > 0 ? totalProduct : false}
          >
            <span className="text-lg xl:mr-2 flex items-center">
              {Icons.cartIcon}
            </span>
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
            <div
              className="flex flex-col"
              style={{ marginTop: `${navbarRef?.current?.offsetHeight}px` }}
            >
              <Link href="/">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-white hover:bg-primary">
                  Home
                </button>
              </Link>
              <Link href="/products">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-white hover:bg-primary">
                  Products
                </button>
              </Link>
              <Link href="/about">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-white hover:bg-primary">
                  About
                </button>
              </Link>
              <Link href="/contact">
                <button className="text-start pl-6 py-3 font-semibold transition ease-in hover:text-white hover:bg-primary">
                  Contact
                </button>
              </Link>
            </div>
            <div className="flex wrap mt-4 pl-6">
              <Button className="mr-2" type="secondary" href={"login"}>
                <span className="text-lg mr-2 flex items-center">
                  {Icons.loginIcon}
                </span>
                <span className="block">Login</span>
              </Button>
              <Button type="secondary" href={"cart"}>
                <span className="text-lg mr-2 flex items-center">
                  {Icons.cartIcon}
                </span>
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
