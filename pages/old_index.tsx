import React from "react";
import { client } from "../untils/client";
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
  bestSellingProducts,
  products,
}: {
  categories: any;
  bestSellingProducts: any;
  products: any;
}) => {
  return (
    <div>
      <Banner />
      <PromoCard />
      <Categories categories={categories} />
      <BestSellingProduct prodducts={bestSellingProducts} />
      <PromoBanner />
      <Products defaultProduct={products} />
    </div>
  );
};
export default HomePage;

export const getServerSideProps = async () => {
  // get gategory data
  const categoryQuery = "*[_type == 'category']";
  const categories = await client.fetch(categoryQuery);

  // get best selling product
  const bestSellingProductsQuery =
    "*[_type == 'product'] | order(sold desc) [0...6]";
  const bestSellingProducts = await client.fetch(bestSellingProductsQuery);

  // get product data
  const productQuery = "*[_type == 'product'] | order(sold desc) [0...2]";
  const products = await client.fetch(productQuery);

  return {
    props: { categories, bestSellingProducts, products },
  };
};

export const fetchData = async (query: any) => {
  const data = await client.fetch(
    "*[_type == 'product'] | order(sold desc) [0...2]"
  );

  return data;
};
