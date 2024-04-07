import { _ as __astro_tag_component__, j as Fragment, y as createVNode } from './astro_BmHqPo6i.mjs';
import { $ as $$Image } from './pages/generic_D-_j2nfh.mjs';
import { $ as $$CardGrid, a as $$Card, c as $$LinkCard, b as $$Steps, d as $$Aside } from './Code_7oHuthmd.mjs';
import './prerender_BHYrULhO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Getting Started",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "tools-overview",
    "text": "Tools Overview"
  }, {
    "depth": 2,
    "slug": "setup-instructions",
    "text": "Setup Instructions"
  }, {
    "depth": 2,
    "slug": "cleaning-and-maintenance",
    "text": "Cleaning and Maintenance"
  }, {
    "depth": 2,
    "slug": "additional-resources",
    "text": "Additional Resources"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Welcome to ScrewFast Docs! We\u2019re excited to help you get started with our premium tools. This guide is designed to introduce you to our tool range, help you understand the basics, and get you up to speed for your first project. Let\u2019s jump right into the world of high-quality, reliable craftsmanship with ScrewFast."
    }), "\n", createVNode(_components.h2, {
      id: "tools-overview",
      children: "Tools Overview"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "ScrewDriver Set",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "Versatile and ergonomic, suitable for all screw types."
        }), createVNode($$LinkCard, {
          title: "Learn More ",
          href: "en/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Hammer Drill",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "Powerful performance for drilling and impact driving."
        }), createVNode($$LinkCard, {
          title: "Learn More ",
          href: "en/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "Power Saws",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "Precision cutting with adjustable settings for various materials."
        }), createVNode($$LinkCard, {
          title: "Learn More ",
          href: "en/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "setup-instructions",
      children: "Setup Instructions"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Unboxing Icon Unbox Your ScrewFast Tools\nCarefully open the packaging and verify all components are present. Familiarize yourself with the tool and any accessories."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Safety Check Icon Initial Setup and Safety Checks\nRead the safety manual before handling the tool. Check the tool for any shipping damage and ensure safety guards are in place."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Calibration Icon Calibration and Preparation for First Use\nFollow the manufacturer\u2019s instructions to calibrate your tools as required. Ensure batteries are charged or electrical connections are secure."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "cleaning-and-maintenance",
      children: "Cleaning and Maintenance"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "Always unplug tools before cleaning. Use a soft, dry cloth to wipe the\nexterior and store in a dry place."
      })
    }), "\n", createVNode(_components.p, {
      children: "Regular maintenance ensures longevity and safety. Clean your tools after each use, check for wear, and lubricate moving parts as specified in the tool\u2019s manual."
    }), "\n", createVNode(_components.h2, {
      id: "additional-resources",
      children: "Additional Resources"
    }), "\n", createVNode($$LinkCard, {
      title: "In-depth Tutorials",
      description: "Deep dive into using our tools with expert-led tutorials.",
      href: "en/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Video Demos",
      description: "Visual guides to get the most out of your tools.",
      href: "en/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "Warranty Information",
      description: "Understand your coverage and how to make a claim if needed.",
      href: "en/guides/getting-started"
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
const url = "src/content/docs/guides/getting-started.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/guides/getting-started.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
