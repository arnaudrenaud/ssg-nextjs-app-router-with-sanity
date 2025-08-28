import { ReactNode } from "react";
import cn from "classnames";

export function P({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("my-2", className)}>{children}</p>;
}
