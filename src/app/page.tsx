import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { GET_ALL_POSTS, GET_HOME_PAGE } from "@/sanity/queries";
import { RichContent } from "@/app/lib/RichContent";

export default async function Home() {
  const homePage = await client.fetch(GET_HOME_PAGE);
  const posts = await client.fetch(GET_ALL_POSTS);

  if (!homePage) {
    throw new Error("Home page not found.");
  }

  return (
    <div className="space-y-10">
      <div>
        <RichContent value={homePage.hero} />
      </div>

      <ol className="list-none space-y-4">
        {posts.map((post) => (
          <li key={post.slug.current}>
            <Link href={`/post/${post.slug.current}`}>
              <span className="font-bold underline">{post.title}</span>
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
    </div>
  );
}
