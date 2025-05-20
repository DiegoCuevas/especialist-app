// Datos falsos para simular una base de datos
export const tecnicos = [
  {
    id: 1,
    nombre: "Luis Salazar",
    especialidad: "gasfiteria",
    especialidadNombre: "Gasfitero",
    distritos: ["miraflores", "sanisidro"],
    distritosNombre: ["Miraflores", "San Isidro"],
    calificacion: 4.5,
    numResenas: 35,
    tarifaHora: 45,
    experiencia: "10 años",
    disponible: true,
    imagen: "/img/2.jpeg",
    descripcion:
      "Gasfitero con amplia experiencia en instalaciones de agua y desagüe, reparación de fugas, mantenimiento de cañerías y sanitarios. Brindo atención rápida y garantizada.",
    servicios: [
      "Reparación de fugas de agua y gas",
      "Instalación de sanitarios y grifería",
      "Mantenimiento de cañerías",
      "Instalación de termas y lavaderos",
      "Desatoro de desagües",
      "Atención de emergencias 24/7",
    ],
    formacion: [
      {
        titulo: "Técnico en Gasfitería - SENATI",
        anio: "2010 - 2013",
      },
      {
        titulo: "Certificación en Soldadura de Tuberías",
        anio: "2015",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Gasfitero Independiente",
        periodo: "2014 - Presente",
        descripcion:
          "Servicios de gasfitería en Lima Metropolitana para clientes residenciales y comerciales.",
      },
      {
        puesto: "Técnico - Mantenimiento Total S.A.C.",
        periodo: "2013 - 2014",
        descripcion:
          "Encargado de instalaciones sanitarias y reparación de tuberías en edificios multifamiliares.",
      },
    ],
    resenas: [
      {
        cliente: "Andrea Ruiz",
        calificacion: 5,
        fecha: "Hace 3 semanas",
        comentario: "Muy profesional y rápido. Solucionó una fuga complicada en mi cocina.",
      },
      {
        cliente: "José Linares",
        calificacion: 4,
        fecha: "Hace 1 mes",
        comentario: "Buen trabajo, aunque tardó en llegar. El servicio fue eficiente.",
      },
    ],
  },
  {
    id: 2,
    nombre: "Víctor Herrera",
    especialidad: "gasfiteria",
    especialidadNombre: "Gasfitero",
    distritos: ["sanborja", "surco"],
    distritosNombre: ["San Borja", "Surco"],
    calificacion: 4.2,
    numResenas: 19,
    tarifaHora: 40,
    experiencia: "7 años",
    disponible: true,
    imagen: "/img/4.jpeg",
    descripcion:
      "Especialista en gasfitería domiciliaria. Me dedico a instalaciones, mantenimiento y reparaciones con acabados limpios y duraderos.",
    servicios: [
      "Instalación de cañerías",
      "Cambio de griferías",
      "Mantenimiento de sanitarios",
      "Desatoro de tuberías",
      "Instalación de termas",
    ],
    formacion: [
      {
        titulo: "Curso Técnico de Gasfitería - CENECAPE",
        anio: "2014 - 2016",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Gasfitero Freelance",
        periodo: "2017 - Presente",
        descripcion:
          "Atención a clientes particulares, mantenimiento de baños y cocinas en Lima Sur.",
      },
    ],
    resenas: [
      {
        cliente: "Sofía Delgado",
        calificacion: 4,
        fecha: "Hace 2 semanas",
        comentario: "Buen servicio, muy atento y cuidadoso con los detalles.",
      },
    ],
  },
  {
    id: 3,
    nombre: "Raúl Zapata",
    especialidad: "gasfiteria",
    especialidadNombre: "Gasfitero",
    distritos: ["lamolina", "surco"],
    distritosNombre: ["La Molina", "Surco"],
    calificacion: 4.7,
    numResenas: 22,
    tarifaHora: 50,
    experiencia: "9 años",
    disponible: false,
    imagen: "/img/5.jpeg",
    descripcion:
      "Gasfitero certificado con experiencia en sistemas de agua caliente, instalación de redes sanitarias y detección de filtraciones.",
    servicios: [
      "Instalación de redes de agua y desagüe",
      "Instalación de termas eléctricas",
      "Mantenimiento de sanitarios",
      "Reparación de filtraciones",
      "Desatoros complejos",
    ],
    formacion: [
      {
        titulo: "Técnico en Gasfitería - TECSUP",
        anio: "2011 - 2014",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Técnico Senior - AguaClara Perú",
        periodo: "2014 - 2019",
        descripcion:
          "Encargado de instalaciones sanitarias en proyectos de remodelación de viviendas.",
      },
      {
        puesto: "Independiente",
        periodo: "2019 - Presente",
        descripcion:
          "Atención a clientes en Pueblo Libre y Magdalena. Servicios garantizados.",
      },
    ],
    resenas: [
      {
        cliente: "Lucía Gamarra",
        calificacion: 5,
        fecha: "Hace 5 días",
        comentario: "Muy profesional y con buena actitud. Solucionó todo rápido.",
      },
    ],
  },
  {
    id: 4,
    nombre: "Pedro Quispe",
    especialidad: "electricidad",
    especialidadNombre: "Electricista",
    distritos: ["ate", "sjl"],
    distritosNombre: ["Ate", "San Juan de Lurigancho"],
    calificacion: 4,
    numResenas: 18,
    tarifaHora: 45,
    experiencia: "6 años",
    disponible: true,
    imagen: "/img/3.jpeg",
    descripcion:
      "Electricista técnico con experiencia en cableado, instalación de tomacorrientes, soluciones de energía y mantenimiento en general.",
    servicios: [
      "Cableado eléctrico",
      "Instalación de tomas y llaves",
      "Revisión de sobrecargas",
      "Instalación de luminarias LED",
      "Montaje de tableros eléctricos",
    ],
    formacion: [
      {
        titulo: "Técnico Electricista - SENATI",
        anio: "2015 - 2018",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Electricista - Empresa Luz Total",
        periodo: "2018 - 2020",
        descripcion:
          "Instalaciones eléctricas en viviendas y locales comerciales.",
      },
      {
        puesto: "Freelancer",
        periodo: "2020 - Presente",
        descripcion:
          "Trabajo por cuenta propia ofreciendo servicios eléctricos en zonas de Lima Este.",
      },
    ],
    resenas: [
      {
        cliente: "Juan Rivas",
        calificacion: 4,
        fecha: "Hace 1 semana",
        comentario: "Rápido y eficiente, me ayudó con una instalación urgente.",
      },
    ],
  },
  {
    id: 5,
    nombre: "Ernesto Paredes",
    especialidad: "electricidad",
    especialidadNombre: "Electricista",
    distritos: ["sanisidro", "miraflores", "surco"],
    distritosNombre: ["San Isidro", "Miraflores", "Surco"],
    calificacion: 4.3,
    numResenas: 25,
    tarifaHora: 55,
    experiencia: "11 años",
    disponible: true,
    imagen: "/img/6.jpeg",
    descripcion:
      "Electricista profesional con más de una década de experiencia en instalaciones, mantenimiento industrial y diseño de redes eléctricas.",
    servicios: [
      "Instalación de redes eléctricas industriales",
      "Mantenimiento preventivo y correctivo",
      "Detección de fallas eléctricas",
      "Instalación de sistemas trifásicos",
      "Diseño de tableros eléctricos",
    ],
    formacion: [
      {
        titulo: "Ingeniería Eléctrica - TECSUP",
        anio: "2008 - 2012",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Supervisor Eléctrico - Industrias Eléctricas del Perú",
        periodo: "2012 - 2017",
        descripcion: "Supervisión de obras eléctricas industriales.",
      },
      {
        puesto: "Consultor Eléctrico Independiente",
        periodo: "2017 - Presente",
        descripcion: "Asesoría técnica y ejecución de proyectos en Lima y Callao.",
      },
    ],
    resenas: [
      {
        cliente: "Diego Ramos",
        calificacion: 5,
        fecha: "Hace 3 días",
        comentario: "Un experto, resolvió todo con rapidez y precisión. ¡Recomendado!",
      },
    ],
  },
  {
    id: 6,
    nombre: "Julio Ramírez",
    especialidad: "albañileria",
    especialidadNombre: "Albañil",
    distritos: ["jesusmaría", "lince", "magdalena"],
    distritosNombre: ["Jesús María", "Lince", "Magdalena"],
    calificacion: 4.6,
    numResenas: 31,
    tarifaHora: 48,
    experiencia: "12 años",
    disponible: false,
    imagen: "/img/1.jpeg",
    descripcion:
      "Albañil con más de una década de experiencia en construcción, remodelación, tarrajeo y acabados de interiores y exteriores.",
    servicios: [
      "Construcción de muros y columnas",
      "Tarrajeo y enlucido de paredes",
      "Remodelación de baños y cocinas",
      "Colocación de cerámicos y porcelanato",
      "Techado de viviendas",
    ],
    formacion: [
      {
        titulo: "Técnico en Construcción Civil - CETPRO",
        anio: "2009 - 2011",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Maestro de obra - Constructora Lima Sur",
        periodo: "2011 - 2016",
        descripcion: "Construcción y supervisión de obras menores en viviendas unifamiliares.",
      },
      {
        puesto: "Independiente",
        periodo: "2016 - Presente",
        descripcion: "Trabajo por cuenta propia en proyectos de remodelación y mantenimiento.",
      },
    ],
    resenas: [
      {
        cliente: "Elena Córdova",
        calificacion: 5,
        fecha: "Hace 1 mes",
        comentario: "Hizo una excelente remodelación en mi cocina. Muy detallista y responsable.",
      },
    ],
  }
]


export const especialidades = [
  { value: "plomeria", label: "Gasfitería" },
  { value: "electricidad", label: "Electricidad" },
  { value: "pintura", label: "Pintura" },
  { value: "carpinteria", label: "Carpintería" },
  { value: "cerrajeria", label: "Cerrajería" },
]

export const distritos = [
  { value: "miraflores", label: "Miraflores" },
  { value: "sanisidro", label: "San Isidro" },
  { value: "surco", label: "Surco" },
  { value: "barranco", label: "Barranco" },
  { value: "lamolina", label: "La Molina" },
  { value: "sanborja", label: "San Borja" },
  { value: "lince", label: "Lince" },
  { value: "magdalena", label: "Magdalena" },
  { value: "jesusmaría", label: "Jesús María" },
]
