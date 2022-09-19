import { useState, useEffect } from "react";
import { StandardBanner, PromoBanner } from "../index";
import { FetchData } from "../../pages/api";

const Banner = ({ name }: { name: string }) => {
  const [bannerData, setBannerData] = useState(null);
  const getBannerData = (data: any) => {
    setBannerData(data);
  };

  useEffect(() => {
    FetchData({ name: "banner", callBack: getBannerData });
  }, []);

  const bannerColor = {
    primary: {
      bgColor: "bg-primary",
      textColor: "text-white",
      textColor2: "text-secondary",
      btnType: "white",
    },
    secondary: {
      bgColor: "bg-secondary",
      textColor: "text-white",
      textColor2: "text-primary",
      btnType: "primary",
    },
    white: {
      bgColor: "bg-white",
      textColor: "text-black",
      textColor2: "text-primary",
      btnType: "primary",
    },
  };

  const bannerOutput = bannerData?.map((item: any, i: number) => {
    if (item.name === name) {
      const checkBannerColor =
        item && item.color in bannerColor
          ? bannerColor[item.color]
          : bannerColor[0];

      if (name === "heroBanner") {
        return (
          <StandardBanner
            key={i}
            title={item.title}
            image={item.image}
            desc={item.desc}
            btnLabel={item.btnLabel}
            btnIcon={item.btnIcon}
            btnLink={item.btnLink}
            btnType={checkBannerColor.btnType}
            bgColor={checkBannerColor.bgColor}
            textColor={checkBannerColor.textColor}
            textColor2={checkBannerColor.textColor2}
          />
        );
      } else if (name === "homePromoBanner") {
        return (
          <PromoBanner
            key={i}
            title={item.title}
            image={item.image}
            details={item.details}
            btnLabel={item.btnLabel}
            btnIcon={item.btnIcon}
            btnLink={item.btnLink}
            btnType={checkBannerColor.btnType}
            bgColor={checkBannerColor.bgColor}
            textColor={checkBannerColor.textColor}
            textColor2={checkBannerColor.textColor2}
          />
        );
      }
    }
  });

  return <>{bannerOutput}</>;
};

export default Banner;
