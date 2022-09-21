import React from "react";
import { Products } from "../../components";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";

const index = () => {
  const count = useSelector((state: RootState) => state.basic.navigationHeight);

  return (
    <div style={{ marginTop: count + "px" }}>
      <Products count={24} isMinimal={true} />
    </div>
  );
};

export default index;
