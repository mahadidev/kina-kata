import { ImageUrl } from "../../utils";
import { motion } from "framer-motion";
import { Button } from "../index";
import { Icons } from "../index";
import ParticlesBg from "./ParticlesBg";

const StandardBanner = ({
  image,
  title,
  desc,
  btnLabel,
  btnIcon,
  btnLink,
  btnType,
  bgColor,
  textColor,
  textColor2,
}: {
  image?: any;
  title?: string;
  desc?: any;
  btnLabel?: string;
  btnIcon?: string;
  btnLink?: string;
  btnType?: string;
  bgColor: string;
  textColor: string;
  textColor2: string;
}) => {
  return (
    <>
      <div className={`relative ${bgColor}`}>
        <ParticlesBg />
        <div className="container flex items-center justify-between min-h-[700px] m-auto relative px-4 sm:px-0 overflow-hidden">
          {/*  backdrop-blur-lg bg-white/30 */}
          <div className="w-[max-content] max-w-[700px] z-10 p-4 rounded-lg">
            {title && (
              <h1
                className={`${textColor} text-6xl font-bold font-title`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {desc && <p className={`${textColor} max-w-[400px]`}>{desc}</p>}
            {btnLabel && (
              <Button
                type={`${btnType}`}
                href={`${btnLink}`}
                className={"mt-2"}
              >
                {btnIcon && (
                  <span className="text-2xl mr-1">{Icons[btnIcon]}</span>
                )}
                {btnLabel}
              </Button>
            )}
          </div>
          {image && (
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
              <img
                className="block"
                src={ImageUrl(image).url()}
                alt="banner image"
              />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default StandardBanner;
