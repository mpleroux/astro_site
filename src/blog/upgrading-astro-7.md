---
title: 'Upgrading to Astro 7'
pubDate: 2026-06-25
author: 'Michael LeRoux'
tags: ['astro', 'vite', "web-development"]
---

A word of caution when upgrading to the new [Astro version 7](https://astro.build/blog/astro-7/). A leftover setting in my `package.json` file didn't affect my local environment, but it caused a mysterious and unrelated error when I tried deploying the repo to [Netlify](https://www.netlify.com/).

Netlify reported this error message...

>rollupOptions.input should not be an html file when building for SSR. Please specify a dedicated SSR entry.

...and they suggested changing a setting that didn't exist in my `astro.config.js` file. I appreciated the detailed advice, but it was for SSR apps with a single JavaScript entry point, not fully static Astro sites.

I was initially flumoxxed and I had trouble finding advice for this particular problem. When I ran it by Claude it noticed I had overridden the version of Vite in `package.json`:

```json
  "overrides": {
    "vite": "^7.0.0"
  }
```

I no longer remember why I pinned version 7 of Vite, probably to address some incompatibility. Now that Astro 7 is using a newer version of Vite ("I should have had a Vite 8!") I removed that override and ran `npm install` to test it locally. When I pushed my commit with the new version of `package.json` the Netlify deployment went smoothly.
