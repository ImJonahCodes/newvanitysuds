import { a7 as __astro_tag_component__, k as Fragment, a6 as createVNode } from './astro_CTyT_tO9.mjs';
import { $ as $$Image } from './pages/generic_3dPdwh9u.mjs';
import { $ as $$CardGrid, a as $$Card, c as $$LinkCard, b as $$Steps, d as $$Aside } from './Code_DN_81fs6.mjs';
import './prerender_Bh459wv2.mjs';
import 'clsx';

const frontmatter = {
  "title": "\u5165\u9580",
  "description": "ScrewFast\u306E\u5305\u62EC\u7684\u306A\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3092\u63A2\u7D22\u3057\u3066\u3001\u30D7\u30EC\u30DF\u30A2\u30E0\u30C4\u30FC\u30EB\u3068\u5EFA\u8A2D\u30B5\u30FC\u30D3\u30B9\u3092\u8A73\u3057\u304F\u898B\u3066\u304F\u3060\u3055\u3044\u3002",
  "sidebar": {
    "label": "Getting Started",
    "order": 1
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\u30C4\u30FC\u30EB\u306E\u6982\u8981",
    "text": "\u30C4\u30FC\u30EB\u306E\u6982\u8981"
  }, {
    "depth": 2,
    "slug": "\u8A2D\u5B9A\u624B\u9806",
    "text": "\u8A2D\u5B9A\u624B\u9806"
  }, {
    "depth": 2,
    "slug": "\u6E05\u6383\u3068\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9",
    "text": "\u6E05\u6383\u3068\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9"
  }, {
    "depth": 2,
    "slug": "\u305D\u306E\u4ED6\u306E\u30EA\u30BD\u30FC\u30B9",
    "text": "\u305D\u306E\u4ED6\u306E\u30EA\u30BD\u30FC\u30B9"
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
      children: "ScrewFast Docs\u3078\u3088\u3046\u3053\u305D\uFF01\u79C1\u305F\u3061\u306F\u3001\u30D7\u30EC\u30DF\u30A2\u30E0\u30C4\u30FC\u30EB\u3067\u306E\u30B9\u30BF\u30FC\u30C8\u3092\u304A\u624B\u4F1D\u3044\u3067\u304D\u308B\u3053\u3068\u3092\u697D\u3057\u307F\u306B\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u30AC\u30A4\u30C9\u306F\u3001\u79C1\u305F\u3061\u306E\u30C4\u30FC\u30EB\u306E\u7BC4\u56F2\u3092\u7D39\u4ECB\u3057\u3001\u57FA\u672C\u3092\u7406\u89E3\u3057\u3001\u6700\u521D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u5099\u3048\u308B\u305F\u3081\u306E\u8A2D\u8A08\u3055\u308C\u3066\u3044\u307E\u3059\u3002ScrewFast\u3068\u3068\u3082\u306B\u3001\u9AD8\u54C1\u8CEA\u3067\u4FE1\u983C\u6027\u306E\u9AD8\u3044\u6280\u8853\u306E\u4E16\u754C\u306B\u98DB\u3073\u8FBC\u307F\u307E\u3057\u3087\u3046\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u30C4\u30FC\u30EB\u306E\u6982\u8981",
      children: "\u30C4\u30FC\u30EB\u306E\u6982\u8981"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "\u30B9\u30AF\u30EA\u30E5\u30FC\u30C9\u30E9\u30A4\u30D0\u30FC\u30BB\u30C3\u30C8",
        icon: "seti:config",
        children: [createVNode(_components.p, {
          children: "\u591A\u76EE\u7684\u3067\u30A8\u30EB\u30B4\u30CE\u30DF\u30C3\u30AF\u3067\u3001\u3059\u3079\u3066\u306E\u306D\u3058\u306B\u9069\u3057\u3066\u3044\u307E\u3059\u3002"
        }), createVNode($$LinkCard, {
          title: "\u8A73\u7D30\u306F\u3053\u3061\u3089 ",
          href: "ja/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "\u30CF\u30F3\u30DE\u30FC\u30C9\u30EA\u30EB",
        icon: "seti:pipeline",
        children: [createVNode(_components.p, {
          children: "\u30C9\u30EA\u30EB\u3068\u30A4\u30F3\u30D1\u30AF\u30C8\u30C9\u30E9\u30A4\u30D6\u306E\u305F\u3081\u306E\u30D1\u30EF\u30D5\u30EB\u306A\u6027\u80FD\u3002"
        }), createVNode($$LinkCard, {
          title: "\u8A73\u7D30\u306F\u3053\u3061\u3089 ",
          href: "ja/guides/getting-started"
        })]
      }), createVNode($$Card, {
        title: "\u96FB\u52D5\u30CE\u30B3\u30AE\u30EA",
        icon: "seti:crystal",
        children: [createVNode(_components.p, {
          children: "\u5404\u7A2E\u6750\u6599\u306B\u5BFE\u5FDC\u3057\u305F\u53EF\u5909\u8A2D\u5B9A\u3067\u306E\u7CBE\u5BC6\u306A\u5207\u65AD\u3002"
        }), createVNode($$LinkCard, {
          title: "\u8A73\u7D30\u306F\u3053\u3061\u3089 ",
          href: "ja/guides/getting-started"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "\u8A2D\u5B9A\u624B\u9806",
      children: "\u8A2D\u5B9A\u624B\u9806"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "\u30A2\u30F3\u30DC\u30C3\u30AF\u30B9\u30A2\u30A4\u30B3\u30F3 ScrewFast\u306E\u30C4\u30FC\u30EB\u3092\u30A2\u30F3\u30DC\u30C3\u30AF\u30B9\u3059\u308B\n\u614E\u91CD\u306B\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u958B\u5C01\u3057\u3001\u3059\u3079\u3066\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u304C\u63C3\u3063\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C4\u30FC\u30EB\u3068\u30A2\u30AF\u30BB\u30B5\u30EA\u30FC\u306B\u6163\u308C\u3066\u304F\u3060\u3055\u3044\u3002"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "\u30BB\u30FC\u30D5\u30C6\u30A3\u30C1\u30A7\u30C3\u30AF\u30A2\u30A4\u30B3\u30F3 \u521D\u671F\u8A2D\u5B9A\u3068\u5B89\u5168\u30C1\u30A7\u30C3\u30AF\n\u30C4\u30FC\u30EB\u3092\u53D6\u308A\u6271\u3046\u524D\u306B\u5B89\u5168\u30DE\u30CB\u30E5\u30A2\u30EB\u3092\u8AAD\u307F\u307E\u3059\u3002\u30C4\u30FC\u30EB\u306B\u914D\u9001\u6642\u306E\u640D\u50B7\u304C\u306A\u3044\u304B\u78BA\u8A8D\u3057\u3001\u5B89\u5168\u30AC\u30FC\u30C9\u304C\u53D6\u308A\u4ED8\u3051\u3089\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "\u30AD\u30E3\u30EA\u30D6\u30EC\u30FC\u30B7\u30E7\u30F3\u30A2\u30A4\u30B3\u30F3 \u30AD\u30E3\u30EA\u30D6\u30EC\u30FC\u30B7\u30E7\u30F3\u3068\u521D\u4F7F\u7528\u306E\u6E96\u5099\n\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001\u88FD\u9020\u5143\u306E\u6307\u793A\u306B\u5F93\u3063\u3066\u30C4\u30FC\u30EB\u306E\u30AD\u30E3\u30EA\u30D6\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u3059\u3002\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u5145\u96FB\u3055\u308C\u3066\u3044\u308B\u304B\u3001\u96FB\u6C17\u63A5\u7D9A\u304C\u78BA\u5B9F\u306B\u63A5\u7D9A\u3055\u308C\u3066\u3044\u308B\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "\u6E05\u6383\u3068\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9",
      children: "\u6E05\u6383\u3068\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9"
    }), "\n", createVNode($$Aside, {
      type: "tip",
      children: createVNode(_components.p, {
        children: "\u6E05\u6383\u524D\u306B\u5E38\u306B\u30C4\u30FC\u30EB\u306E\u96FB\u6E90\u3092\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u67D4\u3089\u304B\u3044\u4E7E\u3044\u305F\u5E03\u3067\u5916\u90E8\u3092\u62ED\u304D\u53D6\u308A\u3001\u4E7E\u71E5\u3057\u305F\u5834\u6240\u306B\u4FDD\u7BA1\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
      })
    }), "\n", createVNode(_components.p, {
      children: "\u5B9A\u671F\u7684\u306A\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9\u306F\u3001\u5BFF\u547D\u3068\u5B89\u5168\u6027\u3092\u78BA\u4FDD\u3057\u307E\u3059\u3002\u5404\u4F7F\u7528\u5F8C\u306B\u30C4\u30FC\u30EB\u3092\u6E05\u6383\u3057\u3001\u6469\u8017\u306E\u30C1\u30A7\u30C3\u30AF\u3092\u884C\u3044\u3001\u30C4\u30FC\u30EB\u306E\u30DE\u30CB\u30E5\u30A2\u30EB\u3067\u6307\u5B9A\u3055\u308C\u305F\u901A\u308A\u306B\u52D5\u304F\u90E8\u54C1\u306B\u6F64\u6ED1\u6CB9\u3092\u5857\u5E03\u3057\u3066\u304F\u3060\u3055\u3044\u3002"
    }), "\n", createVNode(_components.h2, {
      id: "\u305D\u306E\u4ED6\u306E\u30EA\u30BD\u30FC\u30B9",
      children: "\u305D\u306E\u4ED6\u306E\u30EA\u30BD\u30FC\u30B9"
    }), "\n", createVNode($$LinkCard, {
      title: "\u8A73\u7D30\u306A\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB",
      description: "\u5C02\u9580\u5BB6\u306B\u3088\u308B\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3067\u30C4\u30FC\u30EB\u306E\u4F7F\u7528\u6CD5\u3092\u8A73\u3057\u304F\u5B66\u3073\u307E\u3059\u3002",
      href: "ja/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "\u30D3\u30C7\u30AA\u30C7\u30E2",
      description: "\u30C4\u30FC\u30EB\u3092\u6700\u5927\u9650\u306B\u6D3B\u7528\u3059\u308B\u305F\u3081\u306E\u30D3\u30B8\u30E5\u30A2\u30EB\u30AC\u30A4\u30C9\u3002",
      href: "ja/guides/getting-started"
    }), "\n", createVNode($$LinkCard, {
      title: "\u4FDD\u8A3C\u60C5\u5831",
      description: "\u4FDD\u8A3C\u7BC4\u56F2\u3068\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u8ACB\u6C42\u65B9\u6CD5\u3092\u7406\u89E3\u3057\u307E\u3059\u3002",
      href: "ja/guides/getting-started"
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
const url = "src/content/docs/ja/guides/getting-started.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/ja/guides/getting-started.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/ja/guides/getting-started.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
