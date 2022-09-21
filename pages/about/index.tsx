import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import { About } from "../../components";

const index = () => {
  const navigationHeight = useSelector(
    (state: RootState) => state.basic.navigationHeight
  );

  return (
    <div
      className="bg-white"
      style={{
        marginTop: navigationHeight + "px",
      }}
    >
      <About />
    </div>
  );
};

export default index;
