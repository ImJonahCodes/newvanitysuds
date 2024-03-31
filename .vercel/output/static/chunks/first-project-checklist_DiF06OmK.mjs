import { _ as __astro_tag_component__, k as Fragment, z as createVNode } from './astro_DiIWhFry.mjs';
import { $ as $$Image } from './prerender_NAKRBWhK.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_DfY1euxR.mjs';
import 'clsx';

const frontmatter = {
  "title": "Liste de v\xE9rification du premier projet",
  "description": "Explorez la documentation compl\xE8te de ScrewFast pour un examen approfondi de nos outils haut de gamme et services de construction.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "pr\xE9paration-du-projet",
    "text": "Pr\xE9paration du projet"
  }, {
    "depth": 2,
    "slug": "ex\xE9cution-du-projet",
    "text": "Ex\xE9cution du projet"
  }, {
    "depth": 3,
    "slug": "phase-initiale",
    "text": "Phase initiale"
  }, {
    "depth": 2,
    "slug": "ressources-suppl\xE9mentaires",
    "text": "Ressources suppl\xE9mentaires"
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
      children: "Se lancer dans un nouveau projet peut \xEAtre \xE0 la fois excitant et stimulant. Avec la bonne pr\xE9paration et orientation, votre entreprise est pr\xEAte pour le succ\xE8s. La Liste de v\xE9rification du premier projet de ScrewFast est con\xE7ue pour fournir une approche claire et structur\xE9e afin de vous assurer que vous \xEAtes bien pr\xE9par\xE9 \xE0 chaque \xE9tape du processus."
    }), "\n", createVNode(_components.h2, {
      id: "pr\xE9paration-du-projet",
      children: "Pr\xE9paration du projet"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Port\xE9e et objectifs",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Assurez-vous de la clart\xE9 de la port\xE9e du projet, des livrables et des r\xE9sultats souhait\xE9s"
          }), "\n", createVNode(_components.li, {
            children: "D\xE9finissez des objectifs clairs et des crit\xE8res de r\xE9ussite pour l\u2019ach\xE8vement du projet"
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Outils et \xE9quipement",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Faites une liste de tous les outils et \xE9quipements ScrewFast n\xE9cessaires"
          }), "\n", createVNode(_components.li, {
            children: "V\xE9rifiez la disponibilit\xE9 de l\u2019inventaire et son \xE9tat avant de commencer"
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Organisation des services",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Si une expertise suppl\xE9mentaire ou une main-d\u2019\u0153uvre est n\xE9cessaire, organisez les services de construction ScrewFast \xE0 l\u2019avance"
          }), "\n", createVNode(_components.li, {
            children: "Clarifiez les accords de niveau de service et les d\xE9lais avec votre repr\xE9sentant ScrewFast"
          }), "\n"]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "ex\xE9cution-du-projet",
      children: "Ex\xE9cution du projet"
    }), "\n", createVNode(_components.h3, {
      id: "phase-initiale",
      children: "Phase initiale"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Configurez le site du projet selon les directives de configuration de ScrewFast"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Organisez une r\xE9union initiale d\u2019\xE9quipe pour aligner les objectifs du projet et les m\xE9thodologies ScrewFast"
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "\xC9tablissez des points de contr\xF4le et des jalons du projet pour des \xE9valuations r\xE9guli\xE8res"
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "ressources-suppl\xE9mentaires",
      children: "Ressources suppl\xE9mentaires"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Guides d\xE9taill\xE9s",
        description: "Acc\xE9dez \xE0 une documentation approfondie et aux manuels d'utilisation des outils et services ScrewFast.",
        href: "fr/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Contacts de support",
        description: "Gardez \xE0 port\xE9e de main les coordonn\xE9es du support ScrewFast, disponible pour vous aider tout au long de votre projet.",
        href: "fr/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Apprentissage avanc\xE9",
        description: "Explorez d'autres ressources \xE9ducatives fournies par ScrewFast pour affiner vos comp\xE9tences et vos connaissances.",
        href: "fr/guides/getting-started"
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
const url = "src/content/docs/fr/guides/first-project-checklist.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/fr/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/fr/guides/first-project-checklist.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
