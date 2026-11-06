/* ==========================================================================
   MIWEBLOCAL.COM — MOTOR UNIVERSAL DE +65 OFICIOS Y SOLUCIONES REALES (ESPAÑA)
   Conecta:
   1) Generador en vivo 15s (index.html + /sitio/ + /admin/)
   2) 8 Módulos Interactivos de Solución al WhatsApp sin comisiones
   3) Comparador Animado Problema vs. Solución (#solucion-nicho)
   4) Estudio de Vídeos Virales Faceless 9:16 (videos-tiktok.html)
   5) Respaldo Inteligente Universal para cualquier oficio no listado
   ========================================================================== */

const OFICIOS_CATEGORIES = [
  { id: 'all', label: 'Todos (+65)', short: 'Todos', icon: 'ph-squares-four' },
  { id: 'hogar', label: 'Oficios y Hogar', short: 'Oficios', icon: 'ph-hammer' },
  { id: 'motor', label: 'Motor y Vehículos', short: 'Motor', icon: 'ph-wrench' },
  { id: 'belleza', label: 'Belleza y Bienestar', short: 'Belleza', icon: 'ph-scissors' },
  { id: 'salud', label: 'Salud y Mascotas', short: 'Salud', icon: 'ph-heartbeat' },
  { id: 'hosteleria', label: 'Hostelería y Alimentación', short: 'Hostelería', icon: 'ph-fork-knife' },
  { id: 'comercio', label: 'Comercio y Servicios', short: 'Comercio', icon: 'ph-storefront' }
];

const ACTION_MODULES_META = {
  medidas_presupuesto: {
    id: 'medidas_presupuesto',
    badge: 'Calculadora de Presupuesto con Medidas',
    ctaShort: 'Pedir presupuesto',
    summary: 'Selector de trabajo + medidas aproximadas (ancho × alto o m²), material y zona directos al WhatsApp.'
  },
  urgencia_o_llaves: {
    id: 'urgencia_o_llaves',
    badge: 'Doble Modo: Urgencia 24h + Copia / Modelo',
    ctaShort: 'Asistencia / Llaves',
    summary: 'Modo Urgencia 24h con calle exacta o Presupuesto de llave/mando/avería indicando modelo antes de salir.'
  },
  motor_diagnostico: {
    id: 'motor_diagnostico',
    badge: 'Recepción de Vehículo + Matrícula y Síntoma',
    ctaShort: 'Cita de taller',
    summary: 'Matrícula/modelo + síntoma o pack elegido + preferencia de día directos al WhatsApp sin soltar la llave.'
  },
  recepcion_taller_local: {
    id: 'recepcion_taller_local',
    badge: 'Tarifa al Instante + Aviso de Recogida',
    ctaShort: 'Consultar arreglo',
    summary: 'Selector de dispositivo, prenda o calzado + avería con precio orientativo y aviso al terminar.'
  },
  encargo_sin_cola: {
    id: 'encargo_sin_cola',
    badge: 'Encargos con Hora de Recogida · 0% Comisión',
    ctaShort: 'Hacer encargo',
    summary: 'Selector de productos/pack + unidades + hora exacta de recogida en tienda sin colas al teléfono.'
  },
  mesa_carta: {
    id: 'mesa_carta',
    badge: 'Reserva Salón / Terraza + Carta · 0% Comisión',
    ctaShort: 'Reservar mesa',
    summary: 'Reserva de salón o terraza por comensales y turno + carta visual con 0 € de comisión por comensal.'
  },
  agenda_citas: {
    id: 'agenda_citas',
    badge: 'Agenda de Citas Directa · Sin Apps del 25%',
    ctaShort: 'Pedir cita',
    summary: 'Servicio con precio y duración + día y tramo horario cerrado directo al WhatsApp del negocio.'
  },
  filtro_clientes: {
    id: 'filtro_clientes',
    badge: 'Filtro Previo de Clientes Cualificados',
    ctaShort: 'Solicitar estudio',
    summary: 'Cualificación previa de caso, inmueble o fecha de evento para recibir solo contactos reales en WhatsApp.'
  }
};

const OFICIOS_RAW_LIST = [
  // =========================================================================
  // 1. OFICIOS Y HOGAR (17 oficios)
  // =========================================================================
  {
    id: 'carpintero', cat: 'hogar', day: 'DÍA 18', emoji: '🔨', icon: 'ph-hammer',
    label: 'Carpintero / Ebanista', plural: 'Carpinteros y Ebanistas', singular: 'carpintero',
    actionType: 'medidas_presupuesto', theme: 'atelier', sceneKind: 'woodwork',
    defaultName: 'Carpintería Roble Vivo', placeholder: 'Ej. Carpintería Hnos. Gómez Valencia',
    yearsExp: 'Carpintería a Medida · Taller Propio',
    tagline: 'Armarios empotrados, puertas y cocinas a medida que encajan al milímetro.',
    story: 'Fabricamos e instalamos en madera natural y lacados de alta resistencia. Indícanos tus medidas aproximadas y recibe valoración sin visitas en balde.',
    img: '/assets/real/carpinteria_hero.jpg',
    gal: ['/assets/real/carpinteria_hero.jpg', '/assets/real/reformas_work_1.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['carpinter', 'ebanist', 'madera', 'armario', 'puertas de paso', 'vestidor', 'tarima', 'parquet', 'mueble a medida'],
    services: [
      ['Armario Empotrado a Medida', 'Interior vestido con cajoneras + frentes lacados o roble', 'Desde 890 €'],
      ['Puertas de Paso Macizas (ud.)', 'Block completo con herrajes, manivela y tapajuntas', 'Desde 265 €'],
      ['Mobiliario de Cocina a Medida', 'Cajones freno suave + distribución personalizada', 'Presupuesto'],
      ['Tarima Flotante AC5 / Parquet', 'Suministro, rodapié blanco lacado e instalación', 'Desde 34 €/m²']
    ],
    wcfg: {
      heading: 'Calcula tu solicitud de carpintería con medidas',
      sub: 'Indica qué mueble o trabajo buscas y las medidas aproximadas del hueco para darte presupuesto certero.',
      dimLabel: '2. Medidas aproximadas (ancho × alto o m²)',
      dimPlaceholder: 'Ej. 240 × 235 cm (o 4 puertas)',
      dimChips: ['180 × 220 cm', '240 × 240 cm', '300 × 250 cm', 'Piso completo'],
      matLabel: '3. Acabado o madera preferida',
      materials: ['Lacado blanco mate seda', 'Roble natural nudoso', 'Nogal / Madera maciza', 'Aconsejadme material']
    },
    calls: 14,
    badCalls: ['"¿Cuánto me sale un armario más o menos?"', '"Pásate a medir sin compromiso a ver si me cuadra"', '"¿Hacéis puertas blancas? Solo quiero orientarme"'],
    painTitle: 'Perder tardes enteras dando presupuestos a ojo sin medidas ni acabado',
    painSpoken: 'Un carpintero pierde horas cada semana parando la escuadradora para contestar mensajes sin una sola medida o yendo a medir a casas de curiosos que solo querían tantear precio.',
    solSpoken: 'El cliente elige armario, puertas o cocina, apunta el ancho por alto aproximado, el acabado en roble o lacado blanco y su zona, y te entra filtrado al WhatsApp listo para presupuestar en dos minutos.',
    waLines: ['• Trabajo: Armario Empotrado a Medida', '• Medidas: 240 × 240 cm · Roble natural', '• Zona: Javier (Valencia) · Hueco listo']
  },
  {
    id: 'cerrajero', cat: 'hogar', day: 'DÍA 19', emoji: '🔑', icon: 'ph-key',
    label: 'Cerrajero 24h y Copia de Llaves ("Llavero")', plural: 'Cerrajeros y Llaveros', singular: 'cerrajero y llavero',
    actionType: 'urgencia_o_llaves', theme: 'gold', sceneKind: 'locksmith',
    defaultName: 'Cerrajería y Llaves LlaveMaestra', placeholder: 'Ej. Cerrajería y Mandos Gómez Alicante',
    yearsExp: 'Urgencias 20 min · Copia de Llaves y Mandos',
    tagline: 'Aperturas urgentes sin romper y copia de llaves de casa, coche y garaje en el acto.',
    story: 'Servicio urgente 24h con precio cerrado antes de desplazarnos, y tienda taller de duplicado de llaves de alta seguridad, mandos de garaje y llaves de coche con chip.',
    img: '/assets/real/llavero_hero.jpg',
    gal: ['/assets/real/llavero_hero.jpg', '/assets/real/cerrajeria_llaves.jpg', '/assets/real/cerrajeria_coche.jpg'],
    kw: ['cerrajer', 'llaver', 'copia de llave', 'duplicado de llave', 'mandos de garaje', 'bombin', 'antibumping', 'cerradura', 'apertura de puerta'],
    services: [
      ['Apertura de Puerta Urgente (Sin Daños)', 'Llegada en ~20 min · Precio cerrado antes de salir', 'Desde 65 €'],
      ['Copia de Llave de Coche con Mando / Chip', 'Codificación en el acto (ahorra hasta 50% vs concesionario)', 'Desde 75 €'],
      ['Cambio a Bombín Antibumping Alta Seguridad', 'Escudo acorazado + 5 llaves incopiables incluidas', 'Desde 115 €'],
      ['Duplicado de Mando de Garaje / Llave Seguridad', 'Mandos evolutivos multimarca y llaves de puntos', 'Desde 22 €']
    ],
    wcfg: {
      tabUrgent: '🚨 Urgencia 24h Ahora',
      tabQuote: '🔑 Copia Llave / Mando / Bombín',
      urgentOptions: ['Apertura puerta (llaves dentro)', 'Cerradura bloqueada / robo', 'Apertura vehículo sin daños', 'Persiana metálica de local bloqueada'],
      quoteOptions: ['Copia llave de coche con mando/chip', 'Duplicado mando de garaje', 'Instalar bombín antibumping', 'Copia llaves de seguridad / puntos'],
      modelLabel: '2. Marca y modelo de coche, mando o cerradura',
      modelPlaceholder: 'Ej. Seat León 2020 / Bombín Tesa / Mando Clemsa'
    },
    calls: 19,
    badCalls: ['"Me he dejado las llaves dentro, ¿cuánto tardas y cuánto cobras?"', '"¿Hacéis copia de llave con mando de un Peugeot 308?"', '"Tengo un bombín antiguo pero no sé qué marca es"'],
    painTitle: 'Llamadas a destiempo sin saber la calle exacta ni qué cerradura o llave de coche tienen',
    painSpoken: 'A un cerrajero o llavero le suena el móvil mientras está tallando una llave con chip o abriendo una puerta blindada, y el cliente no sabe explicarle ni qué cerradura tiene ni el modelo exacto de mando.',
    solSpoken: 'Su web tiene doble modo inteligente: si es una urgencia 24 horas pide avería y calle exacta, y si busca copia de llave de coche, mando de garaje o bombín pide marca y modelo exacto directo a tu WhatsApp.',
    waLines: ['• Modo: 🔑 Copia llave coche con chip', '• Modelo: Seat León 2020 (plegable)', '• Cliente: David · Pasa hoy a las 17:30']
  },
  {
    id: 'fontanero', cat: 'hogar', day: 'DÍA 20', emoji: '🚰', icon: 'ph-drop',
    label: 'Fontanero y Desatascos', plural: 'Fontaneros', singular: 'fontanero',
    actionType: 'urgencia_o_llaves', theme: 'royal', sceneKind: 'locksmith',
    defaultName: 'Fontanería HidroRápid', placeholder: 'Ej. Fontanería Morales Zaragoza',
    yearsExp: 'Fontaneros Autorizados · Urgencias y Reformas',
    tagline: 'Fugas de agua, desatascos, termos y grifería con tarifa clara desde el primer minuto.',
    story: 'Localizamos averías sin picar de más, cambiamos termos eléctricos y calderas en el día y atendemos urgencias de agua con garantía por escrito.',
    img: '/assets/real/cerrajeria_work_1.jpg',
    gal: ['/assets/real/cerrajeria_work_1.jpg', '/assets/real/reformas_work_1.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['fontaner', 'desatasc', 'fuga de agua', 'tuberia', 'termo electrico', 'caldera', 'cisterna', 'griferia', 'humedad'],
    services: [
      ['Reparación de Fuga / Avería Urgente', 'Localización y sellado limpio en el día', 'Desde 59 €'],
      ['Desatasco de Fregadero, Bote o Bajante', 'Máquina desatascadora profesional sin obras', 'Desde 70 €'],
      ['Cambio de Termo Eléctrico (80–100L)', 'Retirada del antiguo + instalación completa', 'Desde 265 €'],
      ['Sustitución de Cisterna, Grifo o Llaves', 'Repuestos primeras marcas Roca / Grohe', 'Desde 49 €']
    ],
    wcfg: {
      tabUrgent: '🚨 Fuga / Desatasco Hoy',
      tabQuote: '🛁 Termo / Baño / Presupuesto',
      urgentOptions: ['Fuga de agua activa / rotura', 'Atasco en fregadero, ducha o WC', 'Sin agua caliente (termo/caldera)', 'Goteo en llave de paso o radiador'],
      quoteOptions: ['Cambiar termo eléctrico o calentador', 'Cambiar bañera por plato de ducha', 'Instalar grifería / sanitario nuevo', 'Boletín de agua / acometida'],
      modelLabel: '2. Detalle o litros / marca del equipo',
      modelPlaceholder: 'Ej. Termo 80L vertical / Fregadero cocina'
    },
    calls: 17,
    badCalls: ['"Pierde agua debajo del fregadero, ¿puedes venir ya?"', '"¿Cuánto cuesta cambiar un termo de 80 litros puesto?"', '"Se ha atascado la ducha, ¿cobráis desplazamiento?"'],
    painTitle: 'Estar debajo de un fregadero con las manos mojadas mientras el teléfono no para de sonar',
    painSpoken: 'Un fontanero está soldando cobre debajo de un lavabo y le entran quince llamadas seguidas sin saber si es una fuga urgente en tu mismo barrio o un presupuesto de termo para la semana que viene.',
    solSpoken: 'Tu página separa sola las urgencias de hoy con calle exacta de los cambios de termo o grifería con litros y detalles, enviándotelo masticado al WhatsApp.',
    waLines: ['• Aviso: 🚨 Fuga bajo fregadero cocina', '• Dirección: C/ Mayor 18, 3ºB', '• Estado: Llave cortada · Urgente hoy']
  },
  {
    id: 'electricista', cat: 'hogar', day: 'DÍA 21', emoji: '⚡', icon: 'ph-lightning',
    label: 'Electricista Autorizado', plural: 'Electricistas', singular: 'electricista',
    actionType: 'urgencia_o_llaves', theme: 'royal', sceneKind: 'locksmith',
    defaultName: 'ElectroLuz Instaladores', placeholder: 'Ej. Electricidad Vega Sevilla',
    yearsExp: 'Instalador Autorizado · Boletines CIE y Averías',
    tagline: 'Averías eléctricas, cuadros, boletines oficiales y cargadores de coche eléctrico.',
    story: 'Solucionamos apagones y saltos de diferencial en el día, emitimos certificados eléctricos CIE para subir potencia e instalamos iluminación LED y puntos Wallbox.',
    img: '/assets/real/reformas_work_1.jpg',
    gal: ['/assets/real/reformas_work_1.jpg', '/assets/real/cerrajeria_work_1.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['electricist', 'boletin electrico', 'apagon', 'diferencial', 'cuadro electrico', 'enchufe', 'cargador coche', 'wallbox', 'cie'],
    services: [
      ['Reparación de Apagón / Salto Diferencial', 'Diagnóstico con analizador y sustitución de protecciones', 'Desde 60 €'],
      ['Boletín Eléctrico Oficial (CIE)', 'Revisión reglamentaria + registro oficial Industria', 'Desde 120 €'],
      ['Renovación de Cuadro Eléctrico + Sobretensiones', 'Protección normativa completa vivienda o local', 'Desde 240 €'],
      ['Instalación Cargador Coche Eléctrico (Wallbox)', 'Línea directa desde contador + legalización', 'Desde 590 €']
    ],
    wcfg: {
      tabUrgent: '⚡ Avería / Apagón Hoy',
      tabQuote: '📋 Boletín / Cuadro / Cargador',
      urgentOptions: ['Sin luz en casa o en el local', 'Salta el diferencial o térmico', 'Olor a quemado en enchufe o cuadro', 'Fallo eléctrico en cierre o maquinaria'],
      quoteOptions: ['Boletín eléctrico oficial (CIE)', 'Instalar cargador coche eléctrico', 'Renovar cuadro o cableado vivienda', 'Iluminación LED en local o comunidad'],
      modelLabel: '2. Potencia actual, zona de garaje o detalle',
      modelPlaceholder: 'Ej. Subir potencia a 5,75 kW / Garaje comunitario'
    },
    calls: 16,
    badCalls: ['"Me salta el diferencial cada dos por tres, ¿vienes hoy?"', '"Necesito el boletín para subir potencia, ¿cuánto tarda?"', '"¿Instaláis cargador de coche en garaje comunitario?"'],
    painTitle: 'Subido a la escalera midiendo tensión y perdiendo boletines y averías urgentes',
    painSpoken: 'Cuando estás con el polímetro en un cuadro eléctrico no puedes coger el móvil, y cuando devuelves la llamada el cliente ya ha avisado a otro instalador.',
    solSpoken: 'Desde tu web el vecino indica en diez segundos si se ha quedado sin luz con su calle exacta o si necesita un boletín CIE o un cargador, y te queda registrado en tu WhatsApp.',
    waLines: ['• Gestión: 📋 Boletín Eléctrico CIE', '• Detalle: Subida potencia a 5,75 kW', '• Zona: Piso en Centro · Carlos M.']
  },
  {
    id: 'reformas', cat: 'hogar', day: 'DÍA 5', emoji: '🏗️', icon: 'ph-house-line',
    label: 'Reformas Integrales', plural: 'Empresas de Reformas', singular: 'empresa de reformas',
    actionType: 'medidas_presupuesto', theme: 'gold', sceneKind: 'woodwork',
    defaultName: 'Reformas Horizonte', placeholder: 'Ej. Reformas Norte Bilbao',
    yearsExp: 'Presupuesto Cerrado · Plazos por Contrato',
    tagline: 'Reformas de baños, cocinas y viviendas completas sin sorpresas ni retrasos.',
    story: 'Coordinamos todos los gremios (albañilería, fontanería, electricidad y carpintería) con jefe de obra propio y fechas de entrega firmadas por escrito.',
    img: '/assets/real/reformas_hero.jpg',
    gal: ['/assets/real/reformas_hero.jpg', '/assets/real/reformas_work_2.jpg', '/assets/real/reformas_work_1.jpg'],
    kw: ['reforma', 'albanil', 'obra', 'cambiar banera', 'plato de ducha', 'reforma integral', 'cocina y bano', 'alicatado', 'pladur'],
    services: [
      ['Cambio de Bañera por Plato de Ducha', 'Plato carga mineral antideslizante + mampara en 24–48h', 'Desde 1.190 €'],
      ['Reforma Completa de Cuarto de Baño', 'Fontanería nueva, porcelánico, mueble y sanitarios', 'Desde 3.600 €'],
      ['Reforma Integral de Cocina', 'Instalaciones, alicatado, mobiliario y encimera', 'Desde 5.900 €'],
      ['Reforma Integral de Vivienda (m²)', 'Llave en mano con todos los oficios coordinados', 'Desde 520 €/m²']
    ],
    wcfg: {
      heading: 'Solicita valoración filtrada para tu reforma',
      sub: 'Filtra estancia, metros aproximados y calidades para agendar visita técnica real.',
      dimLabel: '2. Superficie o estancia aproximada',
      dimPlaceholder: 'Ej. Baño 5 m² / Piso 85 m²',
      dimChips: ['Baño (< 6 m²)', 'Cocina (10–15 m²)', 'Piso 70–90 m²', 'Vivienda +100 m²'],
      matLabel: '3. Estado y plazo deseado',
      materials: ['Empezar este mes / próximo mes', 'Ya tengo llaves del piso', 'Calidad media-alta porcelánico', 'Busco presupuesto orientativo']
    },
    calls: 15,
    badCalls: ['"Quiero reformar un piso pero aún no lo he comprado"', '"¿Cuánto vale hacer un baño entero más o menos?"', '"Pásate a verlo el sábado por la tarde sin compromiso"'],
    painTitle: 'Visitar obras que nunca se hacen y perder tardes presupuestando sin filtro',
    painSpoken: 'En reformas el mayor agujero de tiempo es ir a medir pisos de gente que aún ni tiene las llaves o que espera reformar un baño entero por quinientos euros.',
    solSpoken: 'Tu web enseña obras reales con precios desde orientativos y filtra estancia, metros cuadrados y plazo antes de enviarte la solicitud a tu WhatsApp.',
    waLines: ['• Obra: Reforma Completa de Baño', '• Superficie: 6 m² · Ya tiene llaves', '• Zona: Marta · Bilbao Centro']
  },
  {
    id: 'pintor', cat: 'hogar', day: 'DÍA 22', emoji: '🎨', icon: 'ph-paint-roller',
    label: 'Pintor y Alisado de Paredes', plural: 'Pintores', singular: 'pintor',
    actionType: 'medidas_presupuesto', theme: 'royal', sceneKind: 'woodwork',
    defaultName: 'Pinturas Trazo Limpio', placeholder: 'Ej. Pintores Decoración López Madrid',
    yearsExp: 'Tapado Integral · Limpieza Garantizada',
    tagline: 'Alisado de gotelé, pintura plástica lavable y fachadas con acabado impecable.',
    story: 'Protegemos suelos, puertas y muebles al milímetro antes de abrir un bote. Pinturas ecológicas sin olor y entrega limpia en el plazo acordado.',
    img: '/assets/real/reformas_work_2.jpg',
    gal: ['/assets/real/reformas_work_2.jpg', '/assets/real/reformas_hero.jpg', '/assets/real/reformas_work_1.jpg'],
    kw: ['pintor', 'pintura', 'alisar paredes', 'quitar gotele', 'gotele', 'papel pintado', 'esmalte', 'fachada', 'estuco'],
    services: [
      ['Pintar Piso en Blanco Mate Lavable (hasta 75 m²)', 'Tapado completo, emplastecido de grietas y 2 manos', 'Desde 690 €'],
      ['Quitar Gotelé y Alisado Completo (m²)', 'Tendido de renovación + lijado sin polvo + pintura', 'Desde 16 €/m²'],
      ['Pintura de Habitación o Salón Suelto', 'En el mismo día sin manchar mobiliario', 'Desde 165 €'],
      ['Instalación de Papel Pintado / Lacado Puertas', 'Ajuste perfecto de juntas y esmaltes poliuretano', 'Presupuesto']
    ],
    wcfg: {
      heading: 'Calcula presupuesto de pintura según m² de tu piso',
      sub: 'Indica metros de vivienda y si las paredes son lisas o tienen gotelé.',
      dimLabel: '2. Metros de piso o nº de habitaciones',
      dimPlaceholder: 'Ej. Piso 80 m² (3 habitaciones)',
      dimChips: ['1–2 habitaciones', 'Piso 60–75 m²', 'Piso 80–110 m²', 'Chalet / Local'],
      matLabel: '3. Estado actual de paredes',
      materials: ['Pared lisa · Pintar en blanco', 'Tiene gotelé y quiero alisar', 'Piso amueblado (tapar todo)', 'Piso vacío recién entregado']
    },
    calls: 13,
    badCalls: ['"¿Cuánto cobráis por pintar un piso de tres habitaciones?"', '"¿Quitáis gotelé sin hacer mucho polvo?"', '"Lo necesito pintado para este viernes que entra el inquilino"'],
    painTitle: 'Subido al andamio con el rodillo y contestando cuánto vale pintar un piso sin saber metros ni si está vacío',
    painSpoken: 'No cuesta lo mismo pintar un piso vacío en liso blanco que alisar gotelé con todos los muebles dentro, pero por teléfono todo el mundo te pide precio cerrado a ciegas.',
    solSpoken: 'El cliente marca en tu web los metros del piso, si está vacío o amueblado y si quiere quitar gotelé, y te llega todo detallado al WhatsApp.',
    waLines: ['• Trabajo: Pintar Piso Blanco Lavable', '• Tamaño: 80 m² · Vacío y paredes lisas', '• Zona: Lucía · Entrega llaves lunes']
  },
  {
    id: 'cristalero', cat: 'hogar', day: 'DÍA 23', emoji: '💎', icon: 'ph-frame-corners',
    label: 'Cristalero y Mamparas a Medida', plural: 'Cristaleros', singular: 'cristalero',
    actionType: 'medidas_presupuesto', theme: 'royal', sceneKind: 'woodwork',
    defaultName: 'Cristalería VidrioPuro', placeholder: 'Ej. Cristalería San Juan Alicante',
    yearsExp: 'Vidrio Templado · Mamparas y Escaparates',
    tagline: 'Mamparas de baño a medida, espejos LED, doble acristalamiento y escaparates.',
    story: 'Cortamos e instalamos vidrio templado de seguridad, espejos a medida y cristales térmicos Climalit con medición láser y sellado antihumedad.',
    img: '/assets/real/reformas_hero.jpg',
    gal: ['/assets/real/reformas_hero.jpg', '/assets/real/carpinteria_hero.jpg', '/assets/real/reformas_work_2.jpg'],
    kw: ['cristaler', 'vidrio', 'mampara de ducha', 'espejo a medida', 'escaparate', 'climalit', 'cristal templado', 'barandilla cristal'],
    services: [
      ['Mampara de Ducha a Medida Antical', 'Vidrio templado 8mm + perfilería negra, cromo o plata', 'Desde 320 €'],
      ['Espejo a Medida con Luz LED', 'Canto pulido brillante + instalación oculta', 'Desde 145 €'],
      ['Sustitución Cristal Doble Aislante (Climalit)', 'Aislamiento térmico y acústico en ventanas', 'Desde 110 €'],
      ['Urgencia Rotura Escaparate / Puerta Cristal', 'Reposición rápida apta para seguro de comercio', 'Presupuesto']
    ],
    wcfg: {
      heading: 'Pide presupuesto con medidas de cristal o mampara',
      sub: 'Dinos ancho × alto aproximado y tipo de vidrio para darte precio rápido.',
      dimLabel: '2. Medidas aproximadas en cm (ancho × alto)',
      dimPlaceholder: 'Ej. Ducha 140 × 195 cm / Espejo 120 × 80 cm',
      dimChips: ['Mampara 120 cm', 'Mampara 150 cm', 'Espejo baño', 'Escaparate local'],
      matLabel: '3. Tipo de vidrio / perfilería',
      materials: ['Templado transparente + Negro mate', 'Templado + Cromo plata', 'Cristal mateado / ácido', 'Doble cristal aislante Climalit']
    },
    calls: 12,
    badCalls: ['"Se me ha roto un cristal de la puerta, ¿cuánto vale?"', '"Quiero una mampara fija negra pero no he medido el plato"', '"¿Hacéis espejos redondos con luz para baño?"'],
    painTitle: 'Imposible dar precio de un cristal sin saber milímetros, grosor ni medidas',
    painSpoken: 'En una cristalería cada centímetro y cada templado cambia el precio por completo, pero los clientes te llaman sin metro en la mano esperando cifra exacta al instante.',
    solSpoken: 'Tu web les pide el ancho por alto en centímetros y el acabado del perfil antes de pulsar enviar, para que respondas desde la mesa de corte en treinta segundos.',
    waLines: ['• Trabajo: Mampara Ducha 8mm Antical', '• Medidas: 145 × 195 cm · Perfil negro', '• Zona: Raúl · Con factura seguro']
  },
  {
    id: 'aluminio', cat: 'hogar', day: 'DÍA 24', emoji: '🏠', icon: 'ph-house-line',
    label: 'Carpintería de Aluminio y PVC', plural: 'Carpinterías de Aluminio y PVC', singular: 'carpintería de aluminio',
    actionType: 'medidas_presupuesto', theme: 'gold', sceneKind: 'woodwork',
    defaultName: 'Ventanas ClimaCierre PVC', placeholder: 'Ej. Aluminios y PVC Levante Murcia',
    yearsExp: 'Rotura Puente Térmico · PVC Kömmerling / Cortizo',
    tagline: 'Ventanas de PVC y aluminio que aíslan del frío, el calor y el ruido de la calle.',
    story: 'Fabricación e instalación sin albañilería en el mismo día. Ventanas oscilobatientes, cerramientos de terraza, mosquiteras y mallorquinas a medida.',
    img: '/assets/real/reformas_work_2.jpg',
    gal: ['/assets/real/reformas_work_2.jpg', '/assets/real/carpinteria_hero.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['carpinteria de aluminio', 'aluminio y pvc', 'ventanas pvc', 'cerramiento', 'oscilobatiente', 'rotura puente termico', 'mosquitera', 'kommerling', 'cortizo'],
    services: [
      ['Ventana Oscilobatiente PVC Aislante + Persiana', 'Triple junta + vidrio bajo emisivo · Instalación sin obra', 'Desde 395 €'],
      ['Balconera Corredera / Oscilobatiente 2 Hojas', 'Aluminio RPT o PVC alta eficiencia energética', 'Desde 680 €'],
      ['Cerramiento de Terraza o Galería a Medida', 'Cortina de cristal o aluminio térmico estanco', 'Presupuesto'],
      ['Mosquiteras Enrollables / Plisadas a Medida', 'Aluminio lacado en el color exacto de tu ventana', 'Desde 58 €']
    ],
    wcfg: {
      heading: 'Presupuesto rápido de ventanas PVC o Aluminio',
      sub: 'Indica número de ventanas y medidas aproximadas para enviarte valoración detallada.',
      dimLabel: '2. Nº de ventanas y medidas aprox.',
      dimPlaceholder: 'Ej. 4 ventanas de 120 × 135 cm con persiana',
      dimChips: ['1–2 ventanas', '4–5 ventanas (piso)', 'Cerramiento terraza', 'Mosquiteras'],
      matLabel: '3. Material y color deseado',
      materials: ['PVC Blanco (Máximo aislamiento)', 'Aluminio RPT Gris Antracita', 'Imitación Madera Roble / Nogal', 'Con persiana térmica motorizada']
    },
    calls: 14,
    badCalls: ['"¿Qué sale cambiar todas las ventanas de un piso?"', '"¿Es mejor PVC o aluminio con rotura?"', '"Quiero cerrar el balcón pero no sé cuánto mide"'],
    painTitle: 'Presupuestos eternos de ventanas porque el cliente no envía número de hojas ni si llevan persiana',
    painSpoken: 'Cotizar ventanas sin saber cuántas son, cuánto miden ni si llevan cajón de persiana o motor te obliga a intercambiar veinte mensajes con cada interesado.',
    solSpoken: 'Desde tu web el cliente indica número de ventanas, medidas aproximadas y si prefiere PVC blanco, antracita o madera, y te entra ordenado a tu WhatsApp.',
    waLines: ['• Pedido: 4 Ventanas Oscilobatientes PVC', '• Medidas: ~120 × 135 cm c/persiana', '• Color: Blanco · Ana (Murcia)']
  },
  {
    id: 'tapicero', cat: 'hogar', day: 'DÍA 25', emoji: '🛋️', icon: 'ph-couch',
    label: 'Tapicero de Sofás y Muebles', plural: 'Tapiceros', singular: 'tapicero',
    actionType: 'medidas_presupuesto', theme: 'atelier', sceneKind: 'woodwork',
    defaultName: 'Tapicería Artesana Nido', placeholder: 'Ej. Tapicería Hnos. Cano Córdoba',
    yearsExp: 'Recogida y Entrega Gratis · Telas Antimanchas',
    tagline: 'Estrena tu sofá, butacas o sillas de siempre con telas antimanchas y espuma nueva.',
    story: 'Retapizamos sofás, sillones relax, sillas de comedor, cabeceros y asientos de moto/náutica con muestrario a domicilio y recogida incluida.',
    img: '/assets/real/tienda_hero.jpg',
    gal: ['/assets/real/tienda_hero.jpg', '/assets/real/carpinteria_hero.jpg', '/assets/real/reformas_work_2.jpg'],
    kw: ['tapicer', 'tapizar sofa', 'retapizar', 'butaca', 'sillon', 'cabecero', 'aquaclean', 'espuma a medida'],
    services: [
      ['Retapizado Completo de Sofá 3 Plazas / Chaise', 'Tela antimanchas lavable + revisión cinchas y gomas', 'Desde 490 €'],
      ['Tapizado de Sillas de Comedor (ud.)', 'Cambio de espuma alta densidad + tejido antimanchas', 'Desde 35 €'],
      ['Retapizado de Sillón Orejero o Butaca Relax', 'Acabado artesanal con vivo o tachuela opcional', 'Desde 210 €'],
      ['Cabecero de Cama Tapizado a Medida', 'Capitoné, lino natural o terciopelo antimanchas', 'Desde 175 €']
    ],
    wcfg: {
      heading: 'Valora el tapizado de tu sofá o sillas en 1 minuto',
      sub: 'Dinos qué mueble quieres tapizar y el tejido que te gusta; en el siguiente paso podrás adjuntar foto en WhatsApp.',
      dimLabel: '2. Plazas, unidades o medida aprox.',
      dimPlaceholder: 'Ej. Chaise longue 280 cm / 6 sillas comedor',
      dimChips: ['Sofá 2–3 plazas', 'Chaise longue', '4–6 sillas comedor', 'Butaca / Cabecero'],
      matLabel: '3. Tipo de tela preferida',
      materials: ['Tela Antimanchas Aquaclean (Mascotas/Niños)', 'Lino / Algodón natural', 'Terciopelo suave', 'Piel o Polipiel náutica']
    },
    calls: 12,
    badCalls: ['"¿Merece la pena tapizar mi sofá o comprar uno nuevo?"', '"¿Cuánto cuesta tapizar seis sillas de salón?"', '"¿Tenéis telas que no arañen los gatos?"'],
    painTitle: 'Llamadas pidiendo precio de tapizado sin ver el sofá ni saber cuántas plazas tiene',
    painSpoken: 'Un tapicero no puede valorar un chaise longue sin saber cuántas plazas tiene, si hay que cambiar espumas y sin recibir una foto del sofá en su WhatsApp.',
    solSpoken: 'Tu web recoge plazas, tejido antimanchas elegido y abre directamente el chat de WhatsApp listo para que el cliente te mande la foto del sofá en un toque.',
    waLines: ['• Mueble: Chaise longue 280 cm', '• Tela: Antimanchas Aquaclean mascotas', '• Cliente: Sonia · Adjunta foto ahora']
  },
  {
    id: 'climatizacion', cat: 'hogar', day: 'DÍA 26', emoji: '❄️', icon: 'ph-fan',
    label: 'Aire Acondicionado y Climatización', plural: 'Instaladores de Aire Acondicionado', singular: 'instalador de climatización',
    actionType: 'medidas_presupuesto', theme: 'royal', sceneKind: 'woodwork',
    defaultName: 'ClimaFresco Instalaciones', placeholder: 'Ej. ClimaSur Aire Acondicionado Málaga',
    yearsExp: 'Gases Fluorados Autorizado · Split y Conductos',
    tagline: 'Instalación limpia de aire acondicionado Split, Multisplit y conductos Inverter A+++.',
    story: 'Equipos silenciosos Mitsubishi, Daikin, Fujitsu e Hisense con instalación certificada, carga de gas y reparación de averías antes de que apriete el calor.',
    img: '/assets/real/reformas_hero.jpg',
    gal: ['/assets/real/reformas_hero.jpg', '/assets/real/reformas_work_1.jpg', '/assets/real/cerrajeria_work_1.jpg'],
    kw: ['aire acondicionado', 'climatizacion', 'split', 'conductos', 'aerotermia', 'carga de gas', 'bomba de calor', 'frigorist'],
    services: [
      ['Split 1x1 Inverter 3.000 frig. + Instalación Básica', 'Equipo A++ silencioso con WiFi + puesta en marcha', 'Desde 649 €'],
      ['Instalación de Máquina por Conductos', 'Con preinstalación existente + termostato digital', 'Desde 1.890 €'],
      ['Solo Instalación de Split Comprado por Cliente', 'Certificado oficial de gases fluorados incluido', 'Desde 230 €'],
      ['Revisión, Limpieza Antibacterias y Carga de Gas', 'Puesta a punto para verano/invierno sin malos olores', 'Desde 79 €']
    ],
    wcfg: {
      heading: 'Calcula qué equipo e instalación necesitas',
      sub: 'Indica estancia y si ya tienes preinstalación para darte precio cerrado.',
      dimLabel: '2. Estancias y metros aproximados',
      dimPlaceholder: 'Ej. Salón 25 m² + Dormitorio 14 m²',
      dimChips: ['1 Split (Salón)', '2 Splits (2x1)', 'Conductos toda la casa', 'Solo avería / gas'],
      matLabel: '3. Situación de la instalación',
      materials: ['Tiene preinstalación hecha', 'Instalación nueva (pared a fachada)', 'Sustituir máquina antigua', 'Necesito asesoramiento técnico']
    },
    calls: 21,
    badCalls: ['"En junio: ¿podéis ponerme un aire mañana mismo?"', '"Tengo comprado un split, ¿cuánto cobráis solo por montarlo?"', '"El aire enfría poco, ¿le echáis gas?"'],
    painTitle: 'En plena ola de calor te colapsan el móvil mientras estás colgado instalando una compresora',
    painSpoken: 'En mayo, junio y julio un instalador de aire acondicionado recibe treinta llamadas diarias mientras está en una fachada, sin saber si tienen preinstalación o cuántos metros tiene el salón.',
    solSpoken: 'Tu página muestra packs con instalación incluida y pregunta estancias, metros y si hay preinstalación antes de mandarte el pedido ordenado a tu WhatsApp.',
    waLines: ['• Equipo: Split 3.000 frig. + Instalación', '• Estancia: Salón 24 m² · Con preinstalación', '• Zona: Miguel · Málaga']
  },
  {
    id: 'placas_solares', cat: 'hogar', day: 'DÍA 27', emoji: '☀️', icon: 'ph-sun',
    label: 'Placas Solares y Autoconsumo', plural: 'Instaladores de Placas Solares', singular: 'instalador solar',
    actionType: 'medidas_presupuesto', theme: 'sage', sceneKind: 'woodwork',
    defaultName: 'SolDirecto Energía', placeholder: 'Ej. SolarLevante Autoconsumo Elche',
    yearsExp: 'Legalización y Subvenciones Incluidas · Ahorro 70%',
    tagline: 'Placas solares en tu tejado con estudio real de ahorro y tramitación llave en mano.',
    story: 'Instalamos paneles monocristalinos Tier-1, inversores híbridos y baterías físicas o virtuales sin intermediarios comerciales que encarezcan tu presupuesto.',
    img: '/assets/real/reformas_work_2.jpg',
    gal: ['/assets/real/reformas_work_2.jpg', '/assets/real/reformas_hero.jpg', '/assets/real/reformas_work_1.jpg'],
    kw: ['placas solares', 'paneles solares', 'fotovoltaic', 'autoconsumo', 'energia solar', 'bateria solar', 'inversor solar'],
    services: [
      ['Kit Autoconsumo Vivienda 6 Paneles (~3 kWp)', 'Inversor híbrido WiFi + estructura + legalización', 'Desde 3.490 €'],
      ['Instalación Solar Familiar 10 Paneles (~5 kWp)', 'Ideal chalet con climatización o piscina + trámites', 'Desde 4.890 €'],
      ['Ampliación con Batería de Litio 5 kWh', 'Aprovecha tu energía de noche y ante apagones', 'Desde 1.950 €'],
      ['Mantenimiento y Limpieza de Instalación Solar', 'Revisión térmica de paneles, inversor y protecciones', 'Desde 95 €']
    ],
    wcfg: {
      heading: 'Pide tu estudio solar según tu factura de luz',
      sub: 'Dinos cuánto pagas al mes de luz y tu tipo de tejado para calcular cuántos paneles amortizas rápido.',
      dimLabel: '2. Gasto mensual aprox. de luz (€/mes)',
      dimPlaceholder: 'Ej. Pagamos unos 130 €/mes de luz',
      dimChips: ['60 – 90 €/mes', '100 – 150 €/mes', '+160 €/mes', 'Nave / Negocio'],
      matLabel: '3. Tipo de tejado o cubierta',
      materials: ['Chalet / Adosado tejado teja', 'Terraza plana transitable', 'Nave industrial / Local', 'Comunidad de propietarios']
    },
    calls: 11,
    badCalls: ['"¿Cuántas placas necesito para mi casa?"', '"¿Tramitáis vosotros la compensación de excedentes?"', '"Quiero saber precio sin que me llame un call center 8 veces"'],
    painTitle: 'Competir contra grandes comercializadoras sin una web local clara que filtre tejado y factura',
    painSpoken: 'Los dueños de chalets desconfían de los anuncios agresivos de placas solares, y el instalador local de toda la vida pierde obras por no tener un calculador claro con precios reales.',
    solSpoken: 'Tu web transmite confianza de instalador local real y recoge gasto mensual de luz, tipo de tejado y población directos a tu WhatsApp.',
    waLines: ['• Estudio: Instalación Solar ~5 kWp', '• Factura actual: 140 €/mes · Tejado teja', '• Ubicación: Chalet en Elche · Pedro']
  },
  {
    id: 'jardineria', cat: 'hogar', day: 'DÍA 28', emoji: '🌿', icon: 'ph-tree',
    label: 'Jardinería y Piscinas', plural: 'Jardineros y Piscinas', singular: 'jardinero',
    actionType: 'medidas_presupuesto', theme: 'sage', sceneKind: 'woodwork',
    defaultName: 'VerdeVivo Jardín y Piscina', placeholder: 'Ej. Jardinería Costa Verde Marbella',
    yearsExp: 'Mantenimiento Todo el Año · Césped y Poda',
    tagline: 'Jardines impecables, césped artificial, podas en altura y puesta a punto de piscinas.',
    story: 'Nos ocupamos del mantenimiento mensual de chalets y comunidades, instalación de césped artificial drenante, riego automático y cloración salina.',
    img: '/assets/real/terraza_bar.jpg',
    gal: ['/assets/real/terraza_bar.jpg', '/assets/real/floristeria_hero.jpg', '/assets/real/reformas_work_2.jpg'],
    kw: ['jardiner', 'piscin', 'cesped artificial', 'poda', 'palmeras', 'riego automatico', 'desbroce', 'clorador salino'],
    services: [
      ['Mantenimiento Mensual Jardín + Piscina', 'Visitas semanales, químicos, poda de setos y riego', 'Desde 120 €/mes'],
      ['Instalación de Césped Artificial Alta Gama (m²)', 'Preparación terreno, malla antihierbas y cepillado', 'Desde 29 €/m²'],
      ['Poda de Árboles, Palmeras y Desbroce Parcela', 'Retirada limpia de restos vegetales a punto limpio', 'Desde 140 €'],
      ['Instalación de Clorador Salino / Bomba Piscina', 'Agua cristalina sin irritación y ahorro químico', 'Desde 690 €']
    ],
    wcfg: {
      heading: 'Presupuesto de jardín, poda o piscina',
      sub: 'Indica superficie de parcela o servicio puntual y tu urbanización.',
      dimLabel: '2. Metros de jardín/césped o tamaño piscina',
      dimPlaceholder: 'Ej. 65 m² césped artificial / Piscina 8×4 m',
      dimChips: ['Césped 40–80 m²', 'Mantenimiento mensual', 'Poda / Desbroce', 'Piscina 8×4 m'],
      matLabel: '3. Tipo de propiedad',
      materials: ['Chalet particular', 'Comunidad de vecinos', 'Parcela rústica (desbroce)', 'Segunda residencia']
    },
    calls: 14,
    badCalls: ['"Tengo la parcela llena de hierba, ¿cuánto cobráis?"', '"¿Ponéis césped artificial sobre tierra o baldosa?"', '"Se me ha puesto verde la piscina, ¿podéis venir hoy?"'],
    painTitle: 'Con la desbrozadora encendida no oyes el móvil y pierdes mantenimientos anuales enteros',
    painSpoken: 'Mientras trabajas con la motosierra o la desbrozadora es imposible oír el teléfono, y una sola comunidad o chalet que no contestas son más de mil euros al año que se lleva otro.',
    solSpoken: 'Con tu web el propietario elige césped, poda o mantenimiento de piscina, indica metros y urbanización, y lo lees tranquilo al apagar la máquina.',
    waLines: ['• Servicio: Césped Artificial Alta Gama', '• Superficie: 70 m² sobre tierra', '• Zona: Urb. El Bosque · Roberto']
  },
  {
    id: 'control_plagas', cat: 'hogar', day: 'DÍA 29', emoji: '🛡️', icon: 'ph-bug',
    label: 'Control de Plagas y Desinfección', plural: 'Empresas de Control de Plagas', singular: 'técnico de control de plagas',
    actionType: 'urgencia_o_llaves', theme: 'sage', sceneKind: 'locksmith',
    defaultName: 'BioControl Sanidad Ambiental', placeholder: 'Ej. Desinfecciones Levante Valencia',
    yearsExp: 'Registro Oficial ROESB · Certificado Sanidad',
    tagline: 'Eliminación garantizada de cucarachas, hormigas, roedores, chinches y termitas.',
    story: 'Tratamientos sin olor ni plazo de seguridad para viviendas, y certificados oficiales DDD obligatorios por Sanidad para bares, restaurantes y comercios.',
    img: '/assets/real/clinica_work_1.jpg',
    gal: ['/assets/real/clinica_work_1.jpg', '/assets/real/reformas_work_1.jpg', '/assets/real/clinica_hero.jpg'],
    kw: ['plagas', 'fumigacion', 'cucarachas', 'chinches', 'ratas', 'roedores', 'termitas', 'carcoma', 'desinsectacion', 'avispas'],
    services: [
      ['Tratamiento Vivienda (Cucarachas / Hormigas)', 'Gel ecológico sin olor · Garantía anual incluida', 'Desde 85 €'],
      ['Certificado Oficial DDD para Hostelería / Local', 'Plan anual obligatorio Sanidad + revisiones', 'Desde 165 €/año'],
      ['Erradicación de Chinches / Avisperos / Roedores', 'Actuación discreta en el día con seguimiento', 'Desde 120 €'],
      ['Tratamiento Madera (Termitas y Carcoma)', 'Inyección y barrera perimetral en vigas y marcos', 'Presupuesto']
    ],
    wcfg: {
      tabUrgent: '🚨 Plaga en Vivienda / Urgente',
      tabQuote: '📜 Certificado Sanidad Local / Bar',
      urgentOptions: ['Cucarachas en cocina o baño', 'Chinches en colchón / dormitorio', 'Roedores en local, garaje o patio', 'Nido de avispas / procesionaria'],
      quoteOptions: ['Certificado DDD obligatorio apertura/Sanidad', 'Mantenimiento anual restaurante o tienda', 'Inspección termitas o carcoma en vigas', 'Control de palomas / aves en edificio'],
      modelLabel: '2. Metros del local o estancia afectada',
      modelPlaceholder: 'Ej. Bar de 90 m² / Piso 85 m²'
    },
    calls: 15,
    badCalls: ['"Me pide Sanidad el certificado de plagas para mañana"', '"¿Hay que salir de casa si tenéis perro o niños?"', '"Hemos visto cucarachas en la cocina, ¿venís sin furgoneta rotulada?"'],
    painTitle: 'Urgencias discretas y certificados urgentes de bares que necesitan respuesta inmediata',
    painSpoken: 'Quien tiene una plaga en casa o una inspección de Sanidad en su bar contrata al primero que le da precio claro, discreción y rapidez desde el móvil.',
    solSpoken: 'Tu página diferencia aviso urgente en vivienda con dirección de certificados DDD para hostelería con metros del local, directo a tu WhatsApp.',
    waLines: ['• Solicitud: 📜 Certificado Oficial DDD', '• Local: Cafetería 95 m² · Apertura', '• Contacto: Sergio · Urgente esta semana']
  },
  {
    id: 'mudanzas', cat: 'hogar', day: 'DÍA 30', emoji: '📦', icon: 'ph-truck',
    label: 'Mudanzas y Guardamuebles', plural: 'Empresas de Mudanzas', singular: 'empresa de mudanzas',
    actionType: 'medidas_presupuesto', theme: 'royal', sceneKind: 'woodwork',
    defaultName: 'Mudanzas RutaSegura', placeholder: 'Ej. Mudanzas y Grúa Hnos. Sanz Madrid',
    yearsExp: 'Seguro de Mercancías · Elevador por Fachada',
    tagline: 'Mudanzas de pisos, oficinas y portes con desmontaje, embalaje y seguro total.',
    story: 'Desmontamos y dejamos montados tus muebles en tu nueva casa en el mismo día. Plataforma elevadora por fachada, cajas reforzadas y guardamuebles vigilado.',
    img: '/assets/real/reformas_work_2.jpg',
    gal: ['/assets/real/reformas_work_2.jpg', '/assets/real/carpinteria_hero.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['mudanz', 'guardamuebles', 'portes', 'furgoneta', 'vaciado de pisos', 'elevador fachada', 'transporte muebles'],
    services: [
      ['Porte o Minimudanza (Habitaciones / Electrodomésticos)', 'Furgón gran volumen + 2 operarios + protección mantas', 'Desde 95 €'],
      ['Mudanza Completa de Piso (2–3 dormitorios)', 'Desmontaje y montaje de muebles + seguro incluido', 'Desde 360 €'],
      ['Mudanza VIP con Embalaje Integral de Cajas', 'Empaquetamos vajilla, ropa y mobiliario completo', 'Desde 590 €'],
      ['Guardamuebles Privado Vigilado 24h', ' Custodia limpia y sin humedad por semanas o meses', 'Desde 65 €/mes']
    ],
    wcfg: {
      heading: 'Calcula tu mudanza en 30 segundos (Origen → Destino)',
      sub: 'Indica tamaño de vivienda, si hay ascensor y las dos zonas para darte precio cerrado.',
      dimLabel: '2. Origen → Destino y fecha aprox.',
      dimPlaceholder: 'Ej. De Getafe a Madrid Centro · Final de mes',
      dimChips: ['Misma ciudad', 'Otra provincia', 'Solo muebles grandes', 'Piso completo'],
      matLabel: '3. Ascensor y desmontaje de muebles',
      materials: ['Ambos pisos con ascensor', 'Un piso sin ascensor (o necesita grúa)', 'Incluye desmontar/montar muebles', 'Quiero también servicio de cajas']
    },
    calls: 18,
    badCalls: ['"¿Cuánto me cobras por llevar un sofá y una nevera?"', '"Me mudo el día 30, ¿tenéis camión libre?"', '"Es un cuarto sin ascensor, ¿subís vosotros los muebles?"'],
    painTitle: 'Cargando un sofá por la escalera mientras pierdes presupuestos por no saber si hay ascensor',
    painSpoken: 'En una mudanza cambia todo según si hay ascensor, si hay que desmontar un canapé y a cuántos kilómetros está el destino, y al volante del camión no puedes anotar listas de muebles.',
    solSpoken: 'Tu web pide origen y destino, volumen del piso y si tienen ascensor, enviándote la ficha lista al WhatsApp para cerrar el día en el calendario.',
    waLines: ['• Mudanza: Piso 3 dorm. + desmontaje', '• Ruta: Getafe → Madrid (con ascensor)', '• Fecha: Sábado 28 · Elena']
  },
  {
    id: 'limpieza', cat: 'hogar', day: 'DÍA 31', emoji: '✨', icon: 'ph-broom',
    label: 'Empresa de Limpieza', plural: 'Empresas de Limpieza', singular: 'empresa de limpieza',
    actionType: 'medidas_presupuesto', theme: 'royal', sceneKind: 'woodwork',
    defaultName: 'BrilloPuro Limpiezas', placeholder: 'Ej. Limpiezas Brisa Alicante',
    yearsExp: 'Personal Asegurado · Comunidades, Fin de Obra y Oficinas',
    tagline: 'Limpieza profesional de comunidades, oficinas, fin de obra y apartamentos turísticos.',
    story: 'Equipo propio dado de alta, maquinaria de vapor e inyección-extracción y productos profesionales incluidos. Puntualidad y supervisión garantizada.',
    img: '/assets/real/clinica_hero.jpg',
    gal: ['/assets/real/clinica_hero.jpg', '/assets/real/reformas_work_2.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['empresa de limpieza', 'limpiezas', 'limpieza fin de obra', 'limpieza comunidades', 'limpieza oficinas', 'cristales', 'tapicerias'],
    services: [
      ['Limpieza a Fondo Fin de Obra / Entrada a Piso', 'Maquinaria industrial, cristales, persianas y baños', 'Desde 175 €'],
      ['Mantenimiento de Comunidad de Vecinos', 'Portal, escaleras, ascensor, cristales y garaje', 'Desde 110 €/mes'],
      ['Limpieza de Oficinas, Clínicas y Locales', 'Frecuencia semanal o diaria fuera de tu horario', 'Desde 135 €/mes'],
      ['Limpieza de Sofás y Colchones a Domicilio', 'Inyección-extracción antiácaros y secado rápido', 'Desde 59 €']
    ],
    wcfg: {
      heading: 'Solicita presupuesto de limpieza a medida',
      sub: 'Elige limpieza puntual o mantenimiento mensual e indica metros o plantas.',
      dimLabel: '2. Metros aprox. o nº de plantas / portales',
      dimPlaceholder: 'Ej. Piso 90 m² fin de obra / Comunidad 4 plantas',
      dimChips: ['Piso 60–90 m²', 'Vivienda +100 m²', 'Comunidad vecinos', 'Oficina / Clínica'],
      matLabel: '3. Frecuencia deseada',
      materials: ['Limpieza puntual a fondo (1 día)', 'Semanal (1 o 2 días/semana)', 'Diaria de lunes a viernes', 'Cambio pisos turísticos']
    },
    calls: 15,
    badCalls: ['"Acabamos la reforma mañana, ¿cuánto sale limpiar el piso entero?"', '"Buscamos empresa seria para la comunidad de 16 vecinos"', '"¿Traéis vosotros los productos y la máquina?"'],
    painTitle: 'Presupuestos sin saber si es limpieza normal o restos de cemento de fin de obra',
    painSpoken: 'Dar precio por teléfono sin saber cuántos metros tiene el piso, si acaba de salir el albañil o cuántas plantas tiene la comunidad hace perder horas y margen.',
    solSpoken: 'El cliente marca tipo de limpieza, metros o plantas y frecuencia deseada, y recibes contactos serios de comunidades, oficinas y particulares en tu WhatsApp.',
    waLines: ['• Servicio: Limpieza Fin de Obra', '• Tamaño: Piso 90 m² (vacío + cristales)', '• Fecha: Jueves mañana · Beatriz']
  },
  {
    id: 'herrero', cat: 'hogar', day: 'DÍA 32', emoji: '🔥', icon: 'ph-fire',
    label: 'Herrero y Soldador Metálico', plural: 'Herreros y Soldadores', singular: 'herrero',
    actionType: 'medidas_presupuesto', theme: 'gold', sceneKind: 'woodwork',
    defaultName: 'Herrería ForjaViva', placeholder: 'Ej. Cerrajería Metálica AceroSur Sevilla',
    yearsExp: 'Hierro, Acero Inox y Automatismos · A Medida',
    tagline: 'Rejas, puertas de garaje, barandillas, pérgolas metálicas y soldadura a domicilio.',
    story: 'Fabricamos en taller propio estructuras de hierro galvanizado al horno y acero inoxidable. Motorizamos cancelas correderas y reparamos cierres metálicos.',
    img: '/assets/real/cerrajeria_blindada.jpg',
    gal: ['/assets/real/cerrajeria_blindada.jpg', '/assets/real/cerrajeria_work_1.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['herrer', 'soldador', 'soldadura', 'forja', 'rejas', 'barandilla', 'cancela', 'puerta garaje', 'estructura metalica', 'hierro'],
    services: [
      ['Rejas de Seguridad a Medida Lacadas al Horno', 'Hierro macizo o tubular galvanizado antioxidación', 'Desde 145 €'],
      ['Cancela / Puerta Corredera de Parcela + Motor', 'Fabricación a medida con 2 mandos y fotocélula', 'Desde 1.290 €'],
      ['Barandillas de Escalera y Balcón (Hierro / Inox)', 'Diseño moderno minimalista o forja clásica', 'Desde 115 €/ml'],
      ['Soldadura y Reparación Metálica a Domicilio', 'Bisagras descolgadas, cierres de local y estructuras', 'Desde 75 €']
    ],
    wcfg: {
      heading: 'Presupuesto de herrería o estructura metálica',
      sub: 'Indica el trabajo metálico y las medidas aproximadas en metros o unidades.',
      dimLabel: '2. Medidas aprox. (ancho × alto o metros lineales)',
      dimPlaceholder: 'Ej. Cancela 3,5 × 2 m / 5 rejas ventana',
      dimChips: ['Rejas ventanas', 'Cancela parcela', 'Barandilla escalera', 'Soldadura urgente'],
      matLabel: '3. Material y acabado',
      materials: ['Hierro galvanizado + Lacado horno antracita', 'Hierro lacado blanco / negro', 'Acero inoxidable AISI 304/316', 'Con motorización automática']
    },
    calls: 13,
    badCalls: ['"Con la careta de soldar puesta: 6 llamadas perdidas"', '"¿Cuánto vale una puerta corredera para la parcela?"', '"Se me ha descolgado la hoja de hierro del garaje"'],
    painTitle: 'Con la radial y la careta de soldar es imposible atender el teléfono en el taller',
    painSpoken: 'En una herrería hay ruido de radial todo el día y tienes los guantes y la careta puestos; cada llamada que no escuchas es una cancela o unas rejas que encarga el cliente en otro sitio.',
    solSpoken: 'Tu web recoge qué pieza necesitan, ancho por alto aproximado y acabado al horno, dejándotelo escrito en tu WhatsApp para presupuestar al quitarte los guantes.',
    waLines: ['• Trabajo: Cancela Corredera + Motor', '• Medida: 380 × 200 cm · Gris antracita', '• Zona: Parcela en Dos Hermanas · Juan']
  },
  {
    id: 'toldos', cat: 'hogar', day: 'DÍA 33', emoji: '⛱️', icon: 'ph-umbrella',
    label: 'Toldos, Pérgolas y Persianas', plural: 'Instaladores de Toldos y Persianas', singular: 'instalador de toldos',
    actionType: 'medidas_presupuesto', theme: 'atelier', sceneKind: 'woodwork',
    defaultName: 'Toldos SombraNoble', placeholder: 'Ej. Toldos y Pérgolas SolMar Valencia',
    yearsExp: 'Lona Acrílica Sauleda · Motorización Somfy',
    tagline: 'Toldos cofre, pérgolas bioclimáticas y reparación o motorización de persianas.',
    story: 'Protege tu terraza, ático o negocio del sol con lonas impermeables de alta densidad, sensores de viento y motores silenciosos con garantía de 5 años.',
    img: '/assets/real/terraza_bar.jpg',
    gal: ['/assets/real/terraza_bar.jpg', '/assets/real/reformas_work_2.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['toldo', 'pergola', 'persian', 'motorizar persiana', 'estores', 'lona', 'bioclimatica', 'vela sombra', 'cinta persiana'],
    services: [
      ['Toldo Extensible / Cofre a Medida Instalado', 'Aluminio lacado + lona acrílica protección UV', 'Desde 460 €'],
      ['Cambio de Lona de Toldo Existente', 'Confección a medida manteniendo tus herrajes', 'Desde 210 €'],
      ['Motorización de Persiana o Toldo (con mando)', 'Instalación limpia en 1 hora sin obra', 'Desde 165 €'],
      ['Pérgola de Aluminio / Bioclimática Terraza', 'Para áticos, jardines y hostelería todo el año', 'Presupuesto']
    ],
    wcfg: {
      heading: 'Calcula tu toldo, pérgola o persiana a medida',
      sub: 'Indica línea × salida aproximada del balcón o terraza.',
      dimLabel: '2. Medida aprox. (ancho de fachada × salida)',
      dimPlaceholder: 'Ej. Terraza 4,00 × 2,50 metros',
      dimChips: ['Balcón 3 × 2 m', 'Terraza 4 × 2,5 m', 'Ático / Pérgola', 'Persianas vivienda'],
      matLabel: '3. Accionamiento preferido',
      materials: ['Motorizado con mando y sensor viento', 'Manual con manivela', 'Solo cambio de tela / lona', 'Reparar o motorizar persianas']
    },
    calls: 16,
    badCalls: ['"¿Cuánto cuesta poner un toldo en un balcón normal?"', '"Se me ha roto la cinta de la persiana del salón"', '"¿Cuánto tardáis en fabricar un toldo cofre gris?"'],
    painTitle: 'Avalancha en primavera preguntando cuánto vale un toldo sin medir ancho de fachada ni salida',
    painSpoken: 'En cuanto sale el sol todo el mundo quiere el toldo para ayer, pero nadie te dice cuántos metros de línea tiene el balcón ni si quiere cofre o motor.',
    solSpoken: 'En tu web marcan ancho por salida aproximado, si quieren motor o cambio de lona y su población, para que envíes presupuesto exacto desde el taller.',
    waLines: ['• Producto: Toldo Cofre Motorizado', '• Medidas: 4,00 m línea × 2,50 m salida', '• Zona: Ático en Valencia · Cristina']
  },

  // =========================================================================
  // 2. MOTOR Y VEHÍCULOS (8 oficios)
  // =========================================================================
  {
    id: 'taller', cat: 'motor', day: 'DÍA 2', emoji: '🔧', icon: 'ph-wrench',
    label: 'Taller Mecánico', plural: 'Talleres Mecánicos', singular: 'taller mecánico',
    actionType: 'motor_diagnostico', theme: 'gold', sceneKind: 'mechanic',
    defaultName: 'Talleres MotorExacto', placeholder: 'Ej. Taller Mecánico AutoSur Córdoba',
    yearsExp: 'Multimarca · Presupuesto Previo Cerrado',
    tagline: 'Revisiones oficiales, frenos, embragues y diagnosis sin perder tu garantía.',
    story: 'Revisamos tu coche con máquina de diagnosis multimarca y te enviamos presupuesto cerrado por WhatsApp antes de tocar una sola pieza.',
    img: '/assets/real/taller_hero.jpg',
    gal: ['/assets/real/taller_hero.jpg', '/assets/real/taller_work_1.jpg', '/assets/real/lavadero_hero.jpg'],
    kw: ['taller mecanic', 'mecanic', 'revision coche', 'cambio de aceite', 'frenos', 'embrague', 'correa distribucion', 'pre itv', 'diagnosis'],
    services: [
      ['Revisión Oficial + Aceite Sintético y Filtros', 'Sello de mantenimiento + chequeo 30 puntos seguridad', 'Desde 119 €'],
      ['Cambio de Pastillas / Discos de Freno', 'Recambios primeras marcas Bosch / Brembo montados', 'Desde 95 €'],
      ['Diagnosis Electrónica de Testigo Motor + Pre-ITV', 'Lectura de centralita e informe de fallos claro', '39 €'],
      ['Kit Correa de Distribución + Bomba de Agua', 'Sustitución completa garantizada por kilometraje', 'Desde 390 €']
    ],
    wcfg: {
      heading: 'Reserva entrada en taller sin llamadas',
      sub: 'Déjanos matrícula, modelo y qué le notas al coche; te confirmamos hueco exacto por WhatsApp.',
      plateLabel: '2. Matrícula y modelo del coche',
      platePlaceholder: 'Ej. 4821 KLP · Seat León 2.0 TDI',
      symLabel: '3. Síntoma o trabajo que necesitas',
      symPlaceholder: 'Ej. Ruido al frenar / Toca revisión / Testigo amarillo'
    },
    calls: 22,
    badCalls: ['"Oye, ¿puedo llevarte el coche ahora a mirar un ruido?"', '"¿Está ya listo mi coche o todavía no?"', '"¿Cuánto sale cambiar el aceite a mi coche?"'],
    painTitle: 'Soltar la llave inglesa 20 veces cada mañana debajo del elevador para atender el teléfono',
    painSpoken: 'Un mecánico suelta la llave diez veces cada mañana debajo del elevador con las manos llenas de grasa porque le llaman sin decir qué coche tienen ni qué le pasa.',
    solSpoken: 'Desde tu página el cliente escribe su matrícula, elige revisión, frenos o ruido extraño y su día preferido, y te entra la ficha limpia a tu WhatsApp sin interrumpirte.',
    waLines: ['• Vehículo: 4821 KLP · Seat León TDI', '• Servicio: Revisión + Ruido al frenar', '• Turno: Martes 09:00 · Marcos']
  },
  {
    id: 'chapa_pintura', cat: 'motor', day: 'DÍA 34', emoji: '🚗', icon: 'ph-car',
    label: 'Taller de Chapa y Pintura', plural: 'Talleres de Chapa y Pintura', singular: 'taller de chapa y pintura',
    actionType: 'motor_diagnostico', theme: 'gold', sceneKind: 'mechanic',
    defaultName: 'Carrocerías BrilloMotor', placeholder: 'Ej. Chapa y Pintura AutoLomas Torrevieja',
    yearsExp: 'Todas las Aseguradoras · Coche de Cortesía',
    tagline: 'Reparación de golpes, arañazos y pintura en cabina horno con acabado de fábrica.',
    story: 'Trabajamos con todas las compañías de seguros (Mutua, Mapfre, Allianz, Línea Directa) y particulares. Igualación exacta de color por espectrofotómetro.',
    img: '/assets/real/lavadero_hero.jpg',
    gal: ['/assets/real/lavadero_hero.jpg', '/assets/real/taller_hero.jpg', '/assets/real/taller_work_1.jpg'],
    kw: ['chapa y pintura', 'carroceria', 'pintar coche', 'paragolpes', 'aranazo', 'abolladura', 'peritacion', 'pulido faros'],
    services: [
      ['Reparación y Pintado de Paragolpes o Aleta', 'Cabina horno + barniz cerámico alto brillo', 'Desde 135 €'],
      ['Pintado Completo de Vehículo en Cabina', 'Desmontaje molduras + reparación pequeños roces', 'Desde 1.090 €'],
      ['Gestión de Parte con Seguro + Coche Cortesía', 'Tramitamos peritación con cualquier aseguradora', '0 € Gestión'],
      ['Pulido y Lacado de 2 Faros para pasar ITV', 'Eliminación del amarilleo con protección UV 3 años', '55 €']
    ],
    wcfg: {
      heading: 'Valora tu roce o gestiona parte de seguro',
      sub: 'Indica modelo, piezas afectadas y si es por seguro o particular (puedes adjuntar foto en WhatsApp).',
      plateLabel: '2. Modelo de coche y color',
      platePlaceholder: 'Ej. Toyota Corolla Blanco Perlado · 9102 LMN',
      symLabel: '3. Pieza dañada y aseguradora (o particular)',
      symPlaceholder: 'Ej. Roce aleta trasera derecha · Particular / Mapfre'
    },
    calls: 15,
    badCalls: ['"¿Trabajáis con mi compañía de seguros?"', '"Tengo un roce en la puerta, ¿cuánto me cuesta pintarla?"', '"¿Tenéis coche de sustitución libre esta semana?"'],
    painTitle: 'Clientes que llaman pidiendo precio de pintura sin ver el golpe ni saber el código de color',
    painSpoken: 'En chapa y pintura es imposible valorar un golpe por teléfono sin ver las piezas afectadas ni saber si va por parte de seguro o por cuenta propia.',
    solSpoken: 'El conductor selecciona pieza o peritación, indica su coche y abre tu WhatsApp directo listo para enviarte dos fotos del roce en diez segundos.',
    waLines: ['• Coche: Toyota Corolla Blanco Perlado', '• Daño: Paragolpes trasero · Particular', '• Cliente: Iván · Envía 2 fotos daño']
  },
  {
    id: 'neumaticos', cat: 'motor', day: 'DÍA 35', emoji: '🚗', icon: 'ph-tire',
    label: 'Taller de Neumáticos y Alineado', plural: 'Talleres de Neumáticos', singular: 'taller de neumáticos',
    actionType: 'motor_diagnostico', theme: 'gold', sceneKind: 'mechanic',
    defaultName: 'Neumáticos RuedaFirme', placeholder: 'Ej. Neumáticos Avenida Albacete',
    yearsExp: 'Montaje en el Acto · Alineado 3D Láser',
    tagline: 'Neumáticos nuevos todas las marcas con montaje, equilibrado y paralelo 3D.',
    story: 'Michelin, Continental, Goodyear, Hankook y gama económica en stock. Pídenos precio cerrado con tu medida exacta y ven a montarlos sin esperar cola.',
    img: '/assets/real/taller_work_1.jpg',
    gal: ['/assets/real/taller_work_1.jpg', '/assets/real/taller_hero.jpg', '/assets/real/lavadero_hero.jpg'],
    kw: ['neumatic', 'ruedas', 'pinchazo', 'alineado', 'paralelo', 'equilibrado', 'llantas'],
    services: [
      ['Pareja de Neumáticos Montados y Equilibrados', 'Válvula nueva, equilibrado y ecotasa todo incluido', 'Desde 129 €'],
      ['Alineado de Dirección / Paralelo 3D Láser', 'Evita desgaste irregular y ahorra combustible', '45 €'],
      ['Reparación Profesional de Pinchazo en el Acto', 'Desmontaje interior con seta vulcanizada segura', '18 €'],
      ['Pack 4 Neumáticos + Paralelo 3D Gratis', 'Primeras marcas y gama calidad-precio en stock', 'Consultar medida']
    ],
    wcfg: {
      heading: 'Consulta stock y precio con tu medida de rueda',
      sub: 'Mira el flanco de tu rueda (ej. 205/55 R16) y te damos 3 opciones cerradas por WhatsApp.',
      plateLabel: '2. Medida del neumático (ej. 205/55 R16 91V)',
      platePlaceholder: 'Ej. 205/55 R16 · 2 ruedas delanteras',
      symLabel: '3. Gama preferida (Primeras marcas / Económica)',
      symPlaceholder: 'Ej. Calidad-precio o Michelin + Paralelo'
    },
    calls: 20,
    badCalls: ['"¿Cuánto me salen dos ruedas para un Golf?" (sin saber medida)', '"Espera que bajo al garaje a mirar los números de la rueda..."', '"¿Tenéis hueco ahora para un pinchazo?"'],
    painTitle: 'Perder cinco minutos en cada llamada porque nadie lleva apuntada la medida del neumático',
    painSpoken: 'En un taller de ruedas el ochenta por ciento de las llamadas son "¿cuánto valen dos ruedas para un Megane?" sin saber si lleva llanta dieciséis, diecisiete o código de velocidad.',
    solSpoken: 'Tu web le enseña dónde leer el 205/55 R16 en su rueda, cuántas unidades quiere y qué gama prefiere, enviándotelo exacto a tu WhatsApp para darle precio en un minuto.',
    waLines: ['• Medida: 205/55 R16 91V (2 uds.)', '• Gama: Calidad-precio + Paralelo 3D', '• Cita: Mañana 10:00 · Sergio']
  },
  {
    id: 'motos', cat: 'motor', day: 'DÍA 36', emoji: '🏍️', icon: 'ph-motorcycle',
    label: 'Tienda y Taller de Motos', plural: 'Talleres y Tiendas de Motos', singular: 'taller de motos',
    actionType: 'motor_diagnostico', theme: 'gold', sceneKind: 'mechanic',
    defaultName: 'Motos Vértigo Racing', placeholder: 'Ej. Motos Orero Orihuela',
    yearsExp: 'Exposición y Taller · Scooters y Gran Cilindrada',
    tagline: 'Motos nuevas y de ocasión revisadas, neumáticos de moto y taller multimarca.',
    story: 'Concesionario multimarca y servicio técnico rápido para tu scooter de diario o tu moto de ruta. Revisiones en el día, kits de arrastre y boutique de cascos.',
    img: '/assets/real/motos_hero.jpg',
    gal: ['/assets/real/motos_hero.jpg', '/assets/real/motos_work_1.jpg', '/assets/real/motos_work_2.jpg'],
    kw: ['moto', 'scooter', 'taller de motos', 'cascos', 'yamaha', 'honda', 'kymco', 'sym', 'kit de arrastre', 'cilindrada'],
    services: [
      ['Revisión Completa Scooter 125cc / Maxiscooter', 'Aceite Motul, filtro, rodillos/correa y frenos', 'Desde 79 €'],
      ['Cambio de Neumáticos de Moto + Equilibrado', 'Pirelli, Michelin, Metzeler y Bridgestone', 'Desde 145 €'],
      ['Kit de Arrastre Reforzado DID + Montaje', 'Cadena retenes, corona y piñón instalados', 'Desde 155 €'],
      ['Reserva / Financiación de Moto Nueva o KM0', 'Matriculación rápida y aceptamos tu moto como parte', 'Consultar Stock']
    ],
    wcfg: {
      heading: 'Pide cita de taller o consulta moto en stock',
      sub: 'Indica marca, cilindrada y kilómetros de tu moto o el modelo que buscas.',
      plateLabel: '2. Modelo de moto y cilindrada',
      platePlaceholder: 'Ej. Yamaha NMAX 125 (12.000 km)',
      symLabel: '3. Revisión, neumáticos o compra de moto',
      symPlaceholder: 'Ej. Revisión 12.000 km + pastillas traseras'
    },
    calls: 18,
    badCalls: ['"¿Tenéis la Honda PCX en blanco para entrega ya?"', '"¿Cuánto sale la revisión de los diez mil en mi scooter?"', '"¿Aceptáis mi 125 como parte de pago?"'],
    painTitle: 'Entre entregas de motos y el banco de trabajo se escapan ventas y citas de revisión',
    painSpoken: 'En una tienda y taller de motos estás entregando un scooter nuevo mientras suena el fijo por una revisión de correa y entra otro cliente preguntando financiación.',
    solSpoken: 'Tu página muestra servicios y motos destacadas y recibe modelo exacto, kilómetros y consulta directos en tu WhatsApp.',
    waLines: ['• Moto: Yamaha NMAX 125 · 12.000 km', '• Servicio: Revisión + correa variador', '• Turno: Jueves mañana · Dani']
  },
  {
    id: 'lavadero', cat: 'motor', day: 'DÍA 37', emoji: '🧽', icon: 'ph-sparkle',
    label: 'Lavadero de Coches y Detailing', plural: 'Lavaderos de Coches y Detailing', singular: 'lavadero de coches',
    actionType: 'motor_diagnostico', theme: 'royal', sceneKind: 'mechanic',
    defaultName: 'AutoSpa Detailing Studio', placeholder: 'Ej. Lavadero BrilloCar Valencia',
    yearsExp: 'Lavado a Mano · Tapicerías y Cerámico',
    tagline: 'Tu coche impecable por dentro y por fuera como el día que salió del concesionario.',
    story: 'Lavado artesanal con guante de microfibra, limpieza profunda de tapicerías con inyección-extracción, desinfección con ozono y tratamiento cerámico.',
    img: '/assets/real/lavadero_hero.jpg',
    gal: ['/assets/real/lavadero_hero.jpg', '/assets/real/taller_hero.jpg', '/assets/real/taller_work_1.jpg'],
    kw: ['lavadero', 'detailing', 'lavado a mano', 'limpieza tapiceria coche', 'pulido coche', 'coating ceramico', 'autolavado'],
    services: [
      ['Lavado Integral a Mano (Interior + Exterior)', 'Espuma activa, llantas, aspirado profundo y cristales', 'Desde 29 €'],
      ['Limpieza Integral de Tapicería + Ozono', 'Asientos, moqueta, techo, manchas y eliminación olores', 'Desde 95 €'],
      ['Pulido de Carrocería + Sellante Sintético', 'Elimina swirls de rodillos y recupera el brillo', 'Desde 190 €'],
      ['Tratamiento Cerámico Garantizado 3 Años', 'Hidrofobia extrema y protección contra sol y suciedad', 'Desde 350 €']
    ],
    wcfg: {
      heading: 'Reserva tu turno de lavado sin colas',
      sub: 'Elige tu pack e indica si es turismo o SUV/7 plazas para guardarte el box exacto.',
      plateLabel: '2. Modelo y tamaño (Turismo / SUV / 7 plazas)',
      platePlaceholder: 'Ej. Kia Sportage SUV · Tapicería tela clara',
      symLabel: '3. Detalle extra (pelos mascota, manchas, venta)',
      symPlaceholder: 'Ej. Manchas sillas niños / Preparar coche para vender'
    },
    calls: 20,
    badCalls: ['"Con la lanza de agua a presión en marcha no se oye el móvil"', '"¿Si te lo llevo ahora cuánto tardáis en lavarlo?"', '"¿Quitáis manchas de los asientos en el mismo día?"'],
    painTitle: 'Con la hidrolimpiadora y el aspirador a tope no oyes ni una llamada y se forman colas en puerta',
    painSpoken: 'En un lavadero de coches tienes la lanza a presión y tres aspiradores funcionando a la vez: o dejas el coche a medias para contestar o pierdes limpiezas integrales de cien euros.',
    solSpoken: 'El cliente ve tus packs claros en el móvil, marca si trae turismo o SUV, elige lavado integral o tapicería y reserva su hora exacta por WhatsApp sin esperas.',
    waLines: ['• Pack: Limpieza Tapicería + Ozono', '• Vehículo: Kia Sportage SUV', '• Hora: Viernes 09:30 · Patricia']
  },
  {
    id: 'compraventa', cat: 'motor', day: 'DÍA 38', emoji: '🚘', icon: 'ph-car',
    label: 'Compraventa de Coches VO', plural: 'Compraventas de Coches', singular: 'compraventa de coches',
    actionType: 'motor_diagnostico', theme: 'gold', sceneKind: 'mechanic',
    defaultName: 'Selección Motor Ocasión', placeholder: 'Ej. Autos Confianza Valladolid',
    yearsExp: 'Kilómetros Certificados · 1 Año Garantía',
    tagline: 'Coches de ocasión revisados, garantizados y financiados a tu medida.',
    story: 'Vehículos nacionales con historial CARFAX/DGT certificado, revisión completa preentrega, cambio de nombre incluido y tasación al instante de tu coche actual.',
    img: '/assets/real/lavadero_hero.jpg',
    gal: ['/assets/real/lavadero_hero.jpg', '/assets/real/taller_hero.jpg', '/assets/real/motos_hero.jpg'],
    kw: ['compraventa', 'coches de ocasion', 'segunda mano', 'concesionario', 'vehiculos ocasion', 'tasacion coche', 'compramos tu coche'],
    services: [
      ['Cita para Ver y Probar Vehículo en Exposición', 'Atención personalizada y prueba dinámica', 'Reserva Gratis'],
      ['Tasación y Compra Directa de tu Coche en el Acto', 'Pago inmediato por transferencia + gestión DGT', 'Tasación 0 €'],
      ['Estudio de Financiación 100% sin Entrada', 'Respuesta en 24h solo con nómina y DNI', 'Desde 169 €/mes'],
      ['Búsqueda de Vehículo por Encargo a la Carta', 'Localizamos el modelo, año y km que buscas', 'Garantía 12m']
    ],
    wcfg: {
      heading: 'Reserva prueba de vehículo o tasa tu coche',
      sub: 'Indica qué coche te interesa probar o los datos del tuyo para valorarlo.',
      plateLabel: '2. Vehículo de interés o coche a tasar (año y km)',
      platePlaceholder: 'Ej. Busco SUV automático / Tasar Golf 2018 110.000km',
      symLabel: '3. Pago al contado, financiación o entrega coche',
      symPlaceholder: 'Ej. Financiar sin entrada + entrego mi coche actual'
    },
    calls: 16,
    badCalls: ['"¿Sigue disponible el coche del anuncio?"', '"¿Cuánto me dais por mi coche si os compro otro?"', '"¿Qué papeles pedís para financiar?"'],
    painTitle: 'Regateadores en portales de anuncios frente a compradores serios que buscan garantía local',
    painSpoken: 'Depender solo de portales de clasificados te llena de mensajes de regateadores a las doce de la noche en vez de clientes de tu ciudad listos para probar o financiar.',
    solSpoken: 'Tu web propia posiciona tu exposición local y filtra modelo buscado, coche a entregar y financiación antes de enviarte el contacto cualificado a tu WhatsApp.',
    waLines: ['• Gestión: Prueba + Tasación coche actual', '• Entrega: Golf 2018 · 110.000 km', '• Financiación: Sí · Alejandro']
  },
  {
    id: 'grua', cat: 'motor', day: 'DÍA 39', emoji: '🚨', icon: 'ph-truck',
    label: 'Grúa y Asistencia en Carretera', plural: 'Grúas de Asistencia', singular: 'servicio de grúa',
    actionType: 'urgencia_o_llaves', theme: 'gold', sceneKind: 'mechanic',
    defaultName: 'Grúas Auxilio24h', placeholder: 'Ej. Grúas y Rescate Levante Alicante',
    yearsExp: 'Asistencia 24h · Coches, Motos y Furgonetas',
    tagline: 'Grúa portacoches urgente 24h, arranque de batería y traslado de vehículos.',
    story: 'Rescate rápido en carretera, autovía y garajes subterráneos de baja altura. Traslados locales y nacionales de turismos, furgonetas, motos y maquinaria.',
    img: '/assets/real/taller_hero.jpg',
    gal: ['/assets/real/taller_hero.jpg', '/assets/real/taller_work_1.jpg', '/assets/real/motos_hero.jpg'],
    kw: ['grua', 'asistencia en carretera', 'portacoches', 'remolque', 'bateria coche', 'transporte de vehiculos', 'auxilio carretera'],
    services: [
      ['Asistencia Urgente Grúa Urbana / Comarcal', 'Recogida inmediata y traslado a tu taller de confianza', 'Desde 65 €'],
      ['Extracción en Garaje Subterráneo / Parking', 'Vehículo especial baja altura + patines', 'Desde 85 €'],
      ['Arranque de Batería / Cambio Rueda in situ', 'Asistencia rápida sin necesidad de remolcar', 'Desde 49 €'],
      ['Transporte Programado de Coche, Clásico o Moto', 'Puerta a puerta asegurado en toda la península', 'Presupuesto €/km']
    ],
    wcfg: {
      tabUrgent: '🚨 Necesito Grúa Ahora',
      tabQuote: '🚚 Traslado Programado (€/km)',
      urgentOptions: ['Avería en calle o carretera', 'Coche sin batería en garaje subterráneo', 'Accidente / Rueda reventada', 'Moto averiada para llevar a taller'],
      quoteOptions: ['Traslado de coche entre ciudades', 'Transporte de moto o clásico', 'Traslado de furgoneta o maquinaria', 'Retirada a desguace con baja DGT'],
      modelLabel: '2. Vehículo y ruta (Origen → Taller/Destino)',
      modelPlaceholder: 'Ej. Furgoneta Vivaro · De A-7 km 22 a Taller Centro'
    },
    calls: 20,
    badCalls: ['"Estoy tirado en la rotonda pero no sé qué salida es"', '"Mi seguro tarda dos horas, ¿cuánto me cobras tú ahora?"', '"El coche está en un sótano -2 y no arranca"'],
    painTitle: 'Conductores nerviosos en el arcén intentando explicar por teléfono dónde están y qué coche llevan',
    painSpoken: 'Cuando alguien se queda tirado o dentro de un parking subterráneo necesitas saber al instante si es turismo o furgoneta, si giran las ruedas y el punto exacto.',
    solSpoken: 'Desde tu web eligen rescate ahora o traslado programado, indican vehículo y ubicación exacta y te llega directo al WhatsApp para enviar ubicación GPS en un toque.',
    waLines: ['• Aviso: 🚨 Grúa en Garaje Subterráneo -1', '• Coche: Audi A4 automático (no arranca)', '• Punto: C/ Estación 14 · Rubén']
  },
  {
    id: 'llaves_coche', cat: 'motor', day: 'DÍA 40', emoji: '🚘', icon: 'ph-key',
    label: 'Llaves y Mandos de Coche', plural: 'Especialistas en Llaves de Coche', singular: 'taller de llaves de coche',
    actionType: 'urgencia_o_llaves', theme: 'gold', sceneKind: 'locksmith',
    defaultName: 'AutoLlave Electrónica', placeholder: 'Ej. CarKey Duplicados Valencia',
    yearsExp: 'Transponder y Keyless · 50% Más Barato que Concesionario',
    tagline: 'Duplicado, reparación y pérdida total de llaves de coche en el acto.',
    story: 'Tallado CNC y programación por OBD de llaves con mando, tarjetas Renault y sistemas manos libres Keyless de todas las marcas sin esperas de semanas.',
    img: '/assets/real/cerrajeria_coche.jpg',
    gal: ['/assets/real/cerrajeria_coche.jpg', '/assets/real/llavero_hero.jpg', '/assets/real/cerrajeria_llaves.jpg'],
    kw: ['llaves de coche', 'mando de coche', 'carcasa llave', 'perdida total llaves', 'transponder', 'keyless', 'tarjeta renault'],
    services: [
      ['Duplicado de Llave de Coche con Mando a Distancia', 'Tallado láser + codificación inmovilizador en 30 min', 'Desde 79 €'],
      ['Copia de Llave Simple con Chip de Arranque', 'Segunda llave de seguridad codificada en el acto', 'Desde 49 €'],
      ['Reparación de Carcasa, Pulsadores y Batería', 'Tu mando vuelve a funcionar como nuevo', 'Desde 25 €'],
      ['Pérdida Total de Llaves (Desplazamiento al Coche)', 'Apertura sin daños + creación de llave desde cero', 'Desde 165 €']
    ],
    wcfg: {
      tabUrgent: '🚨 Pérdida Total / Coche Cerrado',
      tabQuote: '🔑 Hacer Copia o Reparar Mando',
      urgentOptions: ['He perdido la única llave del coche', 'Llaves encerradas dentro del coche', 'La llave gira pero el coche no arranca', 'Tarjeta / Keyless no detecta el coche'],
      quoteOptions: ['Hacer segunda llave completa con mando', 'Copia económica solo arranque (con chip)', 'Cambiar carcasa o botones rotos', 'Duplicar llave de moto con chip'],
      modelLabel: '2. Marca, modelo exacto y año del vehículo',
      modelPlaceholder: 'Ej. Volkswagen Golf VII año 2018 / Renault Clio tarjeta'
    },
    calls: 21,
    badCalls: ['"¿Hacéis la llave de mi coche y cuánto cuesta?" (sin decir año)', '"En la casa oficial me piden 320 € y 15 días"', '"He perdido todas las llaves en la playa, ¿podéis hacer una?"'],
    painTitle: 'Sin marca, modelo y año exacto del coche es imposible mirar qué transponder lleva',
    painSpoken: 'En electrónica de llaves de coche no vale decir "tengo un Focus": cambia el chip y el mando según sea del 2014 o del 2019, y por teléfono pierdes media mañana preguntándolo.',
    solSpoken: 'Tu web pide marca, modelo y año exacto del vehículo y si tiene una llave operativa o es pérdida total, para que confirmes stock y precio al momento por WhatsApp.',
    waLines: ['• Gestión: 🔑 Segunda llave con mando', '• Vehículo: VW Golf VII · Año 2018', '• Cita: Hoy 18:00 · Adrián']
  },
  // =========================================================================
  // 3. BELLEZA Y BIENESTAR (6 oficios)
  // =========================================================================
  {
    id: 'peluqueria', cat: 'belleza', day: 'DÍA 16', emoji: '✂️', icon: 'ph-scissors',
    label: 'Peluquería y Salón de Color', plural: 'Peluquerías', singular: 'peluquería',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'beauty',
    defaultName: 'Salón Aura Estilistas', placeholder: 'Ej. Peluquería Laura Madrid',
    yearsExp: 'Especialistas en Rubios y Color · Reserva Online',
    tagline: 'Mechas balayage, corte y cuidado capilar en un salón pensado para ti.',
    story: 'Diagnóstico personalizado, productos orgánicos de salón y citas puntuales sin esperas y sin pagar comisiones en aplicaciones externas.',
    img: '/assets/real/peluqueria_hero.jpg',
    gal: ['/assets/real/peluqueria_hero.jpg', '/assets/real/peluqueria_work_1.jpg', '/assets/real/peluqueria_work_2.jpg'],
    kw: ['peluquer', 'estilist', 'mechas', 'balayage', 'salon de belleza', 'keratina', 'alisado', 'coloracion', 'tinte', 'cabello'],
    services: [
      ['Mechas Balayage / Babylights + Matiz', 'Diagnóstico, decoloración cuidada y peinado final', '89 €'],
      ['Corte de Diseño + Lavado Spa + Brushing', 'Asesoramiento visagista adaptado a tu rostro', '32 €'],
      ['Coloración Orgánica Sin Amoniaco + Brillo', 'Cobertura 100% respetuosa con el cuero cabelludo', '44 €'],
      ['Alisado Orgánico de Keratina / Hidratación', 'Cero encrespamiento hasta 5 meses', '115 €']
    ],
    wcfg: {
      heading: 'Reserva tu cita en 15 segundos',
      sub: 'Elige tu servicio de color o corte y el tramo horario que mejor te venga.',
      clientPlaceholder: 'Ej. Lucía García · Pelo largo'
    },
    calls: 18,
    badCalls: ['"Con los guantes llenos de tinte y el móvil sonando"', '"¿Cuánto me salen unas mechas y tenéis hueco el viernes?"', '"Apps de reservas cobrándote un 25% por tus propias clientas"'],
    painTitle: 'Dejar el tinte a medias para contestar llamadas o regalar comisiones a apps de reservas',
    painSpoken: 'Una peluquera está aplicando unas balayage con los guantes puestos y le interrumpen quince veces al día, o usa plataformas externas que se quedan comisión por cada clienta.',
    solSpoken: 'En tu propia web la clienta consulta tu carta real de precios, elige mechas o corte, marca día y hora y te llega directo a tu WhatsApp con cero comisiones.',
    waLines: ['• Servicio: Mechas Balayage + Matiz (89 €)', '• Cita: Viernes · 10:00 h', '• Clienta: Lucía García · Directo']
  },
  {
    id: 'barberia', cat: 'belleza', day: 'DÍA 41', emoji: '💈', icon: 'ph-scissors',
    label: 'Barbería y Corte Masculino', plural: 'Barberías', singular: 'barbería',
    actionType: 'agenda_citas', theme: 'gold', sceneKind: 'beauty',
    defaultName: 'Barbería Club Noble', placeholder: 'Ej. Barbería Jamal Alicante',
    yearsExp: 'Degradados a Navaja · Puntualidad Absoluta',
    tagline: 'Degradados limpios, corte a tijera y arreglo de barba con toalla caliente.',
    story: 'Reserva tu sillón en quince segundos, entra a tu hora exacta sin hacer cola en el sofá y sal con el corte y perfilado impecables.',
    img: '/assets/real/barberia_hero.jpg',
    gal: ['/assets/real/barberia_hero.jpg', '/assets/real/barberia_work_1.jpg', '/assets/real/peluqueria_work_2.jpg'],
    kw: ['barber', 'fade', 'degradado', 'barba', 'corte caballero', 'afeitado', 'navaja', 'peluqueria caballeros'],
    services: [
      ['Corte + Degradado (Skin Fade / Clásico)', 'Acabado a navaja + lavado refrescante + peinado', '16 €'],
      ['Pack Completo: Corte + Ritual de Barba', 'Perfilado a navaja, toalla caliente y aceites', '24 €'],
      ['Arreglo y Esculpido de Barba', 'Hidratación + perfilado de precisión (20 min)', '12 €'],
      ['Corte Joven / Niño + Diseño Sencillo', 'Puntual y sin esperas (30 min)', '14 €']
    ],
    wcfg: {
      heading: 'Reserva tu sillón sin esperar cola',
      sub: 'Selecciona corte o pack con barba y tu hora preferida.',
      clientPlaceholder: 'Ej. Álex · Barbero habitual o indiferente'
    },
    calls: 24,
    badCalls: ['"Bro, ¿tienes un hueco hoy a última hora?"', '"Con la maquinilla y la navaja en mano: 14 WhatsApps sin leer"', '"Pagar cuota mensual fija por una app de turnos"'],
    painTitle: 'Parar cada degradado para mirar WhatsApps sueltos o pagar cuotas todos los meses',
    painSpoken: 'En una barbería cada interrupción de dos minutos para mirar "qué hueco te queda el viernes" te descuadra toda la tarde y encima las apps de turnos te cobran todos los meses.',
    solSpoken: 'Pon el enlace de tu web en tu Instagram y Google: el cliente elige corte y barba, marca su hora y te entra el turno cerrado al WhatsApp sin pagar cuotas nunca más.',
    waLines: ['• Servicio: Pack Corte + Barba (24 €)', '• Turno: Jueves · 18:30 h', '• Cliente: Álex · Reserva directa']
  },
  {
    id: 'estetica', cat: 'belleza', day: 'DÍA 42', emoji: '💅', icon: 'ph-sparkle',
    label: 'Centro de Estética y Uñas', plural: 'Centros de Estética y Uñas', singular: 'centro de estética',
    actionType: 'agenda_citas', theme: 'atelier', sceneKind: 'beauty',
    defaultName: 'Atelier Calma Estética', placeholder: 'Ej. Nails & Beauty Sofía Sevilla',
    yearsExp: 'Manicura Rusa · Cejas, Pestañas y Facial',
    tagline: 'Uñas impecables, mirada definida y tratamientos faciales con resultados visibles.',
    story: 'Higiene esterilizada en autoclave, esmaltes hipoalergénicos y cabina de estética avanzada para mimar tu piel con cita directa.',
    img: '/assets/real/peluqueria_work_1.jpg',
    gal: ['/assets/real/peluqueria_work_1.jpg', '/assets/real/peluqueria_hero.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['estetic', 'unas', 'manicura', 'pedicura', 'pestanas', 'lifting', 'microblading', 'cejas', 'higiene facial', 'indiba'],
    services: [
      ['Manicura Rusa Combinada + Nivelación Gel', 'Cutícula perfecta y brillo intacto 3–4 semanas', '30 €'],
      ['Pedicura Spa Completa + Semipermanente', 'Durezas, exfoliación e hidratación profunda', '36 €'],
      ['Lifting y Tinte de Pestañas + Diseño Cejas', 'Mirada abierta natural durante 6 semanas', '42 €'],
      ['Higiene Facial Profunda Punta de Diamante', 'Extracción suave, ultrasonidos y velo calmante', '52 €']
    ],
    wcfg: {
      heading: 'Reserva tu tratamiento o cita de uñas',
      sub: 'Indica servicio y horario; si necesitas retirar acrílico de otro centro anótalo abajo.',
      clientPlaceholder: 'Ej. Paula · Sin retirada / Con retirada'
    },
    calls: 19,
    badCalls: ['"Con el torno de manicura en la mano no puedes escribir"', '"¿Cuánto cuestan las uñas de gel y qué colores tenéis?"', '"Venía sin decir que llevaba acrílico para retirar (+30 min)"'],
    painTitle: 'Imposible contestar el móvil haciendo uñas al milímetro y clientas que no avisan de retirada',
    painSpoken: 'Cuando trabajas con el torno o poniendo pestañas pelo a pelo tienes las dos manos ocupadas una hora entera y si encima no sabes si trae retirada se te rompe la agenda.',
    solSpoken: 'Tu web muestra precios claros, permite elegir servicio, día y hora e indicar si lleva retirada, llegando todo limpio a tu WhatsApp.',
    waLines: ['• Servicio: Manicura Rusa + Nivelación (30 €)', '• Cita: Miércoles · 17:00 h', '• Nota: Paula · Sin retirada previa']
  },
  {
    id: 'tattoo', cat: 'belleza', day: 'DÍA 43', emoji: '🖋️', icon: 'ph-pen-nib',
    label: 'Estudio de Tatuajes y Piercing', plural: 'Estudios de Tatuajes', singular: 'estudio de tatuajes',
    actionType: 'agenda_citas', theme: 'crimson', sceneKind: 'beauty',
    defaultName: 'Tinta Firme Tattoo Studio', placeholder: 'Ej. Gabi Tattoo Studio Orihuela',
    yearsExp: 'Diseño Único · Fineline, Realismo y Piercing Titanio',
    tagline: 'Arte en piel con máxima higiene sanitaria y diseños creados solo para ti.',
    story: 'Material 100% desechable homologado, cabinas privadas y asesoramiento previo. Cuéntanos tu idea, zona y centímetros para darte cita y presupuesto exacto.',
    img: '/assets/real/barberia_work_1.jpg',
    gal: ['/assets/real/barberia_work_1.jpg', '/assets/real/barberia_hero.jpg', '/assets/real/tienda_work_1.jpg'],
    kw: ['tatuaj', 'tattoo', 'tatuador', 'piercing', 'fineline', 'realismo', 'tinta', 'anillado'],
    services: [
      ['Tatuaje Minimalista / Fineline (< 6 cm)', 'Diseño limpio, material estéril y film dérmico', 'Desde 60 €'],
      ['Pieza Mediana Personalizada (10 – 18 cm)', 'Boceto exclusivo incluido + sesión privada', 'Desde 140 €'],
      ['Sesión Completa Realismo / Manga / Espalda', 'Jornada dedicada con artista especialista', 'Presupuesto'],
      ['Piercing con Joya de Titanio Grado Implante', 'Oreja (Helix, Tragus, Lóbulo), nariz o naval', 'Desde 28 €']
    ],
    wcfg: {
      heading: 'Cotiza tu tatuaje o reserva piercing',
      sub: 'Selecciona tamaño o piercing e indica zona del cuerpo y centímetros aproximados.',
      clientPlaceholder: 'Ej. Nerea · Antebrazo 8 cm fineline floral'
    },
    calls: 17,
    badCalls: ['"¿Cuánto cuesta un tatuaje?" (sin decir ni tamaño ni estilo)', '"40 mensajes por Instagram preguntando precio a las 2 AM"', '"Tatuando con guantes estériles durante 4 horas seguidas"'],
    painTitle: 'Decenas de DMs diciendo "¿cuánto vale un tatuaje?" sin decir zona, centímetros ni estilo',
    painSpoken: 'Un tatuador pasa cuatro horas seguidas con guantes estériles y al salir tiene treinta mensajes en Instagram preguntando "¿cuánto cobras?" sin decir ni tamaño ni zona del cuerpo.',
    solSpoken: 'Tu web filtra tamaño o piercing, pide zona del cuerpo y centímetros y abre tu WhatsApp listo para que te adjunten la referencia visual.',
    waLines: ['• Idea: Pieza Fineline (8 cm aprox.)', '• Zona: Antebrazo interior · Viernes tarde', '• Cliente: Nerea · Envía foto referencia']
  },
  {
    id: 'spa', cat: 'belleza', day: 'DÍA 44', emoji: '🧖‍♀️', icon: 'ph-flower-lotus',
    label: 'Spa Urbano y Masajes', plural: 'Centros de Masaje y Spa', singular: 'centro de masajes y spa',
    actionType: 'agenda_citas', theme: 'sage', sceneKind: 'beauty',
    defaultName: 'Calma Zen Masajes & Spa', placeholder: 'Ej. Spa Urbano Brisa Valencia',
    yearsExp: 'Cabinas Insonorizadas · Bonos Regalo al Instante',
    tagline: 'Desconecta cuerpo y mente con masajes descontracturantes, rituales y bonos regalo.',
    story: 'Aceites esenciales templados, camillas calefactadas y silencio absoluto. Reserva tu sesión o solicita una tarjeta regalo personalizada por WhatsApp.',
    img: '/assets/real/clinica_work_2.jpg',
    gal: ['/assets/real/clinica_work_2.jpg', '/assets/real/peluqueria_work_1.jpg', '/assets/real/clinica_hero.jpg'],
    kw: ['spa', 'masaj', 'quiromasaj', 'relajante', 'ritual pareja', 'circuito termal', 'bono regalo', 'maderoterapia'],
    services: [
      ['Masaje Relajante o Descontracturante (60 min)', 'Aceites esenciales calientes en cabina privada', '48 €'],
      ['Ritual en Pareja + Aromaterapia (60 min)', 'Cabina doble con infusión orgánica final', '89 €'],
      ['Sesión Maderoterapia Corporal / Drenaje', 'Remodelación y alivio de piernas cansadas', '45 €'],
      ['Tarjeta Regalo Personalizada (Impresa o PDF)', 'Envío inmediato lista para regalar sin caducidad corta', 'Desde 45 €']
    ],
    wcfg: {
      heading: 'Reserva tu masaje o pide Tarjeta Regalo',
      sub: 'Elige tratamiento y horario; trabajamos en silencio y confirmamos al salir de cabina.',
      clientPlaceholder: 'Ej. Elena · Es para mí / Es Tarjeta Regalo'
    },
    calls: 15,
    badCalls: ['"En mitad de un masaje relajante no puede sonar el teléfono"', '"Quiero regalar un masaje hoy mismo, ¿cómo lo compro?"', '"Portales de cupones quedándose el 50% de tu trabajo"'],
    painTitle: 'En un centro de masajes el teléfono tiene que estar en silencio y los portales de cupones te comen el margen',
    painSpoken: 'No puedes interrumpir un masaje relajante en cabina para coger una llamada, ni regalar la mitad de tu facturación a portales de cupones descuento.',
    solSpoken: 'Desde tu web tus clientes reservan cabina o encargan bonos regalo al cien por cien de tu tarifa directos a tu WhatsApp.',
    waLines: ['• Reserva: Ritual en Pareja 60 min (89 €)', '• Turno: Sábado · 11:30 h', '• Nota: Elena · Bono Regalo Aniversario']
  },
  {
    id: 'depilacion', cat: 'belleza', day: 'DÍA 45', emoji: '✨', icon: 'ph-sparkle',
    label: 'Centro de Depilación Láser', plural: 'Centros de Depilación Láser', singular: 'centro de depilación láser',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'beauty',
    defaultName: 'LáserPiel Avanzado', placeholder: 'Ej. Centro Láser Diodo Sol Murcia',
    yearsExp: 'Láser Diodo Punta de Hielo · Sin Bonos Engañosos',
    tagline: 'Depilación láser diodo indolora para todos los fototipos todo el año.',
    story: 'Cabezal subcero -12 ºC prácticamente indoloro, sesiones sueltas transparentes sin permanencias y valoración gratuita del vello.',
    img: '/assets/real/clinica_hero.jpg',
    gal: ['/assets/real/clinica_hero.jpg', '/assets/real/peluqueria_work_1.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['depilacion laser', 'laser diodo', 'alejandrita', 'fotodepilacion', 'ingles y axilas', 'cuerpo entero laser'],
    services: [
      ['Pack Mujer: Piernas Completas + Ingles + Axilas', 'Sesión suelta láser diodo cabezal frío (-12 ºC)', '59 €'],
      ['Pack Hombre: Espalda + Pecho / Abdomen + Axilas', 'Alta potencia para vello masculino profundo', '65 €'],
      ['Zonas Pequeñas / Medianas (Axilas o Ingles)', 'Sesión rápida en 15 minutos sin dolor', '19 €'],
      ['Prueba de Sensibilidad + Diagnóstico Dérmico', 'Primera toma de contacto gratuita en cabina', 'Gratis']
    ],
    wcfg: {
      heading: 'Reserva tu sesión láser sin esperas',
      sub: 'Elige tu zona o pack completo y selecciona hueco libre.',
      clientPlaceholder: 'Ej. Sara · Piernas + Ingles + Axilas'
    },
    calls: 16,
    badCalls: ['"Con las gafas protectoras láser puestas toda la jornada"', '"¿Duele mucho y se puede hacer si me ha dado el sol?"', '"¿Vendéis sesiones sueltas o me obligáis a financiar un bono?"'],
    painTitle: 'Trabajando en cabina con gafas de protección láser mientras se pierden primeras citas',
    painSpoken: 'Dentro de cabina disparando láser con gafas protectoras no puedes parar cada cinco minutos a explicar precios por zonas o dudas sobre el sol.',
    solSpoken: 'Tu web resuelve precios por packs sueltos sin letra pequeña y cierra la cita con zona y hora exacta en tu WhatsApp.',
    waLines: ['• Pack: Piernas + Ingles + Axilas (59 €)', '• Cita: Martes · 17:00 h', '• Clienta: Sara · 1ª visita']
  },

  // =========================================================================
  // 4. SALUD Y MASCOTAS (9 oficios)
  // =========================================================================
  {
    id: 'clinica', cat: 'salud', day: 'DÍA 4', emoji: '🦷', icon: 'ph-tooth',
    label: 'Clínica Dental', plural: 'Clínicas Dentales', singular: 'clínica dental',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'clinic',
    defaultName: 'Clínica Dental Sonrisa Clara', placeholder: 'Ej. Clínica Dental Artedent Orihuela',
    yearsExp: 'Escáner 3D Intraoral · Primera Visita Gratuita',
    tagline: 'Implantes, ortodoncia invisible y odontología sin dolor con trato cercano.',
    story: 'Equipo de doctores colegiados con radiología 3D en la propia clínica, presupuestos honestos sin letra pequeña y facilidades de pago a medida.',
    img: '/assets/real/clinica_hero.jpg',
    gal: ['/assets/real/clinica_hero.jpg', '/assets/real/clinica_work_1.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['clinica dental', 'dentist', 'odontolog', 'ortodoncia', 'invisalign', 'implantes dentales', 'blanqueamiento dental', 'limpieza dental', 'muela'],
    services: [
      ['1ª Visita + Revisión Completa y Diagnóstico Digital', 'Exploración + plan de tratamiento claro sin compromiso', 'Gratis'],
      ['Limpieza Dental Profesional con Ultrasonidos', 'Eliminación de sarro, manchas y pulido (40 min)', '49 €'],
      ['Estudio Ortodoncia Invisible / Brackets', 'Escaneado 3D de tu sonrisa antes de empezar', 'Consultar'],
      ['Urgencia Dental en el Día (Dolor / Rotura)', 'Atención prioritaria para aliviar molestia hoy', 'Cita Hoy']
    ],
    wcfg: {
      heading: 'Pide tu cita o urgencia dental en un toque',
      sub: 'Selecciona motivo de consulta y horario preferente; recepción te confirma enseguida.',
      clientPlaceholder: 'Ej. Carlos Ruiz · Revisión / Urgencia muela'
    },
    calls: 20,
    badCalls: ['"Recepción cobrando a un paciente mientras suenan 2 líneas"', '"¿Cobráis la primera revisión y hacéis radiografía allí?"', '"Se me ha partido un empaste, ¿tenéis hueco hoy?"'],
    painTitle: 'Recepción saturada entre pacientes en mostrador y llamadas pidiendo cita o urgencias',
    painSpoken: 'En una clínica dental recepción está dando cita y cobrando a un paciente presencial mientras suenan dos teléfonos a la vez por limpiezas, implantes o dolores de muela.',
    solSpoken: 'Tu web proyecta confianza médica impecable y canaliza revisiones, limpiezas y urgencias con horario preferido directos al WhatsApp de recepción.',
    waLines: ['• Consulta: 1ª Visita + Diagnóstico (Gratis)', '• Preferencia: Jueves · 11:30 h', '• Paciente: Carlos Ruiz · Implante']
  },
  {
    id: 'fisioterapia', cat: 'salud', day: 'DÍA 46', emoji: '🦴', icon: 'ph-heartbeat',
    label: 'Fisioterapia y Osteopatía', plural: 'Clínicas de Fisioterapia', singular: 'fisioterapeuta',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'clinic',
    defaultName: 'Clínica FisioActiva', placeholder: 'Ej. Fisioterapia Movimiento Zaragoza',
    yearsExp: 'Terapia Manual · Colegiados · Ecografía y Diatermia',
    tagline: 'Alivia tu dolor de espalda, cervicales o lesión deportiva desde la primera sesión.',
    story: 'Tratamiento individual 100% manual en box privado, apoyado con ecografía musculoesquelética, punción seca e Indiba / diatermia recuperadora.',
    img: '/assets/real/clinica_work_1.jpg',
    gal: ['/assets/real/clinica_work_1.jpg', '/assets/real/clinica_hero.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['fisioterap', 'fisio', 'osteopat', 'espalda', 'cervical', 'contractura', 'lesion', 'suelo pelvico', 'puncion seca'],
    services: [
      ['Sesión Fisioterapia Manual Individual (50 min)', 'Valoración funcional + tratamiento completo en sala privada', '42 €'],
      ['Fisioterapia Avanzada + Diatermia / Ecografía', 'Recuperación acelerada de tendinitis y roturas', '50 €'],
      ['Valoración y Fisioterapia de Suelo Pélvico', 'Especialista colegiada · Embarazo, posparto y deporte', '50 €'],
      ['Bono 5 Sesiones de Fisioterapia (Compartible)', 'Ahorro directo sin caducidad corta', '190 €']
    ],
    wcfg: {
      heading: 'Reserva tu sesión de fisioterapia',
      sub: 'Elige sesión e indica brevemente la molestia (cervicales, lumbar, rodilla...) y tu tramo.',
      clientPlaceholder: 'Ej. Jorge · Contractura cervical aguda'
    },
    calls: 19,
    badCalls: ['"Tratando a un paciente con las manos ocupadas 50 minutos"', '"Me he quedado enganchado de lumbares, ¿tienes hueco hoy?"', '"¿Cuánto dura la sesión y cuánto cuesta el bono?"'],
    painTitle: 'Un fisio autónomo pasa 7 horas al día con las manos sobre el paciente sin poder tocar el móvil',
    painSpoken: 'Si eres fisioterapeuta autónomo estás cincuenta minutos de cada hora tratando en camilla: cada llamada perdida es un paciente con dolor agudo que reserva en la clínica de al lado.',
    solSpoken: 'Con tu web el paciente ve tarifas y bonos claros, indica zona lesionada y horario y te espera el mensaje ordenado en tu WhatsApp al terminar la sesión.',
    waLines: ['• Sesión: Fisioterapia Manual 50m (42 €)', '• Hueco: Hoy / Mañana · 17:00 h', '• Motivo: Jorge · Dolor lumbar agudo']
  },
  {
    id: 'podologia', cat: 'salud', day: 'DÍA 47', emoji: '🦶', icon: 'ph-footprints',
    label: 'Clínica de Podología', plural: 'Clínicas de Podología', singular: 'clínica de podología',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'clinic',
    defaultName: 'Podología PasoFirme', placeholder: 'Ej. Clínica Podológica Pisada Sana Granada',
    yearsExp: 'Estudio Biomecánico 3D · Quiropodia y Plantillas',
    tagline: 'Cuidado integral del pie, uñas encarnadas y plantillas a medida para caminar sin dolor.',
    story: 'Podólogos colegiados especializados en quiropodia indolora, pie diabético, papilomas infantiles y estudio informatizado de la pisada para deportistas.',
    img: '/assets/real/clinica_hero.jpg',
    gal: ['/assets/real/clinica_hero.jpg', '/assets/real/clinica_work_1.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['podolog', 'callos', 'una encarnada', 'plantillas a medida', 'estudio pisada', 'biomecanic', 'quiropodia', 'papiloma'],
    services: [
      ['Quiropodia Completa (Cuidado Integral del Pie)', 'Corte terapéutico, durezas, callosidades e hidratación', '32 €'],
      ['Urgencia Uña Encarnada / Dolor al Caminar', 'Alivio inmediato en consulta con anestesia si precisa', 'Desde 45 €'],
      ['Estudio Biomecánico de la Pisada en Plataforma', 'Análisis estático, dinámico y en carrera', '55 €'],
      ['Plantillas Personalizadas a Medida (Adulto/Niño)', 'Fabricación adaptada a tu calzado diario o running', 'Desde 145 €']
    ],
    wcfg: {
      heading: 'Pide cita de podología en 15 segundos',
      sub: 'Selecciona quiropodia, urgencia de uña o estudio de pisada y tu horario.',
      clientPlaceholder: 'Ej. Carmen · Quiropodia / Uña encarnada'
    },
    calls: 15,
    badCalls: ['"Me duele muchísimo una uña del dedo gordo, ¿me veis hoy?"', '"¿Hacéis estudio de pisada para niños o corredores?"', '"¿Atendéis a personas mayores o pie diabético?"'],
    painTitle: 'Con guantes e instrumental estéril en gabinete no puedes atender llamadas de urgencias de uña',
    painSpoken: 'Mientras realizas una quiropodia con instrumental estéril no puedes quitarte los guantes para anotar citas en papel.',
    solSpoken: 'Tu página muestra servicios y precios con claridad médica y recibe las solicitudes de quiropodia, uña encarnada o plantillas directas en tu WhatsApp.',
    waLines: ['• Consulta: Urgencia Uña Encarnada', '• Turno: Hoy / Mañana · 11:30 h', '• Paciente: Carmen · Dolor al apoyar']
  },
  {
    id: 'psicologia', cat: 'salud', day: 'DÍA 48', emoji: '🧠', icon: 'ph-brain',
    label: 'Consulta de Psicología', plural: 'Psicólogos y Centros de Psicología', singular: 'consulta de psicología',
    actionType: 'agenda_citas', theme: 'sage', sceneKind: 'clinic',
    defaultName: 'Espacio Sereno Psicología', placeholder: 'Ej. Consulta Psicología Clara Méndez Madrid',
    yearsExp: 'Psicología Sanitaria Colegiada · Presencial y Online',
    tagline: 'Un espacio confidencial y cercano para recuperar tu calma y bienestar emocional.',
    story: 'Terapia individual para ansiedad, estrés, autoestima, duelo y terapia de pareja. Sesiones presenciales en consulta privada y videollamada.',
    img: '/assets/real/clinica_work_2.jpg',
    gal: ['/assets/real/clinica_work_2.jpg', '/assets/real/clinica_hero.jpg', '/assets/real/clinica_work_1.jpg'],
    kw: ['psicolog', 'terapia', 'ansiedad', 'terapia de pareja', 'salud mental', 'psicoterap', 'autoestima', 'estres'],
    services: [
      ['1ª Toma de Contacto Orientativa (15 min)', 'Breve orientación confidencial para asignarte psicólogo/a', 'Gratis'],
      ['Sesión Psicología Individual (Presencial u Online)', '55 minutos en consulta privada · Colegiación sanitaria', '60 €'],
      ['Sesión de Terapia de Pareja o Familiar', 'Espacio neutral con herramientas prácticas (60–75 min)', '75 €'],
      ['Psicología Infantil y Adolescente', 'Acompañamiento emocional, conducta y estudios', '60 €']
    ],
    wcfg: {
      heading: 'Solicita tu primera sesión confidencial',
      sub: 'Indica si prefieres sesión presencial u online y tu disponibilidad horaria.',
      clientPlaceholder: 'Ej. Laura · Prefiero presencial por las tardes'
    },
    calls: 12,
    badCalls: ['"Dar el paso cuesta: muchos pacientes prefieren escribir antes que llamar"', '"En plena sesión de terapia el teléfono siempre está en modo avión"', '"Directorios médicos cobrando cuotas altas cada mes"'],
    painTitle: 'Durante las sesiones el móvil está en modo avión y a quien sufre ansiedad le cuesta llamar en frío',
    painSpoken: 'A una persona con ansiedad le da reparo llamar por teléfono sin conocerte, y además durante tus sesiones nunca puedes coger llamadas ni merece la pena pagar cuotas abusivas a directorios.',
    solSpoken: 'Tu web transmite cercanía humana y permite solicitar sesión presencial u online de forma discreta y directa a tu WhatsApp profesional.',
    waLines: ['• Modalidad: Sesión Individual Presencial', '• Horario: Tardes · 18:30 h', '• Contacto: Laura · 1ª consulta']
  },
  {
    id: 'nutricionista', cat: 'salud', day: 'DÍA 49', emoji: '🥑', icon: 'ph-apple-logo',
    label: 'Nutricionista y Dietética', plural: 'Nutricionistas', singular: 'nutricionista',
    actionType: 'agenda_citas', theme: 'sage', sceneKind: 'clinic',
    defaultName: 'NutriReal Consulta Clínica', placeholder: 'Ej. Nutrición Sara Gil Valencia',
    yearsExp: 'Dietista-Nutricionista Colegiada · Sin Batidos ni Dietas Milagro',
    tagline: 'Aprende a comer rico y logra tu objetivo sin pasar hambre ni efecto rebote.',
    story: 'Planes nutricionales adaptados a tus horarios reales, pérdida de grasa con bioimpedancia InBody, nutrición digestiva (SIBO, intolerancias) y deportiva.',
    img: '/assets/real/panaderia_brunch.jpg',
    gal: ['/assets/real/panaderia_brunch.jpg', '/assets/real/clinica_work_2.jpg', '/assets/real/clinica_hero.jpg'],
    kw: ['nutricion', 'dietist', 'adelgazar', 'perdida de peso', 'nutricion deportiva', 'sibo', 'digestiv', 'dieta'],
    services: [
      ['1ª Consulta Completa + Estudio Corporal InBody', 'Entrevista clínica, composición corporal y menú a medida', '65 €'],
      ['Consulta de Revisión y Nuevos Menús', 'Ajuste quincenal/mensual + recetas sencillas', '42 €'],
      ['Nutrición Digestiva (SIBO, Hinchazón, Intolerancias)', 'Pauta clínica digestiva coordinada con tus analíticas', '70 €'],
      ['Nutrición Deportiva y Rendimiento', 'Planificación para fuerza, running, triatlón u oposiciones', '65 €']
    ],
    wcfg: {
      heading: 'Reserva tu primera consulta de nutrición',
      sub: 'Elige consulta presencial u online y cuéntanos tu objetivo principal.',
      clientPlaceholder: 'Ej. Marina · Pérdida de grasa / Digestivo'
    },
    calls: 13,
    badCalls: ['"¿Vendéis productos o es comida normal de supermercado?"', '"¿Cuánto cuesta la primera consulta y las revisiones?"', '"¿Atendéis también online si trabajo a turnos?"'],
    painTitle: 'Explicar diez veces por Instagram tus tarifas, cómo trabajas y que no vendes batidos',
    painSpoken: 'Un nutricionista pierde horas respondiendo mensajes privados explicando precios, si mide composición corporal o si adapta menús a turnos rotativos.',
    solSpoken: 'Tu web deja clarísimo tu método profesional y tus tarifas, y convierte las visitas de redes y Google en primeras consultas cerradas en tu WhatsApp.',
    waLines: ['• Consulta: 1ª Visita + InBody (65 €)', '• Turno: Miércoles · 17:00 h', '• Objetivo: Marina · Nutrición digestiva']
  },
  {
    id: 'optica', cat: 'salud', day: 'DÍA 50', emoji: '👓', icon: 'ph-eyeglasses',
    label: 'Óptica y Centro Auditivo', plural: 'Ópticas y Centros Auditivos', singular: 'óptica',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'clinic',
    defaultName: 'Óptica Visión Clara', placeholder: 'Ej. Óptica y Audiología Mirada Bilbao',
    yearsExp: 'Ópticos-Optometristas · Progresivos y Lentillas',
    tagline: 'Revisión visual completa, gafas graduadas de diseño y adaptación auditiva.',
    story: 'Graduación optométrica sin prisas, cristales progresivos de alta gama con garantía de adaptación, lentillas diarias y estudio auditivo gratuito.',
    img: '/assets/real/clinica_hero.jpg',
    gal: ['/assets/real/clinica_hero.jpg', '/assets/real/tienda_hero.jpg', '/assets/real/clinica_work_1.jpg'],
    kw: ['optica', 'optometrist', 'gafas', 'lentillas', 'progresivos', 'audifonos', 'audiolog', 'graduar la vista'],
    services: [
      ['Examen Visual Optométrico Completo + Tensión Ocular', 'Revisión detallada en gabinete (Gratis al renovar gafas)', '25 € / Gratis'],
      ['Pack Gafas Monofocales con Antirreflejante Azul', 'Montura de colección + cristales orgánicos ligeros', 'Desde 79 €'],
      ['Gafas Progresivas Digitales Personalizadas', '100% garantía de adaptación + segundo par incluido', 'Desde 189 €'],
      ['Revisión Auditiva + Prueba Gratuita de Audífonos', '30 días de prueba real de audífonos invisibles recargables', 'Gratis']
    ],
    wcfg: {
      heading: 'Reserva hora en gabinete sin esperar',
      sub: 'Elige graduación de vista, lentillas o revisión auditiva.',
      clientPlaceholder: 'Ej. Antonio · Revisión progresivos'
    },
    calls: 14,
    badCalls: ['"¿Hace falta pedir cita para graduar la vista?"', '"¿Cuánto tardan unas gafas si os llevo mi montura?"', '"¿Hacéis revisión de oído a personas mayores?"'],
    painTitle: 'Cuando estás dentro del gabinete graduando la vista no puedes atender mostrador y teléfono a la vez',
    painSpoken: 'En una óptica de barrio si estás dentro del gabinete graduando veinte minutos y entra gente sin cita mientras suena el teléfono, se genera espera y pierdes encargos de progresivos.',
    solSpoken: 'Tu página ordena la agenda de gabinete por horas para graduaciones, lentillas y audiología directamente en tu WhatsApp.',
    waLines: ['• Gabinete: Revisión Gafas Progresivas', '• Cita: Martes · 11:30 h', '• Cliente: Antonio · Trae gafas actuales']
  },
  {
    id: 'logopedia', cat: 'salud', day: 'DÍA 51', emoji: '🗣️', icon: 'ph-chat-circle-text',
    label: 'Gabinete de Logopedia', plural: 'Gabinetes de Logopedia', singular: 'gabinete de logopedia',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'clinic',
    defaultName: 'HablaViva Logopedia', placeholder: 'Ej. Centro de Logopedia Voz y Lenguaje Sevilla',
    yearsExp: 'Infantil y Adultos · Becas NEAE · Colegiados',
    tagline: 'Especialistas en habla, lenguaje infantil, lectoescritura, deglución y voz.',
    story: 'Evaluación individualizada y sesiones lúdicas coordinadas con el colegio y ortodoncista. Tramitamos ayudas y becas de necesidades educativas (NEAE).',
    img: '/assets/real/clinica_work_2.jpg',
    gal: ['/assets/real/clinica_work_2.jpg', '/assets/real/clinica_hero.jpg', '/assets/real/clinica_work_1.jpg'],
    kw: ['logoped', 'lenguaje', 'habla', 'dislexia', 'lectoescritura', 'tartamudez', 'deglucion atipica', 'foniatria', 'atencion temprana'],
    services: [
      ['1ª Entrevista Familiar + Valoración Inicial', 'Orientación sobre habla, lectoescritura, voz o deglución', '45 €'],
      ['Sesión Individual de Logopedia (45 min)', 'Infantil (pronunciación, retraso lenguaje, dislexia) o adultos', '35 €'],
      ['Terapia Miofuncional / Deglución Atípica', 'Coordinada con ortodoncia infantil y adulta', '35 €'],
      ['Asesoramiento y Tramitación Beca NEAE', 'Documentación sanitaria colegiada para ayudas oficiales', 'Incluido']
    ],
    wcfg: {
      heading: 'Solicita valoración de logopedia',
      sub: 'Indica edad (niño/a o adulto), motivo de consulta y horario extraescolar o mañanas.',
      clientPlaceholder: 'Ej. Mamá de Leo (5 años) · Pronunciación R'
    },
    calls: 13,
    badCalls: ['"Todas las tardes en sesión con niños de 16:00 a 20:30 sin poder coger el móvil"', '"Nos lo ha recomendado el cole o el ortodoncista"', '"¿Tramitáis la beca del Ministerio?"'],
    painTitle: 'Toda la tarde en sesión con peques justo en las horas en que los padres llaman buscando hueco',
    painSpoken: 'Los padres buscan logopeda entre las cuatro y las ocho de la tarde, exactamente cuando tú estás en sesión tras sesión con los niños sin poder atender el teléfono.',
    solSpoken: 'Tu web explica especialidades y becas NEAE y recoge edad del peque, motivo y disponibilidad de tardes directo en tu WhatsApp.',
    waLines: ['• Valoración: Infantil (5 años · Habla)', '• Horario: Tardes · 17:00 o 18:30 h', '• Contacto: Rocío · Derivado por cole']
  },
  {
    id: 'veterinario', cat: 'salud', day: 'DÍA 52', emoji: '🐾', icon: 'ph-paw-print',
    label: 'Clínica Veterinaria', plural: 'Clínicas Veterinarias', singular: 'clínica veterinaria',
    actionType: 'agenda_citas', theme: 'sage', sceneKind: 'clinic',
    defaultName: 'Clínica Veterinaria Huella Fiel', placeholder: 'Ej. Veterinaria San Antón Valladolid',
    yearsExp: 'Medicina Felina y Canina · Rayos X y Cirugía',
    tagline: 'Cuidamos la salud de tu perro o gato con cariño, diagnóstico propio y sin esperas.',
    story: 'Vacunación, medicina interna, analíticas en 15 minutos, ecografía, limpieza dental y cirugía segura con hospitalización separada para perros y gatos.',
    img: '/assets/real/clinica_work_1.jpg',
    gal: ['/assets/real/clinica_work_1.jpg', '/assets/real/clinica_hero.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['veterinari', 'mascota', 'perro', 'gato', 'vacuna perro', 'chip mascota', 'esterilizacion', 'cachorro'],
    services: [
      ['Consulta Veterinaria General / Revisión', 'Exploración completa y pauta médica sin prisas', '35 €'],
      ['Vacunación Anual / Pack Cachorro + Desparasitación', 'Revisión previa + cartilla sanitaria oficial', 'Desde 38 €'],
      ['Identificación Microchip Oficial + Pasaporte', 'Registro autonómico incluido en el acto', '45 €'],
      ['Higiene Dental / Esterilización (Con Analítica)', 'Anestesia inhalatoria monitorizada de máxima seguridad', 'Consultar']
    ],
    wcfg: {
      heading: 'Pide cita para tu mascota',
      sub: 'Indica si es perro, gato o exótico, motivo de visita y tramo preferido.',
      clientPlaceholder: 'Ej. Marta · Gata Nala (Vacuna anual)'
    },
    calls: 19,
    badCalls: ['"En quirófano o sujetando un perro nervioso en consulta"', '"¿Cuánto cuesta ponerle la vacuna de la rabia y el chip?"', '"Mi perro lleva vomitando desde esta mañana, ¿tenéis hueco?"'],
    painTitle: 'En consulta sujetando a un paciente de cuatro patas mientras el teléfono interrumpe sin parar',
    painSpoken: 'En una clínica veterinaria pasas la mañana entre vacunas, curas y quirófano; si suena el teléfono para citas rutinarias te corta la consulta y estresa a la mascota.',
    solSpoken: 'Desde tu web los dueños reservan vacunas, revisiones o consultas indicando nombre y especie de su mascota directo a tu WhatsApp.',
    waLines: ['• Cita: Vacunación Anual + Revisión (38 €)', '• Mascota: Nala (Gata europea, 3 años)', '• Turno: Jueves · 11:30 h · Marta']
  },
  {
    id: 'peluqueria_canina', cat: 'salud', day: 'DÍA 53', emoji: '🐶', icon: 'ph-paw-print',
    label: 'Peluquería Canina y Guardería', plural: 'Peluquerías Caninas', singular: 'peluquería canina',
    actionType: 'agenda_citas', theme: 'atelier', sceneKind: 'clinic',
    defaultName: 'Mimos & Patas Peluquería Canina', placeholder: 'Ej. Guau Estilistas Caninos Valencia',
    yearsExp: 'Sin Jaulas · Baño Dermocosmético y Stripping',
    tagline: 'Baño, corte a tijera y deslanado sin estrés para que tu peludo salga feliz.',
    story: 'Cosmética natural adaptada a su piel, trato paciente sin prisas ni sedación y aviso automático a tu WhatsApp en cuanto tu perro está listo para recoger.',
    img: '/assets/real/peluqueria_hero.jpg',
    gal: ['/assets/real/peluqueria_hero.jpg', '/assets/real/clinica_work_1.jpg', '/assets/real/peluqueria_work_2.jpg'],
    kw: ['peluqueria canina', 'baño perro', 'corte perro', 'autolavado mascotas', 'guarderia canina', 'residencia canina', 'bichon', 'caniche'],
    services: [
      ['Baño Dermocosmético + Secado + Uñas y Oídos', 'Raza pequeña / mediana · Champú específico piel sana', 'Desde 24 €'],
      ['Corte Completo a Tijera / Máquina + Baño Spa', 'Bichón, Caniche, Yorkshire, Shih Tzu o Mestizo', 'Desde 35 €'],
      ['Sesión de Deslanado Profundo / Stripping', 'Golden, Pastor, Husky, Teckel o Schnauzer', 'Desde 42 €'],
      ['Guardería de Día / Paseo Cuidado sin Jaulas', 'Socialización supervisada con vídeos por WhatsApp', 'Desde 18 €/día']
    ],
    wcfg: {
      heading: 'Reserva baño o corte indicando raza y peso',
      sub: 'El tiempo y precio dependen de la raza, peso y si trae nudos. Anótalo abajo.',
      clientPlaceholder: 'Ej. Toby · Caniche 7 kg (pelo sin nudos)'
    },
    calls: 21,
    badCalls: ['"Con un perro mojado en la bañera y el expulsador de aire rugiendo"', '"¿Cuánto cobráis por pelar un perro?" (sin decir si es Chihuahua o Mastín)', '"¿Está ya listo Toby para ir a recogerlo?"'],
    painTitle: 'Con el expulsador de aire a todo volumen y sujetando al perro en la mesa es imposible coger llamadas',
    painSpoken: 'En una peluquería canina no puedes soltar a un perro subido en la mesa ni oír el móvil con la turbina de secado encendida, y además necesitas saber raza, kilos y si trae nudos antes de darle hueco.',
    solSpoken: 'Tu web recoge servicio, raza, peso aproximado y tramo horario y te llega la ficha exacta a tu WhatsApp para confirmar cuando termines el baño.',
    waLines: ['• Servicio: Corte a Tijera + Baño (35 €)', '• Peludo: Toby · Caniche 7 kg (sin nudos)', '• Cita: Viernes · 10:00 h · Clara']
  },

  // =========================================================================
  // 5. HOSTELERÍA Y ALIMENTACIÓN (8 oficios)
  // =========================================================================
  {
    id: 'restaurante', cat: 'hosteleria', day: 'DÍA 11', emoji: '🍽️', icon: 'ph-fork-knife',
    label: 'Restaurante y Arrocería', plural: 'Restaurantes', singular: 'restaurante',
    actionType: 'mesa_carta', theme: 'atelier', sceneKind: 'food',
    defaultName: 'Restaurante Casa Olivo', placeholder: 'Ej. Arrocería El Puerto Alicante',
    yearsExp: 'Producto de Mercado · Reservas 0% Comisión',
    tagline: 'Cocina de temporada, arroces al momento y brasa para disfrutar sin prisas.',
    story: 'Reserva tu mesa en salón o terraza directamente con nosotros sin intermediarios ni comisiones por comensal, y consulta nuestra carta actualizada con alérgenos.',
    img: '/assets/real/restaurante_hero.jpg',
    gal: ['/assets/real/restaurante_hero.jpg', '/assets/real/restaurante_work_1.jpg', '/assets/real/restaurante_work_2.jpg'],
    kw: ['restaurante', 'arroceria', 'asador brasa', 'marisqueria', 'meson', 'casa de comidas', 'menu del dia', 'reservar mesa'],
    services: [
      ['Arroz del Señoret / Banda (Mín. 2 pers.)', 'Fumet casero de roca al momento · Precio por persona', '19,50 €'],
      ['Chuletón de Vaca Madurada a la Brasa (kg)', 'Con patatas panadera y pimientos del padrón', '54,00 €'],
      ['Menú Degustación / Ejecutivo Mediodía', 'Entrante a compartir, principal, postre casero y bebida', '24,90 €'],
      ['Tarta de Queso Cremosa al Horno', 'Receta propia recién horneada', '6,50 €']
    ],
    wcfg: {
      heading: 'Reserva mesa en Salón o Terraza (0% comisiones)',
      sub: 'Elige zona, comensales y turno. Confirmación directa con sala por WhatsApp.',
      slots: ['13:30', '14:15', '20:45', '21:30']
    },
    calls: 25,
    badCalls: ['"En mitad del pase de comidas a las 14:15 sonando el fijo sin parar"', '"Portales de reservas cobrándote 2,50 € por cada comensal sentado"', '"¿Tenéis carta con precios o PDF borroso que no abre en el móvil?"'],
    painTitle: 'Pagar 2,50 € por comensal a portales de reservas o perder mesas durante el servicio de mediodía',
    painSpoken: 'Un restaurante pierde cientos de euros todos los meses pagando comisión por cada silla a portales externos, o deja mesas vacías porque a las dos de la tarde nadie puede coger el teléfono en barra.',
    solSpoken: 'Con tu web propia el cliente ve tu carta limpia en el móvil, elige terraza o salón, número de personas y turno y te llega gratis al WhatsApp de sala.',
    waLines: ['• Reserva: Terraza · 4 comensales', '• Turno: Sábado 14:15 h · Arroz Señoret', '• Nombre: Laura (0 € comisión)']
  },
  {
    id: 'bar_tapas', cat: 'hosteleria', day: 'DÍA 54', emoji: '🍻', icon: 'ph-beer-stein',
    label: 'Bar de Tapas y Terraza', plural: 'Bares de Tapas', singular: 'bar de tapas',
    actionType: 'mesa_carta', theme: 'atelier', sceneKind: 'food',
    defaultName: 'Taberna La Plaza Tapas', placeholder: 'Ej. Tapa La Caña Alicante',
    yearsExp: 'Terraza Soleada · Tapas Caseras y Caña Bien Tirada',
    tagline: 'Tapas de toda la vida, raciones generosas para compartir y el mejor ambiente.',
    story: 'Carta digital rápida para ver desde el móvil o mediante código QR en mesa, reserva de terraza para grupos y raciones para recoger.',
    img: '/assets/real/tapas_bar.jpg',
    gal: ['/assets/real/tapas_bar.jpg', '/assets/real/terraza_bar.jpg', '/assets/real/restaurante_work_2.jpg'],
    kw: ['bar de tapas', 'taberna', 'cerveceria', 'tasca', 'raciones', 'bocateria', 'terraza', 'vermuteria'],
    services: [
      ['Tabla Ibérica de Bellota + Queso Curado', 'Cortado al momento con pan de cristal y tomate', '18,50 €'],
      ['Croquetas Caseras Cremosas de Jamón (6 uds.)', 'Boleadas a mano a diario en nuestra cocina', '8,50 €'],
      ['Calamar Nacional a la Andaluza / Plancha', 'Producto fresco con alioli suave de ajo asado', '14,90 €'],
      ['Reserva de Mesa Alta / Terraza Grupos', 'Aperitivo, tardeo o cenas de picoteo', 'Reserva Gratis']
    ],
    wcfg: {
      heading: 'Reserva tu mesa en terraza o salón',
      sub: 'Asegura sitio para tu aperitivo, comida o cena de tapeo en 15 segundos.',
      slots: ['13:00', '14:15', '20:30', '21:30']
    },
    calls: 18,
    badCalls: ['"Detrás de la barra tirando cañas y el teléfono sonando"', '"¿Tenéis mesa en la terraza para seis esta noche?"', '"Cartas QR de pago mensual que caducan y dan error"'],
    painTitle: 'Tirando cañas con la barra llena sin poder anotar reservas de terraza ni actualizar un PDF viejo',
    painSpoken: 'En un bar de tapas cuando tienes la terraza llena no puedes parar la barra para apuntar reservas en una servilleta, y encima te cobran cuotas por un simple QR de carta.',
    solSpoken: 'Tu web es a la vez tu carta QR actualizable desde el móvil y tu sistema directo de reserva de mesas por WhatsApp en un pago único.',
    waLines: ['• Reserva: Terraza exterior · 6 personas', '• Turno: Viernes 21:00 h · Tapeo', '• A nombre de: Javi Morales']
  },
  {
    id: 'cafeteria', cat: 'hosteleria', day: 'DÍA 55', emoji: '☕', icon: 'ph-coffee',
    label: 'Cafetería de Especialidad y Brunch', plural: 'Cafeterías y Brunch', singular: 'cafetería',
    actionType: 'mesa_carta', theme: 'atelier', sceneKind: 'food',
    defaultName: 'La Molienda Café & Brunch', placeholder: 'Ej. La Vimacchiata Brunch Orihuela',
    yearsExp: 'Specialty Coffee · Tostadas de Masa Madre y Brunch',
    tagline: 'Café de especialidad recién molido, desayunos artesanos y repostería casera.',
    story: 'Tostadas en hogaza de masa madre, huevos benedictinos, bowls de fruta fresca y tartas horneadas cada mañana. Reserva mesa o encarga para llevar.',
    img: '/assets/real/panaderia_brunch.jpg',
    gal: ['/assets/real/panaderia_brunch.jpg', '/assets/real/terraza_bar.jpg', '/assets/real/restaurante_work_2.jpg'],
    kw: ['cafeteria', 'brunch', 'cafe de especialidad', 'desayunos', 'merienda', 'teteria', 'heladeria', 'gofres', 'creperia'],
    services: [
      ['Combo Brunch Completo para 1 Persona', 'Café especialidad + zumo natural + huevos/tostada + dulce', '15,90 €'],
      ['Tostada Masa Madre Jamón Ibérico y AOVE', 'Tomate natural rallado al momento + café doble', '6,20 €'],
      ['Huevos Benedictinos con Aguacate y Salmón', 'Pan brioche artesano y salsa holandesa suave', '10,90 €'],
      ['Tarta Casera Entera por Encargo (8–10 rac.)', 'Pistacho, Lotus, Zanahoria o Queso cremosa', '28,00 €']
    ],
    wcfg: {
      heading: 'Reserva mesa de Brunch o encarga tu tarta',
      sub: 'Elige turno de desayuno/brunch o recogida sin esperar cola.',
      slots: ['10:00', '11:15', '12:30', '17:30']
    },
    calls: 16,
    badCalls: ['"Sábado 11:00 AM con la cafetera echando vapor y cola en puerta"', '"¿Hacéis tartas enteras por encargo para cumpleaños?"', '"¿Tenéis opciones sin gluten o leche de avena?"'],
    painTitle: 'Fines de semana a tope en la cafetera perdiendo encargos de tartas y reservas de brunch',
    painSpoken: 'Un sábado a las once de la mañana estás espumando leche sin parar y es imposible atender llamadas de grupos de brunch o encargos de tartas de cumpleaños.',
    solSpoken: 'Tu web muestra tu carta apetecible con opciones sin gluten y recibe reservas de mesa y encargos de tartas directos en tu WhatsApp.',
    waLines: ['• Reserva: Mesa Terraza · 4 pers. Brunch', '• Hora: Domingo 11:15 h', '• Nota: Irene · 1 opción sin gluten']
  },
  {
    id: 'pizzeria', cat: 'hosteleria', day: 'DÍA 56', emoji: '🍕', icon: 'ph-pizza',
    label: 'Pizzería, Burger y Kebab', plural: 'Pizzerías y Smash Burgers', singular: 'pizzería o hamburguesería',
    actionType: 'encargo_sin_cola', theme: 'atelier', sceneKind: 'food',
    defaultName: 'Forno Vivo Pizza & Smash', placeholder: 'Ej. Pizzería Bella Napoli Málaga',
    yearsExp: 'Pedidos Directos · 0% Comisión de Apps',
    tagline: 'Pizzas artesanas al horno de piedra y smash burgers crujientes listas a tu hora.',
    story: 'Haz tu pedido directo desde nuestra web sin recargos inflados de aplicaciones de reparto y recógelo recién salido del horno a tu minuto exacto.',
    img: '/assets/real/pizza_hero.jpg',
    gal: ['/assets/real/pizza_hero.jpg', '/assets/real/burger_kebab.jpg', '/assets/real/asador_pollo.jpg'],
    kw: ['pizzer', 'pizza', 'burger', 'hamburgues', 'smash', 'kebab', 'durum', 'bocadillos', 'comida rapida', 'domicilio'],
    services: [
      ['Pizza Napolitana Trufada / Burrata (32 cm)', 'Masa fermentada 48h en horno de piedra', '12,90 €'],
      ['Doble Smash Burger Cheddar Madurado + Patatas', 'Carne vaca 180g + pan brioche tostado en mantequilla', '11,90 €'],
      ['Menú Pareja: 2 Pizzas o Burgers + Entrante + 2 Bebidas', 'Precio exclusivo pidiendo directo en nuestra web', '24,90 €'],
      ['Pack Familiar 4 Pizzas / Dürüms + Patatas Grandes', 'Listo para llevar caliente sin esperar cola', '36,90 €']
    ],
    wcfg: {
      heading: 'Haz tu pedido directo sin comisiones ni esperas',
      sub: 'Selecciona tu menú o platos, añade ingredientes/bebidas y elige hora exacta de recogida.',
      qtyLabel: '2. Detalle completo de tu pedido / bebidas',
      qtyPlaceholder: 'Ej. 1 Trufada + 1 Margarita + 2 Coca-Colas',
      slots: ['20:30', '21:00', '21:30', '22:00']
    },
    calls: 28,
    badCalls: ['"Viernes 21:15: el teléfono comunicando toda la noche"', '"Glovo / Uber Eats quedándose el 30% de cada pizza que vendes"', '"Clientes esperando 25 minutos en la acera porque pidieron al llegar"'],
    painTitle: 'Regalar el 30% de cada pedido a las apps de reparto o tener el teléfono comunicando el viernes noche',
    painSpoken: 'En una pizzería o hamburguesería un viernes a las nueve y media el teléfono comunica sin parar, y si vendes por apps de reparto se quedan casi un tercio de cada ticket.',
    solSpoken: 'Tus clientes habituales piden directo en tu web en treinta segundos, eligen hora de recogida y te entra el pedido limpio en WhatsApp quedándote el cien por cien del margen.',
    waLines: ['• Pedido: Menú Pareja (24,90 €)', '• Detalle: 1 Trufada + 1 Smash Doble', '• Recogida: 21:30 h · Óscar (0% comisión)']
  },
  {
    id: 'asador', cat: 'hosteleria', day: 'DÍA 57', emoji: '🍗', icon: 'ph-cooking-pot',
    label: 'Asador de Pollos y Comida para Llevar', plural: 'Asadores de Pollos y Comidas para Llevar', singular: 'asador de comidas para llevar',
    actionType: 'encargo_sin_cola', theme: 'atelier', sceneKind: 'food',
    defaultName: 'Asador El Dorado Leña', placeholder: 'Ej. Asador de Pollos Los Domingos Murcia',
    yearsExp: ' Reserva tu Pollo antes de que se Agote · Sin Colas',
    tagline: 'Pollos asados a la leña, paellas por encargo y comida casera recién hecha.',
    story: 'Encarga tu pollo o ración de domingo desde el móvil, elige tu hora de recogida y pasa directo por mostrador de encargos sin esperar la cola de la calle.',
    img: '/assets/real/asador_pollo.jpg',
    gal: ['/assets/real/asador_pollo.jpg', '/assets/real/restaurante_hero.jpg', '/assets/real/restaurante_work_1.jpg'],
    kw: ['asador', 'pollos asados', 'rostisseria', 'comida para llevar', 'comidas caseras', 'paellas por encargo', 'croqueteria'],
    services: [
      ['Menú Pollo Asado a la Leña + Patatas + Alioli', 'Con su jugo natural y pan recién horneado', '13,50 €'],
      ['Pack Familiar: 2 Pollos + 2 Raciones Patatas + Croquetas', 'Comen 5–6 personas · Reserva garantizada domingo', '26,90 €'],
      ['Ración de Paella Valenciana / Arroz al Horno', 'Por encargo cada fin de semana (precio ración)', '7,50 €'],
      ['Menú Casero Diario para Llevar (Lunes a Viernes)', 'Primero + Segundo casero + Pan y Postre', '9,90 €']
    ],
    wcfg: {
      heading: 'Reserva tu pollo o menú y sáltate la cola',
      sub: 'Encarga unidades y hora exacta de recogida para tenerlo apartado y calentito.',
      qtyLabel: '2. Unidades, salsas o raciones extra',
      qtyPlaceholder: 'Ej. 2 pollos bien tostados + 4 raciones paella + alioli',
      slots: ['13:00', '13:30', '14:00', '14:30']
    },
    calls: 32,
    badCalls: ['"Domingo 12:00 a 14:30: 60 llamadas seguidas mientras cortas pollos"', '"Cola de 20 personas en la calle y el teléfono ardiendo"', '"¿Os quedan pollos todavía para las dos?"'],
    painTitle: 'Los domingos de 12 a 14:30 es humanamente imposible cortar pollos, cobrar y coger 60 llamadas',
    painSpoken: 'Todo asador de pollos vive el mismo caos cada domingo: tienes el cuchillo en la mano, veinte vecinos en cola y el teléfono sonando sesenta veces para reservar dos pollos con patatas.',
    solSpoken: 'Con tu web los vecinos encargan sábado o domingo por la mañana indicando unidades y tramo de recogida, y tú preparas la comanda desde WhatsApp sin descolgar el teléfono ni una vez.',
    waLines: ['• Encargo: Pack 2 Pollos + 4 Paella', '• Recogida: Domingo · 14:00 h (sin cola)', '• Cliente: Paco Ruiz · Pagará en tienda']
  },
  {
    id: 'panaderia', cat: 'hosteleria', day: 'DÍA 58', emoji: '🥐', icon: 'ph-storefront',
    label: 'Panadería, Pastelería y Obrador', plural: 'Panaderías y Pastelerías', singular: 'panadería y pastelería',
    actionType: 'encargo_sin_cola', theme: 'atelier', sceneKind: 'food',
    defaultName: 'Obrador Miga de Oro', placeholder: 'Ej. Pastelería Artesana DulceHogar Zaragoza',
    yearsExp: 'Masa Madre 24h · Tartas, Empanadas y Catering',
    tagline: 'Pan artesano de masa madre, bollería de mantequilla y tartas por encargo.',
    story: 'Horneamos a diario en nuestro obrador con harinas limpias y mantequilla pura. Reserva tus barras especiales, empanadas, roscones o tartas personalizadas.',
    img: '/assets/real/panaderia_brunch.jpg',
    gal: ['/assets/real/panaderia_brunch.jpg', '/assets/real/restaurante_work_2.jpg', '/assets/real/comercio_regalo.jpg'],
    kw: ['panader', 'pasteler', 'obrador', 'confiteria', 'reposteria', 'tartas personalizadas', 'masa madre', 'roscon', 'empanada'],
    services: [
      ['Tarta Artesana de Cumpleaños / Celebración (8–12 rac.)', 'Personalizada con dedicatoria · Bizcocho, trufa, nata o fruta', 'Desde 26 €'],
      ['Bandeja Salada / Dulce para Cumpleaños u Oficina', 'Mini croissants ibéricos, saladitos y pastelitos', '29 €'],
      ['Empanada Gallega Artesana Grande (Atún / Carne)', 'Masa hojaldrada horneada el mismo día (1 kg)', '16,50 €'],
      ['Reserva Pan Especial Masa Madre (Espelta / Centeno)', 'Te guardamos tu hogaza recién hecha sin agotarse', '3,80 €']
    ],
    wcfg: {
      heading: 'Encarga tu tarta, bandeja o pan especial',
      sub: 'Indica sabor, raciones o dedicatoria y la fecha/hora de recogida en obrador.',
      qtyLabel: '2. Raciones, sabor y texto en placa de chocolate',
      qtyPlaceholder: 'Ej. Tarta 10 rac. trufa y nata · "Felicidades Mamá"',
      slots: ['10:00', '12:30', '14:00', '18:00']
    },
    calls: 19,
    badCalls: ['"Apuntando encargos de tartas y dedicatorias en papelitos que se pierden"', '"En Reyes, San Valentín o Día de la Madre la tienda colapsada"', '"¿Me guardas una hogaza de espelta antes de que se acaben?"'],
    painTitle: 'Encargos de tartas apuntados deprisa en notas de papel mientras atiendes la cola del pan',
    painSpoken: 'En una pastelería u obrador apuntar por teléfono cuántas raciones quiere, el relleno, las alergias y qué nombre poner en la tarta mientras cobras barras de pan acaba siempre en confusiones.',
    solSpoken: 'El cliente deja escrito en tu web sabor, raciones, dedicatoria exacta y hora de recogida, quedando guardado por escrito en el WhatsApp del obrador.',
    waLines: ['• Encargo: Tarta 10 rac. Trufa y Nata', '• Placa: "Felicidades Mamá" (sin frutos secos)', '• Recogida: Sábado 12:30 h · Natalia']
  },
  {
    id: 'carniceria', cat: 'hosteleria', day: 'DÍA 18B', emoji: '🥩', icon: 'ph-knife',
    label: 'Carnicería y Charcutería Selecta', plural: 'Carnicerías y Charcuterías', singular: 'carnicería',
    actionType: 'encargo_sin_cola', theme: 'atelier', sceneKind: 'food',
    defaultName: 'Carnicería Selecta Corte Noble', placeholder: 'Ej. Carnicería Hnos. Martín Burgos',
    yearsExp: 'Ternera Nacional · Elaborados Caseros · Pedidos sin Cola',
    tagline: 'Carne tierna de ganadería nacional, elaborados artesanos y corte a tu gusto.',
    story: 'Haz tu pedido por WhatsApp indicando el corte exacto (filete fino, picada dos veces, envasado al vacío) y recógelo preparado sin coger número ni hacer cola.',
    img: '/assets/real/restaurante_work_1.jpg',
    gal: ['/assets/real/restaurante_work_1.jpg', '/assets/real/tapas_bar.jpg', '/assets/real/restaurante_hero.jpg'],
    kw: ['carnicer', 'charcuter', 'polleria', 'pescaderia', 'ibericos', 'chuleton', 'hamburguesas caseras', 'barbacoa'],
    services: [
      ['Lote Familiar Semanal Ahorro (~4,5 kg)', 'Filetes ternera, pechuga corral, hamburguesas y picada', '39,90 €'],
      ['Pack Barbacoa / Chuletada (6–8 personas)', 'Entrecot, secreto ibérico, chorizo criollo y morcilla', '46,00 €'],
      ['Chuletón Vaca Madurada Dry Aged (al corte)', 'Envasado al vacío listo para atemperar y marcar', '38,90 €/kg'],
      ['Tabla de Jamón Ibérico Cortado a Cuchillo (Sobres)', 'Sobres de 100g recién cortados al vacío', '14,50 €']
    ],
    wcfg: {
      heading: 'Haz tu pedido al corte y recoge sin coger turno',
      sub: 'Dinos qué necesitas y cómo quieres el corte (fino, bandejas, al vacío) y tu hora de paso.',
      qtyLabel: '2. Tu lista o tipo de corte preferido',
      qtyPlaceholder: 'Ej. Lote semanal en bandejas de 2 + 500g picada mixta',
      slots: ['11:00', '13:00', '18:00', '19:30']
    },
    calls: 20,
    badCalls: ['"Con el cuchillo y los guantes en mostrador no puedes tocar el móvil"', '"Vecinos que no entran al ver 8 personas esperando turno"', '"En Navidad cientos de encargos de cordero y solomillo en libretas"'],
    painTitle: 'Con las manos en la carne y ocho clientes esperando número no puedes atender encargos telefónicos',
    painSpoken: 'Tal y como vimos en las carnicerías de barrio, mucha gente joven pasa de largo cuando ve cola en el mostrador y tú no puedes soltar el cuchillo cada tres minutos para anotar pedidos por teléfono.',
    solSpoken: 'Con tu web el vecino elige lote semanal o escribe su lista con el corte exacto y la hora a la que sale de trabajar, y tú se lo preparas en un hueco tranquilo.',
    waLines: ['• Pedido: Lote Semanal (39,90 €) + 4 burgers', '• Corte: Filete fino en bandejas al vacío', '• Recoge: Hoy 19:30 h · Silvia (sin cola)']
  },
  {
    id: 'fruteria', cat: 'hosteleria', day: 'DÍA 59', emoji: '🍎', icon: 'ph-shopping-bag',
    label: 'Frutería Selecta y Tienda Gourmet', plural: 'Fruterías y Tiendas Gourmet', singular: 'frutería y gourmet',
    actionType: 'encargo_sin_cola', theme: 'sage', sceneKind: 'food',
    defaultName: 'Huerta Viva Frutería & Gourmet', placeholder: 'Ej. Frutas y Gourmet La Huerta Murcia',
    yearsExp: 'Fruta de Temporada con Sabor · Cestas y Reparto Barrio',
    tagline: 'Fruta y verdura recién traída de la huerta, conservas selectas y cestas regalo.',
    story: 'Seleccionamos a diario género en su punto justo de maduración. Pide tu caja semanal preparada o encarga cestas de fruta y productos gourmet.',
    img: '/assets/real/panaderia_brunch.jpg',
    gal: ['/assets/real/panaderia_brunch.jpg', '/assets/real/comercio_regalo.jpg', '/assets/real/floristeria_hero.jpg'],
    kw: ['fruter', 'verduler', 'huerta', 'ecologic', 'herbolario', 'gourmet', 'queseria', 'vinoteca', 'ultramarinos', 'alimentacion'],
    services: [
      ['Caja Semanal de Fruta y Verdura de Temporada (8 kg)', 'Tomate con sabor, cítricos, plátano canario y verdura fresca', '24,90 €'],
      ['Cesta Regalo de Frutas Selectas / Gourmet', 'Presentación cuidada con tarjeta para nacimientos o regalo', 'Desde 39 €'],
      ['Selección Quesos Artesanos, AOVE y Vinos Locales', 'Lote degustación preparado al momento', 'Desde 29 €'],
      ['Pedido a Medida Listo para Recoger o Entrega Barrio', 'Escríbenos tu lista y te elegimos el mejor género', 'Sin recargo']
    ],
    wcfg: {
      heading: 'Encarga tu caja fresca o cesta gourmet',
      sub: 'Indica punto de maduración (para hoy o para toda la semana) y hora de recogida.',
      qtyLabel: '2. Detalle de tu lista o preferencias',
      qtyPlaceholder: 'Ej. Caja semanal + aguacates para hoy + 1 docena huevos camperos',
      slots: ['10:30', '13:30', '18:00', '19:30']
    },
    calls: 14,
    badCalls: ['"Pesando bolsas en báscula con cola toda la mañana"', '"¿Preparáis cestas de fruta para enviar al hospital o empresa?"', '"¿Me tienes la compra hecha para pasar con el coche un segundo?"'],
    painTitle: 'Atendiendo báscula y cobrando toda la mañana sin canal digital para cajas semanales ni cestas',
    painSpoken: 'En una frutería o tienda gourmet muchos clientes querrían pedir su caja semanal cerrada o una cesta regalo desde el móvil y pasar solo un minuto a recogerla.',
    solSpoken: 'Tu página muestra tus cajas de temporada y cestas gourmet y envía el pedido directo con hora de recogida a tu WhatsApp.',
    waLines: ['• Pedido: Caja Semanal 8 kg (24,90 €)', '• Extra: Aguacates maduros + huevos', '• Recogida: Mañana 13:30 h · Teresa']
  },
  // =========================================================================
  // 6. COMERCIO, EDUCACIÓN Y SERVICIOS LOCALES (18 oficios)
  // =========================================================================
  {
    id: 'floristeria', cat: 'comercio', day: 'DÍA 60', emoji: '💐', icon: 'ph-flower',
    label: 'Floristería y Arte Floral', plural: 'Floristerías', singular: 'floristería',
    actionType: 'encargo_sin_cola', theme: 'atelier', sceneKind: 'shop',
    defaultName: 'Floristería Pétalo Vivo', placeholder: 'Ej. Floristería Rosa Blanca Bilbao',
    yearsExp: 'Flor Fresca Diaria · Entrega Hoy en Domicilio',
    tagline: 'Ramos naturales hechos al momento, plantas, bodas y entregas en el mismo día.',
    story: 'Diseñamos ramos de temporada, centros preservados y arreglos funerarios urgentes con entrega propia en mano sin intermediarios que recorten flores.',
    img: '/assets/real/floristeria_hero.jpg',
    gal: ['/assets/real/floristeria_hero.jpg', '/assets/real/comercio_regalo.jpg', '/assets/real/tienda_hero.jpg'],
    kw: ['florister', 'ramos de flores', 'arte floral', 'plantas', 'flores a domicilio', 'ramo novia', 'corona funeraria', 'rosas'],
    services: [
      ['Ramo Artesano de Temporada / Rosas Frescas', 'Envuelto en papel kraft y lazo + tarjeta dedicatoria', 'Desde 32 €'],
      ['Centro de Flores Preservadas (Dura Años)', 'Cúpula o base cerámica ideal regalo y decoración', 'Desde 45 €'],
      ['Entrega en el Día (Domicilio / Hospital / Tanatorio)', 'Reparto propio cuidadoso en toda la ciudad', 'Urgente Hoy'],
      ['Decoración Floral de Bodas y Eventos', 'Ramo de novia, prendidos y centros a medida', 'Presupuesto']
    ],
    wcfg: {
      heading: 'Encarga tu ramo con dedicatoria o entrega hoy',
      sub: 'Elige ramo o centro, escribe el texto de la tarjeta y si pasas a recoger o enviamos.',
      qtyLabel: '2. Colores, texto de tarjeta y dirección si es envío',
      qtyPlaceholder: 'Ej. Tonos rosas y blancos · "Feliz aniversario" · Entrega C/ Paz 8',
      slots: ['11:00', '13:30', '17:30', '19:30']
    },
    calls: 18,
    badCalls: ['"Redes florales quedándose un 30% del valor del ramo"', '"Con las manos en agua cortando tallos en San Valentín o Día de la Madre"', '"Dictando por teléfono una dedicatoria larga con faltas"'],
    painTitle: 'Redes intermediarias quedándose el 30% de cada ramo y dedicatorias dictadas deprisa por teléfono',
    painSpoken: 'Cuando un cliente pide flores por una cadena intermediaria tú pones las flores y el trabajo pero te quitan un treinta por ciento, y por teléfono es un lío copiar direcciones y dedicatorias mientras montas ramos.',
    solSpoken: 'Con tu web propia recibes el cien por cien del importe y te llega escrita la dedicatoria exacta, dirección y franja de entrega en tu WhatsApp.',
    waLines: ['• Encargo: Ramo Temporada Tonos Rosas (38 €)', '• Tarjeta: "Feliz cumpleaños, te queremos"', '• Entrega: Hoy 17:30 · C/ Paz 8 · Gonzalo']
  },
  {
    id: 'tintoreria', cat: 'comercio', day: 'DÍA 61', emoji: '👔', icon: 'ph-t-shirt',
    label: 'Tintorería y Arreglos de Ropa', plural: 'Tintorerías y Arreglos de Ropa', singular: 'tintorería y arreglos',
    actionType: 'recepcion_taller_local', theme: 'royal', sceneKind: 'repair',
    defaultName: 'Tintorería & Costura Impecable', placeholder: 'Ej. Tintorería Lavanda Madrid',
    yearsExp: 'Limpieza en Seco Ecológica · Costura y Edredones',
    tagline: 'Tus trajes, vestidos de fiesta, edredones y arreglos de costura listos a tiempo.',
    story: 'Tratamiento delicado desmanchante prenda a prenda, limpieza higienizante de nórdicos y alfombras, bajos de pantalón, cremalleras y entallados con aviso por WhatsApp.',
    img: '/assets/real/tienda_work_1.jpg',
    gal: ['/assets/real/tienda_work_1.jpg', '/assets/real/tienda_hero.jpg', '/assets/real/comercio_regalo.jpg'],
    kw: ['tintorer', 'lavander', 'arreglos de ropa', 'costur', 'modist', 'planchado', 'limpieza en seco', 'edredon', 'alfombras', 'vestido de novia'],
    services: [
      ['Limpieza y Planchado de Traje Completo (2 piezas)', 'Acabado sastrería listo en percha funda', '16,50 €'],
      ['Higienización de Edredón Nórdico / Plumas', 'Lavado antiácaros + secado esponjoso embolsado', 'Desde 19 €'],
      ['Vestido de Fiesta / Invitada / Novia', 'Tratamiento delicado de pedrería, seda y gasas', 'Desde 24 €'],
      ['Arreglos de Costura (Bajo Pantalón / Cremallera)', 'Confección limpia en 24–48 horas', 'Desde 9 €']
    ],
    wcfg: {
      heading: 'Consulta tarifa al instante y aviso por WhatsApp',
      sub: 'Selecciona prenda o arreglo y cuándo nos la acercas; te escribimos al móvil en cuanto esté lista.',
      itemLabel: '1. Prenda o textil (Traje, Vestido, Edredón, Pantalón...)',
      itemPlaceholder: 'Ej. Vestido largo de invitada + traje caballero'
    },
    calls: 17,
    badCalls: ['"¿Está ya mi traje para la boda de mañana?"', '"¿Cuánto cuesta lavar un edredón de cama de 150?"', '"Con la plancha de vapor industrial en marcha toda la mañana"'],
    painTitle: 'Llamadas constantes preguntando "¿está ya mi prenda?" y precios de edredones o bajos',
    painSpoken: 'En una tintorería o taller de arreglos la mitad de las llamadas son "¿cuánto vale limpiar un edredón?" o "¿tenéis ya listo mi traje del sábado?" mientras estás en la máquina de planchado.',
    solSpoken: 'Tu web muestra precios claros al instante, registra la prenda y te conecta por WhatsApp con el cliente para avisarle en un clic en cuanto esté colgada y lista.',
    waLines: ['• Prenda: Traje 2 piezas + Edredón 150', '• Servicio: Limpieza en seco (35,50 €)', '• Entrega: Pasa hoy tarde · Fernando']
  },
  {
    id: 'moviles', cat: 'comercio', day: 'DÍA 62', emoji: '📱', icon: 'ph-device-mobile',
    label: 'Reparación de Móviles e Informática', plural: 'Tiendas de Reparación de Móviles', singular: 'taller de reparación de móviles',
    actionType: 'recepcion_taller_local', theme: 'royal', sceneKind: 'repair',
    defaultName: 'TecnoFix Móviles & PC', placeholder: 'Ej. DoctorMóvil Reparaciones Valencia',
    yearsExp: 'Reparación en 1 Hora · Garantía 6 Meses · Sin Perder Datos',
    tagline: 'Cambio de pantalla, batería, conector de carga y ordenadores en el mismo día.',
    story: 'Reparamos iPhone, Samsung, Xiaomi, iPad, consolas y portátiles en laboratorio propio con microsoldadura, manteniendo tus fotos y datos intactos.',
    img: '/assets/real/tienda_hero.jpg',
    gal: ['/assets/real/tienda_hero.jpg', '/assets/real/tienda_work_2.jpg', '/assets/real/tienda_work_1.jpg'],
    kw: ['reparacion de moviles', 'pantalla rota', 'iphone', 'samsung', 'xiaomi', 'informatica', 'ordenadores', 'portatil', 'consolas', 'microsoldadura'],
    services: [
      ['Cambio de Pantalla rota en 1 Hora', 'OLED / Original o Compatible Premium + cristal templado', 'Desde 55 €'],
      ['Sustitución de Batería Nueva Alta Capacidad', 'Salud al 100% instalada en 40 minutos', 'Desde 35 €'],
      ['Reparación Conector de Carga / Micrófono / Agua', 'Limpieza ultrasónica y microsoldadura en placa', 'Desde 29 €'],
      ['Puesta a Punto Portátil / PC (SSD + Limpieza)', 'Multiplica por 5 la velocidad sin borrar tus archivos', 'Desde 59 €']
    ],
    wcfg: {
      heading: 'Consulta precio de tu pantalla o avería al instante',
      sub: 'Escribe marca y modelo exacto (ej. iPhone 13 / Redmi Note 12) para reservarte el repuesto.',
      itemLabel: '1. Marca y modelo exacto del móvil, tablet o PC',
      itemPlaceholder: 'Ej. iPhone 13 Pro / Samsung Galaxy A54'
    },
    calls: 26,
    badCalls: ['"¿Cuánto cuesta cambiar la pantalla de mi Samsung?" (hay 40 modelos)', '"Con el microscopio y el soldador a 380 ºC te tiembla el pulso si llaman"', '"¿Tenéis la batería en tienda para hacerlo ahora?"'],
    painTitle: 'Con el microscopio de microsoldadura puesto te llaman 25 veces sin saber el modelo exacto de móvil',
    painSpoken: 'Cuando estás despegando una pantalla OLED o soldando un conector bajo el microscopio una interrupción te cuesta romper un flex, y por teléfono nunca saben si es el modelo normal, el Pro o el 5G.',
    solSpoken: 'En tu web escriben modelo exacto, marcan pantalla, batería o carga y te entra al WhatsApp para comprobar repuesto y dar precio cerrado en treinta segundos.',
    waLines: ['• Dispositivo: iPhone 13 Pro', '• Avería: Cambio de Pantalla en 1h', '• Cliente: Víctor · Pasa hoy 17:30']
  },
  {
    id: 'zapateria', cat: 'comercio', day: 'DÍA 63', emoji: '👞', icon: 'ph-sneaker',
    label: 'Reparación de Calzado y Piel', plural: 'Talleres de Reparación de Calzado', singular: 'zapatero reparador',
    actionType: 'recepcion_taller_local', theme: 'atelier', sceneKind: 'repair',
    defaultName: 'Taller del Calzado Artesano', placeholder: 'Ej. Rápido del Calzado Maestro Gómez Sevilla',
    yearsExp: 'Tapas, Suelas Vibram, Bolsos y Mandos en el Acto',
    tagline: 'Devuelve la vida a tus zapatos, botas, zapatillas deportivas y bolsos de piel.',
    story: 'Cambio de tapas y medias suelas Vibram antideslizantes, cosido, hormas para ensanchar, teñido e hidratación de bolsos y duplicado rápido de llaves.',
    img: '/assets/real/cerrajeria_llaves.jpg',
    gal: ['/assets/real/cerrajeria_llaves.jpg', '/assets/real/tienda_work_1.jpg', '/assets/real/tienda_hero.jpg'],
    kw: ['zapater', 'reparacion de calzado', 'remendon', 'suelas', 'tapas zapatos', 'vibram', 'reparar bolso', 'limpieza zapatillas'],
    services: [
      ['Cambio de Tapas y Medias Suelas Antideslizantes', 'Goma Vibram o cuero de alta durabilidad (el par)', 'Desde 14 €'],
      ['Pegado, Cosido o Reconstrucción de Zapatillas / Botas', 'Resuelado completo montaña, sport o vestir', 'Desde 18 €'],
      ['Restauración de Bolsos, Cremalleras y Piel', 'Cambio de asas, cursores, hidratación y tinte', 'Desde 16 €'],
      ['Duplicado de Llaves de Vivienda y Mandos Garaje', 'En el acto mientras recoges tu calzado', 'Desde 4 €']
    ],
    wcfg: {
      heading: 'Valora el arreglo de tu calzado o bolso',
      sub: 'Indica qué artículo quieres arreglar; en WhatsApp puedes mandarnos foto de la suela o roce.',
      itemLabel: '1. Calzado, bota, zapatilla o bolso a reparar',
      itemPlaceholder: 'Ej. Botines de piel mujer (tapas y puntera) / Bolso cremallera'
    },
    calls: 14,
    badCalls: ['"Con el banco de lijado encendido y las manos con cola de contacto"', '"¿Se le puede cambiar la suela entera a estas botas de montaña?"', '"¿Arregláis también el asa de un bolso de piel?"'],
    painTitle: 'Con la máquina de finisaje encendida y cola en los dedos no puedes atender consultas',
    painSpoken: 'Un zapatero artesano trabaja entre polvo de lijado, adhesivos y máquinas ruidosas, y mucha gente joven ni sabe todo lo que puedes salvarles hasta que lo ve claro en Google.',
    solSpoken: 'Tu página enseña todos tus arreglos de calzado, bolsos y llaves y permite consultar con foto directa a tu WhatsApp.',
    waLines: ['• Artículo: Botas montaña + Bolso piel', '• Arreglo: Suela Vibram + Cremallera', '• Cliente: Eva · Envía foto por WhatsApp']
  },
  {
    id: 'copisteria', cat: 'comercio', day: 'DÍA 64', emoji: '🖨️', icon: 'ph-printer',
    label: 'Copistería e Imprenta Rápida', plural: 'Copisterías e Imprentas', singular: 'copistería e imprenta',
    actionType: 'encargo_sin_cola', theme: 'royal', sceneKind: 'shop',
    defaultName: 'Imprenta & Copias PrintYa', placeholder: 'Ej. Copistería Campus Salamanca',
    yearsExp: 'Envía tu PDF por WhatsApp · Recoge sin Cola',
    tagline: 'Impresión de apuntes, encuadernación, tarjetas, cartas de restaurante y vinilos.',
    story: 'Mándanos tus archivos desde el móvil y pasa directo a recogerlos encuadernados sin esperar cola, o encarga tarjetas, flyers, lonas y ropa laboral.',
    img: '/assets/real/tienda_work_2.jpg',
    gal: ['/assets/real/tienda_work_2.jpg', '/assets/real/tienda_hero.jpg', '/assets/real/comercio_regalo.jpg'],
    kw: ['copister', 'imprent', 'fotocopias', 'encuadernacion', 'vinilos', 'rotulos', 'tarjetas de visita', 'carteleria', 'camisetas personalizadas'],
    services: [
      ['Impresión Apuntes / Temario Oposiciones + Espiral', 'Blanco/negro o color doble cara papel 80g/100g', 'Desde 0,03 €/pág'],
      ['Pack 500 Tarjetas de Visita / Flyers Comerciales', 'Cartulina 350g laminado mate o brillo urgente', 'Desde 29 €'],
      ['Cartas Plastificadas e Irrompibles para Hostelería', 'Lavables + códigos QR impresos listos para mesa', 'Desde 39 €'],
      ['Vinilo de Escaparate, Lona o Rótulo Local', 'Diseño, impresión gran formato y colocación opcional', 'Presupuesto']
    ],
    wcfg: {
      heading: 'Prepara tu pedido de impresión sin hacer cola',
      sub: 'Indica copias, color/B&N y encuadernado; al pulsar enviar adjuntas tu PDF en WhatsApp.',
      qtyLabel: '2. Color o B/N, doble cara y encuadernado',
      qtyPlaceholder: 'Ej. 2 PDFs en B/N doble cara con espiral y tapa transparente',
      slots: ['10:30', '13:00', '17:30', '19:30']
    },
    calls: 22,
    badCalls: ['"Cola de 12 personas con pendrives lentos para sacar 3 hojas"', '"¿A qué correo os mando el PDF? Es que no os llega..."', '"¿Cuánto tardan 500 tarjetas y un vinilo para mi tienda?"'],
    painTitle: 'Colas enormes en mostrador abriendo correos y pendrives para imprimir dos documentos',
    painSpoken: 'En una copistería pierdes cinco minutos por persona esperando a que encuentren el correo en el móvil mientras el que viene a encargar cartelería o diez temarios se desespera en la cola.',
    solSpoken: 'En tu web marcan B/N o color, doble cara, encuadernado y hora de paso y te envían el PDF directo al WhatsApp para recoger y pagar en diez segundos.',
    waLines: ['• Impresión: B/N doble cara + Espiral', '• Recogida: Hoy 17:30 h sin hacer cola', '• Cliente: Pablo · Adjunta PDF ahora']
  },
  {
    id: 'inmobiliaria', cat: 'comercio', day: 'DÍA 65', emoji: '🏢', icon: 'ph-buildings',
    label: 'Agencia Inmobiliaria Local', plural: 'Inmobiliarias', singular: 'inmobiliaria',
    actionType: 'filtro_clientes', theme: 'gold', sceneKind: 'office',
    defaultName: 'Inmobiliaria Llave Clara', placeholder: 'Ej. Inmobiliaria Costa Hogar Alicante',
    yearsExp: 'Valoración Real Gratuita · Venta en < 60 Días',
    tagline: 'Vendemos o alquilamos tu vivienda al mejor precio de mercado con seguridad total.',
    story: 'Reportaje fotográfico profesional, filtro financiero real de compradores e inquilinos con seguro de impago y acompañamiento hasta firma en notaría.',
    img: '/assets/real/reformas_hero.jpg',
    gal: ['/assets/real/reformas_hero.jpg', '/assets/real/reformas_work_2.jpg', '/assets/real/carpinteria_hero.jpg'],
    kw: ['inmobiliari', 'fincas', 'vender piso', 'alquiler', 'tasacion vivienda', 'real estate', 'comprar casa'],
    services: [
      ['Valoración Profesional Gratuita de tu Vivienda', 'Informe comparativo real de cierres en tu misma calle', 'Gratis'],
      ['Gestión Integral de Venta (Reportaje + Notaría)', 'Filtro de solvencia previo antes de enseñar tu casa', 'Éxito a venta'],
      ['Alquiler Seguro con Garantía de Cobro Día 5', 'Estudio de nóminas + póliza de protección al propietario', 'Consultar'],
      ['Certificado Energético + Cédula de Habitabilidad', 'Tramitación técnica rápida para vender o alquilar', 'Desde 75 €']
    ],
    wcfg: {
      heading: 'Valora tu vivienda o filtra tu búsqueda',
      sub: 'Indica qué operación buscas para asignarte agente de tu zona sin llamadas en frío.',
      qualifyLabel: '2. ¿Eres propietario o buscas vivienda?',
      qualifyOptions: [
        'Soy propietario: quiero valorar/vender mi vivienda',
        'Soy propietario: quiero alquilar con seguro impago',
        'Busco comprar (cuento con ahorro / hipoteca)',
        'Busco alquiler estable (con contrato y nóminas)'
      ],
      detailLabel: '3. Zona / barrio y características básicas',
      detailPlaceholder: 'Ej. Piso 3 hab. con ascensor en zona Centro'
    },
    calls: 23,
    badCalls: ['"20 llamadas para un alquiler de gente sin contrato ni requisitos"', '"En mitad de una visita enseñando un piso suena el móvil 6 veces"', '"Propietarios que buscan agencia de barrio de confianza en Google"'],
    painTitle: 'Enseñar pisos a curiosos sin financiación o perder captaciones de propietarios de tu barrio',
    painSpoken: 'Un agente inmobiliario pierde media semana atendiendo llamadas de alquileres sin requisitos o visitas turísticas sin hipoteca, mientras está enseñando otro inmueble.',
    solSpoken: 'Tu web capta propietarios que quieren valorar su piso y filtra solvencia y operación antes de que el contacto aterrice en tu WhatsApp.',
    waLines: ['• Perfil: Propietario (Valorar y vender)', '• Inmueble: Piso 3 hab. + garaje Centro', '• Contacto: José Luis · Tarde libre']
  },
  {
    id: 'abogados', cat: 'comercio', day: 'DÍA 66', emoji: '⚖️', icon: 'ph-scales',
    label: 'Despacho de Abogados', plural: 'Despachos de Abogados', singular: 'despacho de abogados',
    actionType: 'filtro_clientes', theme: 'gold', sceneKind: 'office',
    defaultName: 'Vega & Asociados Abogados', placeholder: 'Ej. Bufete Morales Abogados Sevilla',
    yearsExp: 'Colegiados Ejercientes · Presupuesto por Escrito',
    tagline: 'Defensa legal clara, honesta y cercana en familia, herencias, laboral y civil.',
    story: 'Hablamos claro sin tecnicismos innecesarios. Analizamos la viabilidad real de tu caso en la primera consulta y firmamos hoja de encargo cerrada.',
    img: '/assets/real/tienda_hero.jpg',
    gal: ['/assets/real/tienda_hero.jpg', '/assets/real/clinica_work_2.jpg', '/assets/real/reformas_hero.jpg'],
    kw: ['abogad', 'bufete', 'despacho juridico', 'letrad', 'divorcio', 'herencia', 'despido', 'extranjeria', 'penal', 'reclamacion'],
    services: [
      ['Consulta Jurídica y Estudio de Viabilidad (Presencial/Tel.)', 'Descontable al 100% si iniciamos tu procedimiento', '50 €'],
      ['Derecho de Familia (Divorcio Mutuo Acuerdo / Custodia)', 'Convenio regulador ágil y trato humano', 'Presupuesto cerrado'],
      ['Herencias, Testamentos y Reclamación de Deudas', 'Tramitación integral fiscal y notarial sin bloqueos', 'Estudio previo'],
      ['Laboral: Despidos, Finiquitos e Incapacidades', 'Plazo urgente de 20 días hábiles · Acción inmediata', 'Urgente']
    ],
    wcfg: {
      heading: 'Solicita consulta previa filtrada con abogado',
      sub: 'Indica área legal y si tienes plazo o notificación urgente del juzgado o empresa.',
      qualifyLabel: '2. Situación actual del asunto',
      qualifyOptions: [
        'Urgente: he recibido carta de despido / notificación juzgado',
        'Quiero iniciar trámite (divorcio, herencia, reclamación)',
        'Necesito revisar contrato o consulta preventiva',
        'Empresa / Autónomo (asesoramiento continuado)'
      ],
      detailLabel: '3. Resumen breve (1 línea confidencial)',
      detailPlaceholder: 'Ej. Carta de despido recibida ayer / Herencia entre 3 hermanos'
    },
    calls: 15,
    badCalls: ['"En sala en el juzgado toda la mañana con el móvil apagado"', '"Llamadas de 25 minutos pidiendo asesoramiento gratis por teléfono"', '"Plazos de 20 días de despido que no pueden esperar"'],
    painTitle: 'Mañanas enteras en el juzgado y llamadas eternas de gente buscando consulta gratis por teléfono',
    painSpoken: 'Un abogado pasa las mañanas en vistas judiciales con el móvil apagado y por la tarde pierde horas en llamadas de media hora de personas que solo querían una consulta gratuita.',
    solSpoken: 'Tu página deja clara la consulta de viabilidad descontable, filtra urgencia de plazos y materia y te entrega el resumen confidencial en tu WhatsApp.',
    waLines: ['• Área: Laboral · Urgente (plazo 20d)', '• Caso: Carta despido recibida ayer', '• Cliente: Miguel Ángel · Cita tarde']
  },
  {
    id: 'asesoria', cat: 'comercio', day: 'DÍA 67', emoji: '📊', icon: 'ph-briefcase',
    label: 'Asesoría Fiscal, Laboral y Gestoría', plural: 'Asesorías y Gestorías', singular: 'asesoría y gestoría',
    actionType: 'filtro_clientes', theme: 'gold', sceneKind: 'office',
    defaultName: 'Asesoría CuentaClara', placeholder: 'Ej. Gestoría y Asesoría Fiscal Serrano Madrid',
    yearsExp: 'Autónomos, Pymes y Tráfico · Facturación Verifactu',
    tagline: 'Tus impuestos, nóminas y trámites al día sin sustos con Hacienda ni papeleos.',
    story: 'Alta de autónomo en 24h con tarifa plana, contabilidad digital cómoda desde tu móvil, laboral de empleados, Renta y transferencias de vehículos DGT.',
    img: '/assets/real/tienda_work_2.jpg',
    gal: ['/assets/real/tienda_work_2.jpg', '/assets/real/tienda_hero.jpg', '/assets/real/clinica_work_2.jpg'],
    kw: ['asesor', 'gestor', 'contable', 'autonomos', 'impuestos', 'hacienda', 'nominas', 'declaracion renta', 'transferencia coche'],
    services: [
      ['Cuota Mensual Integral Autónomos (Fiscal + Contable)', 'IVA, IRPF, resúmenes anuales y consultas directas', 'Desde 49 €/mes'],
      ['Asesoría Completa Sociedad Limitada (SL) + Laboral', 'Impuesto Sociedades, cuentas anuales y Seg. Social', 'Desde 125 €/mes'],
      ['Alta de Autónomo en 24h + Solicitud Tarifa Plana', 'Hacienda (036/037) y Seguridad Social bonificada', '59 € (Gratis c/cuota)'],
      ['Transferencia de Vehículo DGT / Declaración Renta', 'Cambio de titularidad en el acto sin cita en Tráfico', 'Desde 55 €']
    ],
    wcfg: {
      heading: 'Cuéntanos tu perfil y recibe propuesta exacta',
      sub: 'Filtra si eres autónomo, empresa o particular para asignarte asesor fiscal o gestor.',
      qualifyLabel: '2. Perfil del cliente',
      qualifyOptions: [
        'Voy a darme de alta como Autónomo / SL nueva',
        'Ya soy Autónomo y quiero cambiar de gestoría',
        'Soy Empresa (SL) con trabajadores en nómina',
        'Trámite puntual (Renta, Herencia o Tráfico DGT)'
      ],
      detailLabel: '3. Actividad y nº aprox. de trabajadores',
      detailPlaceholder: 'Ej. Hostelería con 3 empleados / Autónomo sin empleados'
    },
    calls: 18,
    badCalls: ['"En pleno cierre trimestral del día 20 sin poder respirar"', '"¿Cuánto cobráis a un autónomo o cuánto sale cambiar de nombre un coche?"', '"Clientes que siguen llevando facturas arrugadas en una bolsa"'],
    painTitle: 'En plena campaña de impuestos de enero, abril, julio u octubre no puedes parar por llamadas sin filtrar',
    painSpoken: 'En una asesoría cada trimestre es una contrarreloj; si interrumpes modelos de IVA para atender llamadas sueltas sin saber si es una SL con diez nóminas o una transferencia de moto, pierdes foco y clientes buenos.',
    solSpoken: 'Tu web muestra cuotas claras y clasifica al instante altas nuevas, cambios de gestoría de autónomos o empresas y trámites DGT en tu WhatsApp.',
    waLines: ['• Perfil: Cambio de gestoría (SL)', '• Detalle: Comercio con 3 empleados', '• Contacto: Sonia · Pide reunión']
  },
  {
    id: 'autoescuela', cat: 'comercio', day: 'DÍA 68', emoji: '🚙', icon: 'ph-steering-wheel',
    label: 'Autoescuela y Permisos', plural: 'Autoescuelas', singular: 'autoescuela',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'mechanic',
    defaultName: 'Autoescuela VíaVerde', placeholder: 'Ej. Autoescuela Avenida Valencia',
    yearsExp: 'Teórico Intensivo + App Test · Coche Manual y Automático',
    tagline: 'Sácate el carnet de coche o moto a la primera con test online y horarios flexibles.',
    story: 'Cursos intensivos de teórica, app oficial de exámenes DGT en tu móvil y clases prácticas de coche (manual/automático) y moto A2/A sin listas de espera eternas.',
    img: '/assets/real/lavadero_hero.jpg',
    gal: ['/assets/real/lavadero_hero.jpg', '/assets/real/motos_hero.jpg', '/assets/real/taller_hero.jpg'],
    kw: ['autoescuela', 'carnet de conducir', 'permiso b', 'carnet moto', 'permiso a2', 'cap', 'practicas de conducir', 'teorico intensivo'],
    services: [
      ['Matrícula Permiso B (Coche) + Curso Teórico + App Test', 'Material actualizado DGT + intensivos presenciales/online', 'Desde 99 €'],
      [' Bono 10 Clases Prácticas Coche (Manual o Automático)', 'Vehículos nuevos fáciles de aparcar · 45 min reales', 'Desde 265 €'],
      ['Permiso de Moto A2 / AM / Curso Paso al Carnet A', 'Pista propia de maniobras igual a examen DGT', 'Consultar Pack'],
      ['Clases de Reciclaje / Superar Miedo a Conducir', 'Sin examen, a tu ritmo por tus recorridos reales', '32 €/clase']
    ],
    wcfg: {
      heading: 'Consulta oferta de matrícula y empieza hoy',
      sub: 'Elige permiso (Coche B, Automático, Moto A2 o Reciclaje) y tu disponibilidad.',
      clientPlaceholder: 'Ej. Hugo · Permiso B Coche (tardes tras uni)'
    },
    calls: 17,
    badCalls: ['"Los chavales de 18 años comparan 4 autoescuelas en el móvil sin llamar a ninguna"', '"Profesores todo el día en el coche dando prácticas"', '"¿Tenéis lista de espera para empezar las prácticas?"'],
    painTitle: 'La gente joven ya no llama por teléfono: si no ve packs claros y WhatsApp en tu web se matricula en otra',
    painSpoken: 'Quien se saca hoy el carnet tiene dieciocho o veinte años: busca en el móvil precio de matrícula, a cuánto sale la práctica y disponibilidad, y si solo tienes un teléfono fijo ni te llama.',
    solSpoken: 'Tu web convierte visitas desde TikTok, Instagram y Google en matrículas directas por WhatsApp indicando permiso y horario.',
    waLines: ['• Permiso: Matrícula Coche B + Intensivo', '• Horario: Tardes · Hugo (18 años)', '• Consulta: Empezar esta misma semana']
  },
  {
    id: 'academia', cat: 'comercio', day: 'DÍA 69', emoji: '🎓', icon: 'ph-graduation-cap',
    label: 'Academia de Idiomas y Repaso', plural: 'Academias de Estudios e Idiomas', singular: 'academia',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'office',
    defaultName: 'Academia Impulso Estudios', placeholder: 'Ej. Academia Inglés & Ciencias Córdoba',
    yearsExp: 'Grupos Reducidos · Cambridge, EBAU y Apoyo Escolar',
    tagline: 'Inglés oficial Cambridge y refuerzo de Primaria, ESO y Bachillerato con resultados.',
    story: 'Grupos de máximo 6 alumnos por nivel, prueba de nivel gratuita, seguimiento mensual a padres y simulacros reales para EBAU/Selectividad y títulos B1, B2 y C1.',
    img: '/assets/real/tienda_work_2.jpg',
    gal: ['/assets/real/tienda_work_2.jpg', '/assets/real/clinica_work_2.jpg', '/assets/real/tienda_hero.jpg'],
    kw: ['academia', 'ingles', 'cambridge', 'clases particulares', 'refuerzo escolar', 'ebau', 'selectividad', 'oposiciones', 'matematicas'],
    services: [
      ['Prueba de Nivel Gratuita + Clase de Prueba', 'Ubicamos al alumno en su grupo exacto sin compromiso', 'Gratis'],
      ['Inglés Oficial Cambridge (Kids, B1, B2 First, C1)', '2 o 3 horas semanales con speaking nativo/bilingüe', 'Desde 69 €/mes'],
      ['Refuerzo Escolar ESO y Bachillerato / EBAU', 'Matemáticas, Física, Química, Lengua e Inglés', 'Desde 75 €/mes'],
      ['Curso Intensivo Examen Oficial / Recuperaciones', 'Grupos enfocados 100% a aprobar convocatoria', 'Consultar']
    ],
    wcfg: {
      heading: 'Reserva prueba de nivel o plaza en grupo',
      sub: 'Indica curso/edad o nivel de idioma para confirmarte horarios libres.',
      clientPlaceholder: 'Ej. Sofía (2º Bachillerato · Matemáticas y Química)'
    },
    calls: 19,
    badCalls: ['"En septiembre y exámenes: 30 llamadas mientras das clase en el aula"', '"¿Quedan plazas para 2º de Bachillerato los lunes y miércoles?"', '"Padres pidiendo horarios y precios por WhatsApp a mediodía"'],
    painTitle: 'Por las tardes estás dando clase en el aula justo cuando los padres llaman para matricular',
    painSpoken: 'En una academia pequeña los profesores estáis dentro de clase toda la tarde; si no hay nadie fijo en secretaría se os escapan matrículas de curso entero que valen setecientos euros cada una.',
    solSpoken: 'En tu web los padres ven niveles y precios mensuales, indican curso o examen Cambridge y reservan prueba de nivel directa en tu WhatsApp.',
    waLines: ['• Solicitud: Plaza Refuerzo 2º Bachillerato', '• Asignaturas: Matemáticas y Física', '• Alumna: Sofía · Tardes L-X']
  },
  {
    id: 'guarderia', cat: 'comercio', day: 'DÍA 70', emoji: '🧸', icon: 'ph-baby',
    label: 'Escuela Infantil y Guardería', plural: 'Escuelas Infantiles y Guarderías', singular: 'escuela infantil',
    actionType: 'filtro_clientes', theme: 'sage', sceneKind: 'office',
    defaultName: 'Escuela Infantil Pequeños Pasos', placeholder: 'Ej. Centro Infantil Mi Nido Zaragoza',
    yearsExp: '0 a 3 Años · Cocina Propia · Cheque Guardería',
    tagline: 'Un segundo hogar luminoso, seguro y lleno de cariño para tu bebé de 0 a 3 años.',
    story: 'Educadoras tituladas, patio exterior soleado, cocina casera elaborada a diario, flexibilidad horaria de 07:30 a 17:30 y tramitación de becas y cheque infantil.',
    img: '/assets/real/clinica_work_2.jpg',
    gal: ['/assets/real/clinica_work_2.jpg', '/assets/real/panaderia_brunch.jpg', '/assets/real/clinica_hero.jpg'],
    kw: ['guarder', 'escuela infantil', 'centro infantil', 'ludoteca', 'bebes', '0 a 3 anos', 'cheque guarderia'],
    services: [
      ['Visita Guiada Privada para Familias (Conoce el Centro)', 'Te enseñamos aulas, patio, cocina y proyecto educativo', 'Cita Gratis'],
      ['Jornada Escolar + Comedor Casero Propio (0–3 años)', 'Adaptado a alergias, BLW y triturados del día', 'Cheque / Bono'],
      ['Aula Matinal Temprana (desde 07:30) y Tardes', 'Conciliación real para horarios laborales', 'Flexible'],
      ['Escuela de Verano / Días sin Cole y Ludoteca', 'Talleres sensoriales, agua y juegos por semanas', 'Por semanas']
    ],
    wcfg: {
      heading: 'Reserva visita privada para conocer la escuela',
      sub: 'Indica la edad de tu peque y cuándo necesitaríais empezar.',
      qualifyLabel: '2. Aula por edad del bebé / peque',
      qualifyOptions: [
        'Bebés (4 a 12 meses · Aula Cuna)',
        '1 a 2 años ( caminantes )',
        '2 a 3 años (pre-colegio)',
        'Escuela de verano / Días sin cole'
      ],
      detailLabel: '3. Mes de incorporación y horario aprox.',
      detailPlaceholder: 'Ej. Empezar en septiembre · De 08:30 a 15:30 con comedor'
    },
    calls: 14,
    badCalls: ['"Atendiendo a los bebés en comedor o siesta sin poder salir al teléfono"', '"Familias jóvenes buscando escuela infantil moderna en Google"', '"¿Aceptáis el bono infantil de la comunidad?"'],
    painTitle: 'Las familias eligen guardería por la confianza que transmite tu web antes incluso de visitarte',
    painSpoken: 'Unos padres primerizos miran en el móvil todas las escuelas infantiles del barrio; si tu web se ve anticuada o no contestas porque estás dando comidas a los peques, ni siquiera agendan visita.',
    solSpoken: 'Tu página transmite calidez, explica cocina propia y becas y agenda visitas familiares filtradas por aula y mes en tu WhatsApp.',
    waLines: ['• Visita: Familia Aula 1-2 años', '• Inicio: Septiembre · Con comedor', '• Contacto: Mamá y papá de Mateo']
  },
  {
    id: 'fitness', cat: 'comercio', day: 'DÍA 71', emoji: '🏋️', icon: 'ph-barbell',
    label: 'Gimnasio, CrossFit y Entrenamiento', plural: 'Gimnasios y Centros de Entrenamiento', singular: 'centro de entrenamiento',
    actionType: 'agenda_citas', theme: 'royal', sceneKind: 'beauty',
    defaultName: 'Pulso Box & Entrenamiento', placeholder: 'Ej. Box Norte Funcional Bilbao',
    yearsExp: 'Sin Masificación · Grupos Reducidos · Prueba Gratis',
    tagline: 'Gana fuerza, energía y salud entrenando guiado por entrenadores reales.',
    story: 'Olvídate de esperar máquinas o no saber qué hacer. Grupos reducidos por nivel, entrenamiento personal y box funcional para todas las edades.',
    img: '/assets/real/fitness_hero.jpg',
    gal: ['/assets/real/fitness_hero.jpg', '/assets/real/fitness_work_1.jpg', '/assets/real/clinica_work_1.jpg'],
    kw: ['gimnasi', 'gym', 'crossfit', 'entrenador personal', 'entrenamiento funcional', 'box', 'halterofilia', 'calistenia', 'electroestimulacion'],
    services: [
      ['Sesión de Prueba Guiada + Valoración Inicial', 'Ven a probar un entreno adaptado a tu nivel actual', 'Gratis'],
      ['Cuota Grupos Reducidos (2 o 3 días/semana)', 'Técnica corregida en cada repetición · Sin permanencia', 'Desde 59 €/mes'],
      ['Pase Ilimitado Box Funcional / Sala Fuerza', 'Acceso a todas las franjas + programación en app', '79 €/mes'],
      ['Entrenamiento Personal 1 a 1 (Readaptación / Objetivo)', 'Planificación a medida + seguimiento nutricional opc.', 'Desde 35 €/ses.']
    ],
    wcfg: {
      heading: 'Reserva tu clase de prueba gratuita',
      sub: 'Elige tu objetivo y la franja en la que sueles entrenar (mañanas, mediodía o tardes).',
      clientPlaceholder: 'Ej. Rubén · Perder peso y ganar fuerza (tardes)'
    },
    calls: 18,
    badCalls: ['"Dirigiendo el WOD con música alta y el cronómetro en marcha"', '"¿Me va a costar mucho si llevo años sin hacer deporte?"', '"¿Cuánto cuesta al mes y tenéis permanencia?"'],
    painTitle: 'Dirigiendo clases de hora en hora con música y cronómetro sin poder atender a nuevos socios',
    painSpoken: 'Cuando diriges grupos de entrenamiento estás corrigiendo posturas con el cronómetro en marcha: no puedes salirte de sala a explicar cuotas y la gente con vergüenza prefiere reservar prueba online.',
    solSpoken: 'Tu web quita el miedo inicial, enseña cuotas sin permanencia y cierra clases de prueba gratuitas directas en tu WhatsApp.',
    waLines: ['• Reserva: Clase de Prueba Gratuita', '• Franja: Tardes 18:30 h · Principiante', '• Nombre: Rubén · Ganar fuerza']
  },
  {
    id: 'pilates', cat: 'comercio', day: 'DÍA 72', emoji: '🧘‍♀️', icon: 'ph-flower-lotus',
    label: 'Estudio de Pilates Máquina y Yoga', plural: 'Estudios de Pilates y Yoga', singular: 'estudio de pilates y yoga',
    actionType: 'agenda_citas', theme: 'sage', sceneKind: 'beauty',
    defaultName: 'Estudio Equilibrio Pilates Reformer', placeholder: 'Ej. Pilates & Yoga Alma Valencia',
    yearsExp: 'Pilates Reformer · Máx. 5 Personas · Embarazo y Espalda',
    tagline: 'Cuida tu espalda, postura y flexibilidad con Pilates Reformer y Yoga consciente.',
    story: 'Clases en grupos ultrarreducidos con máquinas Reformer y Cadillac, pilates terapéutico para hernias/escoliosis, preparto e hipopresivos.',
    img: '/assets/real/fitness_work_1.jpg',
    gal: ['/assets/real/fitness_work_1.jpg', '/assets/real/clinica_work_2.jpg', '/assets/real/fitness_hero.jpg'],
    kw: ['pilates', 'reformer', 'pilates maquina', 'yoga', 'hipopresivos', 'meditacion', 'espalda sana', 'barre'],
    services: [
      ['Clase de Prueba Pilates Reformer (Máquinas)', 'Valoración postural + sesión guiada (50 min)', '15 €'],
      ['Mensualidad Pilates Máquina (2 clases/semana)', 'Grupos máx. 5 alumnos · Recuperación de clases flexible', '85 €/mes'],
      ['Yoga Integral / Vinyasa / Hatha (2 clases/semana)', 'Respiración, movilidad y calma mental', '55 €/mes'],
      ['Pilates Embarazo, Posparto e Hipopresivos', 'Fortalecimiento seguro de core y suelo pélvico', '75 €/mes']
    ],
    wcfg: {
      heading: 'Reserva tu máquina en clase de prueba',
      sub: 'Las plazas por máquina Reformer son limitadas; indícanos tu horario preferido.',
      clientPlaceholder: 'Ej. Alicia · Pilates Máquina (dolor espalda)'
    },
    calls: 16,
    badCalls: ['"En silencio guiando respiración en clase sin teléfono en sala"', '"¿Queda hueco en máquinas los martes y jueves a las 19:00?"', '"Tengo una hernia lumbar, ¿puedo hacer Reformer?"'],
    painTitle: 'Impartiendo clase en silencio toda la tarde mientras pierdes alumnas de Pilates Máquina',
    painSpoken: 'En un estudio de pilates o yoga trabajas tú misma dando seis clases seguidas en calma absoluta; cada alumna que no consigue contactar son ochenta y cinco euros al mes que pierdes.',
    solSpoken: 'Desde tu web consultan horarios y precios reales y reservan su clase de prueba Reformer o Yoga directa a tu WhatsApp.',
    waLines: ['• Reserva: Prueba Pilates Reformer (15 €)', '• Horario: Martes/Jueves · Tardes', '• Alumna: Alicia · Molestia lumbar']
  },
  {
    id: 'baile', cat: 'comercio', day: 'DÍA 73', emoji: '💃', icon: 'ph-music-notes',
    label: 'Escuela de Baile y Artes Marciales', plural: 'Escuelas de Baile y Artes Marciales', singular: 'escuela de baile o artes marciales',
    actionType: 'agenda_citas', theme: 'crimson', sceneKind: 'beauty',
    defaultName: 'Ritmo & Tatami Escuela Activa', placeholder: 'Ej. Escuela Salsa & Urbano Sevilla / Dojo Bushido',
    yearsExp: 'Desde Cero · Infantil y Adultos · Clase de Prueba Gratis',
    tagline: 'Aprende desde cero con buen ambiente: salsa, bachata, urbano, flamenco o artes marciales.',
    story: 'Niveles desde iniciación absoluta (no necesitas venir en pareja), grupos infantiles por edades y clases de defensa personal, boxeo, judo, karate o BJJ.',
    img: '/assets/real/fitness_hero.jpg',
    gal: ['/assets/real/fitness_hero.jpg', '/assets/real/fitness_work_1.jpg', '/assets/real/barberia_work_1.jpg'],
    kw: ['escuela de baile', 'academia de baile', 'danza', 'salsa', 'bachata', 'flamenco', 'artes marciales', 'karate', 'judo', 'boxeo', 'jiu jitsu', 'taekwondo'],
    services: [
      ['1ª Clase de Prueba Gratuita (Sin Compromiso)', 'Conoce al grupo y al profesor en tu nivel real', 'Gratis'],
      ['Clases Adultos (Salsa/Bachata, Urbano o Defensa/Boxeo)', '2 horas semanales · No hace falta traer pareja', 'Desde 45 €/mes'],
      ['Escuela Infantil y Juvenil (Tardes Extraescolares)', 'Disciplina, coordinación, compañerismo y diversión', 'Desde 39 €/mes'],
      ['Coreografía Personalizada de Boda (Novios)', '4 sesiones privadas a medida con vuestra canción', '149 €']
    ],
    wcfg: {
      heading: 'Apúntate a tu clase de prueba gratis',
      sub: 'Dinos qué disciplina o estilo buscas, tu edad/nivel y te confirmamos el día.',
      clientPlaceholder: 'Ej. Mario · Bachata desde cero (voy sin pareja)'
    },
    calls: 16,
    badCalls: ['"Con los altavoces a todo volumen en la sala de espejos"', '"¿Puedo apuntarme a salsa si voy solo/a y empiezo de cero?"', '"¿A partir de qué edad cogéis niños en karate/baile?"'],
    painTitle: 'Con la música alta en la pista o en el tatami nadie oye el teléfono de recepción',
    painSpoken: 'En una escuela de baile o en un dojo entre las cinco y las diez de la noche suena la música o estás en el tatami, justo las horas en que todo el mundo busca apuntarse.',
    solSpoken: 'Tu web resuelve las dudas típicas como ir sin pareja o edades infantiles y llena tus clases de prueba desde WhatsApp.',
    waLines: ['• Prueba: Iniciación desde cero (Gratis)', '• Grupo: Tardes 20:00 h · Sin pareja', '• Alumno: Mario · Confirmar día']
  },
  {
    id: 'fotografo', cat: 'comercio', day: 'DÍA 74', emoji: '📸', icon: 'ph-camera',
    label: 'Fotógrafo y Estudio Audiovisual', plural: 'Fotógrafos y Estudios', singular: 'estudio de fotografía',
    actionType: 'filtro_clientes', theme: 'atelier', sceneKind: 'office',
    defaultName: 'LuzViva Estudio Fotográfico', placeholder: 'Ej. Estudio Foto & Vídeo Mirada Natural Valencia',
    yearsExp: 'Bodas, Comuniones, Embarazo y Marca Personal',
    tagline: 'Recuerdos naturales llenos de emoción y fotografía profesional para marcas.',
    story: 'Reportajes documentales de boda y comunión sin posados forzados, sesiones newborn y embarazo en estudio de luz natural, fotos DNI y vídeo corporativo.',
    img: '/assets/real/floristeria_hero.jpg',
    gal: ['/assets/real/floristeria_hero.jpg', '/assets/real/comercio_regalo.jpg', '/assets/real/peluqueria_hero.jpg'],
    kw: ['fotograf', 'estudio fotografico', 'reportaje boda', 'comunion', 'newborn', 'embarazo', 'videografo', 'audiovisual'],
    services: [
      ['Sesión en Estudio / Exterior (Embarazo, Familia, Bebé)', 'Galería digital alta resolución + copias fine art', 'Desde 135 €'],
      ['Reportaje Completo de Comunión (Estudio + Exterior)', 'Álbum artesanal en lino + recordatorios opcionales', 'Desde 260 €'],
      ['Cobertura Documental de Boda (Foto + Vídeo Cine 4K)', 'Desde preparativos hasta fiesta · Consulta tu fecha', 'Consultar Fecha'],
      ['Fotografía y Reels para Negocios, Producto o Marca', 'Contenido profesional que multiplica tus ventas', 'Desde 180 €']
    ],
    wcfg: {
      heading: 'Comprueba disponibilidad de tu fecha en 15s',
      sub: 'Indica tipo de reportaje y fecha exacta o aproximada para confirmar agenda.',
      qualifyLabel: '2. Tipo de sesión o evento',
      qualifyOptions: [
        'Boda (consultar fecha disponible en agenda)',
        'Comunión o Bautizo',
        'Sesión Embarazo / Newborn / Familia',
        'Empresa, Gastronomía o Marca Personal'
      ],
      detailLabel: '3. Fecha del evento (o semana de embarazo) y lugar',
      detailPlaceholder: 'Ej. Boda 20 de junio en Finca / Semana 30 embarazo'
    },
    calls: 14,
    badCalls: ['"En mitad de una boda o sesión con un recién nacido dormido"', '"¿Tienes libre el 14 de junio y cuánto cobras?"', '"Portales de bodas cobrando miles de euros al año por aparecer"'],
    painTitle: 'Pagar fortunas a portales de bodas o recibir mensajes sin fecha ni tipo de reportaje',
    painSpoken: 'Un fotógrafo no puede contestar el móvil en mitad de una ceremonia o durmiendo a un bebé en estudio, y los portales de eventos cobran miles de euros anuales por darte visibilidad.',
    solSpoken: 'Tu web propia luce tu portafolio, filtra tipo de reportaje y fecha exacta del enlace o sesión y te conecta directo por WhatsApp.',
    waLines: ['• Reportaje: Boda Foto + Vídeo 4K', '• Fecha: Sábado 20 Junio · Finca', '• Pareja: Claudia y Fran · Piden dossier']
  },
  {
    id: 'eventos', cat: 'comercio', day: 'DÍA 75', emoji: '🎉', icon: 'ph-confetti',
    label: 'Organización de Eventos, Sonido y DJ', plural: 'Empresas de Eventos y DJs', singular: 'empresa de eventos y DJ',
    actionType: 'filtro_clientes', theme: 'crimson', sceneKind: 'office',
    defaultName: 'Vibra Eventos & Sonido Pro', placeholder: 'Ej. Sonido, Fotomatón y DJ FiestaSur Málaga',
    yearsExp: 'Bodas, Fiestas Privadas y Empresas · Equipo Propio',
    tagline: 'DJ animador, sonido e iluminación profesional, fotomatón 360 y decoración de eventos.',
    story: 'Hacemos que tu boda, comunión, cumpleaños o evento de empresa sea inolvidable: cabina DJ elegante, sonido cristalino, plataforma 360º, letras luminosas y catering.',
    img: '/assets/real/terraza_bar.jpg',
    gal: ['/assets/real/terraza_bar.jpg', '/assets/real/floristeria_hero.jpg', '/assets/real/comercio_regalo.jpg'],
    kw: ['eventos', 'dj', 'discomovil', 'sonido e iluminacion', 'fotomaton', 'plataforma 360', 'animacion infantil', 'catering', 'wedding planner'],
    services: [
      ['Pack DJ Boda Completo (Ceremonia + Cóctel + Barra Libre)', 'Sonido profesional, iluminación robótica y reunión musical', 'Desde 650 €'],
      ['Alquiler Fotomatón Espejo / Plataforma Vídeo 360º (3h)', 'Fotos ilimitadas impresas, atrezzo, álbum y azafato/a', 'Desde 340 €'],
      ['Discomóvil Cumpleaños, Comuniones y Fiestas Privadas', 'Montaje adaptado a finca, restaurante o local', 'Desde 290 €'],
      ['Sonorización, Pantallas e Iluminación para Empresas', 'Microfonía inalámbrica y técnico en directo', 'Presupuesto']
    ],
    wcfg: {
      heading: 'Bloquea tu fecha antes de que se ocupe',
      sub: 'En temporada de sábados las fechas vuelan. Dinos día, lugar e invitados.',
      qualifyLabel: '2. Qué celebráis',
      qualifyOptions: [
        'Boda (Ceremonia / Fiesta completa)',
        'Comunión o Bautizo',
        'Cumpleaños / Fiesta privada (30, 40, 50...)',
        'Evento corporativo / Ayuntamiento / Comisión'
      ],
      detailLabel: '3. Fecha exacta, municipio y nº aprox. invitados',
      detailPlaceholder: 'Ej. Sábado 12 septiembre · Marbella · 130 invitados'
    },
    calls: 17,
    badCalls: ['"Pinchando o montando equipo un sábado mientras te piden fechas"', '"¿Estás libre el primer sábado de julio?" (sin decir dónde ni horas)', '"30 presupuestos enviados a ciegas sin saber número de invitados"'],
    painTitle: 'Sin saber fecha exacta, finca ni número de invitados no puedes saber ni qué equipo llevar',
    painSpoken: 'En eventos y sonido todos los clientes quieren los mismos veinte sábados del año, y si te escriben sin decir fecha, población ni aforo pierdes días enteros persiguiendo datos.',
    solSpoken: 'Tu web pide celebración, fecha exacta, localidad e invitados antes de abrir tu WhatsApp para que cierres la reserva en el acto.',
    waLines: ['• Evento: Pack DJ Boda + Fotomatón', '• Fecha: 12 Septiembre · 130 inv.', '• Lugar: Finca en Marbella · Alberto']
  },
  {
    id: 'bicicletas', cat: 'comercio', day: 'DÍA 76', emoji: '🚲', icon: 'ph-bicycle',
    label: 'Tienda y Taller de Bicicletas y Patinetes', plural: 'Talleres de Bicis y Patinetes', singular: 'taller de bicicletas y patinetes',
    actionType: 'recepcion_taller_local', theme: 'sage', sceneKind: 'repair',
    defaultName: 'El Garaje Bikes & Mobility', placeholder: 'Ej. Ciclos y Patinetes RuedaViva Elche',
    yearsExp: 'MTB, Carretera, E-Bikes Bosch y Patinetes Eléctricos',
    tagline: 'Puesta a punto de tu bici, suspensiones, e-bikes y reparación de patinetes en el día.',
    story: 'Taller especializado en transmisión electrónica, purgado hidráulico, tubeless, horquillas Fox/RockShox y neumáticos macizos o baterías de patinete eléctrico.',
    img: '/assets/real/motos_work_2.jpg',
    gal: ['/assets/real/motos_work_2.jpg', '/assets/real/taller_work_1.jpg', '/assets/real/motos_hero.jpg'],
    kw: ['biciclet', 'bici', 'ciclismo', 'mtb', 'ebike', 'patinete electrico', 'xiaomi scooter', 'tubeless'],
    services: [
      ['Revisión General Bici (Ajuste Cambios, Frenos y Engrase)', 'Lavado transmisión + centrado básico en 24h', '35 €'],
      ['Cambio Rueda / Cámara Antirrebentón Patinete Eléctrico', 'Neumático reforzado o macizo montado en el día', 'Desde 25 €'],
      ['Mantenimiento Horquilla / Amortiguador + Tubeless', 'Retenes originales + líquido sellante nuevo', 'Desde 65 €'],
      ['Diagnosis Oficial Motor E-Bike (Bosch / Shimano / Brose)', 'Actualización firmware e informe salud batería', '29 €']
    ],
    wcfg: {
      heading: 'Reserva paso por taller para tu bici o patinete',
      sub: 'Indica modelo de bicicleta o patinete y qué ajuste necesita para tener el recambio listo.',
      itemLabel: '1. Modelo de bicicleta, E-Bike o patinete eléctrico',
      itemPlaceholder: 'Ej. Orbea Alma MTB 29" / Patinete Xiaomi Pro 2'
    },
    calls: 16,
    badCalls: ['"Viernes por la tarde antes de salir de ruta el sábado: taller lleno"', '"Con las manos llenas de líquido tubeless y grasa de cadena"', '"¿Cambiáis ruedas pinchadas de patinete Xiaomi hoy mismo?"'],
    painTitle: 'Con la bici colgada en el potro y grasa en las manos no puedes atender llamadas de pinchazos y rutas',
    painSpoken: 'Los jueves y viernes todo ciclista quiere la bici lista para salir el sábado por la mañana, mientras entran patinetes pinchados cada media hora.',
    solSpoken: 'Desde tu web reservan hueco indicando si es MTB, carretera o patinete y la avería exacta directo a tu WhatsApp.',
    waLines: ['• Vehículo: Orbea Alma MTB 29"', '• Taller: Revisión General + Tubeless', '• Entrega: Jueves mañana · Raúl']
  },
  {
    id: 'tienda', cat: 'comercio', day: 'DÍA 77', emoji: '🛍️', icon: 'ph-storefront',
    label: 'Comercio Local, Moda y Regalos', plural: 'Comercios y Tiendas Locales', singular: 'comercio local',
    actionType: 'encargo_sin_cola', theme: 'royal', sceneKind: 'shop',
    defaultName: 'Boutique Origen Local', placeholder: 'Ej. Tienda Moda & Regalos Alma Bilbao',
    yearsExp: 'Reserva Talla o Producto · Recoge Hoy o Envío 24h',
    tagline: 'Nuestro escaparate abierto 24 horas en tu móvil con reserva directa por WhatsApp.',
    story: 'Descubre nuestras novedades, consulta tallas o disponibilidad al instante y aparta tu artículo favorito para probártelo en tienda o recibirlo en casa.',
    img: '/assets/real/tienda_hero.jpg',
    gal: ['/assets/real/tienda_hero.jpg', '/assets/real/comercio_regalo.jpg', '/assets/real/tienda_work_1.jpg'],
    kw: ['tienda', 'comercio', 'boutique', 'moda', 'ropa', 'joyeria', 'relojeria', 'perfumeria', 'papeleria', 'libreria', 'regalos', 'merceria', 'ferreteria'],
    services: [
      ['Reserva de Prenda / Talla / Artículo para Probar en Tienda', 'Te lo guardamos 24h a tu nombre sin compromiso', 'Reserva 0 €'],
      ['Pack Regalo Envuelto con Tarjeta Personalizada', 'Listo para recoger en 15 min sin esperar cola', 'Desde 25 €'],
      ['Pedido con Envío Rápido a Domicilio (24/48h)', 'Pago cómodo por Bizum o tarjeta + seguimiento', 'Consultar'],
      ['Asesoramiento Personalizado por Foto / Videollamada', 'Te enseñamos tallas, colores y medidas al momento', 'Directo WhatsApp']
    ],
    wcfg: {
      heading: 'Aparta tu artículo o encarga regalo sin esperas',
      sub: 'Dinos qué producto, talla o idea de regalo buscas y cuándo pasas por tienda.',
      qtyLabel: '2. Artículo, talla, color o presupuesto regalo',
      qtyPlaceholder: 'Ej. Apartar vestido verde talla M / Regalo cumpleaños 40 €',
      slots: ['11:00', '13:15', '17:30', '19:30']
    },
    calls: 15,
    badCalls: ['"¿Os queda este artículo en talla M antes de acercarme?"', '"Tiendas online de 2.500 € que nadie sabe actualizar"', '"Clientes que ven algo en tu Instagram pero no saben precio ni horario"'],
    painTitle: 'Perder ventas frente a gigantes online por no tener un escaparate rápido conectado a tu WhatsApp',
    painSpoken: 'Un comercio local no necesita gastarse tres mil euros en una tienda online compleja que luego nadie actualiza: necesita que el vecino vea novedades, precios y aparte talla en diez segundos por WhatsApp.',
    solSpoken: 'Tu web funciona como escaparate vivo actualizable desde el móvil y cierra reservas en tienda y envíos directos en tu WhatsApp sin comisiones.',
    waLines: ['• Reserva: Apartar talla M en tienda', '• Paso hoy: 18:00 h · Andrea', '• Canal: Reserva directa 0% comisión']
  }
];
// =========================================================================
// COMPILACIÓN DEL CATÁLOGO + BUSCADOR + RESPALDO INTELIGENTE UNIVERSAL
// =========================================================================

function miwebNormalizeStr(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function miwebCapitalize(str) {
  const s = String(str || '').trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

const OFICIOS_CAT_LABELS = OFICIOS_CATEGORIES.reduce((acc, c) => {
  acc[c.id] = c.label;
  return acc;
}, {});

function hydrateRawOficio(raw) {
  const modMeta = ACTION_MODULES_META[raw.actionType] || ACTION_MODULES_META.agenda_citas;
  const services = (raw.services || []).map(item => {
    if (Array.isArray(item)) {
      return { title: item[0], meta: item[1], price: item[2] };
    }
    return item;
  });
  return {
    id: raw.id,
    cat: raw.cat,
    categoryLabel: OFICIOS_CAT_LABELS[raw.cat] || 'Oficios y Negocios',
    day: raw.day || 'DÍA 18',
    emoji: raw.emoji || '🏪',
    icon: raw.icon || 'ph-storefront',
    label: raw.label,
    plural: raw.plural || raw.label,
    singular: raw.singular || raw.label.toLowerCase(),
    actionType: raw.actionType,
    moduleBadge: modMeta.badge,
    ctaShort: modMeta.ctaShort,
    moduleSummary: modMeta.summary,
    defaultTheme: raw.theme || 'royal',
    sceneKind: raw.sceneKind || 'shop',
    defaultName: raw.defaultName,
    placeholder: raw.placeholder || ('Ej. ' + raw.defaultName + ' Madrid'),
    yearsExp: raw.yearsExp || 'Atención Profesional Directa',
    tagline: raw.tagline,
    story: raw.story,
    heroImage: raw.img,
    gallery: Array.isArray(raw.gal) && raw.gal.length ? raw.gal : [raw.img],
    kw: raw.kw || [],
    services,
    wcfg: raw.wcfg || {},
    calls: raw.calls || 16,
    badCalls: raw.badCalls || [
      '"¿Cuánto me cuesta más o menos?"',
      '"¿Tenéis hueco hoy a última hora?"',
      '"Te llamaba solo para preguntar una cosa rápida"'
    ],
    painTitle: raw.painTitle,
    painSpoken: raw.painSpoken,
    solSpoken: raw.solSpoken,
    waLines: raw.waLines || [
      '• Servicio: ' + (services[0] ? services[0].title : raw.label),
      '• Detalle confirmado desde la web',
      '• Cliente directo en WhatsApp (0% comisión)'
    ],
    isCustom: false
  };
}

const MIWEB_OFICIOS_LIST = OFICIOS_RAW_LIST.map(hydrateRawOficio);

const MIWEB_OFICIOS_BY_ID = {};
MIWEB_OFICIOS_LIST.forEach(item => {
  MIWEB_OFICIOS_BY_ID[item.id] = item;
});

// Alias retrocompatibles con enlaces antiguos guardados
MIWEB_OFICIOS_BY_ID.urgencias = Object.assign({}, MIWEB_OFICIOS_BY_ID.cerrajero, { id: 'urgencias' });
MIWEB_OFICIOS_BY_ID.gimnasio = Object.assign({}, MIWEB_OFICIOS_BY_ID.fitness, { id: 'gimnasio' });
MIWEB_OFICIOS_BY_ID.personal = Object.assign({}, MIWEB_OFICIOS_BY_ID.abogados, {
  id: 'personal',
  label: 'Despacho y Servicios Profesionales'
});

function miwebSearchOficios(query, categoryId) {
  const cat = categoryId && categoryId !== 'all' ? categoryId : null;
  const base = cat ? MIWEB_OFICIOS_LIST.filter(o => o.cat === cat) : MIWEB_OFICIOS_LIST.slice();
  const q = miwebNormalizeStr(query);
  if (!q) return base;

  const tokens = q.split(' ').filter(t => t.length >= 2);
  const scored = [];

  for (const item of base) {
    const labelNorm = miwebNormalizeStr(item.label + ' ' + item.plural + ' ' + item.singular);
    const kwNorm = miwebNormalizeStr((item.kw || []).join(' '));
    const srvNorm = miwebNormalizeStr((item.services || []).map(s => s.title).join(' '));
    const hay = labelNorm + ' ' + kwNorm + ' ' + srvNorm + ' ' + miwebNormalizeStr(item.categoryLabel);

    let score = 0;
    if (labelNorm.startsWith(q)) score += 120;
    else if (labelNorm.includes(q)) score += 90;
    if (kwNorm.includes(q)) score += 80;
    if (srvNorm.includes(q)) score += 45;

    let matchedTokens = 0;
    for (const tk of tokens) {
      if (labelNorm.includes(tk)) { score += 35; matchedTokens++; }
      else if (kwNorm.includes(tk)) { score += 28; matchedTokens++; }
      else if (hay.includes(tk)) { score += 14; matchedTokens++; }
    }

    if (tokens.length > 1 && matchedTokens === tokens.length) score += 40;
    if (score > 0) scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.map(s => s.item);
}

// Separa nombre del negocio/oficio y ciudad española si el usuario la escribe al final (ej. "Carpintería Gómez Valencia" o "Afinador de pianos Toledo")
function miwebSplitNameAndCity(rawInput) {
  const raw = String(rawInput || '').trim();
  if (!raw) return { name: '', city: 'Madrid' };

  const cities = [
    'Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Malaga', 'Murcia',
    'Palma', 'Mallorca', 'Bilbao', 'Alicante', 'Córdoba', 'Cordoba', 'Valladolid', 'Vigo',
    'Gijón', 'Gijon', 'Hospitalet', 'Vitoria', 'A Coruña', 'Coruña', 'Granada', 'Elche',
    'Oviedo', 'Badalona', 'Cartagena', 'Terrassa', 'Jerez', 'Sabadell', 'Móstoles', 'Mostoles',
    'Santa Cruz', 'Tenerife', 'Pamplona', 'Almería', 'Almeria', 'Alcalá', 'Alcala', 'Fuenlabrada',
    'Leganés', 'Leganes', 'Donostia', 'San Sebastián', 'San Sebastian', 'Getafe', 'Burgos',
    'Albacete', 'Castellón', 'Castellon', 'Santander', 'Alcorcón', 'Alcorcon', 'La Laguna',
    'Marbella', 'Badajoz', 'Logroño', 'Logrono', 'Salamanca', 'Huelva', 'Lleida', 'Tarragona',
    'Dos Hermanas', 'Parla', 'Torrejón', 'Torrejon', 'Mataró', 'Mataro', 'León', 'Leon',
    'Algeciras', 'Cádiz', 'Cadiz', 'Jaén', 'Jaen', 'Ourense', 'Reus', 'Telde', 'Girona',
    'Barakaldo', 'Lugo', 'Santiago', 'Cáceres', 'Caceres', 'Lorca', 'Coslada', 'Talavera',
    'El Puerto', 'Cornellà', 'Cornella', 'Avilés', 'Aviles', 'Las Rozas', 'Palencia', 'Pozuelo',
    'Rivas', 'Guadalajara', 'Toledo', 'Pontevedra', 'Ciudad Real', 'Zamora', 'Ávila', 'Avila',
    'Cuenca', 'Huesca', 'Segovia', 'Soria', 'Teruel', 'Ibiza', 'Menorca', 'Lanzarote', 'Fuerteventura',
    'Las Palmas', 'Benidorm', 'Gandía', 'Gandia', 'Torrevieja', 'Estepona', 'Fuengirola', 'Vélez',
    'Chiclana', 'Roquetas', 'Ponferrada', 'Mérida', 'Merida', 'Ferrol', 'Alcoy', 'Sagunto', 'Torrent'
  ];

  const cleaned = raw.replace(/\s+/g, ' ');
  for (const c of cities) {
    const escaped = c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const rx = new RegExp(`(?:\\s*,\\s*|\\s+en\\s+|\\s+-\\s+|\\s+)(${escaped})$`, 'i');
    const m = cleaned.match(rx);
    if (m && cleaned.length > m[0].length + 2) {
      const bizPart = cleaned.slice(0, cleaned.length - m[0].length).replace(/[\s,·-]+$/, '').trim();
      const canonicalCity = c === 'Malaga' ? 'Málaga'
        : c === 'Cordoba' ? 'Córdoba'
        : c === 'Gijon' ? 'Gijón'
        : c === 'Almeria' ? 'Almería'
        : c === 'Castellon' ? 'Castellón'
        : c === 'Logrono' ? 'Logroño'
        : c === 'Leon' ? 'León'
        : c === 'Cadiz' ? 'Cádiz'
        : c === 'Jaen' ? 'Jaén'
        : c === 'Caceres' ? 'Cáceres'
        : c === 'Avila' ? 'Ávila'
        : c === 'Merida' ? 'Mérida'
        : c;
      return { name: bizPart, city: canonicalCity };
    }
  }
  return { name: cleaned, city: 'Madrid' };
}

// Extrae ciudad y oficio limpio de un texto libre como "Afinador de pianos Toledo"
function miwebExtractTradeAndCity(rawText) {
  const raw = String(rawText || '').trim();
  if (!raw) return { tradeLabel: 'Negocio Local', bizName: 'Mi Negocio Local', city: 'Madrid' };

  const sp = miwebSplitNameAndCity(raw);
  let core = String(sp.name || raw).trim();
  core = core.replace(/\s+(s\.?l\.?u?|s\.?a\.?|c\.?b\.?)$/i, '').trim();

  // Limpiar nombres propios finales comunes si empieza por oficio ("Afinador de pianos López" -> oficio "Afinador de pianos")
  const tradeWords = core.split(/\s+/);
  let tradePhrase = core;
  if (tradeWords.length >= 3) {
    const genericLead = /^(taller|centro|clinica|estudio|servicio|empresa|casa|maestro|hermanos|hnos)\s+(de\s+)?/i;
    const stripped = core.replace(genericLead, '').trim();
    if (stripped.length >= 4) tradePhrase = stripped;
  }

  return {
    tradeLabel: miwebCapitalize(tradePhrase),
    bizName: miwebCapitalize(core),
    city: sp.city || 'Madrid'
  };
}

// Generador Inteligente de Respaldo Universal para cualquier oficio no listado en los 66
function miwebBuildCustomOficio(rawText, customDay) {
  const parsed = miwebExtractTradeAndCity(rawText);
  const tNorm = miwebNormalizeStr(parsed.tradeLabel + ' ' + rawText);
  const tradeTitle = parsed.tradeLabel || 'Especialista Local';
  const tradeLower = tradeTitle.toLowerCase();

  let actionType = 'agenda_citas';
  let cat = 'comercio';
  let emoji = '🛠️';
  let icon = 'ph-sparkle';
  let theme = 'royal';
  let sceneKind = 'repair';
  let img = '/assets/real/tienda_hero.jpg';
  let gal = ['/assets/real/tienda_hero.jpg', '/assets/real/comercio_regalo.jpg', '/assets/real/tienda_work_2.jpg'];
  let services = [];
  let wcfg = {};

  if (/(urgent|24h|24 horas|desatasc|fuga|apertura|rescate|asistencia|averia urgente)/.test(tNorm)) {
    actionType = 'urgencia_o_llaves';
    cat = 'hogar';
    emoji = '🚨';
    icon = 'ph-lightning';
    theme = 'gold';
    sceneKind = 'locksmith';
    img = '/assets/real/cerrajeria_work_1.jpg';
    gal = ['/assets/real/cerrajeria_work_1.jpg', '/assets/real/llavero_hero.jpg', '/assets/real/reformas_work_1.jpg'];
    services = [
      { title: `Asistencia Urgente · ${tradeTitle}`, meta: 'Desplazamiento rápido con precio confirmado antes de salir', price: 'Desde 59 €' },
      { title: `Servicio Programado de ${tradeTitle}`, meta: 'Revisión completa con materiales garantizados', price: 'Desde 49 €' },
      { title: 'Mantenimiento Preventivo y Puesta a Punto', meta: 'Evita averías y desplazamientos de urgencia', price: 'Desde 65 €' },
      { title: 'Valoración Técnica por Foto / Vídeo en WhatsApp', meta: 'Diagnóstico previo al instante sin coste', price: 'Directo' }
    ];
    wcfg = {
      tabUrgent: '🚨 Urgencia Hoy',
      tabQuote: '📋 Presupuesto / Cita Normal',
      urgentOptions: [`Urgencia ahora (${tradeTitle})`, 'Avería bloqueante en domicilio/local', 'Necesito técnico hoy mismo'],
      quoteOptions: [`Presupuesto de ${tradeLower}`, 'Mantenimiento o revisión sin urgencia', 'Consulta de pieza o modelo'],
      modelLabel: '2. Modelo, detalle o elemento afectado',
      modelPlaceholder: `Ej. Detalle para ${tradeLower} en ${parsed.city}`
    };
  } else if (/(medida|instal|montaj|aislamient|tejado|cubierta|chimenea|deshollin|piedra|marmol|encimera|escayola|pladur|pocer|pozo|impermeab|parquet|cesped|vallad|cerramient|rotul|carpa)/.test(tNorm)) {
    actionType = 'medidas_presupuesto';
    cat = 'hogar';
    emoji = '📐';
    icon = 'ph-hammer';
    theme = 'gold';
    sceneKind = 'woodwork';
    img = '/assets/real/carpinteria_hero.jpg';
    gal = ['/assets/real/carpinteria_hero.jpg', '/assets/real/reformas_hero.jpg', '/assets/real/reformas_work_2.jpg'];
    services = [
      { title: `Trabajo Principal · ${tradeTitle} a Medida`, meta: 'Materiales de primera calidad e instalación limpia', price: 'Presupuesto' },
      { title: 'Intervención / Mantenimiento Estándar', meta: 'Servicio rápido en vivienda, chalet o local', price: 'Desde 89 €' },
      { title: 'Reparación y Puesta a Punto Especializada', meta: 'Solución duradera con garantía profesional', price: 'Desde 65 €' },
      { title: 'Visita Técnica y Medición Exacta', meta: 'Descontable al confirmar el trabajo', price: 'Consultar' }
    ];
    wcfg = {
      heading: `Pide presupuesto de ${tradeLower} con medidas`,
      sub: 'Indica dimensiones o unidades aproximadas y tu zona para darte precio certero sin esperas.',
      dimLabel: '2. Medidas aproximadas, metros o unidades',
      dimPlaceholder: 'Ej. Medidas aprox. / m² / Unidades',
      dimChips: ['Trabajo puntual', 'Estancia mediana', 'Vivienda completa', 'Local / Nave'],
      matLabel: '3. Estado o acabado deseado',
      materials: ['Instalación nueva a medida', 'Reparación / Mantenimiento', 'Sustituir existente', 'Necesito asesoramiento']
    };
  } else if (/(coche|auto|camion|furgon|caravan|autocaravan|remolque|barco|nautic|tractor|agricol)/.test(tNorm)) {
    actionType = 'motor_diagnostico';
    cat = 'motor';
    emoji = '🚘';
    icon = 'ph-wrench';
    theme = 'gold';
    sceneKind = 'mechanic';
    img = '/assets/real/taller_hero.jpg';
    gal = ['/assets/real/taller_hero.jpg', '/assets/real/lavadero_hero.jpg', '/assets/real/taller_work_1.jpg'];
    services = [
      { title: `Servicio Completo · ${tradeTitle}`, meta: 'Revisión y presupuesto cerrado antes de intervenir', price: 'Desde 79 €' },
      { title: 'Diagnóstico y Puesta a Punto Especializada', meta: 'Equipos profesionales con garantía', price: 'Desde 45 €' },
      { title: 'Instalación de Accesorios / Mejora a Medida', meta: 'Homologado y adaptado a tu vehículo', price: 'Presupuesto' },
      { title: 'Revisión Preventiva de Temporada', meta: 'Entrega puntual bajo cita previa', price: 'Desde 59 €' }
    ];
    wcfg = {
      heading: `Reserva cita en ${parsed.bizName}`,
      sub: 'Indica modelo/matrícula y qué necesitas para prepararte hueco sin esperas.',
      plateLabel: '2. Marca, modelo o matrícula',
      platePlaceholder: 'Ej. Modelo y año del vehículo',
      symLabel: '3. Servicio o síntoma a revisar',
      symPlaceholder: `Ej. Necesito ${tradeLower} esta semana`
    };
  } else if (/(afina|afila|repara|arregl|restaura|tapiz|reloj|joya|instrument|piano|guitarra|cuchill|maquina|coser|electrodomest|caldera|antena|portero|persiana|llave)/.test(tNorm)) {
    actionType = 'recepcion_taller_local';
    cat = 'comercio';
    emoji = '🔧';
    icon = 'ph-wrench';
    theme = 'atelier';
    sceneKind = 'repair';
    img = '/assets/real/cerrajeria_llaves.jpg';
    gal = ['/assets/real/cerrajeria_llaves.jpg', '/assets/real/carpinteria_hero.jpg', '/assets/real/tienda_hero.jpg'];
    services = [
      { title: `Servicio Completo de ${tradeTitle}`, meta: 'Trabajo artesanal de precisión con garantía', price: 'Desde 45 €' },
      { title: 'Puesta a Punto, Ajuste y Calibración', meta: 'Recupera el rendimiento y tacto original', price: 'Desde 35 €' },
      { title: 'Restauración / Reparación Especializada', meta: 'Valoración previa transparente antes de empezar', price: 'Presupuesto' },
      { title: 'Servicio a Domicilio o Recogida Programada', meta: `Desplazamiento en ${parsed.city} y alrededores`, price: 'Consultar' }
    ];
    wcfg = {
      heading: `Consulta precio y disponibilidad de ${tradeLower}`,
      sub: 'Indica marca, pieza o estado actual; te confirmamos tarifa y hueco directo por WhatsApp.',
      itemLabel: '1. Pieza, equipo o artículo a tratar',
      itemPlaceholder: `Ej. Detalle para ${tradeLower} (marca, antigüedad o unidades)`
    };
  } else if (/(ques|vino|bodega|miel|aceite|jamon|iberic|pescad|marisc|congelad|churrer|freidur|helad|dulce|choc|obrador|encargo|gourmet|catering)/.test(tNorm)) {
    actionType = 'encargo_sin_cola';
    cat = 'hosteleria';
    emoji = '🧺';
    icon = 'ph-shopping-bag';
    theme = 'atelier';
    sceneKind = 'food';
    img = '/assets/real/panaderia_brunch.jpg';
    gal = ['/assets/real/panaderia_brunch.jpg', '/assets/real/restaurante_work_1.jpg', '/assets/real/comercio_regalo.jpg'];
    services = [
      { title: `Selección Estrella · ${tradeTitle}`, meta: 'Producto fresco preparado al momento para ti', price: 'Desde 14,90 €' },
      { title: 'Lote / Bandeja Familiar por Encargo', meta: 'Listo a tu hora exacta sin hacer cola en tienda', price: 'Desde 29,00 €' },
      { title: 'Pack Degustación o Regalo Especial', meta: 'Presentación cuidada lista para llevar', price: 'Desde 35,00 €' },
      { title: 'Encargo Personalizado para Eventos / Fiestas', meta: '0% comisiones · Trato directo con nosotros', price: 'Consultar' }
    ];
    wcfg = {
      heading: 'Haz tu encargo directo y recoge sin hacer cola',
      sub: 'Elige tu producto, unidades y hora exacta de paso por tienda.',
      qtyLabel: '2. Unidades y detalle de tu encargo',
      qtyPlaceholder: `Ej. Pedido para recoger hoy en ${parsed.bizName}`,
      slots: ['11:00', '13:30', '18:00', '19:30']
    };
  } else if (/(perit|arquitect|aparejad|topograf|ingenier|detective|notari|procurad|traduct|consultor|marketing|publicidad|seguros|corredur|administrador de fincas)/.test(tNorm)) {
    actionType = 'filtro_clientes';
    cat = 'comercio';
    emoji = '📋';
    icon = 'ph-briefcase';
    theme = 'gold';
    sceneKind = 'office';
    img = '/assets/real/tienda_work_2.jpg';
    gal = ['/assets/real/tienda_work_2.jpg', '/assets/real/tienda_hero.jpg', '/assets/real/reformas_hero.jpg'];
    services = [
      { title: `Estudio Inicial y Propuesta · ${tradeTitle}`, meta: 'Análisis profesional de tu caso sin compromiso', price: 'Consulta previa' },
      { title: 'Informe / Proyecto Oficial Visado o Certificado', meta: 'Plazos cerrados por escrito y tramitación completa', price: 'Presupuesto' },
      { title: 'Gestión Integral Llave en Mano', meta: `Atención directa en ${parsed.city}`, price: 'A medida' },
      { title: 'Urgencia / Tramitación Prioritaria', meta: 'Respuesta en menos de 24 horas laborables', price: 'Prioritario' }
    ];
    wcfg = {
      heading: `Solicita estudio previo de ${tradeLower}`,
      sub: 'Filtra tu necesidad y plazo para darte respuesta exacta y presupuesto cerrado.',
      qualifyLabel: '2. Tipo de solicitud',
      qualifyOptions: [
        'Necesito presupuesto para iniciar trámite ya',
        'Urgente: tengo fecha límite o requerimiento',
        'Empresa / Comunidad / Profesional',
        'Consulta orientativa previa'
      ],
      detailLabel: '3. Resumen breve de lo que necesitas',
      detailPlaceholder: `Ej. Proyecto / gestión en ${parsed.city}`
    };
  } else {
    actionType = 'agenda_citas';
    cat = 'comercio';
    emoji = '✨';
    icon = 'ph-calendar-check';
    theme = 'royal';
    sceneKind = 'beauty';
    img = '/assets/real/clinica_work_2.jpg';
    gal = ['/assets/real/clinica_work_2.jpg', '/assets/real/tienda_hero.jpg', '/assets/real/peluqueria_hero.jpg'];
    services = [
      { title: `Sesión / Servicio Principal · ${tradeTitle}`, meta: 'Atención personalizada sin esperas bajo cita', price: 'Desde 35 €' },
      { title: 'Primera Valoración y Asesoramiento a Medida', meta: 'Analizamos qué necesitas con trato directo', price: 'Consultar' },
      { title: `Pack Completo / Bono ${tradeTitle}`, meta: 'Ahorro directo reservando desde nuestra web', price: 'Desde 89 €' },
      { title: 'Atención Preferente / Servicio Especial', meta: `Disponible en ${parsed.city} · Reserva en 15s`, price: 'Directo' }
    ];
    wcfg = {
      heading: `Reserva tu cita de ${tradeLower} en 15 segundos`,
      sub: 'Elige servicio, día y tramo horario; recibimos tu solicitud al instante en WhatsApp.',
      clientPlaceholder: `Ej. Tu nombre · Consulta de ${tradeLower}`
    };
  }

  const modMeta = ACTION_MODULES_META[actionType];
  return {
    id: 'otro',
    cat,
    categoryLabel: OFICIOS_CAT_LABELS[cat] || 'Oficio Especializado',
    day: customDay || 'DÍA 78',
    emoji,
    icon,
    label: tradeTitle,
    plural: tradeTitle,
    singular: tradeLower,
    actionType,
    moduleBadge: modMeta.badge,
    ctaShort: modMeta.ctaShort,
    moduleSummary: modMeta.summary,
    defaultTheme: theme,
    sceneKind,
    defaultName: parsed.bizName || tradeTitle,
    placeholder: `Ej. ${tradeTitle} ${parsed.city}`,
    yearsExp: `Especialistas en ${tradeTitle} · Trato Directo`,
    tagline: `${tradeTitle} profesional en ${parsed.city} con precios claros y atención directa.`,
    story: `Especialistas en ${tradeLower} con atención cuidada, presupuesto transparente y solicitud directa a nuestro WhatsApp en 15 segundos sin intermediarios.`,
    heroImage: img,
    gallery: gal,
    kw: [tNorm],
    services,
    wcfg,
    calls: 16,
    badCalls: [
      `"En pleno trabajo de ${tradeLower} con las manos ocupadas y el móvil sonando"`,
      '"¿Cuánto cobráis más o menos y tenéis hueco esta semana?"',
      '"Clientes que buscan en Google y se van si no ven precios ni WhatsApp"'
    ],
    painTitle: `Interrupciones constantes mientras trabajas en ${tradeLower} por llamadas sin datos previos`,
    painSpoken: `Quien se dedica a ${tradeLower} pierde horas cada semana parando su trabajo para contestar llamadas repetitivas preguntando precios, disponibilidad o datos básicos que el cliente podría enviar filtrados en diez segundos.`,
    solSpoken: `En su nueva web el cliente consulta servicios reales de ${tradeLower}, completa su solicitud guiada y te llega todo estructurado directo a tu WhatsApp con cero comisiones.`,
    waLines: [
      `• Servicio: ${services[0].title}`,
      `• Detalle filtrado listo para atender`,
      `• Zona: ${parsed.city} · Directo a WhatsApp`
    ],
    isCustom: true
  };
}

// Detecta oficio nativo entre los +65 o activa el Respaldo Universal Inteligente si hay texto real de oficio nuevo
function miwebDetectOficioMatch(rawText) {
  const qRaw = String(rawText || '').trim();
  if (!qRaw) return { matched: false, id: 'peluqueria', preset: MIWEB_OFICIOS_BY_ID.peluqueria };

  const parsed = miwebExtractTradeAndCity(qRaw);
  const norm = miwebNormalizeStr(parsed.bizName + ' ' + qRaw);

  // Priorizar coincidencias específicas primero (ej. "peluqueria canina" antes que "peluqueria", "llaves de coche" / "cerrajero", "carpinteria de aluminio" antes que "carpintero")
  const priorityRules = [
    { rx: /(peluqueria canina|bano perro|estilista canin|guarderia canina|autolavado mascotas)/, id: 'peluqueria_canina' },
    { rx: /(llaves de coche|mando de coche|transponder|keyless|carcasa llave)/, id: 'llaves_coche' },
    { rx: /(cerrajer|llaver|copia de llave|duplicado de llave|mando de garaje|bombin|antibumping)/, id: 'cerrajero' },
    { rx: /(carpinteria de aluminio|aluminio y pvc|ventanas pvc|oscilobatiente|kommerling|cortizo)/, id: 'aluminio' },
    { rx: /(carpinter|ebanist|armario a medida|armarios empotrados|puertas de paso|muebles a medida|madera)/, id: 'carpintero' },
    { rx: /(chapa y pintura|carrocer|pintar coche|paragolpes)/, id: 'chapa_pintura' },
    { rx: /(lavadero|detailing|car detail|detallado|lavado a mano|tapiceria coche|autolavado)/, id: 'lavadero' },
    { rx: /(neumatic|ruedas|alineado|paralelo|pinchazo)/, id: 'neumaticos' },
    { rx: /(compraventa|coches de ocasion|vehiculos ocasion|concesionario)/, id: 'compraventa' },
    { rx: /(grua|auxilio carretera|portacoches|asistencia en carretera)/, id: 'grua' },
    { rx: /(moto|scooter|yamaha|honda|kymco)/, id: 'motos' },
    { rx: /(biciclet|bici|mtb|ebike|patinete)/, id: 'bicicletas' },
    { rx: /(autoescuela|carnet de conducir|permiso b)/, id: 'autoescuela' },
    { rx: /(taller|mecanic|frenos|embrague|itv)/, id: 'taller' },
    { rx: /(fontaner|desatasc|fuga de agua|termo electrico)/, id: 'fontanero' },
    { rx: /(electricist|boletin electrico|cuadro electrico|apagon|wallbox)/, id: 'electricista' },
    { rx: /(cristaler|mampara|vidrio|espejo a medida|climalit)/, id: 'cristalero' },
    { rx: /(tapicer|tapizar|retapizar)/, id: 'tapicero' },
    { rx: /(aire acondicionado|climatiz|split|aerotermia|frigorist)/, id: 'climatizacion' },
    { rx: /(placas solares|paneles solares|fotovoltaic|autoconsumo)/, id: 'placas_solares' },
    { rx: /(jardiner|piscin|cesped artificial|poda|desbroce)/, id: 'jardineria' },
    { rx: /(plagas|fumigac|cucarach|chinches|desinsect|termitas)/, id: 'control_plagas' },
    { rx: /(mudanz|guardamuebles|portes)/, id: 'mudanzas' },
    { rx: /(empresa de limpieza|limpiezas|limpieza fin de obra|limpieza comunidades)/, id: 'limpieza' },
    { rx: /(herrer|soldador|soldadura|forja|rejas|cancela)/, id: 'herrero' },
    { rx: /(toldo|pergola|persian|estores)/, id: 'toldos' },
    { rx: /(pintor|pinturas|gotele|papel pintado)/, id: 'pintor' },
    { rx: /(reforma|albanil|obra|plato de ducha)/, id: 'reformas' },
    { rx: /(barber|fade|degradado)/, id: 'barberia' },
    { rx: /(tatuaj|tattoo|piercing)/, id: 'tattoo' },
    { rx: /(depilacion laser|laser diodo|fotodepilacion)/, id: 'depilacion' },
    { rx: /(spa|masaj|quiromasaj|maderoterapia)/, id: 'spa' },
    { rx: /(estetic|unas|nails|manicura|pestanas|cejas|facial)/, id: 'estetica' },
    { rx: /(peluquer|salon|mechas|balayage|estilist|keratina)/, id: 'peluqueria' },
    { rx: /(fisioterap|fisio|osteopat|puncion seca)/, id: 'fisioterapia' },
    { rx: /(podolog|quiropodia|plantillas|pisada)/, id: 'podologia' },
    { rx: /(psicolog|psicoterap|terapia)/, id: 'psicologia' },
    { rx: /(nutricion|dietist|dietetica)/, id: 'nutricionista' },
    { rx: /(optica|optometrist|gafas|audifonos|audiolog)/, id: 'optica' },
    { rx: /(logoped|lectoescritura|dislexia)/, id: 'logopedia' },
    { rx: /(veterinari|mascota)/, id: 'veterinario' },
    { rx: /(dental|dentist|odontolog|ortodoncia|implantes)/, id: 'clinica' },
    { rx: /(asador|pollos asados|comida para llevar|rostisseria|paellas por encargo)/, id: 'asador' },
    { rx: /(panader|pasteler|obrador|confiter|reposter|tartas)/, id: 'panaderia' },
    { rx: /(carnicer|charcuter|polleria|ibericos)/, id: 'carniceria' },
    { rx: /(fruter|verduler|huerta|herbolario|gourmet|queseria|vinoteca)/, id: 'fruteria' },
    { rx: /(pizzer|pizza|burger|hamburgues|smash|kebab|durum)/, id: 'pizzeria' },
    { rx: /(cafeteria|brunch|specialty coffee|desayunos|heladeria)/, id: 'cafeteria' },
    { rx: /(bar de tapas|taberna|cerveceria|tasca|raciones|tapas)/, id: 'bar_tapas' },
    { rx: /(restaurante|arroceria|marisqueria|meson|brasa)/, id: 'restaurante' },
    { rx: /(florister|arte floral|ramos de flores)/, id: 'floristeria' },
    { rx: /(tintorer|lavander|arreglos de ropa|costur|modist)/, id: 'tintoreria' },
    { rx: /(moviles|iphone|pantalla rota|informatica|ordenadores|portatil|microsoldadura)/, id: 'moviles' },
    { rx: /(zapater|calzado|remendon|reparar bolso)/, id: 'zapateria' },
    { rx: /(copister|imprent|fotocopias|encuadernacion|rotulos|vinilos)/, id: 'copisteria' },
    { rx: /(inmobiliari|fincas|vender piso)/, id: 'inmobiliaria' },
    { rx: /(abogad|bufete|juridic|letrad)/, id: 'abogados' },
    { rx: /(asesor|gestor|contable|impuestos)/, id: 'asesoria' },
    { rx: /(academia|ingles|cambridge|clases particulares|oposiciones)/, id: 'academia' },
    { rx: /(guarder|escuela infantil|centro infantil|ludoteca)/, id: 'guarderia' },
    { rx: /(pilates|reformer|yoga|hipopresivos)/, id: 'pilates' },
    { rx: /(escuela de baile|danza|salsa|bachata|flamenco|artes marciales|karate|judo|boxeo|taekwondo)/, id: 'baile' },
    { rx: /(gimnasi|gym|crossfit|entrenador|box funcional|calistenia)/, id: 'fitness' },
    { rx: /(fotograf|videografo|audiovisual)/, id: 'fotografo' },
    { rx: /(eventos|discomovil|fotomaton|dj|sonido e iluminacion|wedding)/, id: 'eventos' },
    { rx: /(tienda|boutique|comercio|moda|joyer|perfumer|regalos|libreria|ferreteria|merceria)/, id: 'tienda' }
  ];

  for (const rule of priorityRules) {
    if (rule.rx.test(norm) && MIWEB_OFICIOS_BY_ID[rule.id]) {
      return { matched: true, isCustom: false, id: rule.id, preset: MIWEB_OFICIOS_BY_ID[rule.id] };
    }
  }

  // Búsqueda por keywords del catálogo
  const searched = miwebSearchOficios(parsed.bizName, 'all');
  if (searched.length > 0) {
    const top = searched[0];
    const topKwHit = (top.kw || []).some(k => norm.includes(miwebNormalizeStr(k)));
    if (topKwHit) {
      return { matched: true, isCustom: false, id: top.id, preset: top };
    }
  }

  // Si el usuario escribió un oficio no listado (ej. "Afinador de pianos Toledo", "Afilador de cuchillos", "Pescadería Costa", "Relojero"), activar Respaldo Universal Inteligente
  const unlistedTradeRx = /(\bde\b|\bpara\b|afina|afila|repara|arregl|restaura|reloj|instrument|piano|guitarra|cuchill|coser|electrodomest|antena|portero|medida|instal|montaj|aislamient|tejado|cubierta|chimenea|deshollin|marmol|encimera|escayola|pocer|pozo|impermeab|vallad|carpa|camion|furgon|caravan|autocaravan|remolque|barco|nautic|tractor|agricol|queser|bodega|pescader|marisquer|congelad|churrer|freidur|helader|chocolat|catering|perit|arquitect|aparejad|topograf|ingenier|detective|notari|procurad|traduct|consultor|corredur|alquiler|paseador|adiestrador|entrenador|profesor|artesano|ceramist|flor|costur|bordad|serigraf|grabado|dron|topograf|ortoped|herbolari|parafarmacia|estanco|loteria|quiosco|papeleria|jugueteria|colchoneria|muebles|iluminacion|saneamiento|calefaccion|gas| Caldera)/i;
  if (norm.length >= 4 && unlistedTradeRx.test(norm)) {
    const customPreset = miwebBuildCustomOficio(qRaw);
    return { matched: true, isCustom: true, id: 'otro', preset: customPreset };
  }

  return { matched: false, isCustom: false, id: 'peluqueria', preset: MIWEB_OFICIOS_BY_ID.peluqueria };
}

// Ilustraciones vectoriales 2D limpias por familia de oficio (para #solucion-nicho y videos-tiktok.html)
function miwebRenderSceneSVG(sceneKind, isSolution) {
  const accent = isSolution ? '#4F46E5' : '#E11D48';
  const soft = isSolution ? '#EEF2FF' : '#FFE4E6';
  const badgeOk = isSolution ? '#10B981' : '#F43F5E';

  if (sceneKind === 'woodwork') {
    return `<svg viewBox="0 0 220 116" width="100%" height="100%" aria-hidden="true">
      <rect x="14" y="84" width="192" height="10" rx="5" fill="#CBD5E1"/>
      <rect x="28" y="20" width="76" height="64" rx="6" fill="#FEF3C7" stroke="#D97706" stroke-width="2.5"/>
      <line x1="66" y1="20" x2="66" y2="84" stroke="#D97706" stroke-width="2"/>
      <circle cx="59" cy="52" r="2.5" fill="#92400E"/><circle cx="73" cy="52" r="2.5" fill="#92400E"/>
      <line x1="28" y1="12" x2="104" y2="12" stroke="${accent}" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="66" y="9" text-anchor="middle" font-size="8.5" font-weight="800" fill="${accent}" font-family="Outfit,sans-serif">${isSolution ? '240 × 240 cm · ROBLE' : '¿MEDIDAS? ¿ACABADO?'}</text>
      <g transform="translate(132,26)">
        <rect x="0" y="16" width="58" height="42" rx="10" fill="${soft}" stroke="${accent}" stroke-width="2"/>
        <circle cx="29" cy="8" r="10" fill="#FDE68A"/>
        <path d="M14 44 L44 26" stroke="${badgeOk}" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>`;
  }

  if (sceneKind === 'locksmith') {
    return `<svg viewBox="0 0 220 116" width="100%" height="100%" aria-hidden="true">
      <rect x="22" y="18" width="52" height="78" rx="6" fill="#E2E8F0" stroke="#475569" stroke-width="2.5"/>
      <circle cx="63" cy="58" r="4.5" fill="${accent}"/>
      <g transform="translate(92,26)">
        <rect x="0" y="0" width="104" height="64" rx="14" fill="${soft}" stroke="${accent}" stroke-width="2"/>
        <circle cx="30" cy="32" r="13" fill="none" stroke="${accent}" stroke-width="4"/>
        <path d="M43 32 H82 M70 32 V42 M79 32 V40" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
        <text x="52" y="15" text-anchor="middle" font-size="8" font-weight="800" fill="${accent}" font-family="Outfit,sans-serif">${isSolution ? '24H + MODELO LLAVE' : '19 LLAMADAS SIN DATOS'}</text>
      </g>
    </svg>`;
  }

  if (sceneKind === 'mechanic') {
    return `<svg viewBox="0 0 220 116" width="100%" height="100%" aria-hidden="true">
      <rect x="24" y="22" width="8" height="74" rx="3" fill="#64748B"/>
      <rect x="188" y="22" width="8" height="74" rx="3" fill="#64748B"/>
      <rect x="32" y="60" width="156" height="6" rx="3" fill="#94A3B8"/>
      <path d="M52 58 L66 36 H148 L166 58 Z" fill="${accent}"/>
      <path d="M70 40 L78 52 H138 L144 40 Z" fill="#E0E7FF"/>
      <circle cx="74" cy="60" r="10" fill="#0F172A"/><circle cx="74" cy="60" r="4.5" fill="#CBD5E1"/>
      <circle cx="146" cy="60" r="10" fill="#0F172A"/><circle cx="146" cy="60" r="4.5" fill="#CBD5E1"/>
      <rect x="64" y="76" width="92" height="18" rx="9" fill="${soft}" stroke="${accent}" stroke-width="1.5"/>
      <text x="110" y="88" text-anchor="middle" font-size="8.5" font-weight="800" fill="${accent}" font-family="Outfit,sans-serif">${isSolution ? '4821 KLP · CITA LISTA' : 'SUELTA LA LLAVE 20 VECES'}</text>
    </svg>`;
  }

  if (sceneKind === 'food') {
    return `<svg viewBox="0 0 220 116" width="100%" height="100%" aria-hidden="true">
      <ellipse cx="76" cy="76" rx="48" ry="14" fill="#E2E8F0"/>
      <path d="M36 72 A40 34 0 0 1 116 72 Z" fill="#F59E0B"/>
      <circle cx="76" cy="34" r="5" fill="#D97706"/>
      <rect x="132" y="22" width="70" height="68" rx="12" fill="${soft}" stroke="${accent}" stroke-width="2"/>
      <text x="167" y="42" text-anchor="middle" font-size="8.5" font-weight="800" fill="${accent}" font-family="Outfit,sans-serif">${isSolution ? '0% COMISIÓN' : '-30% EN APPS'}</text>
      <text x="167" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#334155" font-family="Plus Jakarta Sans,sans-serif">${isSolution ? 'Recogida 14:00' : 'Cola + Teléfono'}</text>
      <circle cx="167" cy="74" r="7" fill="${badgeOk}"/>
    </svg>`;
  }

  if (sceneKind === 'clinic') {
    return `<svg viewBox="0 0 220 116" width="100%" height="100%" aria-hidden="true">
      <rect x="26" y="24" width="68" height="68" rx="16" fill="${soft}" stroke="${accent}" stroke-width="2"/>
      <path d="M60 40 V76 M42 58 H78" stroke="${accent}" stroke-width="7" stroke-linecap="round"/>
      <rect x="108" y="26" width="88" height="64" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
      <rect x="120" y="38" width="64" height="9" rx="4.5" fill="${soft}"/>
      <rect x="120" y="53" width="48" height="9" rx="4.5" fill="#F1F5F9"/>
      <text x="152" y="79" text-anchor="middle" font-size="8.5" font-weight="800" fill="${badgeOk}" font-family="Outfit,sans-serif">${isSolution ? 'AGENDA 24H ACTIVA' : 'RECEPCIÓN SATURADA'}</text>
    </svg>`;
  }

  // Default: beauty / repair / shop / office
  return `<svg viewBox="0 0 220 116" width="100%" height="100%" aria-hidden="true">
    <rect x="24" y="20" width="76" height="76" rx="18" fill="${soft}" stroke="${accent}" stroke-width="2"/>
    <circle cx="62" cy="48" r="14" fill="${accent}" opacity="0.18"/>
    <circle cx="62" cy="48" r="7" fill="${accent}"/>
    <rect x="42" y="70" width="40" height="8" rx="4" fill="${accent}"/>
    <rect x="114" y="24" width="84" height="68" rx="14" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
    <text x="156" y="47" text-anchor="middle" font-size="8.5" font-weight="800" fill="${accent}" font-family="Outfit,sans-serif">${isSolution ? 'DIRECTO WHATSAPP' : 'LLAMADAS PERDIDAS'}</text>
    <rect x="126" y="56" width="60" height="10" rx="5" fill="${soft}"/>
    <circle cx="156" cy="78" r="6" fill="${badgeOk}"/>
  </svg>`;
}

// Generador completo de Episodio Viral 9:16 estilo @alejandroo.ia para CUALQUIER oficio (+65 o personalizado)
function miwebBuildTikTokEpisode(oficioOrId, opts) {
  const options = opts || {};
  let preset = null;
  if (typeof oficioOrId === 'string') {
    preset = MIWEB_OFICIOS_BY_ID[oficioOrId] || miwebDetectOficioMatch(oficioOrId).preset;
  } else if (oficioOrId && oficioOrId.label) {
    preset = oficioOrId;
  } else {
    preset = MIWEB_OFICIOS_BY_ID.carpintero;
  }

  const dayLabel = (options.day && String(options.day).trim()) || preset.day || 'DÍA 18';
  const daySpoken = dayLabel.replace(/^D[IÍ]A\s+/i, 'Día ');
  const bizName = (options.bizName && String(options.bizName).trim()) || preset.defaultName;
  const pluralName = preset.plural || preset.label;
  const srv0 = (preset.services && preset.services[0]) || { title: preset.label, price: 'Desde 49 €' };
  const srv1 = (preset.services && preset.services[1]) || { title: 'Servicio completo', price: 'Consultar' };

  // Configurar 4 chips realistas de demostración en vivo según los 8 módulos interactivos
  let demoStep1Label = '1. Qué necesita el cliente';
  let demoStep1Value = `${srv0.title} · ${srv0.price}`;
  let demoStep2Label = '2. Datos clave filtrados';
  let demoSlots = ['10:00', '11:30', '17:00', '18:30'];
  let pickedIdx = 1;
  let ctaLabel = 'Enviar solicitud al WhatsApp →';

  if (preset.actionType === 'medidas_presupuesto') {
    demoStep2Label = '2. Medidas aprox. y acabado';
    demoSlots = (preset.wcfg && preset.wcfg.dimChips) || ['180×220 cm', '240×240 cm', '300×250 cm', 'A medida'];
    pickedIdx = 1;
    ctaLabel = 'Enviar medidas por WhatsApp →';
  } else if (preset.actionType === 'urgencia_o_llaves') {
    demoStep1Label = '1. Doble Modo Inteligente';
    demoStep1Value = (preset.wcfg && preset.wcfg.tabQuote) ? `${preset.wcfg.tabUrgent}  |  ${preset.wcfg.tabQuote}` : `${srv0.title} · ${srv0.price}`;
    demoStep2Label = '2. Calle exacta o Modelo de llave/equipo';
    demoSlots = ['Urgencia 20m', 'Copia Mando', 'Bombín Seg.', 'Presupuesto'];
    pickedIdx = 1;
    ctaLabel = 'Enviar datos exactos al WhatsApp →';
  } else if (preset.actionType === 'motor_diagnostico') {
    demoStep2Label = '2. Matrícula + Síntoma + Turno';
    demoSlots = ['4821 KLP', 'Mañana 09h', 'Revisión', 'Sin espera'];
    pickedIdx = 1;
    ctaLabel = 'Confirmar entrada en taller →';
  } else if (preset.actionType === 'recepcion_taller_local') {
    demoStep2Label = '2. Modelo exacto + Aviso recogida';
    demoSlots = ['Precio acto', 'Hoy 17:30', 'Mañana 10h', 'Aviso WA'];
    pickedIdx = 1;
    ctaLabel = 'Consultar y avisar por WhatsApp →';
  } else if (preset.actionType === 'encargo_sin_cola') {
    demoStep2Label = '2. Hora exacta de recogida (Sin cola)';
    demoSlots = (preset.wcfg && preset.wcfg.slots) || ['13:00', '13:30', '14:00', '19:30'];
    pickedIdx = 2;
    ctaLabel = 'Enviar encargo (0% comisión) →';
  } else if (preset.actionType === 'mesa_carta') {
    demoStep2Label = '2. Zona y turno (0 € por comensal)';
    demoSlots = (preset.wcfg && preset.wcfg.slots) || ['13:30', '14:15', '20:45', '21:30'];
    pickedIdx = 1;
    ctaLabel = 'Reservar mesa en WhatsApp →';
  } else if (preset.actionType === 'filtro_clientes') {
    demoStep2Label = '2. Filtro de caso / fecha / solvencia';
    demoSlots = ['Urgente', 'Con fecha', 'Cualificado', 'Tarde'];
    pickedIdx = 2;
    ctaLabel = 'Enviar consulta filtrada →';
  }

  const cues = [
    {
      scene: 1, start: 0, end: 3.8,
      sub: `${dayLabel}: solucionando el mayor problema de cada oficio. Hoy: ${pluralName.toUpperCase()}.`,
      speak: `${daySpoken} solucionando el mayor problema de cada negocio. Hoy, ${pluralName.toLowerCase()}.`
    },
    {
      scene: 2, start: 3.8, end: 10.2,
      sub: preset.painSpoken,
      speak: preset.painSpoken
    },
    {
      scene: 2, start: 10.2, end: 14.0,
      sub: `Más de ${preset.calls} interrupciones al día que te hacen perder tiempo y clientes reales.`,
      speak: `Son más de ${preset.calls} interrupciones al día que te cortan el ritmo y hacen que se escapen trabajos de verdad.`
    },
    {
      scene: 3, start: 14.0, end: 19.6,
      sub: `Por eso en MiWebLocal.com buscas "${preset.label}", escribes tu nombre y en 15 segundos tienes tu web lista.`,
      speak: `Por eso hemos preparado esto en nuestra página: entras en MiWebLocal punto com, eliges ${preset.singular}, escribes el nombre de tu negocio y en quince segundos tienes tu web funcionando.`
    },
    {
      scene: 4, start: 19.6, end: 26.2,
      sub: preset.solSpoken,
      speak: preset.solSpoken
    },
    {
      scene: 4, start: 26.2, end: 30.2,
      sub: `Directo a tu WhatsApp, con 0% comisiones y 0 llamadas interrumpiendo tu trabajo.`,
      speak: `Te entra limpio en tu WhatsApp, con cero comisiones y cero llamadas cortándote a mitad de faena.`
    },
    {
      scene: 5, start: 30.2, end: 34.4,
      sub: `Si te gusta cómo queda, te la quedas para siempre con un pago único desde 79 €. Sin cuotas mensuales.`,
      speak: `Primero la pruebas gratis con tu nombre y, si te gusta, es tuya para siempre con un pago único desde setenta y nueve euros, sin cuotas mensuales.`
    },
    {
      scene: 5, start: 34.4, end: 38.0,
      sub: `Pruébala en MiWebLocal.com y dime en comentarios: ¿qué oficio hacemos mañana? 👇`,
      speak: `Mírala en MiWebLocal punto com y déjame en comentarios qué oficio quieres que hagamos mañana.`
    }
  ];

  const cleanVoiceover = cues.map(c => c.speak).join('\n\n');
  const slugTag = miwebNormalizeStr(preset.singular).replace(/\s+/g, '');
  const caption = `${dayLabel} solucionando el mayor problema de cada oficio: hoy ${pluralName} ${preset.emoji} · Pruébalo gratis con el nombre de tu negocio en MiWebLocal.com (enlace en el perfil). ¿Qué oficio hacemos mañana? Te leo en comentarios 👇 #${slugTag} #autonomos #negocioslocales #pymesespana #miweblocal #emprendedores`;

  return {
    id: preset.id,
    preset,
    day: dayLabel,
    emoji: preset.emoji,
    sectorChip: `${preset.emoji} ${preset.label}`,
    pluralName,
    bizName,
    callsCount: preset.calls,
    painBubbles: preset.badCalls,
    painTitle: preset.painTitle,
    moduleBadge: preset.moduleBadge,
    demoStep1Label,
    demoStep1Value,
    demoStep2Label,
    slots: demoSlots,
    pickedSlotIndex: Math.min(pickedIdx, demoSlots.length - 1),
    ctaLabel,
    waSummary: preset.waLines,
    srvPreview: [srv0, srv1],
    sceneKind: preset.sceneKind,
    duration: 38,
    cues,
    cleanVoiceover,
    caption
  };
}

if (typeof window !== 'undefined') {
  window.OFICIOS_CATEGORIES = OFICIOS_CATEGORIES;
  window.ACTION_MODULES_META = ACTION_MODULES_META;
  window.MIWEB_OFICIOS_LIST = MIWEB_OFICIOS_LIST;
  window.MIWEB_OFICIOS_BY_ID = MIWEB_OFICIOS_BY_ID;
  window.miwebSearchOficios = miwebSearchOficios;
  window.miwebDetectOficioMatch = miwebDetectOficioMatch;
  window.miwebBuildCustomOficio = miwebBuildCustomOficio;
  window.miwebSplitNameAndCity = miwebSplitNameAndCity;
  window.miwebRenderSceneSVG = miwebRenderSceneSVG;
  window.miwebBuildTikTokEpisode = miwebBuildTikTokEpisode;
}
