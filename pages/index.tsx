import React from "react";
import { client, urlFor } from "../lib/client";
import { Banner } from "../components";

const index = (products: any) => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default index;
