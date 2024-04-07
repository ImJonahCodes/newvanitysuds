import { _ as __astro_tag_component__, i as Fragment, x as createVNode } from './astro_ujMWuv_C.mjs';
import './astro/assets-service_BCnjW2_Z.mjs';
import { $ as $$Image } from './pages/generic_DWdldJRw.mjs';
import { e as $$Tabs, f as $$TabItem } from './Code_DUgOkOYV.mjs';
import './prerender_C7LpqVuq.mjs';
import 'clsx';

const frontmatter = {
  "title": "Einf\xFChrung in die ScrewFast-Dienstleistungen",
  "description": "Entdecken Sie die umfassende Dokumentation von ScrewFast f\xFCr einen eingehenden Einblick in unsere erstklassigen Werkzeuge und Bauleistungen.",
  "sidebar": {
    "label": "Introduction to Services",
    "order": 2
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "\xFCbersicht-\xFCber-die-dienstleistungen",
    "text": "\xDCbersicht \xFCber die Dienstleistungen"
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
      children: "Als Teil unseres Engagements, eine Komplettl\xF6sung f\xFCr alle Ihre Bau- und Hardware-Bed\xFCrfnisse bereitzustellen, sind wir bei ScrewFast stolz darauf, eine umfassende Palette professioneller Dienstleistungen anzubieten. Von den ersten Beratungsgespr\xE4chen bis hin zu abschlie\xDFenden Inspektionen umfassen unsere vielseitigen Dienstleistungen die gesamte Projektarbeit und gew\xE4hrleisten qualitativ hochwertige Ergebnisse und Kundenzufriedenheit. Dieser Abschnitt der Dokumentation wird Sie durch alles f\xFChren, was Sie wissen m\xFCssen, um unser Fachwissen optimal zu nutzen."
    }), "\n", createVNode(_components.h2, {
      id: "\xFCbersicht-\xFCber-die-dienstleistungen",
      children: "\xDCbersicht \xFCber die Dienstleistungen"
    }), "\n", createVNode($$Tabs, {
      children: [createVNode($$TabItem, {
        label: "Ma\xDFgeschneiderte L\xF6sungen",
        children: createVNode(_components.p, {
          children: "Jedes Bauprojekt birgt seine eigenen Herausforderungen und Anforderungen. Bei ScrewFast passen wir unsere Dienstleistungen an Ihre spezifischen Bed\xFCrfnisse an, um sicherzustellen, dass unser Team unabh\xE4ngig von der Gr\xF6\xDFe oder Komplexit\xE4t Ihres Projekts damit pr\xE4zise und professionell umgehen kann."
        })
      }), createVNode($$TabItem, {
        label: "Experten-Team",
        children: createVNode(_components.p, {
          children: "Nutzen Sie das Know-how unseres kompetenten Personals, von Architekten und Ingenieuren bis hin zu qualifizierten Arbeitern, die jeweils ihr Fachwissen einbringen, um Ihre Vision zum Leben zu erwecken."
        })
      }), createVNode($$TabItem, {
        label: "Qualit\xE4tsverpflichtung",
        children: createVNode(_components.p, {
          children: "Qualit\xE4t steht im Mittelpunkt unseres Handelns. Wir setzen strenge Qualit\xE4tskontrollma\xDFnahmen ein, um sicherzustellen, dass die von uns gelieferte Arbeit den Branchenstandards entspricht und diese sogar \xFCbertrifft."
        })
      }), createVNode($$TabItem, {
        label: "Laufende Unterst\xFCtzung",
        children: createVNode(_components.p, {
          children: "Unsere Beziehung zu unseren Kunden endet nicht, sobald das Projekt abgeschlossen ist. Wir bieten kontinuierliche Unterst\xFCtzung, um Probleme zu l\xF6sen und eine dauerhafte Zufriedenheit mit Ihrer Investition sicherzustellen."
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
const url = "src/content/docs/de/guides/intro.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/de/guides/intro.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/de/guides/intro.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
