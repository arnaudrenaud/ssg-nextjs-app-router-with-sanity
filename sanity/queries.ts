import { defineQuery } from "next-sanity";

export const GET_ALL_POSTS = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    ...,
    author->,
  }
`);
