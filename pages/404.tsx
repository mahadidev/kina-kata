import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { Player } from "@lottiefiles/react-lottie-player";
import notFoundAnimation from "../assets/lotties/notFound_animation.json";

const index = () => {
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  return (
    <div
      className="bg-white flex items-center justify-center"
      style={{
        marginTop: navigationHeight + "px",
        height: `calc(100vh - ${navigationHeight}px)`,
      }}
    >
      <Player
        className="w-[100%] max-w-[600px]"
        autoplay
        loop
        src={notFoundAnimation}
      />
    </div>
  );
};

export default index;
