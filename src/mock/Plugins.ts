import type { Plugin } from "@/types/Plugin"

export const Plugins: Plugin[] = [
  {
    name: "My first plugin",
    allowed: false,
    disabled: true,
    description:
      "Some random description. Just need some words to feel the space"
  },
  {
    name: "My second plugin",
    allowed: true,
    disabled: false,
    description:
      "Some random description. Just need some words to feel the space"
  },
  {
    name: "My third plugin",
    allowed: false,
    disabled: false,
    description:
      "Some random description. Just need some words to feel the space"
  },
  {
    name: "Another plugin",
    allowed: false,
    disabled: false,
    description:
      "Some random description. Just need some words to feel the space"
  },
  {
    name: "This plugin is disabled",
    allowed: true,
    disabled: true,
    description:
      "Some random description. Just need some words to feel the space"
  },
  {
    name: "Do we really need another one? Just kidding, I just need a plugin with a really long name",
    allowed: false,
    disabled: true,
    description:
      "Some random description. Just need some words to feel the space"
  }
]
