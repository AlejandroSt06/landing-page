import { c as createAstro, b as createComponent, r as renderTemplate, f as renderSlot, g as renderHead, e as addAttribute, m as maybeRenderHead, h as renderComponent } from '../astro_da54e5ae.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                           */import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$f = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-bs-theme="light"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz@10..48&family=Fredoka&family=Koulen&family=Montserrat&family=Nunito&family=Nunito+Sans:opsz@6..12&family=Open+Sans&family=Playfair+Display:ital@1&family=Poppins:ital@1&family=Quicksand&family=Raleway&family=Roboto&display=swap" rel="stylesheet"><meta name="generator"', "><title>", "</title>", "</head><body>", '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"><\/script></body></html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/mirko/Nulla landing page/src/layouts/Layout.astro", void 0);

const $$Astro$e = createAstro();
const $$EmailButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$EmailButton;
  const { isSecondaryEmail } = Astro2.props;
  return renderTemplate`${isSecondaryEmail ? renderTemplate`${maybeRenderHead()}<form class="searchBox searchBox-secondary" data-astro-cid-6oxow5uo><input class="searchInput" type="text" name="" placeholder="Email adress" maxlength="45" required data-astro-cid-6oxow5uo><button class="emailButton" type="submit" data-astro-cid-6oxow5uo><span class="d-none d-lg-flex" data-astro-cid-6oxow5uo>Start free trial</span><svg xmlns="http://www.w3.org/2000/svg" class="d-flex d-lg-none icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-6oxow5uo><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-6oxow5uo></path><path d="M10 14l11 -11" data-astro-cid-6oxow5uo></path><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" data-astro-cid-6oxow5uo></path></svg></button></form>` : renderTemplate`<form class="searchBox " data-astro-cid-6oxow5uo><input class="searchInput" type="text" name="" placeholder="Enter yout email adress" maxlength="45" required data-astro-cid-6oxow5uo><button class="emailButton" type="submit" data-astro-cid-6oxow5uo> Start free trial</button></form>`}`;
}, "C:/Users/mirko/Nulla landing page/src/EmailButton.astro", void 0);

const $$Astro$d = createAstro();
const $$HomeImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$HomeImage;
  return renderTemplate`${maybeRenderHead()}<div class="atroposes"><!-- main Atropos container (required), add your custom class here --><div class="atropos des-atropos my-atropos"><!-- scale container (required) --><div class="atropos-scale"><!-- rotate container (required) --><div class="atropos-rotate"><!-- inner container (required) --><div class="atropos-inner"><!-- put your custom content here --><img src="/home-img.png" data-atropos-offset="-5" style="width: 100%;"><div class="text-over" data-atropos-offset="0"></div></div></div></div></div></div>`;
}, "C:/Users/mirko/Nulla landing page/src/HomeImage.astro", void 0);

const $$Astro$c = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`<!-- <div class="home-overlay"></div> -->${maybeRenderHead()}<div class="px-md-4 py-5 my-5 text-center mt-5" data-astro-cid-2bphsq3z><h1 class="display-4 fw-bold text-body-emphasis mt-5 mb-4 m-auto hero-heading" id="hero-heading" data-astro-cid-2bphsq3z>
One app to create stunning visual reality
</h1><div class="col-lg-6 mx-auto mt-2" data-astro-cid-2bphsq3z><p class="lead mb-4 mt-4" data-astro-cid-2bphsq3z>
Nulla is a powerful website builder platform where you can high-quality
      and secure website builder
</p>${renderComponent($$result, "EmailButton", $$EmailButton, { "data-astro-cid-2bphsq3z": true })}</div>${renderComponent($$result, "HomeImage", $$HomeImage, { "data-astro-cid-2bphsq3z": true })}</div>`;
}, "C:/Users/mirko/Nulla landing page/src/Home.astro", void 0);

const $$Astro$b = createAstro();
const $$ServiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { serviceTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="feature col"><div class="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">${serviceTitle === "Ease of use" ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps-filled" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path><path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path><path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor"></path></svg>` : serviceTitle === "Unlimited creation" ? renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-carousel-horizontal-filled" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" stroke-width="0" fill="currentColor"></path><path d="M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" stroke-width="0" fill="currentColor"></path><path d="M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" stroke-width="0" fill="currentColor"></path></svg>` : renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shield-lock-filled" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z" stroke-width="0" fill="currentColor"></path></svg>`}</div><h3 class="fs-2 text-body-emphasis">${serviceTitle}</h3><p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence.</p></div>`;
}, "C:/Users/mirko/Nulla landing page/src/ServiceCard.astro", void 0);

const $$Astro$a = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<div class="container"><header class="d-flex justify-content-between row"><div class="col-12 col-md-4"><h2 class="display-6 text-body-emphasis fw-semibold">
Unlimited possibilities and secure
</h2></div><div class="col  d-flex align-items-center justify-content-md-end "><p class="fw-medium" style="color: gray;">we are trusted by more than 500+ companies</p></div></header><main class="py-5"><div class="container "><div class="my-1 my-md-5 row flex-column flex-md-row"><!-- serviceCards -->${renderComponent($$result, "ServiceCard", $$ServiceCard, { "serviceTitle": "Ease of use" })}${renderComponent($$result, "ServiceCard", $$ServiceCard, { "serviceTitle": "Unlimited creation" })}${renderComponent($$result, "ServiceCard", $$ServiceCard, { "serviceTitle": "Secure" })}</div></div></main></div>`;
}, "C:/Users/mirko/Nulla landing page/src/Services.astro", void 0);

const business = [
	{
		title: "Business showcase",
		images: [
			"./images/Business ShowCase/Banking Dashbord.png",
			"./images/Business ShowCase/conf.png",
			"./images/Business ShowCase/Online Education Website.png",
			"./images/Business ShowCase/web design landing page.png",
			"./images/Business ShowCase/Banking Dashbord.png",
			"./images/Business ShowCase/conf.png",
			"./images/Business ShowCase/Online Education Website.png",
			"./images/Business ShowCase/web design landing page.png",
			"./images/Business ShowCase/web design landing page.png"
		],
		description: "Questa è la descrizione dell'oggetto 1."
	},
	{
		title: "Online store",
		images: [
			"./images/Online Stores/Ryanazi.png",
			"./images/Online Stores/App store.png",
			"./images/Online Stores/Adidas concept.png",
			"./images/Online Stores/payment-details.png",
			"./images/Online Stores/Ryanazi.png",
			"./images/Online Stores/App store.png",
			"./images/Online Stores/Adidas concept.png",
			"./images/Online Stores/payment-details.png"
		],
		description: "Questa è la descrizione dell'oggetto 2."
	},
	{
		title: "Blog",
		images: [
			"./images/Blogs/artificial product blog.png",
			"./images/Blogs/blog website concept.png",
			"./images/Blogs/Food blog.png",
			"./images/Blogs/Fashion Blog.jpg",
			"./images/Blogs/artificial product blog.png",
			"./images/Blogs/blog website concept.png",
			"./images/Blogs/Food blog.png",
			"./images/Blogs/Fashion Blog.jpg"
		],
		description: "Questa è la descrizione dell'oggetto 3."
	},
	{
		title: "SaaS",
		images: [
			"./images/Saas/default Saas.jpg",
			"./images/Saas/online banking.png",
			"./images/Saas/prdouct design Saas.png",
			"./images/Saas/Saas healtech.png",
			"./images/Saas/default Saas.jpg",
			"./images/Saas/online banking.png",
			"./images/Saas/prdouct design Saas.png",
			"./images/Saas/Saas healtech.png"
		],
		description: "Questa è la descrizione dell'oggetto 4."
	}
];

function Slider(props) {
  return /* @__PURE__ */ jsx("div", { className: "slider mb-5", children: /* @__PURE__ */ jsxs("div", { className: "slide-track col", children: [
    props.businessImages.map((image) => /* @__PURE__ */ jsx("div", { className: "slide", children: /* @__PURE__ */ jsx("img", { src: image }) })),
    props.businessImages.map((image) => /* @__PURE__ */ jsx("div", { className: "slide", children: /* @__PURE__ */ jsx("img", { src: image }) }))
  ] }) });
}

function ButtonGroup() {
  const [buttonStates, setButtonStates] = useState([true, false, false, false]);
  const handleButtonClick = (index) => {
    const updatedStates = [...buttonStates];
    updatedStates.forEach((state, i) => {
      if (state != updatedStates[index]) {
        updatedStates[i] = false;
      }
    });
    updatedStates[index] = true;
    setButtonStates(updatedStates);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "button-container", children: buttonStates.map((isClicked, index) => /* @__PURE__ */ jsx(
      "button",
      {
        className: `button ${isClicked ? "clicked" : ""}`,
        onClick: () => handleButtonClick(index),
        children: business[index].title
      },
      index
    )) }),
    buttonStates.map((isClicked, index) => isClicked && /* @__PURE__ */ jsx("div", { className: "slider-container", children: /* @__PURE__ */ jsx(Slider, { businessImages: business[index].images }) }, index))
  ] });
}

const $$Astro$9 = createAstro();
const $$Anybusiness = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Anybusiness;
  return renderTemplate`${maybeRenderHead()}<div id="any-business" data-astro-cid-oirdacab><div class="container" data-astro-cid-oirdacab><h2 class="display-4 fw-medium text-body-emphasis text-center mx-auto mb-4" data-astro-cid-oirdacab>
One website builder for any business
</h2><p class="col-lg-8 mx-auto lead text-center mb-4" data-astro-cid-oirdacab>
To build your own website, all you need to do is add content.
</p></div>${renderComponent($$result, "ButtonGroup", ButtonGroup, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/mirko/Nulla landing page/src/ButtonGroup", "client:component-export": "default", "data-astro-cid-oirdacab": true })}</div><div class="container col-xxl-8 py-3 pt-5 py-md-5" data-astro-cid-oirdacab><div class="row flex-lg-row  g-5 pt-5 py-md-5 " data-astro-cid-oirdacab><div class="col-10 col-sm-8 col-lg-6" data-astro-cid-oirdacab><img src="/images/Urban Bread.png" class="d-block mx-lg-auto img-fluid" width="1850" height="1450" loading="lazy" data-astro-cid-oirdacab></div><div class="col-lg-6 d-flex flex-column g-5" data-astro-cid-oirdacab><div data-astro-cid-oirdacab><h3 class="display-6 fw-bolder text-body-emphasis mb-3" data-astro-cid-oirdacab>
Build a Website with Ease
</h3><p class="lead" data-astro-cid-oirdacab>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit deleniti quam ut aperiam placeat, illo,
 repellendus odit, autem perspiciatis quae quidem molestiae. Eos, autem. Odio error facilis sequi officia!
</p></div><div data-astro-cid-oirdacab><h3 class="display-6 fw-bolder  mb-4" data-astro-cid-oirdacab>
Real-time editor
</h3><p class="lead" data-astro-cid-oirdacab>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit deleniti quam ut aperiam placeat, illo,
          repellendus odit.
</p></div><div data-astro-cid-oirdacab><h3 class="display-6 fw-bolder text-body-emphasis mb-3" data-astro-cid-oirdacab>
Safe and reliable
</h3><p class="lead" data-astro-cid-oirdacab>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit deleniti quam ut aperiam placeat, illo,
          repellendus odit.
</p></div></div></div></div>`;
}, "C:/Users/mirko/Nulla landing page/src/Anybusiness.astro", void 0);

const $$Astro$8 = createAstro();
const $$ActionButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ActionButton;
  const { text } = Astro2.props;
  const { isSecondary } = Astro2.props;
  return renderTemplate`${isSecondary ? renderTemplate`${maybeRenderHead()}<button type="button" class="btn-lg my-3 me-md-2 fw-bold outline" data-astro-cid-jt6wi2tq>${text}</button>` : renderTemplate`<button type="button" class="btn-lg my-3 me-md-2 fw-bold " data-astro-cid-jt6wi2tq>${text}</button>`}`;
}, "C:/Users/mirko/Nulla landing page/src/ActionButton.astro", void 0);

const $$Astro$7 = createAstro();
const $$GetStarted = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$GetStarted;
  return renderTemplate`${maybeRenderHead()}<div class="container my-5 py-5" data-astro-cid-qghno5cs><div class="row  pb-4 pe-lg-0 pt-lg-5 align-items-center " data-astro-cid-qghno5cs><div class="col-lg-7  pt-lg-3" data-astro-cid-qghno5cs><h2 class="display-4 fw-bold lh-1 text-body-emphasis display-4 fw-medium text-body-emphasis mb-4 " data-astro-cid-qghno5cs>Create a website that can grow with you</h2><p class="lead text-tertiary" data-astro-cid-qghno5cs>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p><div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3" data-astro-cid-qghno5cs>${renderComponent($$result, "ActionButton", $$ActionButton, { "text": "Get started", "data-astro-cid-qghno5cs": true })}</div></div><div class="col-lg-4 offset-lg-1 p-0 overflow-hidden px-3 px-md-0" data-astro-cid-qghno5cs><img class="rounded-lg-3" src="public/images/learning-dashbord.png" alt="" width="500" data-astro-cid-qghno5cs></div></div></div>`;
}, "C:/Users/mirko/Nulla landing page/src/GetStarted.astro", void 0);

const $$Astro$6 = createAstro();
const $$PersonImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PersonImage;
  const { class: classPeople } = Astro2.props;
  const { url: peopleURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(classPeople, "class")} data-astro-cid-d5tzsxmm><img${addAttribute(peopleURL, "src")} data-astro-cid-d5tzsxmm></div>`;
}, "C:/Users/mirko/Nulla landing page/src/PersonImage.astro", void 0);

const $$Astro$5 = createAstro();
const $$MeetPeople = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MeetPeople;
  return renderTemplate`${maybeRenderHead()}<div class="container bg-secondary-p py-md-5 gap-5 " data-astro-cid-3ttntpyq><div class="people d-none d-md-flex" data-astro-cid-3ttntpyq>${renderComponent($$result, "PersonImage", $$PersonImage, { "class": "craig", "url": "/People/craig.jpg", "data-astro-cid-3ttntpyq": true })}${renderComponent($$result, "PersonImage", $$PersonImage, { "class": "matheus", "url": "/People/matheus.jpg", "data-astro-cid-3ttntpyq": true })}${renderComponent($$result, "PersonImage", $$PersonImage, { "class": "stefan", "url": "/People/stefan.jpg", "data-astro-cid-3ttntpyq": true })}${renderComponent($$result, "PersonImage", $$PersonImage, { "class": "vicky", "url": "/People/vicky.jpg", "data-astro-cid-3ttntpyq": true })}</div><div class="text-center w-100 d-flex flex-column justify-content-between align-items-center gap-5 h-100 py-5 my-5" data-astro-cid-3ttntpyq><h2 class="text-body-emphasis h1 display-3  m-auto  fw-bold  hero-heading my-md-5 py-md-5" data-astro-cid-3ttntpyq>Meet the poeople who choose Nulla</h2><div class=" w-75 d-flex align-items-center justify-content-center  mb-5 pe-md-5 me-4 my-md-5 pt-md-5 flex-column flex-lg-row" data-astro-cid-3ttntpyq><p class="mx-auto text-center fs-5 text-muted pt-2" data-astro-cid-3ttntpyq>
Discover how people are changing the future of websites
</p>${renderComponent($$result, "ActionButton", $$ActionButton, { "text": "Read their stories", "data-astro-cid-3ttntpyq": true })}</div></div></div>`;
}, "C:/Users/mirko/Nulla landing page/src/MeetPeople.astro", void 0);

const questions = [
	{
		question: "Why should I have a website?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros a urna congue vestibulum. Phasellus tristique magna eget augue pharetra, a bibendum tortor venenatis."
	},
	{
		question: "What does a Nulla subscription include?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros a urna congue vestibulum. Phasellus tristique magna eget augue pharetra, a bibendum tortor venenatis."
	},
	{
		question: "Is Nulla right for me?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros a urna congue vestibulum. Phasellus tristique magna eget augue pharetra, a bibendum tortor venenatis."
	},
	{
		question: "How do I start building my website?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros a urna congue vestibulum. Phasellus tristique magna eget augue pharetra, a bibendum tortor venenatis."
	},
	{
		question: "Can someone build my website for me?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros a urna congue vestibulum. Phasellus tristique magna eget augue pharetra, a bibendum tortor venenatis."
	},
	{
		question: "How do I get a custom domain for my website?",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros a urna congue vestibulum. Phasellus tristique magna eget augue pharetra, a bibendum tortor venenatis."
	}
];

function FAQcard() {
  const [states, setStates] = useState(Array(questions.length).fill(false));
  function handleClick(index) {
    const updatedStates = [...states];
    updatedStates.forEach((state, i) => {
      if (state != updatedStates[index]) {
        updatedStates[i] = false;
      }
    });
    updatedStates[index] = !updatedStates[index];
    setStates(updatedStates);
  }
  console.log(states);
  return /* @__PURE__ */ jsx("div", { className: "FAQ col-lg-6 px-1  p-0 overflow-hidden", children: questions.map((question, index) => /* @__PURE__ */ jsxs("div", { className: "FAQcard container", children: [
    /* @__PURE__ */ jsxs("div", { className: "question row col d-flex align-items-center py-3 ", children: [
      /* @__PURE__ */ jsx("h3", { className: "fw-bolder col-10 fs-5", children: question.question }),
      /* @__PURE__ */ jsx("div", { className: "col-2 d-flex justify-content-center align-items-center", children: /* @__PURE__ */ jsx("button", { className: "question-btn", onClick: () => handleClick(index), children: states[index] ? /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon icon-tabler icon-tabler-circle-minus", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
        /* @__PURE__ */ jsx("path", { d: "M9 12l6 0" })
      ] }) : /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon icon-tabler icon-tabler-circle-plus", width: "24", height: "24", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ jsx("path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" }),
        /* @__PURE__ */ jsx("path", { d: "M9 12h6" }),
        /* @__PURE__ */ jsx("path", { d: "M12 9v6" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `answer col ${states[index] ? "active" : ""}`, children: /* @__PURE__ */ jsx("p", { children: question.description }) })
  ] }, index)) });
}

const $$Astro$4 = createAstro();
const $$FAQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FAQ;
  return renderTemplate`${maybeRenderHead()}<div class="container my-5 py-4" data-astro-cid-x44ojsfy><div class="row hero  pb-4 pe-lg-0 pt-lg-5 align-items-start " data-astro-cid-x44ojsfy><div class=" col-lg-6  " data-astro-cid-x44ojsfy><h2 class="display-4 fw-bold lh-1 text-body-emphasis display-4 fw-medium text-body-emphasis mb-4 " data-astro-cid-x44ojsfy>We've got you covered, 24/7</h2><p class="lead text-tertiary" data-astro-cid-x44ojsfy>
You can count with personalized support around the clock by email, live chat, or by joining a live webinar.
</p><div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3" data-astro-cid-x44ojsfy>${renderComponent($$result, "ActionButton", $$ActionButton, { "text": "Visit help center", "data-astro-cid-x44ojsfy": true })}</div></div>${renderComponent($$result, "FAQcard", FAQcard, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/mirko/Nulla landing page/src/FAQcard", "client:component-export": "default", "data-astro-cid-x44ojsfy": true })}</div></div>`;
}, "C:/Users/mirko/Nulla landing page/src/FAQ.astro", void 0);

const $$Astro$3 = createAstro();
const $$Why = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Why;
  return renderTemplate`${maybeRenderHead()}<div class="container mt-5 bg-body-tertiary rounded-3 py-5 pt-4" data-astro-cid-3xvagv7x><div class="text-center py-5 mt-5" data-astro-cid-3xvagv7x><h2 class="text-body-emphasis text-body-emphasis h1 display-3  m-auto  fw-bold  hero-heading mb-4 mt-5 py-4" data-astro-cid-3xvagv7x>Why Nulla?</h2><p class="col-lg-5 mx-auto mb-4 fs-5 text-muted" data-astro-cid-3xvagv7x>
The Nulla platform is easy to use and navigate. Built to spark
            creativity and power productivity. Design to make your dream true
</p><div class="d-inline-flex gap-2 mb-5 pb-5" data-astro-cid-3xvagv7x>${renderComponent($$result, "ActionButton", $$ActionButton, { "text": "Start for free", "class": "outline", "data-astro-cid-3xvagv7x": true })}${renderComponent($$result, "ActionButton", $$ActionButton, { "text": "See prices", "class": "outline", "isSecondary": true, "data-astro-cid-3xvagv7x": true })}</div></div></div>`;
}, "C:/Users/mirko/Nulla landing page/src/Why.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-hhucfovi><footer class="py-5 px-5 d-flex flex-column " data-astro-cid-hhucfovi><div class="row flex-row-reverse py-5" data-astro-cid-hhucfovi><div class="col-6 col-md-2 mb-3" data-astro-cid-hhucfovi><h5 data-astro-cid-hhucfovi>Solution</h5><ul class="nav flex-column" data-astro-cid-hhucfovi><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Home</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Features</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Pricing</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>FAQs</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>About</a></li></ul></div><div class="col-6 col-md-2 mb-3" data-astro-cid-hhucfovi><h5 data-astro-cid-hhucfovi>Developers</h5><ul class="nav flex-column" data-astro-cid-hhucfovi><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Home</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Features</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Pricing</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>FAQs</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>About</a></li></ul></div><div class="col-6 col-md-2 mb-3" data-astro-cid-hhucfovi><h5 class="text-start" data-astro-cid-hhucfovi>Support</h5><ul class="nav flex-column justify-content-center align-items-start" data-astro-cid-hhucfovi><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Home</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Features</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Pricing</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>FAQs</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>About</a></li></ul></div><div class="col-6 col-md-2 mb-3" data-astro-cid-hhucfovi><h5 data-astro-cid-hhucfovi>Nulla</h5><ul class="nav flex-column" data-astro-cid-hhucfovi><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Home</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Features</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>Pricing</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>FAQs</a></li><li class="nav-item mb-2" data-astro-cid-hhucfovi><a href="#" class="nav-link p-0" data-astro-cid-hhucfovi>About</a></li></ul></div><div class="col-md-4 mb-3 " data-astro-cid-hhucfovi><div class="pb-lg-4" data-astro-cid-hhucfovi><a class="navbar-brand  ps-lg-3 mb-lg-5 fw-bolder" href="#" data-astro-cid-hhucfovi><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-foursquare mb-1" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hhucfovi><path stroke="none" d="M0 0h24v24H0z" fill="" data-astro-cid-hhucfovi></path><path d="M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -1 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1z" data-astro-cid-hhucfovi></path><path d="M12 9l5 0" data-astro-cid-hhucfovi></path></svg>
Nulla
</a></div>${renderComponent($$result, "EmailButton", $$EmailButton, { "isSecondaryEmail": true, "data-astro-cid-hhucfovi": true })}</div></div><div class="socials d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" data-astro-cid-hhucfovi><p data-astro-cid-hhucfovi>© 2023 Company, Inc. All rights reserved.</p><ul class="list-unstyled d-flex" data-astro-cid-hhucfovi><li class="ms-3" data-astro-cid-hhucfovi><a class="" href="#" data-astro-cid-hhucfovi><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hhucfovi><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-hhucfovi></path><path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" stroke-width="0" fill="currentColor" data-astro-cid-hhucfovi></path></svg></a></li><li class="ms-3" data-astro-cid-hhucfovi><a class="link-body-emphasis" href="#" data-astro-cid-hhucfovi><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hhucfovi><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-hhucfovi></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" data-astro-cid-hhucfovi></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" data-astro-cid-hhucfovi></path><path d="M16.5 7.5l0 .01" data-astro-cid-hhucfovi></path></svg></a></li><li class="ms-3" data-astro-cid-hhucfovi><a class="link-body-emphasis" href="#" data-astro-cid-hhucfovi><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hhucfovi><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-hhucfovi></path><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" stroke-width="0" fill="currentColor" data-astro-cid-hhucfovi></path></svg></a></li><li class="ms-3" data-astro-cid-hhucfovi><a class="link-body-emphasis" href="#" data-astro-cid-hhucfovi><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-hhucfovi><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-hhucfovi></path><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" stroke-width="0" fill="currentColor" data-astro-cid-hhucfovi></path></svg></a></li></ul></div></footer></div>`;
}, "C:/Users/mirko/Nulla landing page/src/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<nav class="navbar navbar-expand-lg pt-3" data-astro-cid-b3kqd74y><div class="container-fluid" data-astro-cid-b3kqd74y><a class="navbar-brand ms-lg-5 ps-lg-5 fw-bolder" href="#" data-astro-cid-b3kqd74y><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-foursquare mb-1" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-b3kqd74y><path stroke="none" d="M0 0h24v24H0z" fill="" data-astro-cid-b3kqd74y></path><path d="M7 3h10c.644 0 1.11 .696 .978 1.33l-1.984 9.859a1.014 1.014 0 0 1 -1 .811h-2.254c-.308 0 -.6 .141 -.793 .382l-4.144 5.25c-.599 .752 -1.809 .331 -1.809 -.632v-16c0 -.564 .44 -1 1 -1z" data-astro-cid-b3kqd74y></path><path d="M12 9l5 0" data-astro-cid-b3kqd74y></path></svg>
Nulla
</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" data-astro-cid-b3kqd74y><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-b3kqd74y><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-b3kqd74y></path><path d="M4 6l16 0" data-astro-cid-b3kqd74y></path><path d="M4 12l16 0" data-astro-cid-b3kqd74y></path><path d="M4 18l16 0" data-astro-cid-b3kqd74y></path></svg></button><div class="collapse navbar-collapse ms-lg-5 px-lg-5" id="navbarScroll" data-astro-cid-b3kqd74y><ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bolder" data-astro-cid-b3kqd74y><!-- Home --><li class="nav-item" data-astro-cid-b3kqd74y><a class="nav-link active" aria-current="page" href="#" data-astro-cid-b3kqd74y>Home</a></li><!-- Solution DropDown --><li class="nav-item dropdown" data-astro-cid-b3kqd74y><a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-astro-cid-b3kqd74y>
Solution
</a><ul class="dropdown-menu" data-astro-cid-b3kqd74y><!-- Contenuto del dropdown --><li data-astro-cid-b3kqd74y><a class="dropdown-item" href="#" data-astro-cid-b3kqd74y>Action</a></li><li data-astro-cid-b3kqd74y><a class="dropdown-item" href="#" data-astro-cid-b3kqd74y>Another action</a></li><li data-astro-cid-b3kqd74y><hr class="dropdown-divider" data-astro-cid-b3kqd74y></li><li data-astro-cid-b3kqd74y><a class="dropdown-item" href="#" data-astro-cid-b3kqd74y>Something else here</a></li></ul></li><!-- Template DropDown --><li class="nav-item dropdown" data-astro-cid-b3kqd74y><a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-astro-cid-b3kqd74y>
Template
</a><ul class="dropdown-menu" data-astro-cid-b3kqd74y><li data-astro-cid-b3kqd74y><a class="dropdown-item" href="#" data-astro-cid-b3kqd74y>Action</a></li><li data-astro-cid-b3kqd74y><a class="dropdown-item" href="#" data-astro-cid-b3kqd74y>Another action</a></li><li data-astro-cid-b3kqd74y><hr class="dropdown-divider" data-astro-cid-b3kqd74y></li><li data-astro-cid-b3kqd74y><a class="dropdown-item" href="#" data-astro-cid-b3kqd74y>Something else here</a></li></ul></li><!-- Feautres --><li class="nav-item" data-astro-cid-b3kqd74y><a class="nav-link active" href="#" data-astro-cid-b3kqd74y>Features</a></li><!-- About --><li class="nav-item" data-astro-cid-b3kqd74y><a class="nav-link active" href="#" data-astro-cid-b3kqd74y>About</a></li></ul><button class="btn btn-outline-dark ms-lg-5 me-lg-2" type="submit" data-astro-cid-b3kqd74y>Login</button><button class="btn btn-dark me-lg-5" type="submit" data-astro-cid-b3kqd74y>Sign Up</button></div></div></nav>`;
}, "C:/Users/mirko/Nulla landing page/src/Header.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nulla | Build your own Website" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, {})}${renderComponent($$result2, "Home", $$Home, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "Anybusiness", $$Anybusiness, {})}${renderComponent($$result2, "GetStarted", $$GetStarted, {})}${renderComponent($$result2, "MeetPeople", $$MeetPeople, {})}${renderComponent($$result2, "FAQ", $$FAQ, {})}${renderComponent($$result2, "Why", $$Why, {})}${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "C:/Users/mirko/Nulla landing page/src/pages/index.astro", void 0);

const $$file = "C:/Users/mirko/Nulla landing page/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
