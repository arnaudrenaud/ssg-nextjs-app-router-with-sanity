import { defineType, defineField } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
