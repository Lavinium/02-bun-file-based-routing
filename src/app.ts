import type { Serve } from "bun";
import { renderToStaticMarkup } from "react-dom/server";

const options = {
  dir: "./pages",
  style: "nextjs",
  assetPrefix: "_next/static/",
  fileExtensions: [],
  origin: process.env.APP_DOMAIN || "http://localhost:3000",
} satisfies FileSystemRouterOptions;

const router = new Bun.FileSystemRouter(options);

/**
 * Provide a configurable app module.
 */
export default {
  async fetch(req) {
    const url = new URL(req.url);
    const result = router.match(url.pathname);

    if (!result) {
      return new Response("404", { status: 404 });
    }

    const page: Page = (await import(result.filePath)).default;

    let { params, query } = result;

    const stream = renderToStaticMarkup(page({ params, query }));

    return new Response(stream, {
      headers: { "content-type": "text/html" },
    });
  },
} as Serve;
