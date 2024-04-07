import { _ as __astro_tag_component__, i as Fragment, x as createVNode } from './astro_ujMWuv_C.mjs';
import './astro/assets-service_BCnjW2_Z.mjs';
import { $ as $$Image } from './pages/generic_DWdldJRw.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_DUgOkOYV.mjs';
import './prerender_C7LpqVuq.mjs';
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
    "title": "Hub de Documentation",
    "tagline": "Votre centre central pour l'orientation simplifi\xE9e des outils, les documents de service d\xE9taill\xE9s et le soutien aux projets.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/fr/guides/getting-started/"
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
      title: "Guides de D\xE9marrage Rapide",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Mettez-vous en route rapidement avec nos guides clairs et concis, adapt\xE9s aux nouveaux utilisateurs et aux experts chevronn\xE9s."
      })
    }), createVNode($$Card, {
      title: "Outils et \xC9quipements",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "D\xE9couvrez la gamme compl\xE8te d\u2019outils et d\u2019\xE9quipements de qualit\xE9 sup\xE9rieure de ScrewFast. Chaque sous-section offre des sp\xE9cifications d\xE9taill\xE9es, des instructions d\u2019utilisation et des conseils de maintenance."
      })
    }), createVNode($$Card, {
      title: "Services de Construction",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "D\xE9couvrez la gamme compl\xE8te d\u2019outils et d\u2019\xE9quipements de qualit\xE9 sup\xE9rieure de ScrewFast. Chaque sous-section offre des sp\xE9cifications d\xE9taill\xE9es, des instructions d\u2019utilisation et des conseils de maintenance."
      })
    }), createVNode($$Card, {
      title: "Sujets Avanc\xE9s",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "D\xE9couvrez la gamme compl\xE8te d\u2019outils et d\u2019\xE9quipements de qualit\xE9 sup\xE9rieure de ScrewFast. Chaque sous-section offre des sp\xE9cifications d\xE9taill\xE9es, des instructions d\u2019utilisation et des conseils de maintenance."
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
const url = "src/content/docs/fr/welcome-to-docs.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/fr/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/fr/welcome-to-docs.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
