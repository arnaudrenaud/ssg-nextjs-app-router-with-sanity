import { ReactNode } from "react";
import cn from "classnames";

export function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-3xl font-bold mt-6 mb-2", className)}>
      {children}
    </h1>
  );
}
