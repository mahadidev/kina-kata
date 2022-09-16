import React from "react";
import { urlFor } from "../lib/client";

function product_page(products: any) {
  return (
    <div>
      {products?.products.map((product: any) => (
        <div key={product.name} style={{ marginBottom: "5rem" }}>
          {product.image?.map((image: any) => (
            <img key={image} src={urlFor(image).url()} alt={"product image"} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default product_page;
