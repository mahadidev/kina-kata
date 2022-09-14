import React from "react";
import Link from "next/link";
import { Icons } from "../../lib";
import { motion } from "framer-motion";

const Button = ({
  children,
  onClick = () => {},
  href,
  width,
  type,
  className,
}: {
  children: any;
  onClick?: any;
  href?: any;
  width?: string;
  type?: "primary" | "white" | "secondary" | "outline";
  className?: string;
}) => {
  const ButtonType = {
    primary:
      "bg-gradient-to-r from-primary to-primary/80 text-[white] px-4 py-2",
    secondary:
      "bg-gradient-to-r from-secondary to-secondary/80 text-black px-4 py-2",
    white: "bg-white text-red px-4 py-2",
    outline: "",
  };

  const checkBtnType =
    type in ButtonType ? ButtonType[type] : ButtonType.primary;

  const btnClass = `${
    width ? "w-[" + width + "]" : "w-[max-content]"
  } ${checkBtnType} ${
    className ? className : ""
  }  flex items-center rounded cursor-pointer justify-center`;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${width ? "w-[" + width + "]" : "w-[max-content]"}`}
    >
      {onClick && <button className={btnClass}>{children}</button>}

      {href && (
        <Link href={href} className={btnClass}>
          {children}
        </Link>
      )}
    </motion.div>
  );
};

export default Button;
