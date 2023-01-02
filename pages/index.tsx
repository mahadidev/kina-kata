import React, { useEffect } from "react";
import TrackVisibility from "react-on-screen";
import { useSelector } from "react-redux";
import { Banner, BestSellingProduct, Products, PromoCard } from "../components";
import { type RootState } from "../redux";

const HomePage = () => {
  const count = useSelector((state: RootState) => state.basic.navigationHeight);

  const getPageData = (data: any) => {
    console.log(data);
  };

  return (
    <div style={{ marginTop: count + "px" }}>
      <Banner isVisible={true} name={"heroBanner"} />
      <PromoCard isVisible={true} name="homePromoBanner" />
      <BestSellingProduct isVisible={true} />
      <Banner name={"homePromoBanner"} isVisible={true} />
      <Products count={5} loaderCount={1} isVisible={true} />
    </div>
  );
};

export default HomePage;
