import React from "react";
import Image from "next/image";
import { client, urlFor } from "../lib/client";
import { Banner, BestSellingProduct, Button } from "../components";
import { Icons } from "../lib";

const index = (products: any) => {
  const textShorter = (name: string, maxLength: number) => {
    return name && name.length > maxLength
      ? name.slice(0, maxLength).split(" ").slice(0, -1).join(" ")
      : name;
  };

  return (
    <div>
      <Banner />
      <div className="py-16">
        <div className="container m-auto px-3 sm:px-0">
          <h1 className="text-3xl">Best Selling Product</h1>
          <div className="flex flex-wrap justify-center sm:justify-start py-4">
            {products.products?.map((product: any) => (
              <div
                key={product.name}
                className="w-[47%] sm:w-[240px] bg-white m-1 sm:m-2 p-1 sm:p-2 rounded-lg shadow-lg relative"
              >
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
                    src={urlFor(product.image[0]).url()}
                    alt={"Product Image"}
                  />
                </div>
                <div className="flex justify-between items-center pt-2">
                  <h2 className="text-sm sm:text-xl cursor-pointer">
                    {textShorter(product.name, 22)}
                  </h2>
                  <span className="text-[#00000094] text-sm sm:text-xl cursor-pointer">
                    ${product.price}
                  </span>
                </div>
                <p className="hidden sm:block mt-2 leading-none text-[#00000094] text-sm sM:text-md">
                  {textShorter(product.detail, 47)}
                </p>
                <Button
                  className="hidden sm:flex mt-2 py-1"
                  width="100%"
                  type="secondary"
                >
                  Buy Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default index;
