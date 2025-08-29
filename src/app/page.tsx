import { client } from "@/sanity/lib/client";
import { GET_HOME_PAGE } from "@/sanity/queries";
import { Hero } from "@/app/components/Hero";
import { LatestPosts } from "@/app/components/LatestPosts";

export default async function Home() {
  const homePage = await client.fetch(GET_HOME_PAGE);

  return (
    <div className="space-y-10">
      <Hero hero={homePage?.hero} />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <LatestPosts />
      </div>
    </div>
  );
}
