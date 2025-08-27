import { client } from "../../../../sanity/lib/client";
import { GET_ALL_POSTS, GET_POST_BY_SLUG } from "../../../../sanity/queries";
import { RichContent } from "@/app/lib/RichContent";

type Article = {
  slug: string;
};

export async function generateStaticParams() {
  const posts = await client.fetch(GET_ALL_POSTS);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Article>;
}) {
  const { slug } = await params;

  const post = await client.fetch(GET_POST_BY_SLUG, { slug });

  if (!post) {
    throw new Error(`Post with slug ${slug} not found.`);
  }

  return (
    <article>
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">{post?.title}</h1>
          <span className="text-sm text-secondary">
            {post.author?.name && `${post.author?.name} `}(
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toDateString()}
            </time>
            )
          </span>
        </div>
        <RichContent value={post.body} />
      </div>
    </article>
  );
}
