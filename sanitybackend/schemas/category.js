export default {
  name: "category",
  title: "category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string"
    },{
      name: "image",
      title: "Image",
      type: "image"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'name',
        maxLength: 96,
      },
    }
  ]
}