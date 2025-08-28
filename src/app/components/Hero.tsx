import { RichContent } from "@/app/lib/RichContent";
import { GET_HOME_PAGEResult } from "@/sanity/generated/types";

export function Hero({
  hero,
}: {
  hero: NonNullable<GET_HOME_PAGEResult>["hero"];
}) {
  if (!hero) {
    return (
      <div className="space-y-2">
        <p>
          No <code>hero</code> content found in the CMS. Edit the &quot;Home
          page&quot; document in your Sanity studio.
        </p>
        <p>
          To access the studio, follow the instructions in the <i>README.md</i>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <RichContent value={hero} />
    </div>
  );
}
