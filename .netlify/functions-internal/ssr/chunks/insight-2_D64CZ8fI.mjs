import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BmHqPo6i.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"The Importance of Collaboration","description":"Explore how collaboration is central to ScrewFast's construction approach, driving effective communication and teamwork to achieve outstanding outcomes.","cardImage":"@/images/insights/insight-2.avif","cardImageAlt":"Top view mechanical tools arrangement","contents":["Construction projects are complex undertakings that require collaboration and coordination among various stakeholders. From architects and engineers to contractors and suppliers, effective collaboration is essential for success.","At ScrewFast, we understand the importance of collaboration, which is why we prioritize communication and teamwork in everything we do. Whether it's working closely with our clients to understand their needs or partnering with other industry professionals to deliver comprehensive solutions, collaboration is at the heart of our approach.","But collaboration isn't just about working together—it's also about sharing knowledge and expertise. That's why we're committed to providing valuable resources and support to our clients, empowering them to make informed decisions and achieve their goals.","By fostering a culture of collaboration, we're able to tackle even the most complex challenges and deliver exceptional results. Together, we can build a better future for the construction industry."]};
				const file = "/workspaces/newvanitysuds/src/content/insights/insight-2.md";
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