import { ExternalLink } from "@/app/lib/ExternalLink";

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted text-secondary text-sm">
      <div className="max-w-3xl mx-auto p-4">
        Made by{" "}
        <ExternalLink href="https://arnaudrenaud.com" className="font-normal">
          Arnaud Renaud
        </ExternalLink>
      </div>
    </footer>
  );
}
