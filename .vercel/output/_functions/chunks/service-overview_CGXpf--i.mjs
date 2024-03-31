import { a7 as __astro_tag_component__, k as Fragment, a6 as createVNode } from './astro_CTyT_tO9.mjs';
import { $ as $$Image } from './pages/generic_3dPdwh9u.mjs';
import { $ as $$CardGrid, a as $$Card } from './Code_D6Bgv0y2.mjs';
import './prerender_Dme6QqmJ.mjs';
import 'clsx';

const frontmatter = {
  "title": "Comprehensive Service Overview",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Service Overview",
    "order": 1
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Welcome to ScrewFast Construction Services \u2013 your trusted partner in bringing complex construction visions to life. Our dedicated team is equipped with state-of-the-art tools and extensive industry knowledge to ensure your projects are completed with precision and efficiency."
    }), "\n", createVNode(_components.p, {
      children: "At ScrewFast, we specialize in providing a range of services tailored to meet your unique construction needs. From the initial concept to the final touches, our services encompass:"
    }), "\n", createVNode($$CardGrid, {
      stagger: true,
      children: [createVNode($$Card, {
        title: "Pre-construction Consultations",
        icon: "star",
        children: createVNode(_components.p, {
          children: "A thorough assessment to understand your project requirements, site conditions, and to provide a clear roadmap for your project."
        })
      }), createVNode($$Card, {
        title: "Design and Engineering",
        icon: "star",
        children: createVNode(_components.p, {
          children: "Leveraging innovative software and expertise to craft bespoke solutions that bring your structural vision to life with accuracy and innovation."
        })
      }), createVNode($$Card, {
        title: "Project Management",
        icon: "star",
        children: createVNode(_components.p, {
          children: "Dedicated on-site leadership to ensure that your project runs smoothly, on time, and within budget."
        })
      }), createVNode($$Card, {
        title: "Construction and Installation",
        icon: "star",
        children: createVNode(_components.p, {
          children: "Employing the latest tools and technologies along with skilled craftsmanship to execute your project to the highest standard."
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
const url = "src/content/docs/construction/service-overview.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/construction/service-overview.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/construction/service-overview.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
