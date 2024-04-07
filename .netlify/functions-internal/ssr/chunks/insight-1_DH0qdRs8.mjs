import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_ujMWuv_C.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"The Future of Construction Technology","description":"Explore ScrewFast's pioneering role in revolutionizing construction through advanced technology and innovative solutions.","cardImage":"@/images/insights/insight-1.avif","cardImageAlt":"Top view mechanical tools arrangement","contents":["As technology continues to evolve, so too does the construction industry. From advanced robotics to augmented reality, the possibilities for innovation are endless. At ScrewFast, we're at the forefront of this technological revolution, developing cutting-edge tools and solutions to drive the industry forward.","Our range of hardware tools combines precision engineering with user-centric design, ensuring maximum productivity on every job site. From power drills to advanced fastening solutions, ScrewFast's tools are built to withstand the rigors of construction while streamlining your workflow.","Another area of focus for us is in data analytics. By harnessing the power of data, we're able to provide valuable insights into project performance, resource utilization, and more. This allows our clients to make informed decisions that optimize efficiency and drive success.","Looking ahead, we see even greater opportunities for innovation in areas like sustainable construction and modular design. By embracing new technologies and pushing the boundaries of what's possible, ScrewFast is committed to shaping the future of the construction industry for the better."]};
				const file = "/workspaces/newvanitysuds/src/content/insights/insight-1.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
