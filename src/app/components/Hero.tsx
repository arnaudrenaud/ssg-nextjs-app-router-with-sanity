import { H1 } from "@/app/lib/H1";
import { P } from "@/app/lib/P";
import { RichContent } from "@/app/lib/RichContent";
import { GET_HOME_PAGEResult } from "@/sanity/generated/types";

export function Hero({
  hero,
}: {
  hero?: NonNullable<GET_HOME_PAGEResult>["hero"];
}) {
  if (!hero) {
    return (
      <div>
        <H1>🚀 Start successful</H1>
        <P>
          No <code>hero</code> content found for Home page. Edit the &quot;Home
          page&quot; document in your Sanity studio.
        </P>
      </div>
    );
  }

  return (
    <div>
      <RichContent value={hero} />
    </div>
  );
}
