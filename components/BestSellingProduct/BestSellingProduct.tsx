import Image from "next/image";
import React from "react";

const BestSellingProduct = () => {
  return (
    <div className="py-16">
      <div className="container m-auto">
        <h1 className="text-3xl">Best Selling Product</h1>
        <div className="flex flex-wrap py-4">
          <div className="bg-white p-2 rounded-lg shadow-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
