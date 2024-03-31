import { _ as __astro_tag_component__, k as Fragment, z as createVNode } from './astro_DiIWhFry.mjs';
import { $ as $$Image } from './prerender_NAKRBWhK.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_DfY1euxR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introducci\xF3n a los Servicios de ScrewFast",
  "description": "Explora la documentaci\xF3n completa de ScrewFast para obtener una visi\xF3n detallada de nuestras herramientas premium y servicios de construcci\xF3n.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "visi\xF3n-general-de-los-servicios",
    "text": "Visi\xF3n general de los Servicios"
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
      children: "Como parte de nuestro compromiso de proporcionar una soluci\xF3n integral para todas sus necesidades de construcci\xF3n y hardware, en ScrewFast nos enorgullecemos de ofrecer una amplia gama de servicios profesionales. Desde consultas iniciales hasta inspecciones finales, nuestros servicios multifac\xE9ticos abarcan la totalidad de su proyecto, garantizando resultados de calidad y satisfacci\xF3n del cliente. Esta secci\xF3n de la documentaci\xF3n le guiar\xE1 a trav\xE9s de todo lo que necesita saber para aprovechar al m\xE1ximo nuestra experiencia."
    }), "\n", createVNode(_components.h2, {
      id: "visi\xF3n-general-de-los-servicios",
      children: "Visi\xF3n general de los Servicios"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Soluciones Personalizadas",
        children: createVNode(_components.p, {
          children: "Cada proyecto de construcci\xF3n conlleva sus desaf\xEDos y demandas \xFAnicas. En ScrewFast, personalizamos nuestros servicios para satisfacer sus necesidades espec\xEDficas, asegurando que, independientemente de la escala o complejidad de su proyecto, nuestro equipo est\xE9 equipado para manejarlo con precisi\xF3n y profesionalismo."
        })
      }), createVNode($$TabItem, {
        label: "Equipo Experto",
        children: createVNode(_components.p, {
          children: "Aproveche las habilidades de nuestro personal experimentado, desde arquitectos e ingenieros hasta obreros calificados, cada uno contribuyendo con su experiencia para dar vida a su visi\xF3n."
        })
      }), createVNode($$TabItem, {
        label: "Compromiso con la Calidad",
        children: createVNode(_components.p, {
          children: "La calidad est\xE1 en el coraz\xF3n de todo lo que hacemos. Implementamos rigurosas medidas de control de calidad para asegurar que el trabajo que entregamos cumpla y supere los est\xE1ndares de la industria."
        })
      }), createVNode($$TabItem, {
        label: "Soporte Continuo",
        children: createVNode(_components.p, {
          children: "Nuestra relaci\xF3n con nuestros clientes no termina una vez que se completa el proyecto. Brindamos apoyo continuo para abordar cualquier problema y garantizar una satisfacci\xF3n duradera con su inversi\xF3n."
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
const url = "src/content/docs/es/guides/intro.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/es/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/es/guides/intro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
