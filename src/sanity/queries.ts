import { defineQuery } from "next-sanity";

export const GET_HOME_PAGE = defineQuery(`
  *[_type == "homePage"][0] {
    ...,
  }
`);

export const GET_ALL_POSTS = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    ...,
    author->,
  }
`);

export const GET_POST_BY_SLUG = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->,
  }
`);
