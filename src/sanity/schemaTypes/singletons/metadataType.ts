import { defineType, defineField } from "sanity";

export const metadataType = defineType({
  name: "metadata",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});
