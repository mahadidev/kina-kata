import React, { useState, useEffect } from "react";
import { client } from "../../lib/client";
import { Product, Button } from "../index";

const Products = (products: any) => {
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
    getData(0, 2);
  }, []);

  return (
    <div className="py-8">
      <div className="container m-auto px-3  sm:px-0">
        <h1 className="text-3xl">Product.</h1>
        <div className="flex flex-wrap justify-center sm:justify-start py-4">
          {productsData?.map((product: any, i: number) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
        {productCount !== null && (
          <Button
            onClick={loadMoreHandle}
            className="mt-8 mx-auto"
            type="primary"
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Products;
