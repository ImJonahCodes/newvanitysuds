import { _ as __astro_tag_component__, k as Fragment, z as createVNode } from './astro_DiIWhFry.mjs';
import { $ as $$Image } from './prerender_NAKRBWhK.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_DfY1euxR.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Dokumentationszentrum",
    "tagline": "Ihr zentraler Anlaufpunkt f\xFCr vereinfachte Werkzeuganleitungen, detaillierte Service-Dokumentationen und Projektunterst\xFCtzung.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/de/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "link": "https://github.com/mearashadowfax/ScrewFast"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "Schnellstartanleitungen",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Starten Sie schnell und einfach mit unseren klaren und pr\xE4gnanten Anleitungen, die f\xFCr neue Benutzer und erfahrene Experten gleicherma\xDFen geeignet sind."
      })
    }), createVNode($$Card, {
      title: "Werkzeuge & Ausr\xFCstung",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Entdecken Sie die vollst\xE4ndige Palette hochwertiger Werkzeuge und Ausr\xFCstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps."
      })
    }), createVNode($$Card, {
      title: "Bauleistungen",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "Entdecken Sie die vollst\xE4ndige Palette hochwertiger Werkzeuge und Ausr\xFCstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps."
      })
    }), createVNode($$Card, {
      title: "Erweiterte Themen",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Entdecken Sie die vollst\xE4ndige Palette hochwertiger Werkzeuge und Ausr\xFCstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/de/welcome-to-docs.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/de/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/de/welcome-to-docs.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
