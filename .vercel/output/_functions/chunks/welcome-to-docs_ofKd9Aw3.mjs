import { a7 as __astro_tag_component__, k as Fragment, a6 as createVNode } from './astro_CTyT_tO9.mjs';
import { $ as $$Image } from './pages/generic_3dPdwh9u.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_DN_81fs6.mjs';
import './prerender_Bh459wv2.mjs';
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
    "title": "Centro de Documentaci\xF3n",
    "tagline": "Tu centro central para orientaci\xF3n de herramientas simplificada, documentos de servicio detallados y apoyo al proyecto.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/es/guides/getting-started/"
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
      title: "Gu\xEDas de Inicio R\xE1pido",
      icon: "document",
      children: createVNode(_components.p, {
        children: "Lev\xE1ntate y comienza r\xE1pidamente con nuestras gu\xEDas directas y concisas, dise\xF1adas para nuevos usuarios y expertos experimentados por igual."
      })
    }), createVNode($$Card, {
      title: "Herramientas y Equipos",
      icon: "seti:eslint",
      children: createVNode(_components.p, {
        children: "Descubre la l\xEDnea completa de herramientas y equipos de calidad superior de ScrewFast. Cada subsecci\xF3n ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento."
      })
    }), createVNode($$Card, {
      title: "Servicios de Construcci\xF3n",
      icon: "seti:puppet",
      children: createVNode(_components.p, {
        children: "Descubre la l\xEDnea completa de herramientas y equipos de calidad superior de ScrewFast. Cada subsecci\xF3n ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento."
      })
    }), createVNode($$Card, {
      title: "Temas Avanzados",
      icon: "seti:terraform",
      children: createVNode(_components.p, {
        children: "Descubre la l\xEDnea completa de herramientas y equipos de calidad superior de ScrewFast. Cada subsecci\xF3n ofrece especificaciones detalladas, instrucciones de uso y consejos de mantenimiento."
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
const url = "src/content/docs/es/welcome-to-docs.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/es/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/es/welcome-to-docs.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
