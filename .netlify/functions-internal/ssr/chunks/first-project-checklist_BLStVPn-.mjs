import { _ as __astro_tag_component__, i as Fragment, x as createVNode } from './astro_DvD4qV4A.mjs';
import { $ as $$Image } from './pages/generic_BjLABjUc.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_CA4GMQl0.mjs';
import './prerender_fCo7zqCH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Erste Projekt-Checkliste",
  "description": "Entdecken Sie die umfassende Dokumentation von ScrewFast f\xFCr einen eingehenden Einblick in unsere erstklassigen Werkzeuge und Bauleistungen.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "projektvorbereitung",
    "text": "Projektvorbereitung"
  }, {
    "depth": 2,
    "slug": "projektumsetzung",
    "text": "Projektumsetzung"
  }, {
    "depth": 3,
    "slug": "erste-phase",
    "text": "Erste Phase"
  }, {
    "depth": 2,
    "slug": "zus\xE4tzliche-ressourcen",
    "text": "Zus\xE4tzliche Ressourcen"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Den Beginn eines neuen Projekts anzugehen kann gleicherma\xDFen aufregend und herausfordernd sein. Mit der richtigen Vorbereitung und Anleitung ist Ihr Vorhaben auf Erfolgskurs. Die ScrewFast First Project Checklist wurde entwickelt, um einen klaren und strukturierten Ansatz zu bieten und sicherzustellen, dass Sie bei jedem Schritt des Weges gut vorbereitet sind."
    }), "\n", createVNode(_components.h2, {
      id: "projektvorbereitung",
      children: "Projektvorbereitung"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Umfang und Ziele",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Stellen Sie sicher, dass der Umfang des Projekts, die Liefergegenst\xE4nde und die angestrebten Ergebnisse klar definiert sind."
          }), "\n", createVNode(_components.li, {
            children: "Legen Sie klare Ziele und Erfolgskriterien f\xFCr den Abschluss des Projekts fest."
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Werkzeuge und Ausr\xFCstung",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Erstellen Sie eine Liste aller ben\xF6tigten ScrewFast Werkzeuge und Ausr\xFCstungen."
          }), "\n", createVNode(_components.li, {
            children: "\xDCberpr\xFCfen Sie die Verf\xFCgbarkeit und den Zustand des Inventars vor Beginn."
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Dienstleistungen arrangieren",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Wenn zus\xE4tzliche Expertise oder Arbeitskr\xE4fte ben\xF6tigt werden, vereinbaren Sie rechtzeitig ScrewFast Bauarbeiten."
          }), "\n", createVNode(_components.li, {
            children: "Kl\xE4ren Sie Service Level Agreements und Zeitpl\xE4ne mit Ihrem ScrewFast Vertreter."
          }), "\n"]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "projektumsetzung",
      children: "Projektumsetzung"
    }), "\n", createVNode(_components.h3, {
      id: "erste-phase",
      children: "Erste Phase"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Richten Sie den Projektstandort gem\xE4\xDF den ScrewFast Einrichtungsrichtlinien ein."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "F\xFChren Sie ein erstes Teammeeting durch, um sich auf die Projektziele und ScrewFast Methodologien abzustimmen."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Legen Sie Projektpr\xFCfpunkte und Meilensteine f\xFCr regelm\xE4\xDFige Bewertungen fest."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "zus\xE4tzliche-ressourcen",
      children: "Zus\xE4tzliche Ressourcen"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Ausf\xFChrliche Anleitungen",
        description: "Greifen Sie auf umfangreiche Dokumentationen und Benutzerhandb\xFCcher f\xFCr ScrewFast Werkzeuge und Dienstleistungen zu.",
        href: "de/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Support-Kontakte",
        description: "Halten Sie die Kontaktdaten f\xFCr den ScrewFast Support bereit, der Ihnen w\xE4hrend Ihres Projekts zur Verf\xFCgung steht.",
        href: "de/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Fortgeschrittenes Lernen",
        description: "Erkunden Sie weitere Bildungsressourcen von ScrewFast, um Ihre F\xE4higkeiten und Ihr Wissensniveau zu verfeinern.",
        href: "de/guides/getting-started"
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
const url = "src/content/docs/de/guides/first-project-checklist.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/de/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/de/guides/first-project-checklist.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
