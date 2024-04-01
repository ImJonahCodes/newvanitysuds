import { a7 as __astro_tag_component__, k as Fragment, a6 as createVNode } from './astro_CTyT_tO9.mjs';
import { $ as $$Image } from './pages/generic_3dPdwh9u.mjs';
import { $ as $$CardGrid, a as $$Card, b as $$Steps, c as $$LinkCard } from './Code_DN_81fs6.mjs';
import './prerender_Bh459wv2.mjs';
import 'clsx';

const frontmatter = {
  "title": "Lista de Verificaci\xF3n del Primer Proyecto",
  "description": "Explora la documentaci\xF3n completa de ScrewFast para obtener una visi\xF3n detallada de nuestras herramientas premium y servicios de construcci\xF3n.",
  "sidebar": {
    "label": "First Project Checklist",
    "order": 3
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "preparaci\xF3n-del-proyecto",
    "text": "Preparaci\xF3n del Proyecto"
  }, {
    "depth": 2,
    "slug": "ejecuci\xF3n-del-proyecto",
    "text": "Ejecuci\xF3n del Proyecto"
  }, {
    "depth": 3,
    "slug": "fase-inicial",
    "text": "Fase Inicial"
  }, {
    "depth": 2,
    "slug": "recursos-adicionales",
    "text": "Recursos Adicionales"
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
      children: "Comenzar un nuevo proyecto puede ser emocionante y desafiante en igual medida. Con la preparaci\xF3n adecuada y orientaci\xF3n, tu empresa est\xE1 lista para el \xE9xito. La Lista de Verificaci\xF3n del Primer Proyecto de ScrewFast est\xE1 dise\xF1ada para proporcionar un enfoque claro y estructurado para garantizar que est\xE9s bien preparado en cada paso del camino."
    }), "\n", createVNode(_components.h2, {
      id: "preparaci\xF3n-del-proyecto",
      children: "Preparaci\xF3n del Proyecto"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "Alcance y Objetivos",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Asegurar claridad sobre el alcance del proyecto, entregables y resultados deseados."
          }), "\n", createVNode(_components.li, {
            children: "Definir objetivos claros y criterios de \xE9xito para la finalizaci\xF3n del proyecto."
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Herramientas y Equipamiento",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Hacer una lista de todas las herramientas y equipos de ScrewFast necesarios."
          }), "\n", createVNode(_components.li, {
            children: "Verificar la disponibilidad y condici\xF3n del inventario antes de comenzar."
          }), "\n"]
        })
      }), createVNode($$Card, {
        title: "Organizaci\xF3n de Servicios",
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Si se necesita experiencia adicional o mano de obra, organiza los servicios de construcci\xF3n de ScrewFast con anticipaci\xF3n."
          }), "\n", createVNode(_components.li, {
            children: "Aclarar los acuerdos de nivel de servicio y los plazos con tu representante de ScrewFast."
          }), "\n"]
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "ejecuci\xF3n-del-proyecto",
      children: "Ejecuci\xF3n del Proyecto"
    }), "\n", createVNode(_components.h3, {
      id: "fase-inicial",
      children: "Fase Inicial"
    }), "\n", createVNode($$Steps, {
      children: createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Configurar el sitio del proyecto seg\xFAn las pautas de configuraci\xF3n de ScrewFast."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Realizar una reuni\xF3n inicial de equipo para alinear los objetivos del proyecto y las metodolog\xEDas de ScrewFast."
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          children: ["\n", createVNode(_components.p, {
            children: "Establecer puntos de control y hitos del proyecto para evaluaciones regulares."
          }), "\n"]
        }), "\n"]
      })
    }), "\n", createVNode(_components.h2, {
      id: "recursos-adicionales",
      children: "Recursos Adicionales"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Gu\xEDas Detalladas",
        description: "Accede a documentaci\xF3n detallada y manuales de usuario para herramientas y servicios de ScrewFast.",
        href: "es/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Contactos de Soporte",
        description: "Mant\xE9n a mano los detalles de contacto para el soporte de ScrewFast, disponible para ayuda durante todo tu proyecto.",
        href: "es/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Aprendizaje Avanzado",
        description: "Explora recursos educativos adicionales proporcionados por ScrewFast para refinar tus habilidades y conocimientos.",
        href: "es/guides/getting-started"
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
const url = "src/content/docs/es/guides/first-project-checklist.mdx";
const file = "/workspaces/newvanitysuds/src/content/docs/es/guides/first-project-checklist.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/newvanitysuds/src/content/docs/es/guides/first-project-checklist.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
