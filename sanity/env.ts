export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-08-10";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET ||
    process.env.SANITY_STUDIO_DATASET, // only environment variables prefixed with SANITY_STUDIO_ will be embedded in the Sanity-side executable
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID, // only environment variables prefixed with SANITY_STUDIO_ will be embedded in the Sanity-side executable
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
