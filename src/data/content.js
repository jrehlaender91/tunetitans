export const event = {
  name: "Tune Titans",
  edition: "MTY TEC 2026",
  tagline: "Competencia nacional de grabación estudiantil",
  dates: "13 y 14 de noviembre de 2026",
  location: "Campus Monterrey",
};

export const judges = [
  {
    name: "Marko Zavala",
    role: "Ingeniero de grabación y mezcla",
    bio: "Ingeniero de grabación y mezcla musical, productor discográfico y DJ originario de Monterrey, Nuevo León. Ha trabajado con The Warning, El Plan, PXNDX, Joan Sebastian, Destiny Navaira y José Madero.",
    photo: "judge-marko.webp",
  },
  {
    name: "Chrissy Tignor",
    role: "Productora, compositora e ingeniera de grabación",
    bio: "Productora, compositora, ingeniera de grabación y vocalista. Ha trabajado con Splice, Sequential, Oberheim, Bob Moog Foundation, TLC y Discovery Channel. Profesora en la California State Polytechnic University y artista con el proyecto Data Child.",
    photo: "judge-chrissy.jpg",
  },
  {
    name: "Allan Tucker",
    role: "Profesor distinguido del Tec",
    bio: "Profesor distinguido del Tec de Monterrey. Ingeniero en jefe y propietario de TuckerSound en Foothill Digital. Ha trabajado en 3,500 álbumes, entre ellos ganadores de premios Grammy, Discos de Oro y Grabación del Año (Record of the Year).",
    photo: "judge-allan.jpg",
  },
  {
    name: "John Escobar",
    role: "Productor, ingeniero y educador",
    bio: "Productor, ingeniero y educador. Ha trabajado con Larry Coryell, Sarah Jarosz, Fences Macklemore, Ryan Lewis y el violinista Joshua Bell. Profesor en Berklee College of Music.",
    photo: "judge-john.jpg",
  },
];

export const categories = [
  {
    number: "01",
    name: "Grabación acústica tradicional",
  },
  {
    number: "02",
    name: "Grabación tradicional en estudio",
  },
  {
    number: "03",
    name: "Grabación moderna en estudio",
  },
  {
    number: "04",
    name: "Sonido para medios audiovisuales",
  },
  {
    number: "05",
    name: "Prepa Tec",
  },
];

export const scheduleDay1 = [
  { time: "9:00", title: "Registro y bienvenida" },
  { time: "10:00", title: "Ceremonia de inicio" },
  { time: "11:00", title: "Cat 1: Grabación acústica tradicional" },
  { time: "12:30", title: "Cat 2: Grabación tradicional en estudio" },
  { time: "14:00", title: "Comida" },
  { time: "15:00", title: "Conferencia — John Escobar" },
  { time: "16:00", title: "Conferencia — Chrissy Tignor" },
  { time: "17:00", title: "Conferencia — Allan Tucker" },
  { time: "18:00", title: "Fin día 1" },
];

export const scheduleDay2 = [
  { time: "9:00", title: "Cat 3: Grabación moderna en estudio" },
  { time: "10:30", title: "Cat 4: Sonido para medios audiovisuales" },
  { time: "12:00", title: "Cat 5: Prepa Tec" },
  { time: "13:00", title: "Conferencia Ableton" },
  { time: "14:00", title: "Comida" },
  { time: "15:00", title: "Conferencia — Marko Zavala" },
  { time: "16:00", title: "Live set" },
  { time: "17:00", title: "Ceremonia de premiación" },
  { time: "18:00", title: "Fin día 2" },
];

export const participationSteps = [
  {
    range: "25 ago — 11 sep",
    title: "Sube tus proyectos",
    description: "Sube tus proyectos para una o más categorías antes del 11 de septiembre.",
  },
  {
    range: "2 oct",
    title: "Reporte de finalistas",
    description: "Tu DP anunciará los 5 proyectos finalistas que viajarán a la gran final en el Campus Monterrey.",
  },
  {
    range: "13 y 14 nov",
    title: "Final en MTY",
    description: "Durante los dos días los alumnos tendrán retroalimentación de sus proyectos, así como charlas con panelistas junto con otros estudiantes LTM del Campus Monterrey e invitados locales y nacionales.",
  },
];

export const hackathon = {
  title: "Hackathon",
  description: "Concurso de desarrollo y programación de herramientas y extensiones aplicables al ecosistema de Ableton Live.",
  timeline: [
    { range: "25 ago — 11 sep", title: "Sube tus proyectos", description: "Sube tus proyectos para una o más categorías antes del 11 de septiembre." },
    { range: "2 oct", title: "Reporte de finalistas", description: "Tu DP anunciará los 5 proyectos finalistas que viajarán a la gran final en el Campus Monterrey." },
    { range: "9 oct", title: "Registro", description: "Todos los alumnos se registran como participantes en la liga compartida por su DP de campus." },
    { range: "30 oct", title: "Límite de recepción de extensiones", description: "Fecha límite para enviar tu extensión o herramienta terminada." },
    { range: "14 nov", title: "Premiación", description: "Anuncio y entrega de premios durante la final en el Campus Monterrey." },
  ],
  prizes: [
    { place: "1er lugar", prize: "Ableton Push 3 Standalone" },
    { place: "2do lugar", prize: "Ableton Push 3 Tethered" },
    { place: "3er lugar", prize: "Ableton Move" },
  ],
};

export const partners = [
  { name: "Tecnológico de Monterrey", file: "logo-tec.png", light: true },
  { name: "LTM — Licenciado en Tecnología y Producción Musical", file: "logo-ltm.png", light: true },
  { name: "Ableton", file: "logo-ableton.png", light: true },
  { name: "Genelec", file: "logo-genelec.png", light: true },
  { name: "Audio Engineering Society (AES)", file: "logo-aes.png", light: true },
  { name: "LIVE.TEC", file: "logo-livetec.png", light: true },
];
