

export type IDataRS = {
  name: string;
  link: string;
  icons: string;
}[]


export type IDataExperiencie = {
  role: string;
  company: string;
  duraction: string;
  address: string;
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
    name: "Tiktok",
    link: "https://www.tiktok.com/@rafaelandresrosse?_t=8jEoDS0109W&_r=1",
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
  role: "Programador junior",
  company: "Sysnet Del Perú - jornada completa",
  duraction: "Nov. 2023 - actualidad ·  6 meses",
  address: "Las Condes, Región Metropolitana de Santiago, ChileLas Condes, Región Metropolitana de Santiago, Chile",
  aptitudes: "Desarrollo de páginas web · Desarrollode scripts de automatización (Python) · Creación de Base de datos(SQL Server, MySql)",
},
{
  role: "Analista de datos",
  company: "San Fernando · Jornada completa",
  duraction: "Agos. 2022 - ene. 2023 · 6 meses",
  address: "Región Metropolitana de Santiago, Chile",
  aptitudes: "Creación de informes para la mejora continua(PowerBi, Excel, SAP)",
},
  
{
  role: "Desarrollador WEB",
  company: "Opseli  · Jornada completa",
  duraction: "ene. 2022 - jul. 2022 · 7 meses",
  address: "Región Metropolitana de Santiago, Chile",
  aptitudes: "Desarrollo de páginas web(html, css, bootstrap, php, javascript) ",
},

]



export const dataProjects: IProject = [
  {
    id: 1,
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
  {
    id: 4,
    title: 'Página web de transportes',
    img: 'img/oyt.png',
    description: '',
    url: 'http://www.oyt.com.pe/index.php',
    active: 1
  }
]