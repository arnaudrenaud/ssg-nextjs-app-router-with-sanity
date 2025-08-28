import { client } from "@/sanity/lib/client";
import { GET_METADATA } from "@/sanity/queries";
import Link from "next/link";

export async function Header() {
  const metadata = await client.fetch(GET_METADATA);

  if (!metadata) {
    throw new Error("Metadata not found.");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-background border-b border-muted">
      <h1 className="max-w-3xl mx-auto font-bold p-4 ">
        <nav className="flex justify-between items-center">
          <Link href="/" className="uppercase">
            {metadata.title}
          </Link>
          <Link
            href="/contact"
            className="p-2 bg-foreground text-background rounded-md"
          >
            Contact
          </Link>
        </nav>
      </h1>
    </header>
  );
}
