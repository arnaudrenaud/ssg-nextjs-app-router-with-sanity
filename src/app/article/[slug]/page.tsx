import { ARTICLES } from "@/app/data";

type Article = {
  slug: string;
};

export async function generateStaticParams() {
  return ARTICLES;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Article>;
}) {
  const { slug } = await params;

  return <h1>{slug}</h1>;
}
