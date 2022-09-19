import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import category from "./category";
import product from "./product";
import user from "./user";
import feedback from "./feedback";
import banner from "./banner";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([category, product, user, feedback, banner ]),
});
