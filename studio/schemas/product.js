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
      validation: Rule => Rule.required()
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [{
        type: "category"
      }]
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: Rule => Rule.required().positive().precision(2)
    },
    {
      name: "detail",
      title: "Detail",
      type: "string",
    },
    {
      name: "qty",
      title: "Qty",
      type: "number",
      validation: Rule => Rule.required()
    },
    {
      name: "sold",
      title: "Sold",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "feedback",
      title: "feedback",
      type: "array",
      of: [
        {
          type: "feedback"
        }
      ]
    }
  ],
  initialValue: () => ({
    rating: 0,
    sold: 0,
  }),
};
