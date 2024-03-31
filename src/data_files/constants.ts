import ogImageSrc from "@/images/logos/logo-1.png";

export const SITE = {
  title: "Vanity Suds | Mobile Detailing",
  tagline: "Top-quality Mobile Detailing in Pittsburgh, PA",
  description: "Vanity Suds offers top-tier mobile detailing services and expert ceramic coating services for your vehicle. Start exploring and contact our team for superior quality and reliability.",
  description_short: "Vanity Suds offers top-tier mobile detailing services and expert ceramic coating services for your vehicle.",
  url: "https://vanitysuds.com",
  author: "Jonah Hoffman",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Pittsburgh Mobile Detailing`,
  description: "Vanity Suds offers top-tier mobile detailing services and expert ceramic coating services for your vehicle. Start exploring and contact our team for superior quality and reliability.",
  image: ogImageSrc,
};
