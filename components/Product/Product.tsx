import React from "react";
import { Icons } from "../../lib";
import { urlFor } from "../../lib/client";
import { Button } from "../index";

const Product = ({
  name,
  image,
  price,
  detail,
}: {
  name: string;
  image: string;
  price: number;
  detail: string;
}) => {
  const textShorter = (name: string, maxLength: number) => {
    return name && name.length > maxLength
      ? name.slice(0, maxLength).split(" ").slice(0, -1).join(" ")
      : name;
  };

  return (
    <div className="w-[47%] sm:w-[240px] bg-white m-1 sm:m-2 p-1 sm:p-2 rounded-lg shadow-lg relative">
      <div className="absolute p-2 right-0 top-0">
        <Button className="mb-2 shadow-2xl" type="secondary">
          <span className="text-lg">{Icons.cartIcon}</span>
        </Button>

        <Button className="shadow-2xl" type="secondary">
          <span className="text-lg">{Icons.wishlistIcon}</span>
        </Button>
      </div>
      <div className="w-[100%] h-[150px] sm:h-[224px] overflow-hidden flex items-center justify-center rounded-lg cursor-pointer">
        <img
          className="w-[100%]"
          src={urlFor(image[0]).url()}
          alt={"Product Image"}
        />
      </div>
      <div className="flex justify-between items-center pt-2">
        <h2 className="text-sm sm:text-xl cursor-pointer">
          {textShorter(name, 22)}
        </h2>
        <span className="text-[#00000094] text-sm sm:text-xl cursor-pointer">
          ${price}
        </span>
      </div>
      <p className="hidden sm:block mt-2 leading-none text-[#00000094] text-sm sM:text-md">
        {textShorter(detail, 47)}
      </p>
      <Button
        className="hidden sm:flex mt-2 py-1"
        width="100%"
        type="secondary"
      >
        Buy Now
      </Button>
    </div>
  );
};

export default Product;
