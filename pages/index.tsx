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
      <TrackVisibility>
        {({ isVisible }) =>
          isVisible ? (
            <Banner isVisible={true} name={"heroBanner"} />
          ) : (
            <Banner isVisible={true} name={"heroBanner"} />
          )
        }
      </TrackVisibility>
      <TrackVisibility>
        {({ isVisible }) =>
          isVisible ? (
            <PromoCard isVisible={true} name="homePromoBanner" />
          ) : (
            <PromoCard isVisible={true} name="homePromoBanner" />
          )
        }
      </TrackVisibility>
      <TrackVisibility>
        {({ isVisible }) =>
          isVisible ? (
            <BestSellingProduct isVisible={true} />
          ) : (
            <BestSellingProduct isVisible={true} />
          )
        }
      </TrackVisibility>
      <TrackVisibility>
        {({ isVisible }) =>
          isVisible ? (
            <Banner name={"homePromoBanner"} isVisible={true} />
          ) : (
            <Banner name={"homePromoBanner"} isVisible={true} />
          )
        }
      </TrackVisibility>
      <TrackVisibility>
        {({ isVisible }) =>
          isVisible ? (
            <Products count={5} loaderCount={1} isVisible={true} />
          ) : (
            <Products count={5} loaderCount={1} isVisible={true} />
          )
        }
      </TrackVisibility>
    </div>
  );
};

export default HomePage;
