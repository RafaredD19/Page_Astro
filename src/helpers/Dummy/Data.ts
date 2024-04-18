

export type IDataRS = {
  name: string;
  link: string;
  icons: string;
}[]


export type IDataExperiencie = {
  role: string;
  company: string;
  duraction: string;
  tool: string;
  aptitudes: string;
}[]

export type IProject = {
  id: number;
  title: string;
  img?: string
  description: string
  url: string
  active: boolean | number
}[]

export const dataRS: IDataRS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rafael-andres-rossel-galarza-47b8bb214/",
    icons: "LinkedIn",
  },
  {
    name: "Gitlab",
    link: "https://gitlab.com/rosselgalarzarafael",
    icons: "Youtube",
  },
  {
    name: "Github",
    link: "https://github.com/RafaredD19",
    icons: "Github",
  },
];



export const dataExperiencie: IDataExperiencie = [
  {
  role: "Desarrollador Full Stack",
  company: "Sysnet Del Perú - jornada completa",
  duraction: "Nov. 2023 - actualidad ·  6 meses",
  aptitudes: "·Desarrollo de plataformas SaaS · Desarrollo de scripts de automatización · Creacción de Bases de datos relacionales y no relacionales",
  tool: "-Vue js -Express js -Nest Js -Flask -FastApi -Mongo DB -MySql -SQL serve ",
},
{
  role: "Analista de datos Junior",
  company: "San Fernando · Jornada completa",
  duraction: "Agos. 2022 - ene. 2023 · 6 meses",
  aptitudes: "Creación de informes para la mejora continua",
  tool: "-PowerBi -SAP -Excel -Python",
},
  
{
  role: "Desarrollador FrontEnd",
  company: "Opseli  · Jornada completa",
  duraction: "ene. 2022 - jul. 2022 · 7 meses",
  aptitudes: "Desarrollo de páginas web y mantenimiento de sus plataformas",
  tool: "-HTML -CSS -JavaScript -php -WordPress",
},

]



export const dataProjects: IProject = [
  {
    id: 1,
    title: 'Plataforma de cotizaciones de servicios',
    img: 'img/oyt.png',
    description: '',
    url: 'http://204.48.17.106:3050/login',
    active: 1
  },
  {
    id: 5,
    title: 'Plataforma para el control de despachos de combustible (integrado con un app movil)',
    img: 'img/efuel.png',
    description: '',
    url: 'http://157.230.189.65:3040/login',
    active: 1
  },
  {
    id: 2,
    title: 'Página personal(particle js)',
    img: 'img/blog_particle.png',
    description: '',
    url: 'https://superlative-squirrel-f5fb60.netlify.app/',
    active: 1
  },

  {
    id: 3,
    title: 'Página web de servicios electricos',
    img: 'img/opseli.png',
    description: '',
    url: 'https://opseli.com/',
    active: 1
  },
 
]