import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DMIT_3Su.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/styles_P0EeONYh.mjs');
const _page1 = () => import('./chunks/scripts_CF4VFUXN.mjs');
const _page2 = () => import('./chunks/generic_B_iOtSmf.mjs');
const _page3 = () => import('./chunks/404_DcOAABQr.mjs');
const _page4 = () => import('./chunks/subscribe_ChPsmibm.mjs');
const _page5 = () => import('./chunks/_slug__P055xS1F.mjs');
const _page6 = () => import('./chunks/index_CQWsns2_.mjs');
const _page7 = () => import('./chunks/book_BthW4U-O.mjs');
const _page8 = () => import('./chunks/contact_DjCuxdSQ.mjs');
const _page9 = () => import('./chunks/favicon_kx2A8jK_.mjs');
const _page10 = () => import('./chunks/_.._CpIysixg.mjs');
const _page11 = () => import('./chunks/manifest_Dfqb4NAN.mjs');
const _page12 = () => import('./chunks/index_Dut7ASwg.mjs');
const _page13 = () => import('./chunks/_.._CTy2u8fg.mjs');
const _page14 = () => import('./chunks/robots_DcDNLw_c.mjs');
const _page15 = () => import('./chunks/services_Bsovm3Wt.mjs');
const _page16 = () => import('./chunks/index_DFI7VeTm.mjs');
const _page17 = () => import('./chunks/index_JkSeSjdN.mjs');
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
    "middlewareSecret": "b877704a-a099-4c8b-a2e7-313e37234727"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
