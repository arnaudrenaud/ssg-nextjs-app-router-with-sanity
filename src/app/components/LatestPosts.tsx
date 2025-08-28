import Link from "next/link";
import { GET_ALL_POSTS } from "@/sanity/queries";
import { client } from "@/sanity/lib/client";

export async function LatestPosts() {
  const posts = await client.fetch(GET_ALL_POSTS);

  if (!posts.length) {
    return <p>No posts found. You can create posts in the studio.</p>;
  }

  return (
    <ol className="list-none space-y-4">
      {posts.map((post) => (
        <li key={post.slug.current}>
          <Link href={`/post/${post.slug.current}`}>
            <span className="font-bold underline">{post.title}</span>
            <br />
            <span className="text-sm text-secondary">
              {post.author?.name && `${post.author.name} `}(
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toDateString()}
              </time>
              )
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
