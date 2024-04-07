import { _ as __astro_tag_component__, i as Fragment, x as createVNode } from './astro_DvD4qV4A.mjs';
import { $ as $$Image } from './pages/generic_BjLABjUc.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_CA4GMQl0.mjs';
import './prerender_fCo7zqCH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction to ScrewFast Services",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview-of-services",
    "text": "Overview of Services"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "As part of our commitment to providing an end-to-end solution for all your construction and hardware needs, we at ScrewFast are proud to offer a comprehensive suite of professional services. From initial consultations to final inspections, our multifaceted services encompass the entirety of your project, ensuring quality results and client satisfaction. This section of the documentation will guide you through everything you need to know to leverage our expertise to its fullest potential."
    }), "\n", createVNode(_components.h2, {
      id: "overview-of-services",
      children: "Overview of Services"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Tailored Solutions",
        children: createVNode(_components.p, {
          children: "Each construction project carries its unique challenges and demands. At ScrewFast, we customize our services to match your specific needs, ensuring that no matter the scale or complexity of your project, our team is equipped to handle it with precision and professionalism."
        })
      }), createVNode($$TabItem, {
        label: "Expert Team",
        children: createVNode(_components.p, {
          children: "Leverage the skills of our knowledgeable staff, from architects and engineers to skilled laborers, each contributing their expertise to bring your vision to life."
        })
      }), createVNode($$TabItem, {
        label: "Commitment to Quality",
        children: createVNode(_components.p, {
          children: "Quality is at the heart of everything we do. We employ stringent quality control measures to assure that the work we deliver meets and exceeds industry standards."
        })
      }), createVNode($$TabItem, {
        label: "Ongoing Support",
        children: createVNode(_components.p, {
          children: "Our relationship with our clients doesn\u2019t end once the project is completed. We provide continuous support to address any issues and ensure lasting satisfaction with your investment."
        })
      })]
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
const url = "src/content/docs/guides/intro.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/guides/intro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
