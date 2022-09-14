export default {
  name: "product",
  title: "Poduct",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: {
        source: "name",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "detail",
      title: "Detail",
      type: "string",
    },
  ],
};
