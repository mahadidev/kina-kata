import React, { useState, useEffect } from "react";
import { Button } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Offer1 from "../../assets/image/offer-1.webp";
import Offer2 from "../../assets/image/offer-2.webp";
import Offer3 from "../../assets/image/offer-3.webp";
import Offer4 from "../../assets/image/offer-4.webp";
import { Icons } from "../index";

const PromoCard = () => {
  const [swiper, setSwiper] = useState(null);
  const sliderData = [Offer1, Offer2, Offer3, Offer4];

  useEffect(() => {}, []);

  return (
    <div className="px-4 py-8 overflow-hidden">
      <div className="relative flex items-center">
        <Button
          className="absolute top-auto bottom-auto left-[-16px] z-10 circle"
          btnClassName="p-2"
          type="white"
          onClick={() => {
            swiper?.slidePrev();
          }}
        >
          {Icons.arrowShortLeftIcon}
        </Button>
        <Button
          className="absolute top-auto bottom-auto right-[-16px] z-10 circle"
          btnClassName="p-2"
          type="white"
          onClick={() => {
            swiper?.slideNext();
          }}
        >
          {Icons.arrowShortRightIcon}
        </Button>
        <Swiper
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          onInit={(swiperElm: any) => {
            setSwiper(swiperElm);
          }}
        >
          {sliderData?.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-md bg-no-repeat bg-cover cursor-grabbing">
                <img
                  className="w-[100%]"
                  src={item.src}
                  alt={"Delivery Image"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PromoCard;
