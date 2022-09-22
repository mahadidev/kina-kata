import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import { BestSellingProduct, Test } from "../../components";

const index = () => {
  const router = useRouter();
  const { title } = router.query;
  const count = useSelector((state: RootState) => state.basic.navigationHeight);

  return (
    <div style={{ marginTop: count + "px" }}>
      <Test title={title} />
      <BestSellingProduct />
    </div>
  );
};

export default index;
