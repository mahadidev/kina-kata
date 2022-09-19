import React, { useEffect } from "react";
import { BestSellingProduct, Banner, Products, PromoCard } from "../components";

const index = () => {
  return (
    <div className="">
      <Banner name={"heroBanner"} />
      <PromoCard />
      <BestSellingProduct />
      <Banner name={"homePromoBanner"} />
      <Products />
    </div>
  );
};

export default index;
