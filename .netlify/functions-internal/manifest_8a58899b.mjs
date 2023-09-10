import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_da54e5ae.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ce0bfa26.js"}],"styles":[{"type":"external","src":"/_astro/index.f0333539.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/mirko/Nulla landing page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_3e96ae55.mjs","\u0000@astrojs-manifest":"manifest_8a58899b.mjs","C:/Users/mirko/Nulla landing page/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_5a6df93a.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_b0f18a36.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_ae7f38a7.mjs","C:/Users/mirko/Nulla landing page/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_eaa4c0e9.mjs","C:/Users/mirko/Nulla landing page/src/ButtonGroup":"_astro/ButtonGroup.e0bd60e9.js","C:/Users/mirko/Nulla landing page/src/FAQcard":"_astro/FAQcard.139bca66.js","/astro/hoisted.js?q=0":"_astro/hoisted.ce0bfa26.js","@astrojs/react/client.js":"_astro/client.bb1cf6b8.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.f0333539.css","/business.json","/ButtonGroup.css","/FAQ.css","/favicon.svg","/home-img.png","/questions.json","/Slider.css","/atropos/atropos.min.css","/atropos/atropos.min.js","/images/learning-dashbord.png","/images/original-pc.png","/images/Urban Bread.png","/People/craig.jpg","/People/matheus.jpg","/People/people.json","/People/stefan.jpg","/People/Untitled.png","/People/vicky.jpg","/_astro/ButtonGroup.e0bd60e9.js","/_astro/client.bb1cf6b8.js","/_astro/FAQcard.139bca66.js","/_astro/hoisted.ce0bfa26.js","/_astro/index.a29273f9.css","/_astro/index.ed373d49.js","/_astro/jsx-runtime.391947bd.js","/images/Blogs/artificial product blog.png","/images/Blogs/blog website concept.png","/images/Blogs/Fashion Blog.jpg","/images/Blogs/Food blog.png","/images/Business ShowCase/Banking Dashbord.png","/images/Business ShowCase/conf.png","/images/Business ShowCase/Online Education Website.png","/images/Business ShowCase/web design landing page.png","/images/Online Stores/Adidas concept.png","/images/Online Stores/App store.png","/images/Online Stores/payment-details.png","/images/Online Stores/Ryanazi.png","/images/Saas/default Saas.jpg","/images/Saas/online banking.png","/images/Saas/prdouct design Saas.png","/images/Saas/Saas healtech.png","/images/Saas/Saas podcast.png","/images/Saas/sapforce Saas.png"]});

export { manifest };
