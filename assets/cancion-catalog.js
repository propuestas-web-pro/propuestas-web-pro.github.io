/* ==========================================================================
   TUCANCIÓNQR · CATÁLOGO UNIVERSAL (10 ÁNGULOS · TODAS LAS EDADES · ES/MX/AR)
   ========================================================================== */

const CANCION_OCCASIONS = [
  { id: 'cumpleanos', label: 'Cumpleaños', defaultName: 'Mamá Carmen', defaultMemory: 'su sonrisa cada mañana y las comidas de los domingos', shortTag: 'Cumpleaños' },
  { id: 'mama', label: 'Madres', defaultName: 'Mamá Elena', defaultMemory: 'estar siempre ahí sin pedir nada a cambio', shortTag: 'Para Mamá' },
  { id: 'papa', label: 'Padres', defaultName: 'Papá Carlos', defaultMemory: 'sus consejos en el coche y su sentido del humor', shortTag: 'Para Papá' },
  { id: 'pareja', label: 'Pareja / Aniversario', defaultName: 'Lucía', defaultMemory: 'nuestro primer café bajo la lluvia y cada viaje juntos', shortTag: 'Aniversario' },
  { id: 'hijos', label: 'Hijos / Bebé', defaultName: 'Pequeño Mateo', defaultMemory: 'tus primeras risas y la luz que trajiste a casa', shortTag: 'Para mi Hijo/a' },
  { id: 'amigos', label: 'Amigos / Broma', defaultName: 'Javi', defaultMemory: 'llegar tarde siempre y nuestras noches de risas', shortTag: 'Mejor Amigo' },
  { id: 'abuelos', label: 'Abuelos / Mayores', defaultName: 'Abuela Rosa', defaultMemory: 'sus abrazos eternos y las comidas de domingo', shortTag: 'Para Abuelos' },
  { id: 'hermanos', label: 'Hermanos', defaultName: 'Valeria', defaultMemory: 'nuestras charlas a medianoche y apoyarnos siempre', shortTag: 'Hermanos' },
  { id: 'boda', label: 'Boda / XV / Fiesta', defaultName: 'Marta y Dani', defaultMemory: 'este día inolvidable rodeados de toda nuestra gente', shortTag: 'Celebración' },
  { id: 'sorpresa', label: 'Última hora / Perdón', defaultName: 'Paula', defaultMemory: 'no haberme olvidado jamás de lo importante que eres', shortTag: 'Sorpresa QR' }
];

const CANCION_ANGLE_CARDS = [
  {
    id: 'mama',
    icon: 'ph-heart',
    badge: 'Lágrimas seguras',
    title: 'Para tu Madre',
    desc: 'Que escuche su nombre cantado con vuestros recuerdos de toda la vida.',
    occasion: 'mama',
    genre: 'pop_acustico',
    name: 'Mamá Carmen',
    sender: 'Tus hijos',
    memory: 'tu café de la mañana y estar siempre ahí'
  },
  {
    id: 'pareja',
    icon: 'ph-sparkle',
    badge: 'Salva aniversarios',
    title: 'Para tu Pareja',
    desc: 'Aniversario, San Valentín o sorpresa en el coche: inolvidable en 2 minutos.',
    occasion: 'pareja',
    genre: 'balada_piano',
    name: 'Lucía',
    sender: 'Tu amor',
    memory: 'nuestro primer viaje y tu risa contagiosa'
  },
  {
    id: 'papa',
    icon: 'ph-shield-star',
    badge: 'Hasta el más duro',
    title: 'Para tu Padre',
    desc: 'Para el que siempre dice «no me compres nada» y acaba con nudo en la garganta.',
    occasion: 'papa',
    genre: 'rumba',
    name: 'Papá Carlos',
    sender: 'Tu familia',
    memory: 'tus consejos de siempre y tu apoyo incondicional'
  },
  {
    id: 'hijos',
    icon: 'ph-baby',
    badge: 'Recuerdo eterno',
    title: 'Para tus Hijos o Bebé',
    desc: 'Un regalo único para su cumple, bautizo o nacimiento que guardará para siempre.',
    occasion: 'hijos',
    genre: 'pop_acustico',
    name: 'Pequeño Mateo',
    sender: 'Mamá y Papá',
    memory: 'tu sonrisa cada mañana y ver cómo creces'
  },
  {
    id: 'amigos',
    icon: 'ph-smiley-wink',
    badge: 'Risas garantizadas',
    title: 'Para tu Mejor Amigo',
    desc: 'Mete sus anécdotas, apodos o liadas en una canción de estudio para partirse de risa.',
    occasion: 'amigos',
    genre: 'cumbia',
    name: 'Javi',
    sender: 'Tu grupo',
    memory: 'llegar siempre tarde y nuestras mil locuras'
  },
  {
    id: 'abuelos',
    icon: 'ph-sun-horizon',
    badge: 'Emoción en familia',
    title: 'Para tus Abuelos',
    desc: 'Un día darías todo por volver a ver su cara al oír sus historias cantadas.',
    occasion: 'abuelos',
    genre: 'balada_piano',
    name: 'Abuela Rosa',
    sender: 'Tus nietos',
    memory: 'las comidas de domingo y tus abrazos de casa'
  },
  {
    id: 'boda',
    icon: 'ph-confetti',
    badge: 'Bodas · XV · Cumples',
    title: 'Bodas, XV y Fiestas',
    desc: 'Pon el código QR en la mesa o proyéctalo delante de todos los invitados.',
    occasion: 'boda',
    genre: 'bachata',
    name: 'Marta y Dani',
    sender: 'Vuestros amigos',
    memory: 'veros dar el sí rodeados de toda vuestra gente'
  },
  {
    id: 'sorpresa',
    icon: 'ph-clock-countdown',
    badge: 'Listo en 2 min',
    title: 'Última Hora (23:58)',
    desc: 'Sin tiendas ni envíos: créala ahora en el móvil y manda el sobre QR por WhatsApp.',
    occasion: 'sorpresa',
    genre: 'pop_acustico',
    name: 'Paula',
    sender: 'Con todo mi cariño',
    memory: 'que pensaras que me olvidé cuando tenía esta sorpresa'
  }
];

const CANCION_GENRES = [
  {
    id: 'pop_acustico',
    label: 'Pop Acústico',
    region: 'España · Global',
    bpm: 96,
    mood: 'Guitarra española y voz cálida',
    audioFile: 'assets/audio/demo-mama-carmen.mp3',
    demoId: 'mama'
  },
  {
    id: 'balada_piano',
    label: 'Balada a Piano',
    region: 'Romántica · Emotiva',
    bpm: 78,
    mood: 'Piano íntimo y cuerdas suaves',
    audioFile: 'assets/audio/demo-pareja-lucia.mp3',
    demoId: 'pareja'
  },
  {
    id: 'rumba',
    label: 'Rumba Española',
    region: 'España · Celebración',
    bpm: 106,
    mood: 'Palmas, guitarra flamenca y alegría',
    audioFile: 'assets/audio/demo-mama-carmen.mp3',
    demoId: 'mama'
  },
  {
    id: 'bachata',
    label: 'Bachata Suave',
    region: 'Parejas · Latam y ES',
    bpm: 118,
    mood: 'Requinto romántico y percusión cálida',
    audioFile: 'assets/audio/demo-pareja-lucia.mp3',
    demoId: 'pareja'
  },
  {
    id: 'mariachi',
    label: 'Mariachi Serenata',
    region: 'México · Fiesta',
    bpm: 108,
    mood: 'Trompetas, guitarrón y emoción',
    audioFile: 'assets/audio/demo-mariachi-carlos.mp3',
    demoId: 'mariachi'
  },
  {
    id: 'cumbia',
    label: 'Cumbia Festiva',
    region: 'Fiesta · Humor · Amigos',
    bpm: 102,
    mood: 'Ritmo alegre para bailar y reír',
    audioFile: 'assets/audio/demo-cumbia-valeria.mp3',
    demoId: 'cumbia'
  }
];

const CANCION_DEMOS = [
  {
    id: 'mama',
    title: 'Feliz cumpleaños, Mamá Carmen',
    recipient: 'Mamá Carmen',
    sender: 'Tus hijos',
    occasion: 'cumpleanos',
    genre: 'pop_acustico',
    genreLabel: 'Pop Acústico · España',
    duration: '0:30',
    audioFile: 'assets/audio/demo-mama-carmen.mp3',
    memory: 'cada abrazo en la mañana y las comidas de los domingos',
    highlight: '«Feliz cumpleaños, mamá Carmen, hoy cantamos para ti...»'
  },
  {
    id: 'pareja',
    title: 'Cinco años contigo, Lucía',
    recipient: 'Lucía',
    sender: 'Tu pareja',
    occasion: 'pareja',
    genre: 'balada_piano',
    genreLabel: 'Balada a Piano · Romántica',
    duration: '0:30',
    audioFile: 'assets/audio/demo-pareja-lucia.mp3',
    memory: 'ese primer café bajo la lluvia y cada viaje juntos',
    highlight: '«Lucía, cada día contigo suena mejor que el anterior...»'
  },
  {
    id: 'mariachi',
    title: 'Serenata para Don Carlos',
    recipient: 'Don Carlos',
    sender: 'Tu familia',
    occasion: 'papa',
    genre: 'mariachi',
    genreLabel: 'Mariachi · Padres y Mayores',
    duration: '0:30',
    audioFile: 'assets/audio/demo-mariachi-carlos.mp3',
    memory: 'tu ejemplo diario, tus chistes y el orgullo de tenerte',
    highlight: '«Que suenen las trompetas para Don Carlos en su día...»'
  },
  {
    id: 'cumbia',
    title: 'Fiesta para Valeria y amigos',
    recipient: 'Valeria',
    sender: 'Tu grupo y familia',
    occasion: 'amigos',
    genre: 'cumbia',
    genreLabel: 'Cumbia Festiva · Jóvenes y Fiesta',
    duration: '0:30',
    audioFile: 'assets/audio/demo-cumbia-valeria.mp3',
    memory: 'tu risa contagiosa y nuestras noches inolvidables',
    highlight: '«Hoy baila todo el mundo porque celebramos a Valeria...»'
  }
];

function cancionGetGenre(id) {
  return CANCION_GENRES.find((g) => g.id === id) || CANCION_GENRES[0];
}

function cancionGetOccasion(id) {
  return CANCION_OCCASIONS.find((o) => o.id === id) || CANCION_OCCASIONS[0];
}

function cancionGetDemoById(id) {
  return CANCION_DEMOS.find((d) => d.id === id) || CANCION_DEMOS[0];
}

function cancionCleanName(raw, fallback) {
  const t = String(raw || '').trim().replace(/\s+/g, ' ');
  return t.length >= 1 ? t.slice(0, 42) : (fallback || 'Mamá Carmen');
}

function cancionGenerateTitle(recipient, occasionId) {
  const name = cancionCleanName(recipient, 'Ti');
  const map = {
    cumpleanos: `Feliz cumpleaños, ${name}`,
    mama: `Gracias por todo, ${name}`,
    papa: `Mi orgullo, ${name}`,
    pareja: `Nuestra historia, ${name}`,
    hijos: `Para siempre contigo, ${name}`,
    amigos: `El himno oficial de ${name}`,
    abuelos: `Siempre en mi corazón, ${name}`,
    hermanos: `Qué suerte tenerte, ${name}`,
    boda: `Brindamos por vosotros, ${name}`,
    quince: `La noche de tus XV, ${name}`,
    sorpresa: `Una sorpresa para ti, ${name}`
  };
  return map[occasionId] || `Una canción para ${name}`;
}

function cancionGenerateLyrics(recipientRaw, occasionId, genreId, memoryRaw, senderRaw) {
  const name = cancionCleanName(recipientRaw, 'Mamá Carmen');
  const sender = cancionCleanName(senderRaw, 'Quien más te quiere');
  const occ = cancionGetOccasion(occasionId);
  const mem = String(memoryRaw || '').trim() || occ.defaultMemory;

  const hooks = {
    cumpleanos: [
      `Hoy el calendario brilla distinto porque es tu día, ${name},`,
      `y antes de soplar las velas quiero que escuches esta melodía.`,
      `No cabe en una tienda lo que significas aquí,`,
      `recordando ${mem}.`
    ],
    mama: [
      `${name}, si supieras cuántas veces tu voz me salvó el día,`,
      `con esa fuerza tranquila que sostiene toda nuestra vida.`,
      `Hoy nos toca devolverte un poco de lo que das sin medir,`,
      `guardando siempre ${mem}.`
    ],
    papa: [
      `${name}, nunca fuiste de discursos largos pero siempre estuviste ahí,`,
      `enseñándome con hechos lo que cuesta construir y seguir.`,
      `Hoy levanto esta canción para darte las gracias de verdad,`,
      `por ${mem}.`
    ],
    pareja: [
      `${name}, todavía me acuerdo del instante en que cambió mi suerte,`,
      `cuando descubrí que contigo hasta un lunes se vuelve fuerte.`,
      `Si me dieran a elegir mil vidas volvería justo aquí,`,
      `reviviendo ${mem}.`
    ],
    hijos: [
      `${name}, desde el primer día llenaste nuestra casa de alegría,`,
      `y cada paso tuyo es el regalo más grande de nuestra vida.`,
      `Cuando crezcas vuelve a darle al play para recordar cuánto te amamos,`,
      `celebrando ${mem}.`
    ],
    amigos: [
      `Atención que hoy suena el himno oficial de ${name},`,
      `nadie más en este grupo tiene historias tan épicas como tú.`,
      `Entre risas y locuras nos salvaste mil veces el día,`,
      `recordando ${mem}.`
    ],
    abuelos: [
      `${name}, en tus manos vive la historia más bonita de esta casa,`,
      `cada consejo tuyo es un tesoro que el tiempo nunca borra ni pasa.`,
      `Esta canción queda guardada para que la escuches una y otra vez,`,
      `celebrando ${mem}.`
    ],
    hermanos: [
      `${name}, aunque a veces discutamos sabes que siempre somos equipo,`,
      `cómplices de secretos, risas y recuerdos desde pequeños.`,
      `Hoy te dedico esta canción para que no olvides lo que vales,`,
      `guardando ${mem}.`
    ],
    boda: [
      `Hoy alzamos las copas por ${name} en un día para la historia,`,
      `que esta melodía guarde para siempre el brillo de vuestra mirada.`,
      `Que la vida os regale mil viajes, risas y bailes juntos,`,
      `recordando ${mem}.`
    ],
    quince: [
      `Hoy se ilumina la pista porque llegaron tus quince, ${name},`,
      `de niña soñadora a la mujer increíble que brilla en este día.`,
      `Toda tu gente se reúne para celebrar quién eres hoy,`,
      `recordando ${mem}.`
    ],
    sorpresa: [
      `Pensabas que me había olvidado, ${name}, pero escucha bien esto,`,
      `en vez de un regalo frío quise escribir algo solo con tu nombre.`,
      `Cada acorde lleva un mensaje que nunca se borra ni se gasta,`,
      `pensando en ${mem}.`
    ]
  };

  const chorusByGenre = {
    mariachi: [
      `¡Que suenen las trompetas hoy por ${name}!`,
      `Que se entere el mundo entero de lo mucho que te amamos.`,
      `Brindamos por tu vida, por tu risa y por tu luz,`,
      `porque nadie en esta tierra vale tanto como tú.`
    ],
    cumbia: [
      `Sube el volumen que hoy bailamos por ${name},`,
      `palmas arriba que la fiesta acaba de empezar.`,
      `Con todo el cariño de ${sender} en cada compás,`,
      `que cumplas mil sueños y nunca dejes de brillar.`
    ],
    balada_piano: [
      `${name}, quédate esta canción para siempre,`,
      `cuando dudes de cuánto te quiero, dale al play otra vez.`,
      `Escrita nota a nota con tu nombre y nuestra verdad,`,
      `de parte de ${sender}, hoy y para toda la eternidad.`
    ],
    pop_acustico: [
      `Hoy cantamos fuerte tu nombre, ${name},`,
      `porque un regalo cualquiera se olvida, pero esta canción se queda.`,
      `Cada acorde guarda un abrazo de ${sender},`,
      `para que la escuches siempre que quieras volver a sonreír.`
    ],
    rumba: [
      `Venga esas palmas que hoy celebramos a ${name},`,
      `que la alegría llene la casa de principio a fin.`,
      `Con tu nombre cantado a compás y el corazón en la mano,`,
      `de ${sender} para ti, ¡que la vida te siga sonriendo así!`
    ],
    bachata: [
      `Baila despacio esta canción escrita solo para ti, ${name},`,
      `cada guitarra lleva guardado lo que siento cuando te miro.`,
      `Un código pequeño para un cariño gigante,`,
      `firmado por ${sender}, hoy, mañana y en cada instante.`
    ]
  };

  return {
    verse: hooks[occasionId] || hooks.cumpleanos,
    chorus: chorusByGenre[genreId] || chorusByGenre.pop_acustico,
    outro: [
      `Escanea este recuerdo cuando quieras volver a este instante, ${name}.`,
      `Con todo el cariño, ${sender}.`
    ]
  };
}
