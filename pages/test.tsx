import React, { useState, useEffect } from "react";
import { Product, Button } from "../components";
import { client } from "../lib/client";

const test = () => {
  const [productCount, setProductCount] = useState(0);
  const [productsData, setProductsData] = useState(null);

  const getData = async (countStart: any, countEnd: any) => {
    // get product data
    const productQuery = `*[_type == 'product'] | order(sold desc) [${countStart}...${
      countEnd + 1
    }]`;
    const products = await client.fetch(productQuery);
    if (products.length > 0) {
      const newProductData = products.slice(0, 2);
      // set product
      if (productsData) {
        setProductsData(productsData.concat(newProductData));
      } else {
        setProductsData(newProductData);
      }

      // set product count
      setProductCount(() => {
        if (products.length !== 3) {
          return null;
        } else {
          return countStart + 2;
        }
      });
    }
  };

  const loadMoreHandle = () => {
    getData(productCount, productCount + 2);
  };

  useEffect(() => {
    getData(productCount, productCount + 2);
  }, []);

  return (
    <>
      <div className="mt-[20vh] flex">
        {productsData?.map((item: any, i) => (
          <Product key={i} {...item} />
        ))}
      </div>
      {productCount !== null && (
        <Button
          onClick={loadMoreHandle}
          className="mt-12 mx-auto"
          type="primary"
        >
          Load More
        </Button>
      )}
    </>
  );
};

export default test;
