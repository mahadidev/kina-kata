import React from "react";
import { client } from "../lib/client";
import {
  Banner,
  Categories,
  BestSellingProduct,
  PromoBanner,
} from "../components";

const HomePage = ({
  categories,
  products,
}: {
  categories: any;
  products: any;
}) => {
  return (
    <div>
      <Banner />
      <Categories categories={categories} />
      <PromoBanner />
      <BestSellingProduct products={products} />
    </div>
  );
};
export default HomePage;

export const getServerSideProps = async () => {
  // get gategory data
  const categoryQuery = "*[_type == 'category']";
  const categories = await client.fetch(categoryQuery);

  // get product data
  const productQuery = "*[_type == 'product'] | order(sold desc)";
  const products = await client.fetch(productQuery);

  return {
    props: { categories, products },
  };
};
