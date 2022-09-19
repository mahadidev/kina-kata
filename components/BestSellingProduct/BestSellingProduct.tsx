import React, { useState, useEffect } from "react";
import { FetchData } from "./../../pages/api";
import { Product } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";

const BestSellingProduct = () => {
  const [products, setProducts] = useState(null);
  const getData = (data: any) => {
    setProducts(data);
  };

  useEffect(() => {
    // fetch data
    FetchData({
      name: "product",
      countStart: 0,
      countEnd: 12,
      order: "desc",
      orderBy: "sold",
      callBack: getData,
    });
  }, []);

  return (
    <div className="py-8">
      <div className="container m-auto px-3 sm:px-0">
        <h1 className="text-4xl font-semibold text-black">
          Best Selling Product.
        </h1>
        <Swiper
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
          }}
          spaceBetween={8}
          className={"py-4"}
        >
          {products?.map((product: any, i: number) => (
            <SwiperSlide key={i}>
              <Product width="w-[100%]" {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellingProduct;
