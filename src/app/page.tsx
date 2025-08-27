import Link from "next/link";
import { client } from "../../sanity/lib/client";
import { GET_ALL_POSTS } from "../../sanity/queries";

export default async function Home() {
  const posts = await client.fetch(GET_ALL_POSTS);

  return (
    <ol className="list-none space-y-4">
      {posts.map((post) => (
        <li key={post.slug.current}>
          <Link href={`/article/${post.slug.current}`}>
            {post.title}
            <br />
            <span className="text-sm text-secondary">
              {post.author?.name && `${post.author?.name} `}(
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
