// sanity.config.ts
import { defineConfig } from "sanity";
import { projectId, dataset } from "./sanity/env";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schema.types,
  },
});
