---
title: 'Reordering Tailwind classes in Astro using Prettier'
pubDate: 2026-03-06
author: 'Michael LeRoux'
tags: ['astro', 'tailwind', 'prettier', 'vscode']
---

Yesterday I spent some time getting VSCode [Prettier](https://prettier.io/) plugins to work with both [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). I wanted Prettier to automatically reorder Tailwind's utility classes in HTML, CSS, and Astro files.

Here are the two VSCode plugins in question:

- [withastro/prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [tailwindlabs/prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

### Installation and configuration

The commands to install both of them as dev dependencies were straightforward:

```sh
npm install -D prettier prettier-plugin-tailwindcss
npm install -D prettier-plugin-astro
```

I opted for [Tailwind's suggestion](https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#installation) to create a `.prettierrc` JSON file at the root level of the project. I found this advice online:

"Your configuration must list `prettier-plugin-tailwindcss` last in the plugins array for it to process the output of other plugins correctly. You should also explicitly define the parser for Astro files."

_.prettierrc:_

```json
{
  "plugins": [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ],
  "tailwindStylesheet": "./src/styles/global.css"
}
```

### Troubleshooting

I could see Tailwind classes being reordered in HTML and CSS files, but nothing was being changed in `.astro` files.

I verified there were no errors in VSCode's Output panel for Prettier:

```log
["INFO" - 9:10:30 AM] Using config file at /astro_site/.prettierrc
["INFO" - 9:10:30 AM] EditorConfig support is enabled, checking for .editorconfig files
["INFO" - 9:10:30 AM] Resolved config:
{
  "plugins": [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ],
  "tailwindStylesheet": "./src/styles/global.css"
}
```

I checked if Prettier was able to change `.astro` files using the CLI via the terminal. That worked, so the problem was in the code editor.

```sh
npx prettier --write src/layouts/BaseLayout.astro # this worked!
```

It turns out I overlooked a setting from the [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro?tab=readme-ov-file#formatting-with-the-vs-code-prettier-extension-directly) README to use Prettier as VSCode's Default Formatter for `.astro` files.

_User Settings:_

```json
{
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
}
```

And now I'll never need to think about ordering Tailwind utility classes again!
