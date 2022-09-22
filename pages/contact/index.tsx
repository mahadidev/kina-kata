import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import { Contact } from "../../components";

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
      <Contact />
    </div>
  );
};

export default index;
