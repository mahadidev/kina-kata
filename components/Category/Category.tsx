import React from "react";
import { ImageUrl } from "../../utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Category = (category: {
  name: string;
  image: string;
  slug: {
    current: string;
  };
}) => {
  return (
    <Link href={category.slug.current}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-[100px] h-[100%] bg-white m-1 px-1 py-2 rounded-lg shadow-lg relative"
      >
        <div className="w-[50px] h-[50px] overflow-hidden m-auto flex items-center justify-center rounded-lg cursor-pointer">
          <img
            className="w-[100%]"
            src={ImageUrl(category.image).url()}
            alt={"Product Image"}
          />
        </div>
        <h2 className="text-md mt-2 text-center cursor-pointer">
          {category.name}
        </h2>
      </motion.div>
    </Link>
  );
};

export default Category;
