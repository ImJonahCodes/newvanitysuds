import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CTyT_tO9.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"SF-FN F303","description":"Hex Bolts","main":{"id":4,"content":"Introducing the SF-FN F303 Hex Bolts – the perfect choice for heavy-duty fastening applications. Crafted with precision and durability in mind, these hex bolts provide the strength and reliability you need for your toughest projects.\n","imgCard":"@/images/product-image-4.avif","imgMain":"@/images/product-image-main-4.avif","imgAlt":"Mockup boxes of hex bolts"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Specifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Blueprints"}],"longDescription":{"title":"Heavy-Duty Fastening Solutions","subTitle":"The SF-FN F303 Hex Bolts are designed to handle the toughest fastening challenges with ease. Whether you're working on construction projects or heavy machinery, these hex bolts deliver the strength and reliability you need.\n","btnTitle":"Contact sales to learn more","btnURL":"#"},"descriptionList":[{"title":"Strength and Durability","subTitle":"Constructed from high-quality materials, these hex bolts are built to withstand heavy loads and tough conditions."},{"title":"Precision Engineering","subTitle":"Engineered with precision-cut threads and exact specifications, ensuring a tight and secure fit every time."},{"title":"Versatility","subTitle":"Suitable for a wide range of applications, from construction to machinery, providing versatile fastening solutions."}],"specificationsLeft":[{"title":"Material","subTitle":"Made from premium-grade steel or alloy, offering exceptional strength and corrosion resistance."},{"title":"Thread Design","subTitle":"Precision-cut threads ensure optimal grip and reliability, even in high-stress environments."},{"title":"Quantity","subTitle":"Each set includes a sufficient quantity of hex bolts to tackle various projects and applications."},{"title":"Sizes","subTitle":"Available in a range of sizes to accommodate different project requirements, ensuring versatility and compatibility."}],"specificationsRight":[{"title":"Finish","subTitle":"Finished with a protective coating to enhance corrosion resistance and extend service life."},{"title":"Load Capacity","subTitle":"Designed to meet or exceed industry standards for load-bearing capacity, ensuring reliable performance under heavy loads."},{"title":"Certifications","subTitle":"Compliant with relevant industry standards and certifications, guaranteeing quality and reliability."},{"title":"Applications","subTitle":"Ideal for use in construction, machinery, automotive, and other heavy-duty applications that demand strong and reliable fastening."}],"blueprints":{"first":"@/images/blueprint-1.avif","second":"@/images/blueprint-2.avif"},"slug":"f303"};
				const file = "/workspaces/newvanitysuds/src/content/products/f303.md";
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
