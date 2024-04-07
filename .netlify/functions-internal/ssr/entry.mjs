import { renderers } from './renderers.mjs';
import { manifest } from './manifest_RhxH8ocw.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/styles_P0EeONYh.mjs');
const _page1 = () => import('./chunks/scripts_CF4VFUXN.mjs');
const _page2 = () => import('./chunks/generic_BDddcZgw.mjs');
const _page3 = () => import('./chunks/404_UJGbJXyK.mjs');
const _page4 = () => import('./chunks/subscribe_ChPsmibm.mjs');
const _page5 = () => import('./chunks/_slug__C0SBRGxB.mjs');
const _page6 = () => import('./chunks/index_DE8T3v59.mjs');
const _page7 = () => import('./chunks/book_BTeDYN9D.mjs');
const _page8 = () => import('./chunks/contact_B_Mxe42E.mjs');
const _page9 = () => import('./chunks/favicon_iNL4tNJ-.mjs');
const _page10 = () => import('./chunks/_.._BEQl8_zM.mjs');
const _page11 = () => import('./chunks/manifest_BrpeDtYs.mjs');
const _page12 = () => import('./chunks/index_CTNVF768.mjs');
const _page13 = () => import('./chunks/_.._CKTAgN67.mjs');
const _page14 = () => import('./chunks/robots_B7rDQd2E.mjs');
const _page15 = () => import('./chunks/services_BcbDCkqE.mjs');
const _page16 = () => import('./chunks/index_Cs4u_NRf.mjs');
const _page17 = () => import('./chunks/index_CtswQ-3d.mjs');
const pageMap = new Map([
    ["node_modules/astro-expressive-code/routes/styles.ts", _page0],
    ["node_modules/astro-expressive-code/routes/scripts.ts", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/api/subscribe.json.ts", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/book.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/favicon.ico.ts", _page9],
    ["src/pages/insights/[...slug].astro", _page10],
    ["src/pages/manifest.json.ts", _page11],
    ["src/pages/products/index.astro", _page12],
    ["src/pages/products/[...slug].astro", _page13],
    ["src/pages/robots.txt.ts", _page14],
    ["src/pages/services.astro", _page15],
    ["src/pages/index.astro", _page16],
    ["node_modules/@astrojs/starlight/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7bbbe623-16cf-4639-ac38-105e5a451d04"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
