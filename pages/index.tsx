import React from "react";
import { BestSellingProduct, Banner, Products, PromoCard } from "../components";
import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";

const index = () => {
  const count = useSelector((state: RootState) => state.basic.navigationHeight);

  return (
    <div style={{ marginTop: count + "px" }}>
      <Banner name={"heroBanner"} />
      <PromoCard />
      <BestSellingProduct />
      <Banner name={"homePromoBanner"} />
      <Products count={6} />
    </div>
  );
};

export default index;
