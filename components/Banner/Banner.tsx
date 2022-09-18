import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../index";
import { Icons } from "../index";
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
      <div className="relative bg-primary">
        <ParticlesBg />
        <div className="container flex items-center justify-between min-h-[700px] m-auto relative px-4 sm:px-0 overflow-hidden">
          {/*  backdrop-blur-lg bg-white/30 */}
          <div className="w-[max-content] max-w-[700px] z-10 p-4 rounded-lg">
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
          <motion.div
            animate={{ scale: 1.1 }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute right-0 bottom-0 children-block"
          >
            <Image className="block" src={ShoppingModel} alt="banner image" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
