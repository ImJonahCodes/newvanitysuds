import { _ as __astro_tag_component__, i as Fragment, x as createVNode } from './astro_ujMWuv_C.mjs';
import './astro/assets-service_BCnjW2_Z.mjs';
import { $ as $$Image } from './pages/generic_DWdldJRw.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_DUgOkOYV.mjs';
import './prerender_C7LpqVuq.mjs';
import 'clsx';

const frontmatter = {
  "title": "Introduction aux Services ScrewFast",
  "description": "Explorez la documentation compl\xE8te de ScrewFast pour un examen approfondi de nos outils haut de gamme et services de construction.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "aper\xE7u-des-services",
    "text": "Aper\xE7u des Services"
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
      children: "Dans le cadre de notre engagement \xE0 fournir une solution de bout en bout pour tous vos besoins en construction et mat\xE9riel, nous, chez ScrewFast, sommes fiers de proposer une suite compl\xE8te de services professionnels. Des consultations initiales aux inspections finales, nos services polyvalents englobent l\u2019int\xE9gralit\xE9 de votre projet, garantissant des r\xE9sultats de qualit\xE9 et la satisfaction du client. Cette section de la documentation vous guidera \xE0 travers tout ce que vous devez savoir pour exploiter pleinement notre expertise."
    }), "\n", createVNode(_components.h2, {
      id: "aper\xE7u-des-services",
      children: "Aper\xE7u des Services"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Solutions sur Mesure",
        children: createVNode(_components.p, {
          children: "Chaque projet de construction comporte ses propres d\xE9fis et exigences. Chez ScrewFast, nous personnalisons nos services pour correspondre \xE0 vos besoins sp\xE9cifiques, garantissant que, quelle que soit l\u2019\xE9chelle ou la complexit\xE9 de votre projet, notre \xE9quipe est \xE9quip\xE9e pour le g\xE9rer avec pr\xE9cision et professionnalisme."
        })
      }), createVNode($$TabItem, {
        label: "\xC9quipe d'Experts",
        children: createVNode(_components.p, {
          children: "Tire parti des comp\xE9tences de notre personnel qualifi\xE9, des architectes et ing\xE9nieurs aux ouvriers qualifi\xE9s, chacun contribuant \xE0 apporter leur expertise pour donner vie \xE0 votre vision."
        })
      }), createVNode($$TabItem, {
        label: "Engagement envers la Qualit\xE9",
        children: createVNode(_components.p, {
          children: "La qualit\xE9 est au c\u0153ur de tout ce que nous faisons. Nous mettons en \u0153uvre des mesures rigoureuses de contr\xF4le de qualit\xE9 pour garantir que le travail que nous livrons r\xE9pond et d\xE9passe les normes de l\u2019industrie."
        })
      }), createVNode($$TabItem, {
        label: "Support Continu",
        children: createVNode(_components.p, {
          children: "Notre relation avec nos clients ne se termine pas une fois le projet termin\xE9. Nous fournissons un support continu pour r\xE9soudre tout probl\xE8me et garantir une satisfaction durable avec votre investissement."
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
const url = "src/content/docs/fr/guides/intro.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/fr/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/fr/guides/intro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
