# A static, CMS-based blog example

This codebase comes in support of the following article: How to build and deploy a CMS-based website for free (Next.js, Sanity, Netlify).

## Getting Started

1. Copy `.env.example` to `.env` and set variables following embedded instructions.

2. Install dependencies:

```sh
npm install
```

3. Deploy studio (CMS interface) based on schema types:

```sh
npm run deploy-studio
```

4. Start development server:

```sh
npm run dev
```

## Editing schema and queries

To fit this app to your needs, you will surely edit schema types (`src/sanity/schemaTypes`) and queries (`src/sanity/queries`).

After each change:

```sh
npm run generate-types # generate TypeScript type for each query
npm run deploy-studio
```

## Production

### Try production build locally

Build site:

```sh
npm run build
```

Build outputs to directory `out` (you can serve it locally with `npx serve out`).
