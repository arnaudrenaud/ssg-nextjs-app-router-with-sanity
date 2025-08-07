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

  const article = ARTICLES.find((article) => article.slug === slug);

  return <h1>{article?.title}</h1>;
}
