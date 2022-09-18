import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";
import { Product } from "../index";

const BestSellingProduct = (products: any) => {
  console.log(products.prodducts);
  return (
    <div className="py-8">
      <div className="container m-auto px-3 sm:px-0">
        <h1 className="text-3xl">
          Best <span className="text-primary">Selling Product.</span>
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-start py-4">
          {products?.prodducts?.map((product: any, i: number) => (
            <Product key={i} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
