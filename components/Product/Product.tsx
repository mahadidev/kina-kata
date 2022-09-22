import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "../index";
import { ImageUrl } from "../../utils/";
import { Button } from "../index";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import { cartProductAdd, cartProductRemove } from "../../redux/CartSlice";

const Product = ({
  product,
  width,
  isMinimal = true,
}: {
  product: {
    _id: any;
    name: string;
    image: string;
    slug: string;
    qty: number;
    rating: number;
    price: number;
    detail: string;
    sold?: number;
  };
  isMinimal?: boolean;
  width?: any;
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
  const dispatch = useDispatch();

  const addCartHandle = () => {
    setIsCart((result: boolean) => !result);
    dispatch(cartProductAdd(product));
  };
  const addWishlistHandle = () => {
    setIsWishlist((result: boolean) => !result);
    dispatch(cartProductRemove(product));
  };

  useEffect(() => {
    setImageWidth(imgRef?.current?.offsetWidth);
  }, []);

  return (
    <>
      {product && (
        <>
          {!isMinimal && (
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
                  src={ImageUrl(product?.image[0]).url()}
                  alt={"Product Image"}
                  ref={imgRef}
                />
              </div>
              <div className="pt-2 w-[100%] flex items-center">
                <Rating
                  className="text-sm"
                  initialValue={
                    product?.rating
                      ? Number((Math.round(product?.rating * 2) / 2).toFixed(1))
                      : 0
                  }
                  ratingValue={0}
                  readonly
                  size={25}
                />
                <span className="pl-1">({product?.sold})</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <h2 className="text-sm sm:text-xl cursor-pointer text-black">
                  {textShorter(product?.name, 30)}
                </h2>
              </div>
              <span className="text-blackLight text-sm sm:text-xl cursor-pointer">
                ${product?.price}
              </span>
            </div>
          )}
          {isMinimal && (
            <div
              className={`${
                width
                  ? width
                  : "2xl:w-[15.6%] xl:w-[19.3%] lg:w-[24.2%] md:w-[32.2%] w-[47%]"
              } m-2`}
            >
              <div className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={ImageUrl(product?.image[0]).url()}
                    alt={"Product Image"}
                    ref={imgRef}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product?.name}`}>
                        <a>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {product?.name}
                        </a>
                      </Link>
                    </h3>
                    <div className="w-[100%] flex items-center">
                      <Rating
                        className="text-sm"
                        initialValue={
                          product?.rating
                            ? Number(
                                (Math.round(product?.rating * 2) / 2).toFixed(1)
                              )
                            : 0
                        }
                        ratingValue={0}
                        readonly
                        size={16}
                      />
                      <span className="pl-1 text-sm">({product?.sold})</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product?.price}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Product;
