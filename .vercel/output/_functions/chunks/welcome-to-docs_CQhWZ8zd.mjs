import { a7 as __astro_tag_component__, k as Fragment, a6 as createVNode } from './astro_CTyT_tO9.mjs';
import { $ as $$Image } from './pages/generic_3dPdwh9u.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_D6Bgv0y2.mjs';
import './prerender_Dme6QqmJ.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast Docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast Docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Documentation Hub",
    "tagline": "Your central hub for streamlined tool guidance, detailed service docs, and project support.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../images/starlight/screwfast_hero.svg",
      "light": "../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/guides/getting-started/"
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
      title: "Quick Start Guides",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Get up and running swiftly with our straightforward and concise guides, tailored for new users and seasoned experts alike."
      })
    }), createVNode($$Card, {
      title: "Tools & Equipment",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Discover the complete lineup of ScrewFast\u2019s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips."
      })
    }), createVNode($$Card, {
      title: "Construction Services",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "Discover the complete lineup of ScrewFast\u2019s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips."
      })
    }), createVNode($$Card, {
      title: "Advanced Topics",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Discover the complete lineup of ScrewFast\u2019s superior quality tools and equipment. Each subsection offers detailed specifications, usage instructions, and maintenance tips."
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
const url = "src/content/docs/welcome-to-docs.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/welcome-to-docs.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
