import React from "react";
import { useSelector } from "react-redux";
import { Success } from "../../components";
import { type RootState } from "../../redux";

const SuccessPage = () => {
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
      <Success />
    </div>
  );
};

export default SuccessPage;
