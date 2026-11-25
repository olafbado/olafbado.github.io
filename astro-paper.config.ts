import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
  url: "https://olafbado.github.io/",
  title: "Olaf Bado",
  description: "Engineering blog covering cloud infrastructure, backend engineering, distributed systems and hands-on projects.",
  author: "Olaf Bado",
  profile: "https://olafbado.github.io/",
  ogImage: "default-og.jpg",
  lang: "en",
  timezone: "Europe/Warsaw",
  dir: "ltr",
},
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github",   url: "https://github.com/satnaing/astro-paper" },
    { name: "x",        url: "https://x.com/username" },
    { name: "linkedin", url: "https://www.linkedin.com/in/username/" },
    { name: "mail",     url: "mailto:yourmail@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});