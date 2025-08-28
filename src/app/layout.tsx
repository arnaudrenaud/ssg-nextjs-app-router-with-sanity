import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { GET_METADATA } from "@/sanity/queries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async () => {
  const metadata = await client.fetch(GET_METADATA);
  if (!metadata) {
    throw new Error("Metadata not found.");
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata = await client.fetch(GET_METADATA);

  if (!metadata) {
    throw new Error("Metadata not found.");
  }

  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
        <main className="w-full max-w-3xl mx-auto flex-1 mt-24 mb-8 p-4">
          {children}
        </main>
        <footer className="bg-background border-t border-muted text-secondary text-sm">
          <div className="max-w-3xl mx-auto p-4">
            Made by{" "}
            <Link href="https://arnaudrenaud.com" className="underline">
              Arnaud Renaud
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
