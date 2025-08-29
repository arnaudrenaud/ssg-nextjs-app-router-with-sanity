# A Static, CMS-Powered Blog Example

🌎 Live demo: https://ssg-nextjs-cms-sanity.netlify.app

This codebase comes in support of the following article: [Build and Deploy a Free CMS-Powered Website (Next.js, Sanity, Netlify)](https://www.arnaudrenaud.com/articles/free-static-website-cms/).

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

This should export static build to the `out` directory (you can serve it locally with `npx serve out`).

### Deploy on Netlify

#### First deployment

1. Make sure you have this codebase on your own online repository (e.g. by forking this repository on GitHub)
2. Sign in to [netlify.com](https://www.netlify.com) and click _Add new project > Import an existing project_
3. Select your repository
4. In the configuration form, set environment variables (e.g. by pasting your `.env` file) and submit

The deployment log should appear in the _Deploys_ section. Once successful, you can _Open production deploy_.

#### Automatic deployment following changes

##### After a change in code

By default, Netlify rebuilds the website each time you push changes to your repository: there is nothing to configure here.

##### After a change in content

Each time a change in content is saved in Sanity, it must request Netlify to fetch updated content and rebuild website accordingly.

This means:

1. Netlify must expose a webhook (a HTTP endpoint) – that will trigger a rebuild when called
2. Sanity must call this webhook each time content is created, updated or deleted in the studio

To achieve 1.:

- In your Netlify project, go to _Project configuration > Build & deploy > Continuous deployment > Build hooks_
- Click _Add build hook_
- Name it however you want (e.g. `sanity-rebuild`)
- Copy the webhook URL

To achieve 2.:

- Go to your Sanity dashboard: https://www.sanity.io/manage and select your project
- In the API tab, click _Create webhook_
- Name it however you want (e.g. `rebuild-netlify-on-change`)
- Paste Netlify webhook URL in the URL field
- Tick _Create_, _Update_ and _Delete_ trigger checkboxes
- Save

You can now change content in the studio and watch Netlify automatically rebuild the website.

ℹ️ It can take about a minute for Netlify to complete rebuild: watch for progress on Netlify in the _Deploys_ section.
