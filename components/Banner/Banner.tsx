import Image from "next/image";
import { Button } from "../index";
import Icons from "../../lib/Icons";
import ParticlesBg from "./ParticlesBg";
import ShoppingModel from "../../assets/image/shopping_model.png";

const Banner = ({
  title,
  desc,
  btn,
  btnLink,
  image,
}: {
  title?: "string";
  desc?: "string";
  btn?: "string";
  btnLink?: "string";
  image?: "string";
}) => {
  return (
    <>
      <div className="relative bg-[#94abff]">
        <ParticlesBg />
        <div className="container flex items-center justify-between min-h-[700px] m-auto relative px-4 sm:px-0">
          <div className="w-[max-content] max-w-[700px] z-10 backdrop-blur-lg bg-white/30 p-4 rounded-lg">
            <h1 className="text-white text-6xl font-bold font-title">
              Minimal <span className="text-secondary">Menz</span> Style
            </h1>
            <p className="text-white max-w-[400px]">
              Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
              voluptas iure, delectus dignissimos facilis neque nulla earum.
            </p>
            <Button type={"secondary"} className={"mt-2"}>
              <span className="text-2xl mr-1">{Icons.shopIcon}</span>
              Click
            </Button>
          </div>
          <div className="absolute right-0 bottom-0 children-block">
            <Image className="block" src={ShoppingModel} alt="banner image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
