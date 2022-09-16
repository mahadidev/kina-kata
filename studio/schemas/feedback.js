export default {
  name: "feedback",
  title: "feedback",
  type: "document",
  fields: [
    {
      name: "feedback",
      title: "feedback",
      type: "string",
    },
    {
      name: "leftBy",
      title: "Left By",
      type: "reference",
      to: [{
        type: "user"
      }]
    }
  ],
};
