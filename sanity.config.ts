// sanity.config.ts
import { defineConfig } from "sanity";
import { projectId, dataset } from "./src/sanity/env";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schema.types,
  },
});
