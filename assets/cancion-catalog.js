/* ==========================================================================
   TUCANCIÓNQR · CATÁLOGO DE OCASIONES, ESTILOS ES/MX/AR, DEMOS Y LETRAS IA
   ========================================================================== */

const CANCION_OCCASIONS = [
  { id: 'cumpleanos', label: 'Cumpleaños', defaultName: 'Mamá Carmen', defaultMemory: 'su sonrisa cada mañana y las comidas de los domingos', shortTag: 'Cumpleaños' },
  { id: 'mama', label: 'Mamá', defaultName: 'Mamá Elena', defaultMemory: 'estar siempre ahí sin pedir nada a cambio', shortTag: 'Para Mamá' },
  { id: 'papa', label: 'Papá', defaultName: 'Papá Carlos', defaultMemory: 'sus consejos en el coche y su sentido del humor', shortTag: 'Para Papá' },
  { id: 'pareja', label: 'Pareja / Aniversario', defaultName: 'Lucía', defaultMemory: 'nuestro primer café bajo la lluvia y 5 años juntos', shortTag: 'Aniversario' },
  { id: 'quince', label: 'Quinceañera (XV)', defaultName: 'Valeria', defaultMemory: 'verla crecer y celebrar sus 15 con toda la familia', shortTag: 'XV Años' },
  { id: 'abuelos', label: 'Abuelos / Familia', defaultName: 'Abuela Rosa', defaultMemory: 'sus abrazos eternos y las historias de siempre', shortTag: 'Familia' }
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
    region: 'Argentina · México',
    bpm: 102,
    mood: 'Ritmo alegre para bailar en familia',
    audioFile: 'assets/audio/demo-cumbia-valeria.mp3',
    demoId: 'cumbia'
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
    sender: 'Tu familia en Monterrey',
    occasion: 'papa',
    genre: 'mariachi',
    genreLabel: 'Mariachi · México',
    duration: '0:30',
    audioFile: 'assets/audio/demo-mariachi-carlos.mp3',
    memory: 'tu ejemplo diario, tus chistes y el orgullo de tenerte',
    highlight: '«Que suenen las trompetas para Don Carlos en su día...»'
  },
  {
    id: 'cumbia',
    title: 'Los XV de Valeria',
    recipient: 'Valeria',
    sender: 'Mamá, Papá y tus primos',
    occasion: 'quince',
    genre: 'cumbia',
    genreLabel: 'Cumbia Festiva · Arg / Méx',
    duration: '0:30',
    audioFile: 'assets/audio/demo-cumbia-valeria.mp3',
    memory: 'tu risa contagiosa y esta noche mágica de tus quince',
    highlight: '«Hoy baila todo el mundo porque Valeria cumple quince...»'
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
    quince: `La noche de tus XV, ${name}`,
    abuelos: `Siempre en mi corazón, ${name}`
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
    quince: [
      `Hoy se ilumina la pista porque llegaron tus quince, ${name},`,
      `de niña soñadora a la mujer increíble que brilla en este día.`,
      `Toda tu gente se reúne para celebrar quién eres hoy,`,
      `recordando ${mem}.`
    ],
    abuelos: [
      `${name}, en tus manos vive la historia más bonita de esta casa,`,
      `cada consejo tuyo es un tesoro que el tiempo nunca borra ni pasa.`,
      `Esta canción queda guardada para que la escuches una y otra vez,`,
      `celebrando ${mem}.`
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
