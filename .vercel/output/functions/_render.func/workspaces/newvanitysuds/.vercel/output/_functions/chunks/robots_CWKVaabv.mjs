export { renderers } from '../renderers.mjs';

const page = () => import('./prerender_CCupysvu.mjs').then(n => n.r);

export { page };
