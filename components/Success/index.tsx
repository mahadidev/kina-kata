import emailjs from "@emailjs/browser";
import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { clearCart, type RootState } from "../../redux";
import successAnimation from "./success_animation.json";
import Lottie from "react-lottie";
import Button from "../Button";
import { useDispatch } from "react-redux";

const Success = () => {
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  const breadcrumbHeight = useSelector(
    (state: RootState) => state.basic.breadcrumbHeight
  );
  // state
  const [isContentShow, setIsContentShow] = useState(false);
  // redux
  const dispatch = useDispatch();
  // on load
  useEffect(() => {
    dispatch(clearCart(true));
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className="container m-auto flex items-center relative z-10"
          style={{
            height: `calc(100vh - ${navigationHeight + breadcrumbHeight}px)`,
          }}
        >
          <div className="w-full max-w-[700px] m-auto relative">
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: successAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              eventListeners={[
                {
                  eventName: "complete",
                  callback: () => {
                    setIsContentShow(true);
                  },
                },
              ]}
              width={"100%"}
            />
            <Button
              href="/shop"
              className="mx-auto absolute left-0 right-0 -bottom-4"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
