import React from "react";
import { Category, Button } from "../index";

const Categories = (categories: any) => {
  return (
    <div className="pt-16 pb-8">
      <div className="container m-auto px-3 sm:px-0">
        <h1 className="text-3xl">Category</h1>
        <div className="flex flex-wrap justify-center sm:justify-start py-4">
          {categories?.categories
            .slice(0, 13)
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
