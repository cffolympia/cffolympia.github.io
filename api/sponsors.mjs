// /api/patrocinadores.mjs

const PATROCINADORES = [
  {
    id: 1,
    nombre: "Ruesma",
    tipo: "Construcción",
    logo: "/public/sponsors/logo_ruesma.png",
    descripcion:
      "Consultoría especializada en transformación digital y estrategia empresarial.",
    redes: {
      web: "https://www.ruesma.com/",
      instagram: "https://www.instagram.com/construccionesruesma/",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 2,
    nombre: "PureMind",
    tipo: "Bienestar Físico y Mental",
    logo: "/public/sponsors/puremind.webp",
    descripcion:
      "Plataforma de bienestar mental y apoyo psicológico para deportistas.",
    redes: {
      web: "https://puremind.es/",
      instagram: "https://www.instagram.com/puremindoficial/",
    },
    descuento: {
      tieneDescuento: true,
      porcentaje: "20%",
      codigo: "OLYMPIA20",
      descripcion: "de descuento en suscripciones",
    },
  },
  {
    id: 3,
    nombre: "LG",
    tipo: "Tecnología",
    logo: "/public/sponsors/logo_lg.png",
    descripcion:
      "Líder mundial en electrónica de consumo y soluciones tecnológicas innovadoras.",
    redes: {
      web: "https://www.lg.com/es",
      instagram: "https://instagram.com/lg_espana",
      twitter: "https://twitter.com/LGEspana",
      facebook: "https://facebook.com/LGEspana",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 4,
    nombre: "Mahou",
    tipo: "Cervecera",
    logo: "/public/sponsors/logo_mahou.png",
    descripcion:
      "Cervecera española con más de 130 años de tradición y calidad.",
    redes: {
      web: "https://www.mahou.es/",
      instagram: "https://instagram.com/mahou_es",
      twitter: "https://twitter.com/mahou_es",
      facebook: "https://facebook.com/Mahou",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 5,
    nombre: "LRA Ingeniería",
    tipo: "Ingeniería",
    logo: "/public/sponsors/logo_lra.png",
    descripcion:
      "Soluciones integrales de ingeniería y consultoría técnica especializada.",
    redes: {
      web: "https://lraingenieria.es/",
      linkedin: "https://linkedin.com/company/lra-ingenieria",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 6,
    nombre: "Appletree Communications",
    tipo: "Comunicación",
    logo: "/public/sponsors/logo_appletree.png",
    descripcion:
      "Agencia de comunicación y relaciones públicas especializada en deporte.",
    redes: {
      web: "https://appletreecommunications.com/es/",
      instagram: "https://www.instagram.com/appletree_agency/",
      twitter: "https://twitter.com/appletreeagency/",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 7,
    nombre: "IE SEK",
    tipo: "Educación",
    logo: "/public/sponsors/logo_sek.png",
    descripcion:
      "Institución educativa líder con programas académicos de excelencia.",
    redes: {
      web: "https://www.sek.es/",
      instagram: "https://www.instagram.com/sekinternationalschools/",
      twitter: "https://twitter.com/sekintschools",
      facebook: "https://www.facebook.com/sekinternationalschools",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 8,
    nombre: "Vercocinas",
    tipo: "Diseño de Cocinas",
    logo: "/public/sponsors/logo_vercocinas.png",
    descripcion:
      "Especialistas en diseño y fabricación de cocinas a medida de alta calidad.",
    redes: {
      web: "http://vercocinas.es/",
      facebook: "https://www.facebook.com/vercocinas/?locale=es_ES",
      instagram: "https://www.instagram.com/vercocinas_nani/",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
  {
    id: 9,
    nombre: "Aliberico",
    tipo: "Grupo metalúrgico",
    logo: "/public/sponsors/logo_aliberico.png",
    descripcion:
      "Productos ibéricos de la más alta calidad y tradición española.",
    redes: {
      web: "http://aliberico.com/",
      twitter: "https://twitter.com/GrupoAliberico",
      facebook: "https://www.facebook.com/people/Aliberico/100057703440182/",
    },
    descuento: {
      tieneDescuento: false,
      descripcion: "Patrocinador Oficial",
    },
  },
];

export default PATROCINADORES;
