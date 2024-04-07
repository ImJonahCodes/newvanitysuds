import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BmHqPo6i.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"SF-BN B203","description":"Tap Bolts and Nuts Set","main":{"id":3,"content":"Meet the SF-BN B203 – your reliable companion for professional-grade fastening. This comprehensive box set comes with a versatile selection of tap bolts and nuts, meticulously crafted to provide the strongest hold for your construction and assembly projects.\n","imgCard":"@/images/product-image-3.avif","imgMain":"@/images/product-image-main-3.avif","imgAlt":"Mockup boxes of a tap bolts and nuts set"},"tabs":[{"id":"tabs-with-card-item-1","dataTab":"#tabs-with-card-1","title":"Description"},{"id":"tabs-with-card-item-2","dataTab":"#tabs-with-card-2","title":"Specifications"},{"id":"tabs-with-card-item-3","dataTab":"#tabs-with-card-3","title":"Blueprints"}],"longDescription":{"title":"Strength Meets Precision","subTitle":"The SF-BN B203 Tap Bolts and Nuts Set offers robust durability and precision for construction professionals, ensuring reliable performance in every application, from house framing to machinery assembly.\n","btnTitle":"Contact sales to learn more","btnURL":"#"},"descriptionList":[{"title":"Corrosion Resistance","subTitle":"Zinc coating not only provides a polished look but also shields against corrosion, ensuring longevity."},{"title":"Improved Safety","subTitle":"A secure fitting translates to safer structures with reduced risk of component failure."},{"title":"Convenience","subTitle":"This all-in-one set means you have the right size on hand, cutting down on project delays and additional trips to the hardware store."}],"specificationsLeft":[{"title":"Material Composition","subTitle":"Manufactured from high-grade steel, delivering strength and reliability for demanding applications."},{"title":"Surface Finish","subTitle":"Protected with a zinc coating to offer enhanced corrosion resistance and longevity."},{"title":"Quantity Per Set","subTitle":"The set includes a balanced selection of 25 tap bolts and 25 matching nuts."},{"title":"Size Assortment","subTitle":"Features a comprehensive range of sizes to cater to various project requirements, ensuring compatibility and versatility."}],"specificationsRight":[{"title":"Thread Details","subTitle":"Engineered with precision-cut threads for a secure fit and easy installation."},{"title":"Mechanical Properties","subTitle":"Each bolt and nut is designed to meet specific load rating or strength grades, suitable for structural applications."},{"title":"Standards and Certifications","subTitle":"Complies with relevant industry standards and certifications, ensuring consistent quality and safety."},{"title":"Suitable Applications","subTitle":"Ideal for a wide array of uses, from construction environments to mechanical assemblies that demand strong and secure joints."}],"blueprints":{"first":"@/images/blueprint-1.avif","second":"@/images/blueprint-2.avif"},"slug":"b203"};
				const file = "/workspaces/newvanitysuds/src/content/products/b203.md";
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
