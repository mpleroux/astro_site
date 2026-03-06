---
title: 'Reordering Tailwind classes in Astro using Prettier'
pubDate: 2026-03-06
description: ''
author: 'Michael LeRoux'
image:
    url: ''
    alt: ''
tags: ['astro', 'tailwind', 'prettier', 'vscode']
---

Yesterday I spent some time getting VSCode [Prettier](https://prettier.io/) plugins to work with both [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). I wanted to have Prettier automatically reorder Tailwind's utility classes in both `.html` files and `.astro` component/page files in this [astro_site](https://github.com/mpleroux/astro_site) project.

Here are the two VSCode plugins in question:

- [withastro/prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)
- [tailwindlabs/prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

## Installation and configuration

The commands to install both of them as dev dependencies are straightforward:

```sh
npm install -D prettier prettier-plugin-tailwindcss
npm install -D prettier-plugin-astro
```

This task helped me realize I needed to create a Prettier configuration file somewhere. I had noticed similar files in other projects and I had never given them much thought. I opted for [Tailwind's suggestion](https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#installation) to create a `.prettierrc` JSON file at the root level of the project.

**.prettierrc**:

```json
{
  "plugins": [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ],
  "tailwindStylesheet": "./src/styles/global.css"
}
```

## Adding a special case for Astro files

Reordering Tailwind classes in `.html` files and even my CSS file entry point seemed to happen out of the box. However, I was unable to see the same changes happening in `.astro` files and I wondered if the two plugins were compatible. After numerous Google searches and Gemini queries I found this advice:

"Your configuration must list `prettier-plugin-tailwindcss` last in the plugins array for it to process the output of other plugins correctly. You should also explicitly define the parser for Astro files."

**.prettierrc (revised)**:

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

## Final troubleshooting

`.astro` files were still not being updated so I verified there were no errors in VSCode's Output panel for Prettier. Everything looked okay at first glance.

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

I checked if Prettier was able to change `.astro` files using the CLI via the terminal.

```sh
npx prettier --write src/layouts/BaseLayout.astro # this worked!
```

It turns out the solution was something I overlooked. I had neglected to set Prettier as VSCode's Default Formatter for `.astro` files.

1. Open any `.astro` file in your editor.
2. Open VSCode's Command Palette with Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows/Linux)
3. Type "Format Document With..." and select it.
4. At the bottom of the list, select "Configure Default Formatter...".
5. Choose "Prettier - Code Formatter" from the list.

Or I could have simply added this to my User Settings:

```json
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
```

I had failed to notice those instructions in the README for [prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro?tab=readme-ov-file#formatting-with-the-vs-code-prettier-extension-directly).

I decided to skip the `prettier.documentSelectors` setting as that may now be taken care of in my `.prettierrc` file.
