import { defineQuery } from "next-sanity";
// TODO: fix build error: https://github.com/sanity-io/next-sanity/issues/1899

export const GET_METADATA = defineQuery(`
  *[_type == "metadata"][0] {
    ...,
  }
`);

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
