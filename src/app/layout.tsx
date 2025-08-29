import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { client } from "@/sanity/lib/client";
import { GET_METADATA } from "@/sanity/queries";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { DEFAULT_TITLE } from "@/app/constants/constants";

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

  return metadata
    ? {
        title: metadata.title,
        description: metadata.description,
      }
    : {
        title: DEFAULT_TITLE,
        description: "My blog description.",
      };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main className="w-full max-w-3xl mx-auto flex-1 mt-18 lg:mt-22 mb-8 p-4">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
