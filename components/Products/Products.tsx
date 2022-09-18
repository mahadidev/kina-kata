import React, { useState, useEffect } from "react";
import { Client } from "../../utils";
import { Product, Button } from "../index";

const Products = (defaultProduct: any) => {
  const [productCount, setProductCount] = useState(0);
  const [productsData, setProductsData] = useState(null);

  const getData = async (countStart: any, countEnd: any) => {
    // get product data
    const productQuery = `*[_type == 'product'] | order(sold desc) [${countStart}...${
      countEnd + 1
    }]`;
    const products = await Client.fetch(productQuery);

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
    setProductsData(defaultProduct.defaultProduct);
  }, []);

  return (
    <div className="py-8">
      <div className="container m-auto px-3 sm:px-0">
        <h1 className="text-3xl">Product.</h1>
        <div className="flex flex-wrap justify-center sm:justify-start py-4">
          {productsData?.map((product: any, i: number) => (
            <Product key={i} {...product} />
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
