// Datos falsos para simular una base de datos
export const tecnicos = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    especialidad: "electricidad",
    especialidadNombre: "Electricista",
    distritos: ["miraflores", "sanisidro"],
    distritosNombre: ["Miraflores", "San Isidro"],
    calificacion: 4,
    numResenas: 28,
    tarifaHora: 50,
    experiencia: "8 años",
    disponible: true,
    imagen: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Soy un electricista profesional con más de 8 años de experiencia en instalaciones eléctricas residenciales y comerciales. Me especializo en solucionar problemas eléctricos, instalación de sistemas de iluminación, cableado estructurado y mantenimiento preventivo.",
    servicios: [
      "Instalaciones eléctricas residenciales y comerciales",
      "Reparación de cortocircuitos y fallas eléctricas",
      "Instalación de luminarias y sistemas de iluminación",
      "Mantenimiento preventivo de sistemas eléctricos",
      "Instalación de tableros eléctricos",
      "Atención de emergencias 24/7",
    ],
    formacion: [
      {
        titulo: "Técnico Electricista - SENATI",
        anio: "2012 - 2015",
      },
      {
        titulo: "Certificación en Instalaciones Eléctricas Residenciales",
        anio: "2016",
      },
      {
        titulo: "Especialización en Sistemas de Iluminación LED",
        anio: "2018",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Electricista Independiente",
        periodo: "2018 - Presente",
        descripcion:
          "Servicios de instalación y mantenimiento eléctrico para clientes residenciales y pequeños negocios en Lima Moderna.",
      },
      {
        puesto: "Técnico Electricista - Electro Sistemas S.A.C",
        periodo: "2015 - 2018",
        descripcion:
          "Instalaciones eléctricas en proyectos residenciales y comerciales. Mantenimiento preventivo y correctivo.",
      },
    ],
    resenas: [
      {
        cliente: "Laura Sánchez",
        calificacion: 5,
        fecha: "Hace 2 semanas",
        comentario:
          "Carlos hizo un excelente trabajo instalando nuevas luminarias en mi departamento. Fue puntual, profesional y dejó todo limpio al terminar. Definitivamente lo recomendaría y volvería a contratar.",
      },
      {
        cliente: "Miguel Torres",
        calificacion: 4,
        fecha: "Hace 1 mes",
        comentario:
          "Contraté a Carlos para solucionar un problema de cortocircuito en mi oficina. Identificó el problema rápidamente y lo solucionó de manera eficiente. Buen servicio y precio justo.",
      },
      {
        cliente: "Patricia Flores",
        calificacion: 3,
        fecha: "Hace 2 meses",
        comentario:
          "El trabajo fue aceptable, pero llegó un poco tarde a la cita. La instalación quedó bien, aunque tuve que pedirle que corrigiera algunos detalles. El precio fue razonable.",
      },
    ],
  },
  {
    id: 2,
    nombre: "Ana Gutiérrez",
    especialidad: "plomeria",
    especialidadNombre: "Gasfitería",
    distritos: ["sanborja", "surco"],
    distritosNombre: ["San Borja", "Surco"],
    calificacion: 5,
    numResenas: 42,
    tarifaHora: 45,
    experiencia: "6 años",
    disponible: true,
    imagen: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Soy una profesional en gasfitería con 6 años de experiencia en instalaciones y reparaciones de sistemas de agua y desagüe. Me especializo en solucionar problemas de fugas, instalación de aparatos sanitarios y mantenimiento preventivo.",
    servicios: [
      "Reparación de fugas y filtraciones",
      "Instalación de grifería y sanitarios",
      "Desatoro de tuberías y desagües",
      "Instalación de sistemas de agua caliente",
      "Mantenimiento preventivo",
      "Atención de emergencias",
    ],
    formacion: [
      {
        titulo: "Técnica en Gasfitería - Instituto Superior Tecnológico",
        anio: "2014 - 2016",
      },
      {
        titulo: "Especialización en Sistemas de Agua Caliente",
        anio: "2017",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Gasfitería Independiente",
        periodo: "2017 - Presente",
        descripcion:
          "Servicios de instalación y reparación de sistemas de agua y desagüe para clientes residenciales en Lima.",
      },
      {
        puesto: "Técnica de Mantenimiento - Edificios Modernos S.A.C",
        periodo: "2016 - 2017",
        descripcion: "Mantenimiento preventivo y correctivo de sistemas hidráulicos en edificios residenciales.",
      },
    ],
    resenas: [
      {
        cliente: "Roberto Díaz",
        calificacion: 5,
        fecha: "Hace 1 semana",
        comentario:
          "Ana solucionó una fuga complicada que teníamos hace tiempo. Muy profesional y eficiente. Recomendada al 100%.",
      },
      {
        cliente: "Carmen Vega",
        calificacion: 5,
        fecha: "Hace 3 semanas",
        comentario:
          "Excelente servicio. Instaló un nuevo calentador de agua en tiempo récord y a un precio justo. Muy satisfecha.",
      },
      {
        cliente: "Jorge Mendoza",
        calificacion: 5,
        fecha: "Hace 2 meses",
        comentario:
          "Ana es muy profesional y conocedora de su trabajo. Resolvió un problema de desagüe que otros técnicos no pudieron solucionar.",
      },
    ],
  },
  {
    id: 3,
    nombre: "Jorge Salazar",
    especialidad: "pintura",
    especialidadNombre: "Pintor",
    distritos: ["lamolina", "surco"],
    distritosNombre: ["La Molina", "Surco"],
    calificacion: 4,
    numResenas: 15,
    tarifaHora: 40,
    experiencia: "5 años",
    disponible: false,
    imagen: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Pintor profesional con 5 años de experiencia en acabados de primera calidad. Especializado en pintura residencial interior y exterior, técnicas decorativas y restauración de superficies.",
    servicios: [
      "Pintura interior y exterior",
      "Empapelado y texturas decorativas",
      "Restauración de superficies",
      "Barnizado y lacado de madera",
      "Asesoría en selección de colores",
      "Presupuestos sin compromiso",
    ],
    formacion: [
      {
        titulo: "Técnico en Acabados de Construcción",
        anio: "2015 - 2017",
      },
      {
        titulo: "Curso de Técnicas Decorativas Avanzadas",
        anio: "2018",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Pintor Independiente",
        periodo: "2018 - Presente",
        descripcion: "Servicios de pintura residencial y comercial en Lima Moderna.",
      },
      {
        puesto: "Asistente de Pintura - Constructora Habitat",
        periodo: "2017 - 2018",
        descripcion: "Acabados de pintura en proyectos inmobiliarios nuevos.",
      },
    ],
    resenas: [
      {
        cliente: "Sofía Ramírez",
        calificacion: 5,
        fecha: "Hace 1 mes",
        comentario:
          "Jorge hizo un trabajo impecable pintando mi departamento. Muy detallista y cuidadoso. El resultado quedó mejor de lo que esperaba.",
      },
      {
        cliente: "Luis Morales",
        calificacion: 4,
        fecha: "Hace 2 meses",
        comentario:
          "Buen trabajo pintando el exterior de mi casa. Cumplió con los tiempos acordados y dejó todo limpio al terminar.",
      },
      {
        cliente: "María Fernández",
        calificacion: 3,
        fecha: "Hace 3 meses",
        comentario: "El trabajo quedó bien, pero tardó más de lo acordado. La calidad del acabado es buena.",
      },
    ],
  },
  {
    id: 4,
    nombre: "Roberto Díaz",
    especialidad: "carpinteria",
    especialidadNombre: "Carpintero",
    distritos: ["miraflores", "barranco"],
    distritosNombre: ["Miraflores", "Barranco"],
    calificacion: 5,
    numResenas: 31,
    tarifaHora: 55,
    experiencia: "10 años",
    disponible: true,
    imagen: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Carpintero con más de 10 años de experiencia en diseño y fabricación de muebles a medida. Especializado en carpintería fina, restauración de muebles antiguos y acabados de alta calidad.",
    servicios: [
      "Diseño y fabricación de muebles a medida",
      "Restauración de muebles antiguos",
      "Instalación de puertas y ventanas",
      "Reparación de estructuras de madera",
      "Acabados en barniz y laca",
      "Asesoría en selección de maderas",
    ],
    formacion: [
      {
        titulo: "Maestro Carpintero - Escuela de Artes y Oficios",
        anio: "2008 - 2011",
      },
      {
        titulo: "Especialización en Restauración de Muebles Antiguos",
        anio: "2013",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Carpintero Independiente",
        periodo: "2014 - Presente",
        descripcion: "Diseño y fabricación de muebles a medida para clientes residenciales y comerciales.",
      },
      {
        puesto: "Maestro Carpintero - Muebles Finos S.A.C",
        periodo: "2011 - 2014",
        descripcion: "Fabricación de muebles de alta gama para exportación.",
      },
    ],
    resenas: [
      {
        cliente: "Claudia Vega",
        calificacion: 5,
        fecha: "Hace 2 semanas",
        comentario:
          "Roberto diseñó y fabricó un mueble para mi sala exactamente como lo quería. Excelente calidad y acabados perfectos.",
      },
      {
        cliente: "Javier Torres",
        calificacion: 5,
        fecha: "Hace 1 mes",
        comentario:
          "Restauró un juego de comedor antiguo que era de mi abuela. Quedó como nuevo pero conservando su esencia. Un trabajo excepcional.",
      },
      {
        cliente: "Ana María López",
        calificacion: 5,
        fecha: "Hace 3 meses",
        comentario:
          "Instaló puertas nuevas en toda mi casa. Trabajo impecable, puntual y muy profesional. Totalmente recomendado.",
      },
    ],
  },
  {
    id: 5,
    nombre: "María Torres",
    especialidad: "cerrajeria",
    especialidadNombre: "Cerrajera",
    distritos: ["sanisidro", "miraflores", "surco"],
    distritosNombre: ["San Isidro", "Miraflores", "Surco"],
    calificacion: 4,
    numResenas: 19,
    tarifaHora: 60,
    experiencia: "7 años",
    disponible: true,
    imagen: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Cerrajera profesional con 7 años de experiencia en instalación y reparación de sistemas de seguridad. Especializada en cerraduras de alta seguridad, apertura de puertas y duplicado de llaves.",
    servicios: [
      "Apertura de puertas sin dañar la cerradura",
      "Instalación de cerraduras de alta seguridad",
      "Duplicado de llaves convencionales y especiales",
      "Reparación de cerraduras y chapas",
      "Instalación de sistemas de control de acceso",
      "Atención de emergencias 24/7",
    ],
    formacion: [
      {
        titulo: "Técnica en Cerrajería - Instituto Especializado",
        anio: "2013 - 2015",
      },
      {
        titulo: "Certificación en Sistemas de Seguridad Avanzados",
        anio: "2016",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Cerrajera Independiente",
        periodo: "2016 - Presente",
        descripcion: "Servicios de cerrajería residencial y comercial en Lima.",
      },
      {
        puesto: "Técnica de Seguridad - Seguridad Total S.A.C",
        periodo: "2015 - 2016",
        descripcion: "Instalación y mantenimiento de sistemas de seguridad en empresas y residencias.",
      },
    ],
    resenas: [
      {
        cliente: "Pedro Gómez",
        calificacion: 5,
        fecha: "Hace 3 semanas",
        comentario:
          "María me ayudó con una emergencia cuando perdí mis llaves. Llegó en 20 minutos y abrió la puerta sin dañar la cerradura. Excelente servicio.",
      },
      {
        cliente: "Lucía Mendoza",
        calificacion: 4,
        fecha: "Hace 1 mes",
        comentario: "Instaló cerraduras nuevas en mi departamento. Muy profesional y con buenos precios. Recomendada.",
      },
      {
        cliente: "Carlos Vega",
        calificacion: 3,
        fecha: "Hace 2 meses",
        comentario: "El servicio fue bueno pero tardó un poco más de lo acordado. La calidad del trabajo es buena.",
      },
    ],
  },
  {
    id: 6,
    nombre: "Luis Vargas",
    especialidad: "electricidad",
    especialidadNombre: "Electricista",
    distritos: ["jesusmaría", "lince", "magdalena"],
    distritosNombre: ["Jesús María", "Lince", "Magdalena"],
    calificacion: 4,
    numResenas: 23,
    tarifaHora: 45,
    experiencia: "5 años",
    disponible: true,
    imagen: "/placeholder.svg?height=100&width=100",
    descripcion:
      "Electricista con 5 años de experiencia en instalaciones eléctricas residenciales y comerciales. Especializado en solución de problemas eléctricos, instalación de sistemas de iluminación y mantenimiento preventivo.",
    servicios: [
      "Instalaciones eléctricas residenciales",
      "Reparación de fallas eléctricas",
      "Instalación de luminarias",
      "Tableros eléctricos",
      "Cableado estructurado",
      "Diagnóstico de problemas eléctricos",
    ],
    formacion: [
      {
        titulo: "Técnico Electricista - Instituto Superior",
        anio: "2015 - 2017",
      },
      {
        titulo: "Curso de Instalaciones Eléctricas Domiciliarias",
        anio: "2018",
      },
    ],
    experienciaLaboral: [
      {
        puesto: "Electricista Independiente",
        periodo: "2019 - Presente",
        descripcion: "Servicios de electricidad residencial y comercial en Lima.",
      },
      {
        puesto: "Asistente Electricista - Instalaciones Eléctricas S.A.C",
        periodo: "2017 - 2019",
        descripcion: "Apoyo en instalaciones eléctricas en proyectos residenciales y comerciales.",
      },
    ],
    resenas: [
      {
        cliente: "Mariana López",
        calificacion: 4,
        fecha: "Hace 2 semanas",
        comentario:
          "Luis solucionó un problema de cortocircuito en mi departamento. Fue puntual y profesional. Buen servicio.",
      },
      {
        cliente: "Daniel Torres",
        calificacion: 5,
        fecha: "Hace 1 mes",
        comentario: "Instaló nuevas luminarias en mi negocio. Excelente trabajo y muy buen precio. Lo recomiendo.",
      },
      {
        cliente: "Andrea Flores",
        calificacion: 3,
        fecha: "Hace 2 meses",
        comentario: "El trabajo quedó bien pero tardó más de lo acordado. La calidad es buena.",
      },
    ],
  },
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
