import React, { useState, useEffect } from "react";
import { FetchData } from "../../pages/api";
import { Product, Button } from "../index";

const Products = ({
  count,
  isMinimal,
}: {
  count: number;
  isMinimal: boolean;
}) => {
  const [productCount, setProductCount] = useState(0);
  const [perLoading, setPerLoading] = useState(count);
  const [productsData, setProductsData] = useState(null);

  const getProduct = (data: any) => {
    setProductsData(data);
    if (data.length > 0) {
      const newProductData = data.slice(0, perLoading);
      // set product
      if (productsData) {
        setProductsData(productsData.concat(newProductData));
      } else {
        setProductsData(newProductData);
      }

      // set product count
      setProductCount(() => {
        if (data.length !== perLoading + 1) {
          return null;
        } else {
          return productCount + perLoading;
        }
      });
    }
  };

  const callProduct = (countStart: number) => {
    FetchData({
      name: "product",
      countStart: countStart,
      countEnd: countStart + (perLoading + 1),
      callBack: getProduct,
    });
  };

  const loadMoreHandle = () => {
    callProduct(productCount);
  };

  useEffect(() => {
    callProduct(productCount);
  }, []);

  return (
    <div className="py-8">
      <div className="container m-auto">
        <h1 className="text-4xl font-semibold text-black">All Product.</h1>
        <div className="flex flex-wrap justify-center sm:justify-start py-4">
          {productsData?.map((product: any, i: number) => {
            return <Product key={i} product={product} isMinimal={isMinimal} />;
          })}
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
