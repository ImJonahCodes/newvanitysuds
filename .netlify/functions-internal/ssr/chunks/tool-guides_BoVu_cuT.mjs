import { _ as __astro_tag_component__, j as Fragment, y as createVNode } from './astro_BmHqPo6i.mjs';
import { $ as $$Image } from './pages/generic_D-_j2nfh.mjs';
import './Code_BFvaxeJL.mjs';
import './prerender_CJscGdFo.mjs';
import 'clsx';

const frontmatter = {
  "title": "Tool Guides",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Tool Guides",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tool-guides",
    "text": "Tool Guides"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "ScrewFast prides itself on a comprehensive range of high-grade tools and equipment. These resources are not just about delivering the performance you expect but ensuring they stand the test of time. Below, you will find a curated selection of guides geared towards helping you get the most out of our products."
    }), "\n", createVNode(_components.h3, {
      id: "tool-guides",
      children: "Tool Guides"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Machine Screws Manual"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Detailed specifications and applications for ScrewFast\u2019s variety of machine screws"
      }), "\n", createVNode(_components.li, {
        children: "Visual guide for identifying screw types and choosing the right one for your project"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Assorted Screw Set Handbook"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Instructions on usage and selection from the assorted screw set"
      }), "\n", createVNode(_components.li, {
        children: "Tips on organizing and storing your screw set for easy access"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Tap Bolts and Nuts Catalog"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Exploring the diverse range of tap bolts and nuts suitable for various construction environments"
      }), "\n", createVNode(_components.li, {
        children: "Guidelines for selecting the correct bolt size and nut pairing for secure fastening"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Hex Bolts Instructions"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Comprehensive procedures on the use of hex bolts in your projects"
      }), "\n", createVNode(_components.li, {
        children: "Strength ratings, threading information, and torque recommendations"
      }), "\n"]
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
const url = "src/content/docs/tools/tool-guides.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/tools/tool-guides.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/tools/tool-guides.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
