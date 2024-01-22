/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderSlot, k as renderHead } from '../astro_o4wlRkMN.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$b = createAstro();
const $$CardProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$CardProjects;
  const { href, title, description, img, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-white"> ${title}</h1> ${active == 1 && renderTemplate`<figure class="relative h-96 w-full"> <img class="h-full w-full rounded-xl object-cover object-center"${addAttribute(img, "src")} alt="nature image"> <figcaption class="absolute bottom-10 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-blue-900 bg-blue-950 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"> <div> <span class="mt-2 font-normal text-white"> ${description} </span> </div> <a${addAttribute(href, "href")} target="_blank" class=" font-normal text-white uppercase">
ver
</a> </figcaption> </figure>`} </div>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/CardProjects.astro", void 0);

const dataRS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rafael-andres-rossel-galarza-47b8bb214/",
    icons: "LinkedIn"
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@rafaelandresrosse?_t=8jEoDS0109W&_r=1",
    icons: "Youtube"
  },
  {
    name: "Github",
    link: "https://github.com/RafaredD19",
    icons: "Github"
  }
];
const dataExperiencie = [
  {
    role: "Programador junior",
    company: "Sysnet Del Perú - jornada completa",
    duraction: "Nov. 2023 - actualidad ·  3 meses",
    address: "Las Condes, Región Metropolitana de Santiago, ChileLas Condes, Región Metropolitana de Santiago, Chile",
    aptitudes: "Desarrollo de páginas web · Desarrollode scripts de automatización (Python) · Creación de Base de datos(SQL Server, MySql)"
  },
  {
    role: "Analista de datos",
    company: "San Fernando · Jornada completa",
    duraction: "Agos. 2022 - ene. 2023 · 6 meses",
    address: "Región Metropolitana de Santiago, Chile",
    aptitudes: "Creación de informes para la mejora continua(PowerBi, Excel, SAP)"
  },
  {
    role: "Desarrollador WEB",
    company: "Opseli  · Jornada completa",
    duraction: "ene. 2022 - jul. 2022 · 7 meses",
    address: "Región Metropolitana de Santiago, Chile",
    aptitudes: "Desarrollo de páginas web(html, css, bootstrap, php, javascript) "
  }
];
const dataProjects = [
  {
    id: 1,
    title: "Página personal(particle js)",
    img: "img/blog_particle.png",
    description: "",
    url: "https://superlative-squirrel-f5fb60.netlify.app/",
    active: 1
  },
  {
    id: 3,
    title: "Página web de servicios electricos",
    img: "img/opseli.png",
    description: "",
    url: "https://opseli.com/",
    active: 1
  },
  {
    id: 4,
    title: "Página web de transportes",
    img: "img/oyt.png",
    description: "",
    url: "http://www.oyt.com.pe/index.php",
    active: 1
  }
];

const $$Astro$a = createAstro();
const $$GitHubIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$GitHubIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="#545454"></path></svg>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/Icons/GitHubIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$LinkedInIcono = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkedInIcono;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/Icons/LinkedInIcono.astro", void 0);

const $$Astro$8 = createAstro();
const $$YoutubeIcono = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$YoutubeIcono;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 448 512" width="24" height="24"> <!-- Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"></path> </svg>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/Icons/YoutubeIcono.astro", void 0);

const $$Astro$7 = createAstro();
const $$ButtonLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ButtonLinks;
  const { name, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="h-15 w-56 bg-slate-900  bottom-2 border border-white text-white  rounded-2xl shadow-md  hover:bg-blue-950 hover:shadow-orange-200"${addAttribute(link, "href")} target="_blank"> <div class="flex justify-center gap-x-3"> ${name === "Tiktok" ? renderTemplate`${renderComponent($$result, "YoutubeIcono", $$YoutubeIcono, { "class": "size-6 text-white my-4" })}` : name === "Linkedin" ? renderTemplate`${renderComponent($$result, "LinkedInIcono", $$LinkedInIcono, { "class": "size-6 text-white my-4  " })}` : name === "Github" ? renderTemplate`${renderComponent($$result, "GitHubIcon", $$GitHubIcon, { "class": "size-6 text-white my-4 " })}` : ""} <span class="pt-3">${name}</span> </div> </a>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/ButtonLinks.astro", void 0);

const $$Astro$6 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="px-4 my-14"> <img class="rounded-none lg:rounded-full xl:rounded-full md:rounded-full size-40  lg:float-end my-10 border border-1 border-white animate-wiggle animate-infinite" src=".https://www.google.com/url?sa=i&url=https%3A%2F%2Fpe.linkedin.com%2Fin%2Frafael-andres-rossel-galarza-47b8bb214&psig=AOvVaw2Q6vxtGySMOqdAPPwSxSz5&ust=1705995615192000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjAqIi_8IMDFQAAAAAdAAAAABAD" alt="Rafael Rossel Galarza"> <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold ">
Hola! 👋 Soy Rafa<b class="text-orange-500">.</b> </h1> <h2 class="text-white text-xl">
Porgramador <span class="text-orange-500 font-semibold"> FRONTEND</span>
y entusiasta en el Análisis
<span class="text-orange-500 font-semibold">DATOS</span> <p class="text-yellow-100">
Estudiante de Ing. de sistemas. De nacionalidad peruana y tengo 23 años.
</p> <!-- #creador de contenido  --> <code class="text-yellow-300 bg-slate-950 p-1 text-sm rounded-md border border-1  shadow-orange-200 ">console.log("Transforma sueños en código, programa tu grandeza.");
</code> </h2> </section> <ul class="w-full gap-4 py-10 p-1 flex justify-normal shadow-neutral-500"> ${dataRS.map((r) => renderTemplate`${renderComponent($$result, "ButtonLinks", $$ButtonLinks, { "name": r.name, "link": r.link })}`)} </ul>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/Intro.astro", void 0);

const $$Astro$5 = createAstro();
const $$SectionsContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SectionsContainer;
  const { id, class: ClassName, _style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${ClassName}`, "class")}${addAttribute(_style, "style")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/SectionsContainer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-while font-semibold text-lg">${title}</h1>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/Title.astro", void 0);

const $$Astro$3 = createAstro();
const $$WorkExperience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WorkExperience;
  return renderTemplate`${renderComponent($$result, "Title", $$Title, { "title": "Experiencia Laboral" })} ${dataExperiencie.map((r) => renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col mt-6   text-gray-700 bg-slate-950 border border-1 border-white  shadow-md bg-clip-border rounded-xl hover:bg-blue-950 hover:shadow-orange-200"> <div class="p-6"> <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white"> <span>&rarr;</span> ${" "}${r.role} </h5> <p class="block font-sans text-base antialiased font-light leading-relaxed text-white"> ${r.company} </p> <p class="block font-sans text-base antialiased font-light leading-relaxed text-white"> ${r.duraction} </p> <p class="block font-sans text-base antialiased font-light leading-relaxed text-white"> ${r.aptitudes} </p> </div> </div>`)}`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/components/WorkExperience.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpe.linkedin.com%2Fin%2Frafael-andres-rossel-galarza-47b8bb214&psig=AOvVaw2Q6vxtGySMOqdAPPwSxSz5&ust=1705995615192000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKjAqIi_8IMDFQAAAAAdAAAAABAD" class="h-8 rounded-full" alt="rossel galarza"> <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-500">Rafael Rossel </span> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <a href="mailto:rosselgalarzarafael@gmail.com" target="_blank" class=" bg-orange-500 :text-black focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-slate-500  dark:hover:bg-orange-500 dark:focus:ring-while-800">rosselgalarzarafael@gmail.com</a> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 navbar" id="navbar-sticky"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> <li> <a href="#quien-soy" class="btn  block py-2 px-3 text-white rounded md:bg-transparen md:p-0 hover:text-orange-500" aria-current="page">Quien Soy</a> </li> <li> <a href="#experiencia-loboral" class="btn block py-2 px-3 text-white  rounded md:bg-transparen md:p-0 hover:text-orange-500 ">Experiencia</a> </li> <li> <a href="#projects" class="btn block py-2 px-3 text-white  rounded md:bg-transparen md:p-0 hover:text-orange-500 ">Proyectos</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/layouts/NavBar.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$NavBar, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="px-4 animate-fade-left " data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionsContainer", $$SectionsContainer, { "id": "quien-soy", "class": "pb-10 pt-10  animate-fade-up", "_style": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Intro", $$Intro, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "SectionsContainer", $$SectionsContainer, { "id": "experiencia-loboral", "class": "animate-fade-up", "_style": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "WorkExperience", $$WorkExperience, { "data-astro-cid-j7pv25f6": true })} ` })} ${renderComponent($$result2, "SectionsContainer", $$SectionsContainer, { "id": "projects", "class": "pb-10 pt-10 animate-fade-up", "_style": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Title", $$Title, { "title": "Proyectos", "data-astro-cid-j7pv25f6": true })} <ul class="grid grid-cols-1 gap-4 shadow-neutral-800" data-astro-cid-j7pv25f6> ${dataProjects.map(
    (r) => renderTemplate`${renderComponent($$result3, "CardProjects", $$CardProjects, { "title": r.title, "img": r.img, "href": r.url, "descriptions": r.description, "active": r.active, "data-astro-cid-j7pv25f6": true })}`
  )} </ul> ` })} </main> ` })} `;
}, "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/Desktop/RAFAEL/Cursos/astro/Page_Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
