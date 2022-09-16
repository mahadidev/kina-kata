import React from "react";
import { Button } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Offer1 from "../../assets/image/offer-1.webp";
import Offer2 from "../../assets/image/offer-2.webp";
import Offer3 from "../../assets/image/offer-3.webp";
import Offer4 from "../../assets/image/offer-4.webp";
import { Icons } from "../../lib";

const PromoCard = () => {
  const sliderData = [Offer1, Offer2, Offer3, Offer4];

  return (
    <div className="mx-8 my-8 relative">
      <Button
        className="absolute top-0 bottom-0 left-[-16px] z-10 flex items-center"
        type="white"
        circle={true}
      >
        {Icons.arrowShortLeftIcon}
      </Button>
      <Button
        className="absolute top-0 bottom-0 right-[-16px] z-10 flex items-center"
        type="white"
        circle={true}
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
      >
        {sliderData?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-md bg-no-repeat bg-cover">
              <img className="w-[100%]" src={item.src} alt={"Delivery Image"} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromoCard;
