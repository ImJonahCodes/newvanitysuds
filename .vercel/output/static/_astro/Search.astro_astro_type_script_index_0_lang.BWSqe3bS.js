const E="modulepreload",v=function(m){return"/"+m},g={},w=function(d,c,a){let u=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),i=o?.nonce||o?.getAttribute("nonce");u=Promise.all(c.map(t=>{if(t=v(t),t in g)return;g[t]=!0;const l=t.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!a)for(let n=r.length-1;n>=0;n--){const s=r[n];if(s.href===t&&(!l||s.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${f}`))return;const e=document.createElement("link");if(e.rel=l?"stylesheet":E,l||(e.as="script",e.crossOrigin=""),e.href=t,i&&e.setAttribute("nonce",i),document.head.appendChild(e),l)return new Promise((n,s)=>{e.addEventListener("load",n),e.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${t}`)))})}))}return u.then(()=>d()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};class y extends HTMLElement{constructor(){super();const d=this.querySelector("button[data-open-modal]"),c=this.querySelector("button[data-close-modal]"),a=this.querySelector("dialog"),u=this.querySelector(".dialog-frame"),r=e=>{("href"in(e.target||{})||document.body.contains(e.target)&&!u.contains(e.target))&&i()},o=e=>{a.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),e?.stopPropagation(),window.addEventListener("click",r)},i=()=>a.close();d.addEventListener("click",o),d.disabled=!1,c.addEventListener("click",i),a.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",r)}),window.addEventListener("keydown",e=>{const n=document.activeElement instanceof HTMLElement&&(["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase())||document.activeElement.isContentEditable);(e.metaKey===!0||e.ctrlKey===!0)&&e.key==="k"?(a.open?i():o(),e.preventDefault()):e.key==="/"&&!a.open&&!n&&(o(),e.preventDefault())});let t={};try{t=JSON.parse(this.dataset.translations||"{}")}catch{}const h=this.dataset.stripTrailingSlash!==void 0?e=>e.replace(/(.)\/(#.*)?$/,"$1$2"):e=>e;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(n=>setTimeout(n,1)))(async()=>{const{PagefindUI:n}=await w(()=>import("./ui-core.CxDhlowi.js"),[]);new n({element:"#starlight__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:t,showSubResults:!0,processResult:s=>{s.url=h(s.url),s.sub_results=s.sub_results.map(p=>(p.url=h(p.url),p))}})})})}}customElements.define("site-search",y);export{w as _};