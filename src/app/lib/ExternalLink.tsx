import { ReactNode } from "react";
import cn from "classnames";

export function ExternalLink({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className={cn("font-bold underline", className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
