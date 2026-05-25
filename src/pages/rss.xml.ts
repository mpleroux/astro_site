import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

// Astro's `site` config must be set in astro.config.mjs for RSS links to resolve correctly
export async function GET(context: APIContext) {
  const posts = await getCollection("blog");

  if (!context.site) {
    throw new Error("Site URL is not defined in astro.config");
  }

  return rss({
    title: "Blog",
    description: "Blog",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
