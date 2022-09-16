import React from "react";
import { client } from "../lib/client";
import {
  Banner,
  PromoCard,
  Categories,
  Products,
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
      <PromoCard />
      <Categories categories={categories} />
      <BestSellingProduct products={products} />
      <PromoBanner />
      <Products />
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
