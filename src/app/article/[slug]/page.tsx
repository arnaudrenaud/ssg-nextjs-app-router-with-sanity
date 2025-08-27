import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { GET_ALL_POSTS, GET_POST_BY_SLUG } from "@/sanity/queries";

import { RichContent } from "@/app/lib/RichContent";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await client.fetch(GET_ALL_POSTS);
  return posts.map((post) => ({ slug: post.slug.current }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch(GET_POST_BY_SLUG, { slug });

  if (!post) {
    throw new Error(`Post with slug ${slug} not found.`);
  }

  return (
    <article>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{post?.title}</h1>
          <div className="text-sm text-secondary space-y-4">
            <div>
              Published on{" "}
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toDateString()}
              </time>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(96).height(96).url()}
                    alt={`Portrait of ${post.author.name}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                {post.author.name}
              </div>
            )}
            {post.categories && (
              <ul className="flex gap-2">
                {post.categories.map((category) => (
                  <li
                    className="inline rounded-full px-2 py-1 text-xs uppercase bg-secondary text-background"
                    key={category._id}
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <RichContent value={post.body} />
      </div>
    </article>
  );
}
