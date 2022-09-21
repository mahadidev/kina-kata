import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WrapperPropery, ButtonPropery } from "./ButtonClasss";

interface ButtonType {
  children: any;
  animation?: boolean;
  onClick?: any;
  href?: any;
  type?: "primary" | "white" | "secondary" | "outline" | any;
  className?: string;
  btnClassName?: string;
  btnBadge?: any;
}

const Button = ({
  children,
  animation = true,
  onClick = () => {},
  href,
  type,
  className,
  btnClassName,
  btnBadge,
}: ButtonType) => {
  const wrapperRef = useRef(null);
  const btnRef = useRef(null);

  const [badgeWidth, setBadgeWidth] = useState(null);
  const btnBadgeRef = useRef(null);

  useEffect(() => {
    setBadgeWidth(btnBadgeRef?.current?.offsetHeight);
  });
  return (
    <motion.div
      whileHover={animation && { scale: 1.01 }}
      whileTap={animation && { scale: 0.99 }}
      ref={wrapperRef}
      {...WrapperPropery({
        type: type,
        wrapperClass: className,
        ref: wrapperRef,
      })}
    >
      {btnBadge && (
        <span
          className="absolute bg-white rounded-full text-black flex items-center justify-center top-[-5px] right-[-5px] cursor-pointer shadow-md"
          style={{ width: `${badgeWidth}px` }}
          ref={btnBadgeRef}
        >
          {btnBadge}
        </span>
      )}

      {onClick && !href && (
        <button
          {...ButtonPropery({ btnClass: btnClassName, ref: btnRef })}
          onClick={onClick}
          ref={btnRef}
        >
          {children}
        </button>
      )}

      {href && (
        <Link href={href}>
          <button
            {...ButtonPropery({ btnClass: btnClassName, ref: btnRef })}
            ref={btnRef}
          >
            {children}
          </button>
        </Link>
      )}
    </motion.div>
  );
};

export default Button;
