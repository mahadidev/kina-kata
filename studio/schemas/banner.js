export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Banner Name",
      type: "string"
    },{ 
      name: "image", 
      title: "Banner Image", 
      type: "image" 
    },{
      name: "title",
      title: "Title",
      type: "string"
    },{
      name: "desc",
      title: "Description",
      type: "string"
    },{
      name: "details",
      title: "Details",
      type: "array",
      of: [
        {
          name: "variant",
          title: "Variant",
          type: "document",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string"
            },{
              name: "desc",
              title:"Description",
              type: "string"
            },{
              name: "icon",
              title: "Icon",
              type: "string"
            }
          ]
        }
      ]
    },{
      name: "btnLabel",
      title: "Button Label",
      type: "string"
    },{
      name: "btnIcon",
      title: "Button Icon",
      type: "string"
    },{
      name: "btnLink",
      title: "Button Link",
      type: "string"
    },{
      name: "color",
      title: "color",
      type: "string",
      options: {
        list: [
          {
            title: "Primary",
            value: "primary"
          },{
            title: "Secondary",
            value: "secondary"
          },{
            title: "White",
            value: "white"
          }
        ]
      }
    },{
      name: "type",
      title: "Banner Type",
      type: "string",
      options: {
        list: [
          {
            title: "Standard Banner",
            value: "standard"
          },{
            title: "Promo Banner",
            value: "promo"
          },{
            title: "Simple Banner",
            value: "simple"
          }
        ]
      }
    }
  ],
};
