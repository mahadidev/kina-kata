import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Icons } from "../index";
import { ImageUrl } from "../../utils/";
import { Button } from "../index";
import { Rating } from "react-simple-star-rating";

const Product = ({
  name,
  image,
  rating,
  price,
  detail,
  width,
}: {
  name: string;
  image: string;
  rating: number;
  price: number;
  detail: string;
  width?: string;
}) => {
  const [isCart, setIsCart] = useState(null);
  const [isWishlist, setIsWishlist] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const imgRef = useRef(null);

  const textShorter = (name: string, maxLength: number) => {
    return name && name.length > maxLength
      ? name.slice(0, maxLength).split(" ").slice(0, -1).join(" ")
      : name;
  };

  const addCartHandle = () => {
    setIsCart((result: boolean) => !result);
  };
  const addWishlistHandle = () => {
    setIsWishlist((result: boolean) => !result);
  };

  useEffect(() => {
    setImageWidth(imgRef?.current?.offsetWidth);
  }, []);

  return (
    <div
      className={`${
        width
          ? width
          : "2xl:w-[16.1%] xl:w-[19.3%] lg:w-[24.2%] md:w-[32.2%] w-[47%]"
      } bg-white m-1 p-1 sm:p-2 rounded-lg shadow-lg`}
      onMouseOver={() => {
        setShowOptions(true);
      }}
      onMouseLeave={() => {
        setShowOptions(false);
      }}
    >
      <div
        className={`w-[100%] overflow-hidden flex items-center justify-center rounded-lg cursor-pointer relative`}
        style={{ height: imageWidth + "px" }}
      >
        <motion.div
          animate={{
            transform: showOptions
              ? "translateX(0%) scaleY(1)"
              : "translateX(0%) scaleY(0)",

            transition: {
              duration: 0.1,
              damping: 5,
            },
          }}
          className="w-[max-content !important] absolute right-auto left-auto bottom-2 shadow-2xl bg-white rounded-lg flex"
        >
          <Button
            className={`hover:text-primary ${
              isCart ? "text-primary" : "text-black"
            }`}
            type="white"
            onClick={addCartHandle}
          >
            <span className="text-xl">
              {isCart ? Icons.cartAddedIcon : Icons.cartAddIcon}
            </span>
          </Button>

          <Button
            className={`hover:text-primary ${
              isWishlist ? "text-primary" : "text-black"
            }`}
            type="white"
            onClick={addWishlistHandle}
          >
            <span className="text-xl">
              {isWishlist ? Icons.wishlistIcon : Icons.wishlistAddIcon}
            </span>
          </Button>
        </motion.div>
        <img
          className="w-[100%]"
          src={ImageUrl(image[0]).url()}
          alt={"Product Image"}
          ref={imgRef}
        />
      </div>
      <div className="pt-2 w-[100%]">
        <Rating
          className="text-sm"
          initialValue={
            rating ? Number((Math.round(rating * 2) / 2).toFixed(1)) : 0
          }
          ratingValue={0}
          readonly
          size={25}
        />
      </div>
      <div className="flex justify-between items-center pt-1">
        <h2 className="text-sm sm:text-xl cursor-pointer text-black">
          {textShorter(name, 30)}
        </h2>
      </div>
      <span className="text-blackLight text-sm sm:text-xl cursor-pointer">
        ${price}
      </span>
    </div>
  );
};

export default Product;
