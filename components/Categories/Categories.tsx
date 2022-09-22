import React from "react";
import { Category, Button } from "../index";

const Categories = (categories: any) => {
  return (
    <div className="pt-16 pb-8">
      <div className="container m-auto">
        <h1 className="text-3xl">
          Popular <span className="text-primary">Category.</span>
        </h1>
        <div className="flex flex-wrap justify-center py-4">
          {categories?.categories
            ?.slice(0, 14)
            .map((category: any, i: number) => (
              <Category key={i} {...category} />
            ))}
        </div>
        <Button
          href="categories"
          animation={false}
          className="underline"
          type="outline"
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default Categories;
