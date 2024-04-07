import { _ as __astro_tag_component__, i as Fragment, x as createVNode } from './astro_ujMWuv_C.mjs';
import './astro/assets-service_BCnjW2_Z.mjs';
import { $ as $$Image } from './pages/generic_DWdldJRw.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_DUgOkOYV.mjs';
import './prerender_C7LpqVuq.mjs';
import 'clsx';

const frontmatter = {
  "title": "Technical Specifications",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Technical Specifications",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "product-integration-techniques",
    "text": "Product Integration Techniques"
  }, {
    "depth": 2,
    "slug": "advanced-use-cases",
    "text": "Advanced Use Cases"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    br: "br",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Dive deep into the technicalities of our product offerings with ScrewFast\u2019s comprehensive technical specifications documentation. Our detailed data sheets provide you with all the information you need on:"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Material properties and grades",
        icon: "star"
      }), createVNode($$Card, {
        title: "Mechanical strengths and tolerances",
        icon: "star"
      }), createVNode($$Card, {
        title: "Environmental resilience and sustainability ratings",
        icon: "star"
      }), createVNode($$Card, {
        title: "Compatibility and interoperability",
        icon: "star"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Understanding these specifications will help you select and use our products with confidence, ensuring optimal performance and longevity."
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.strong, {
              children: "Material Specifications"
            }), createVNode(_components.br, {}), "\nInsight into the materials used and their properties to assist you with informed decision-making."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.strong, {
              children: "Performance Metrics"
            }), createVNode(_components.br, {}), "\nDocumented performance metrics that detail what you can expect from our products under various conditions."]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.strong, {
              children: "Compliance Standards"
            }), createVNode(_components.br, {}), "\nInformation about industry standards and regulatory compliance ensures your project adheres to necessary codes and practices."]
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "product-integration-techniques",
      children: "Product Integration Techniques"
    }), "\n", createVNode(_components.p, {
      children: "Unlock the full potential of ScrewFast products with our set of specialized integration techniques."
    }), "\n", createVNode(_components.p, {
      children: "Leverage our in-depth knowledge to enhance the efficiency and durability of your constructions by correctly incorporating our products."
    }), "\n", createVNode(_components.h2, {
      id: "advanced-use-cases",
      children: "Advanced Use Cases"
    }), "\n", createVNode(_components.p, {
      children: "Explore the possibilities with ScrewFast through real-world scenarios. Our catalog of advanced use cases demonstrates how our products can solve complex challenges and push the boundaries of conventional construction."
    }), "\n", createVNode(_components.p, {
      children: "See how ScrewFast products have been instrumental in:"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Major infrastructure projects",
        href: "en/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Innovative architectural accomplishments",
        href: "en/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "High-stress industrial applications",
        href: "en/guides/getting-started"
      })]
    }), "\n", createVNode(_components.p, {
      children: "These case studies serve as an inspiration and a learning tool, showcasing what can be achieved with the right expertise and ScrewFast\u2019s superior product range."
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
const url = "src/content/docs/advanced/technical-specifications.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/advanced/technical-specifications.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/advanced/technical-specifications.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
