import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://vanitysuds.com",
  image: {
    domains: ["images.unsplash.com"]
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: {
      fr: "en"
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap(), starlight({
    title: "ScrewFast Docs",
    defaultLocale: "root",
    locales: {
      root: {
        label: "English",
        lang: "en"
      },
      de: {
        label: "Deutsch",
        lang: "de"
      },
      es: {
        label: "Español",
        lang: "es"
      },
      fa: {
        label: "Persian",
        lang: "fa",
        dir: "rtl"
      },
      fr: {
        label: "Français",
        lang: "fr"
      },
      ja: {
        label: "日本語",
        lang: "ja"
      },
      "zh-cn": {
        label: "简体中文",
        lang: "zh-CN"
      }
    },
    // https://starlight.astro.build/guides/sidebar/
    sidebar: [{
      label: "Quick Start Guides",
      translations: {
        de: "Schnellstartanleitungen",
        es: "Guías de Inicio Rápido",
        fa: "راهنمای شروع سریع",
        fr: "Guides de Démarrage Rapide",
        ja: "クイックスタートガイド",
        "zh-cn": "快速入门指南"
      },
      autogenerate: {
        directory: "guides"
      }
    }, {
      label: "Tools & Equipment",
      items: [{
        label: "Tool Guides",
        link: "tools/tool-guides/"
      }, {
        label: "Equipment Care",
        link: "tools/equipment-care/"
      }]
    }, {
      label: "Construction Services",
      autogenerate: {
        directory: "construction"
      }
    }, {
      label: "Advanced Topics",
      autogenerate: {
        directory: "advanced"
      }
    }],
    social: {
      github: "https://github.com/mearashadowfax/ScrewFast"
    },
    disable404Route: true,
    customCss: ["./src/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro"
    },
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: "https://screwfast.uk" + "/social.png"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: "https://screwfast.uk" + "/social.png"
      }
    }]
  }), icon({
    include: {
      mdi: ["*"] // (Default) Loads entire Material Design Icon set
    }
  }), alpinejs(), react()],
  output: "hybrid",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: vercel()
});