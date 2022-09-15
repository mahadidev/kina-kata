import Image from "next/image";
import React from "react";
import { Product } from "../index";

const BestSellingProduct = (products: any) => {
  return (
    <div className="py-8">
      <div className="container m-auto px-3 sm:px-0">
        <h1 className="text-3xl">Best Selling Product</h1>
        <div className="flex flex-wrap justify-center sm:justify-start py-4">
          {products.products?.slice(0, 6).map((product: any, i: number) => (
            <Product key={i} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
