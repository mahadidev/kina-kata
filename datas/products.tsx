import { client } from "../lib/client";

export const BestSellingProductData = async () => {
  // get product data
  const productQuery = "*[_type == 'product'] | order(sold desc)";
  const products = await client.fetch(productQuery);

  return {
    name: "mahadi",
  };
};
