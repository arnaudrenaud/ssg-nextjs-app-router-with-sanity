import { client } from "@/sanity/lib/client";
import { GET_METADATA } from "@/sanity/queries";
import { DEFAULT_TITLE } from "@/app/constants/constants";
import Link from "next/link";

export async function Header() {
  const metadata = await client.fetch(GET_METADATA);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-background border-b border-muted">
      <nav className="max-w-3xl mx-auto p-4 flex justify-between items-center font-bold">
        <Link href="/" className="uppercase py-2">
          {metadata?.title || DEFAULT_TITLE}
        </Link>
        <Link
          href="/contact"
          className="p-2 bg-foreground text-background rounded-md"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
