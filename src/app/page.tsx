import { ARTICLES } from "@/app/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {ARTICLES.map((article) => (
        <li key={article.slug}>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </li>
      ))}
    </>
  );
}
