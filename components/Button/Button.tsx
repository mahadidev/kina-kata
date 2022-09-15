import React from "react";
import Link from "next/link";
import { Icons } from "../../lib";
import { motion } from "framer-motion";

const Button = ({
  children,
  animation = true,
  onClick = () => {},
  href,
  width,
  type,
  className,
}: {
  children: any;
  animation?: boolean;
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
  } ${checkBtnType} flex items-center rounded cursor-pointer justify-center`;

  return (
    <motion.div
      whileHover={animation && { scale: 1.1 }}
      whileTap={animation && { scale: 0.9 }}
      className={`${width ? "w-[" + width + "]" : "w-[max-content]"}  ${
        className ? className : ""
      } `}
    >
      {onClick && !href && <button className={btnClass}>{children}</button>}

      {href && (
        <Link href={href}>
          <button className={btnClass}>{children}</button>
        </Link>
      )}
    </motion.div>
  );
};

export default Button;
