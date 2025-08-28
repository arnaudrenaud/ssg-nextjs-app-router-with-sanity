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
        {!homePage.hero ? (
          <RichContent value={homePage.hero} />
        ) : (
          <div className="space-y-2">
            <p>
              No <code>hero</code> content found in the CMS. Edit the &quot;Home
              page&quot; document in your Sanity studio.
            </p>
            <p>
              To access the studio, follow the instructions in the{" "}
              <i>README.md</i>.
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        {!posts.length ? (
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
        ) : (
          <p>No posts found. You can create posts in the studio.</p>
        )}
      </div>
    </div>
  );
}
