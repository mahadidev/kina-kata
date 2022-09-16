export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      of: [{type: "image"}]
    },
    {
      name: "order",
      title: "Order",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{type: "product"}]
        }
      ]
    }
  ]
}