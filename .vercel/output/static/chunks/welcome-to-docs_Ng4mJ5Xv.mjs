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
    "title": "\u6587\u6863\u4E2D\u5FC3",
    "tagline": "\u60A8\u7684\u96C6\u4E2D\u5F0F\u5DE5\u5177\u6307\u5357\u3001\u8BE6\u7EC6\u670D\u52A1\u6587\u6863\u548C\u9879\u76EE\u652F\u6301\u4E2D\u5FC3\u3002",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/zn-cn/guides/getting-started/"
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
      title: "\u5FEB\u901F\u5165\u95E8\u6307\u5357",
      icon: "document",
      children: createVNode(_components.p, {
        children: "\u901A\u8FC7\u6211\u4EEC\u7B80\u660E\u627C\u8981\u7684\u6307\u5357\uFF0C\u5FEB\u901F\u638C\u63E1\u4F7F\u7528\u6280\u5DE7\uFF0C\u9002\u7528\u4E8E\u65B0\u624B\u548C\u8001\u624B\u7528\u6237\u3002"
      })
    }), createVNode($$Card, {
      title: "\u5DE5\u5177\u4E0E\u8BBE\u5907",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "\u63A2\u7D22 ScrewFast \u7684\u5168\u9762\u5DE5\u5177\u548C\u8BBE\u5907\u7CFB\u5217\u3002\u6BCF\u4E2A\u5B50\u90E8\u5206\u63D0\u4F9B\u8BE6\u7EC6\u7684\u89C4\u683C\u3001\u4F7F\u7528\u8BF4\u660E\u548C\u7EF4\u62A4\u6280\u5DE7\u3002"
      })
    }), createVNode($$Card, {
      title: "\u65BD\u5DE5\u670D\u52A1",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "\u63A2\u7D22 ScrewFast \u7684\u5168\u9762\u5DE5\u5177\u548C\u8BBE\u5907\u7CFB\u5217\u3002\u6BCF\u4E2A\u5B50\u90E8\u5206\u63D0\u4F9B\u8BE6\u7EC6\u7684\u89C4\u683C\u3001\u4F7F\u7528\u8BF4\u660E\u548C\u7EF4\u62A4\u6280\u5DE7\u3002"
      })
    }), createVNode($$Card, {
      title: "\u9AD8\u7EA7\u4E3B\u9898",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "\u63A2\u7D22 ScrewFast \u7684\u5168\u9762\u5DE5\u5177\u548C\u8BBE\u5907\u7CFB\u5217\u3002\u6BCF\u4E2A\u5B50\u90E8\u5206\u63D0\u4F9B\u8BE6\u7EC6\u7684\u89C4\u683C\u3001\u4F7F\u7528\u8BF4\u660E\u548C\u7EF4\u62A4\u6280\u5DE7\u3002"
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
const url = "src/content/docs/zh-cn/welcome-to-docs.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/zh-cn/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/zh-cn/welcome-to-docs.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
