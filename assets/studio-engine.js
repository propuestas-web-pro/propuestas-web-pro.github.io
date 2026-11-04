/* ==========================================================================
   MI WEB LOCAL — V3 VISUAL ENGINE, SECTOR SOLVERS, 2-TIER LADDER & COMPILER
   ========================================================================== */

const STORAGE_KEY = 'miweblocal_platform_v6';
const FATHI_WHATSAPP = '34632768152';

// 16 Sector Presets with Real Editorial Photography & Conversion Copy (Zero Mockups, White + Royal Blue First)
const SECTOR_PRESETS = {
  peluqueria: {
    label: 'Peluquería y Salón',
    icon: 'ph-scissors',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Salón Aura Estilistas',
    yearsExp: 'Salón de Belleza · Cita Online',
    tagline: 'Coloración luminosa, mechas balayage y estilismo a tu medida.',
    story: 'Diagnóstico capilar personalizado, productos respetuosos con tu melena y reserva directa en 15 segundos sin llamadas ni esperas.',
    painTag: 'No pares de trabajar con una clienta para contestar precios y huecos por teléfono',
    solves: [
      'Carta clara de mechas, color, corte y tratamientos con precios visibles 24h',
      'Tus clientas eligen servicio y tramo horario directo a tu WhatsApp',
      'Llenas huecos entre semana sin pagar el 25% de comisión a apps de reservas',
      'Imagen limpia, luminosa y de salón de primer nivel desde el móvil'
    ],
    heroImage: '/assets/real/peluqueria_hero.jpg',
    gallery: [
      '/assets/real/peluqueria_hero.jpg',
      '/assets/real/peluqueria_work_1.jpg',
      '/assets/real/peluqueria_work_2.jpg'
    ],
    defaultReviews: [
      { author: 'Marta Gómez', rating: 5, text: 'Me hicieron unas mechas balayage preciosas y súper naturales. Ver los precios en la web y pedir cita por WhatsApp fue comodísimo.' },
      { author: 'Lucía Serrano', rating: 5, text: 'El salón tiene una luz increíble, son puntuales al minuto y te asesoran de verdad antes de tocar el cabello.' },
      { author: 'Carmen Ruiz', rating: 5, text: 'Mi peluquería de confianza. Salgo siempre encantada con el corte y el tratamiento de hidratación.' }
    ],
    services: [
      { title: 'Mechas Balayage + Matiz + Peinado', meta: '150 min · Diagnóstico + Protector capilar incluido', price: 'Desde 78 €' },
      { title: 'Corte de Diseño + Lavado Spa + Brushing', meta: '50 min · Estudio de rostro y acabado pulido', price: '34 €' },
      { title: 'Coloración Orgánica Sin Amoniaco', meta: '75 min · Cobertura total y brillo espejo', price: '46 €' },
      { title: 'Tratamiento Keratina Anti-Encrespamiento', meta: '120 min · Melena suave y lisa hasta 4 meses', price: '65 €' },
      { title: 'Manicura Semipermanente con Nivelación', meta: '45 min · Base vitamínica de larga duración', price: '26 €' },
      { title: 'Peinado y Maquillaje Invitada / Eventos', meta: '70 min · Acabado duradero a medida', price: '69 €' }
    ]
  },
  clinica: {
    label: 'Clínica y Salud',
    icon: 'ph-heartbeat',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Clínica Dental Sonrisas',
    yearsExp: 'Centro Sanitario · Primera Visita',
    tagline: 'Odontología avanzada, estética dental y salud integral sin esperas.',
    story: 'Tecnología de diagnóstico digital 3D, trato cercano y primera valoración completa para cuidar de ti y tu familia.',
    painTag: 'Transmite la confianza médica que un paciente necesita antes de elegir clínica',
    solves: [
      'Especialidades, equipo y tratamientos explicados con total claridad',
      'Solicitud de primera visita directa al WhatsApp de recepción',
      'Capta pacientes de tu ciudad que buscan dentista o fisio en Google',
      'Mapa GPS en 1 toque y horarios siempre actualizados'
    ],
    heroImage: '/assets/real/clinica_hero.jpg',
    gallery: [
      '/assets/real/clinica_hero.jpg',
      '/assets/real/clinica_work_1.jpg',
      '/assets/real/peluqueria_work_2.jpg'
    ],
    defaultReviews: [
      { author: 'Elena Navarro', rating: 5, text: 'Trato impecable desde recepción. Me explicaron todo el presupuesto sin letra pequeña y cero dolor.' },
      { author: 'Javier Morales', rating: 5, text: 'Instalaciones blanquísimas y muy modernas. Pedí la primera revisión desde el móvil y me atendieron al día siguiente.' },
      { author: 'Patricia Vidal', rating: 5, text: 'Grandes profesionales, puntuales y muy cercanos con los niños. Totalmente recomendables.' }
    ],
    services: [
      { title: '1ª Visita + Diagnóstico Digital Completo', meta: '40 min · Revisión y plan personalizado', price: 'Gratis' },
      { title: 'Higiene Dental Avanzada por Ultrasonidos', meta: '45 min · Pulido antimanchas incluido', price: '48 €' },
      { title: 'Blanqueamiento Clínico LED en Consulta', meta: '60 min · Hasta 4 tonos más blancos en 1 sesión', price: '195 €' },
      { title: 'Ortodoncia Invisible Transparente', meta: 'Estudio 3D previo · Financiación sin intereses', price: 'Consultar' },
      { title: 'Implante Dental de Carga Inmediata', meta: 'Titanio grado médico con garantía certificada', price: 'Valoración' },
      { title: 'Sesión de Fisioterapia / Rehabilitación', meta: '50 min · Tratamiento manual individual', price: '38 €' }
    ]
  },
  estetica: {
    label: 'Estética y Uñas',
    icon: 'ph-sparkle',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Maison Lumière Estética',
    yearsExp: 'Estética Avanzada · Cabina Privada',
    tagline: 'Cuidado facial luminoso, manicura rusa y rituales de bienestar.',
    story: 'Diagnóstico de piel gratuito, cosmética de alta eficacia y reserva cómoda desde tu móvil sin llamadas.',
    painTag: 'Muestra tu carta de tratamientos con imagen cuidada para atraer clientela fiel',
    solves: [
      'Carta ordenada de tratamientos faciales, corporales, cejas y uñas',
      'Reserva de cita por tramo horario directa a tu WhatsApp',
      'Atrae clientas que valoran la higiene y pagan tu tarifa sin regatear',
      '0% comisiones por cita reservada'
    ],
    heroImage: '/assets/real/peluqueria_work_2.jpg',
    gallery: [
      '/assets/real/peluqueria_work_2.jpg',
      '/assets/real/peluqueria_hero.jpg',
      '/assets/real/peluqueria_work_1.jpg'
    ],
    services: [
      { title: 'Higiene Facial Profunda Hydraglow', meta: '60 min · Extracción suave + vitamina C', price: '52 €' },
      { title: 'Manicura Rusa con Nivelación', meta: '55 min · Acabado limpio y duradero', price: '28 €' },
      { title: 'Lifting de Pestañas + Diseño de Cejas', meta: '45 min · Mirada natural durante 6 semanas', price: '42 €' },
      { title: 'Indiba Facial Reafirmante', meta: '50 min · Luminosidad desde la 1ª sesión', price: '65 €' }
    ]
  },
  restaurante: {
    label: 'Restaurante y Bar',
    icon: 'ph-fork-knife',
    actionType: 'mesa',
    defaultTheme: 'royal',
    defaultName: 'Casa Olivo Cocina & Terraza',
    yearsExp: 'Cocina de Mercado · Reserva Directa',
    tagline: 'Producto fresco de temporada, arroces al momento y terraza soleada.',
    story: 'Consulta nuestra carta actualizada con precios claros y reserva tu mesa en salón o terraza en 15 segundos sin intermediarios.',
    painTag: 'Que tus platos entren por los ojos y reserven mesa sin pagar comisiones a portales',
    solves: [
      'Carta limpia y rápida en el móvil (sin PDFs borrosos que tardan en abrir)',
      'Reserva de mesa en terraza o comedor en 3 toques directo a tu WhatsApp',
      'Pedidos para recoger sin colas ni llamadas en mitad del servicio',
      'Te ahorras el 25% de comisión por comensal o pedido'
    ],
    heroImage: '/assets/real/restaurante_work_2.jpg',
    gallery: [
      '/assets/real/restaurante_work_2.jpg',
      '/assets/real/restaurante_work_1.jpg',
      '/assets/real/restaurante_hero.jpg'
    ],
    defaultReviews: [
      { author: 'Carlos Mendoza', rating: 5, text: 'Producto espectacular, terraza muy agradable y atención de diez. Reservamos mesa desde su web en medio minuto.' },
      { author: 'Sonia Beltrán', rating: 5, text: 'Da gusto ver la carta tan clara en el móvil con todos los precios antes de ir. El provolone y las croquetas son obligatorios.' },
      { author: 'Raúl Ortega', rating: 5, text: 'Raciones generosas, ambiente luminoso y servicio rapidísimo. Repetiremos seguro este fin de semana.' }
    ],
    services: [
      { title: 'Arroz Meloso de Marisco (mín. 2 pers.)', meta: 'Caldo casero de roca · Precio por persona', price: '19,50 €' },
      { title: 'Provolone Fundido al Horno de Leña', meta: 'Con orégano fresco y pan de masa madre', price: '11,90 €' },
      { title: 'Solomillo Ibérico a la Brasa', meta: 'Patatas gajo caseras y pimientos del padrón', price: '18,90 €' },
      { title: 'Croquetas Cremosas de Jamón (6 uds.)', meta: 'Boleadas a mano cada mañana', price: '9,50 €' },
      { title: 'Menú Mediodía Completo (Martes a Viernes)', meta: 'Entrante + Principal + Postre casero + Bebida', price: '16,50 €' },
      { title: 'Tarta de Queso Cremosa al Horno', meta: 'Receta de la casa · Ración individual', price: '6,50 €' }
    ]
  },
  cafeteria: {
    label: 'Cafetería y Brunch',
    icon: 'ph-coffee',
    actionType: 'mesa',
    defaultTheme: 'royal',
    defaultName: 'Alma Café & Brunch',
    yearsExp: 'Specialty Coffee · Obrador',
    tagline: 'Café 100% arábica, desayunos artesanos y repostería recién horneada.',
    story: 'Tostadas de masa madre, zumo recién exprimido y terraza tranquila en pleno centro.',
    painTag: 'Enseña tu carta de desayunos y brunch con fotos luminosas que abren el apetito',
    solves: [
      'Carta digital instantánea con precios claros en cualquier móvil',
      'Reserva de mesa para desayunos y grupos directa a tu WhatsApp',
      'Encargos de tartas y desayunos para llevar sin esperas',
      '0% comisiones: todo el margen se queda en tu local'
    ],
    heroImage: '/assets/real/restaurante_work_2.jpg',
    gallery: [
      '/assets/real/restaurante_work_2.jpg',
      '/assets/real/tienda_work_1.jpg',
      '/assets/real/restaurante_work_1.jpg'
    ],
    services: [
      { title: 'Menú Brunch Completo', meta: 'Café especialidad + Zumo natural + Tosta + Dulce', price: '15,90 €' },
      { title: 'Tosta Ibérica con Aceite Virgen Extra', meta: 'Pan rústico de masa madre tostado al momento', price: '6,80 €' },
      { title: 'Cappuccino Doble Origen Especialidad', meta: 'Leche fresca cremada o bebida vegetal', price: '3,20 €' },
      { title: 'Tarta Artesana por Encargo (8-10 raciones)', meta: 'Reserva con 24h por WhatsApp', price: '28,00 €' }
    ]
  },
  pizzeria: {
    label: 'Pizzería y Delivery',
    icon: 'ph-pizza',
    actionType: 'mesa',
    defaultTheme: 'royal',
    defaultName: 'Forno Bianco Pizzería',
    yearsExp: 'Pedidos Directos · 0% Comisión',
    tagline: 'Masa madre de 72 horas al horno de piedra para recoger o domicilio.',
    story: 'Haz tu pedido directo desde el móvil sin recargos ni comisiones de plataformas externas.',
    painTag: 'Deja de regalar el 30% de cada pedido a las aplicaciones de reparto',
    solves: [
      'Carta interactiva con menús, ofertas y precios siempre al día',
      'Pedidos para recoger o envío propios directos a tu WhatsApp',
      'Reserva rápida de mesa en 3 toques',
      '0% comisiones para toda la vida'
    ],
    heroImage: '/assets/real/restaurante_work_1.jpg',
    gallery: [
      '/assets/real/restaurante_work_1.jpg',
      '/assets/real/restaurante_hero.jpg',
      '/assets/real/restaurante_work_2.jpg'
    ],
    services: [
      { title: 'Pizza Trufada Fior di Latte', meta: 'Masa fermentada 72h · Horno de piedra', price: '13,50 €' },
      { title: 'Oferta 2 Pizzas Artesanas + Entrante', meta: 'Recogida en 15 min o envío propio', price: '23,90 €' },
      { title: 'Provolone Fundido con Focaccia', meta: 'Receta italiana tradicional', price: '10,50 €' },
      { title: 'Tiramisú Casero Mascarpone', meta: 'Elaborado a diario', price: '5,90 €' }
    ]
  },
  reformas: {
    label: 'Reformas y Oficios',
    icon: 'ph-house-line',
    actionType: 'reformas',
    defaultTheme: 'royal',
    defaultName: 'Estudio Norte Reformas',
    yearsExp: 'Reformas Integrales · Plazo Cerrado',
    tagline: 'Reformas de cocinas, baños y viviendas completas con presupuesto cerrado.',
    story: 'Coordinamos todos los gremios, cumplimos fechas por contrato y te enviamos valoración detallada sin compromiso.',
    painTag: 'Consigue obras rentables enseñando acabados reales de nivel antes de visitar',
    solves: [
      'Solicitud de presupuesto filtrada por tipo de reforma y metros',
      'Galería luminosa de cocinas, baños y salones terminados',
      'Atrae propietarios serios y filtra curiosos automáticamente',
      'Recibe los datos de la obra en tu WhatsApp mientras trabajas'
    ],
    heroImage: '/assets/real/reformas_work_2.jpg',
    gallery: [
      '/assets/real/reformas_work_2.jpg',
      '/assets/real/reformas_work_1.jpg',
      '/assets/real/reformas_hero.jpg'
    ],
    defaultReviews: [
      { author: 'Alejandro Cano', rating: 5, text: 'Reformaron nuestra cocina y salón cumpliendo exactamente el día prometido. Limpios, detallistas y presupuesto sin sorpresas.' },
      { author: 'Beatriz Soler', rating: 5, text: 'Cambiamos bañera por plato de ducha y muebles de baño. En 48 horas estaba todo impecable.' },
      { author: 'Fernando Gil', rating: 5, text: 'Da mucha tranquilidad tratar con un equipo serio que te enseña trabajos reales y responde al momento.' }
    ],
    services: [
      { title: 'Visita Técnica + Medición + Presupuesto', meta: 'Entrega detallada en 48h sin compromiso', price: 'Gratis' },
      { title: 'Cambio de Bañera por Plato de Ducha', meta: 'Antideslizante + mampara cristal en 24h', price: '1.190 €' },
      { title: 'Reforma Completa de Cocina a Medida', meta: 'Mobiliario, encimera porcelánica e instalaciones', price: 'A medida' },
      { title: 'Reforma Integral de Vivienda Llave en Mano', meta: 'Todos los gremios coordinados con garantía', price: 'Consultar' }
    ]
  },
  barberia: {
    label: 'Barbería Masculina',
    icon: 'ph-scissors',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Barbería Nexo Studio',
    yearsExp: 'Barbería · Cita Directa',
    tagline: 'Degradados precisos, corte clásico a tijera y ritual de barba.',
    story: 'Puntualidad exacta, ambiente cuidado y reserva de hora desde el móvil en 15 segundos sin llamadas.',
    painTag: 'No interrumpas un corte a mitad para contestar WhatsApps preguntando huecos',
    solves: [
      'Agenda clara: el cliente elige corte y hora disponible sin llamarte',
      'Tarifas transparentes visibles las 24 horas',
      'Llenas huecos libres incluso de noche cuando el local está cerrado',
      '0% comisiones por cita: cada cliente va directo a tu móvil'
    ],
    heroImage: '/assets/real/barberia_hero.jpg',
    gallery: [
      '/assets/real/barberia_hero.jpg',
      '/assets/real/barberia_work_1.jpg',
      '/assets/real/peluqueria_hero.jpg'
    ],
    services: [
      { title: 'Corte Degradado / Skin Fade + Lavado', meta: '35 min · Acabado limpio con peinado', price: '17 €' },
      { title: 'Pack Completo Corte + Barba con Toalla Caliente', meta: '50 min · Perfilado a navaja y aceites', price: '25 €' },
      { title: 'Arreglo y Perfilado de Barba', meta: '25 min · Bálsamo hidratante', price: '13 €' },
      { title: 'Corte Clásico Ejecutivo / Infantil', meta: '30 min · Puntualidad sin esperas', price: '14 €' }
    ]
  },
  motos: {
    label: 'Motos y Concesionario',
    icon: 'ph-motorcycle',
    actionType: 'motor',
    defaultTheme: 'royal',
    defaultName: 'Motor Estudio Concesionario',
    yearsExp: 'Exposición · Stock y Taller',
    tagline: 'Motos nuevas y de ocasión revisadas con garantía oficial.',
    story: 'Exposición física, revisión completa en 60 puntos, financiación rápida y taller multimarca propio.',
    painTag: 'Enseña tu stock y precios claros 24h sin mandar fotos una por una',
    solves: [
      'Escaparate ordenado con vehículos, kilómetros, precios y garantía',
      'Consultas filtradas por modelo concreto directas a tu WhatsApp',
      'Reserva rápida de cita para revisión o neumáticos en taller',
      'Ubicación exacta de tu exposición con ruta GPS'
    ],
    heroImage: '/assets/real/motos_hero.jpg',
    gallery: [
      '/assets/real/motos_hero.jpg',
      '/assets/real/motos_work_1.jpg',
      '/assets/real/motos_work_2.jpg'
    ],
    services: [
      { title: 'Scooter Urbano 125cc ABS (Nuevo)', meta: 'Matriculación y casco incluidos · Financiación', price: '3.290 €' },
      { title: 'Maxi Scooter 350cc Ocasión Certificada', meta: '8.200 km · 1 año de garantía total', price: '4.690 €' },
      { title: 'Revisión Oficial Multimarca + Diagnosis', meta: 'Entrega en el mismo día con cita previa', price: 'Desde 69 €' },
      { title: 'Tasación de Tu Moto Actual como Parte de Pago', meta: 'Valoración en 15 min sin compromiso', price: 'Gratis' }
    ]
  },
  taller: {
    label: 'Taller y Automoción',
    icon: 'ph-wrench',
    actionType: 'motor',
    defaultTheme: 'royal',
    defaultName: 'AutoPrecisión Taller Multimarca',
    yearsExp: 'Mecánica · Pre-ITV · Chapa',
    tagline: 'Mecánica multimarca, diagnosis avanzada y mantenimiento con precio cerrado.',
    story: 'Te damos presupuesto exacto antes de intervenir en tu vehículo y cumplimos el plazo de entrega.',
    painTag: 'Recibe citas ordenadas con matrícula y síntoma antes de que llegue el coche',
    solves: [
      'El cliente elige revisión, frenos, neumáticos, Pre-ITV o chapa y pide hora',
      'Envío directo de matrícula o foto del roce a tu WhatsApp',
      'Transmite seriedad de servicio oficial desde el primer vistazo',
      'Botón directo de Google Maps hasta la puerta de tu taller'
    ],
    heroImage: '/assets/real/taller_work_1.jpg',
    gallery: [
      '/assets/real/taller_work_1.jpg',
      '/assets/real/taller_hero.jpg',
      '/assets/real/motos_hero.jpg'
    ],
    services: [
      { title: 'Mantenimiento Completo Aceite + Filtros', meta: 'Sello de mantenimiento sin perder garantía', price: 'Desde 95 €' },
      { title: 'Diagnosis Electrónica + Revisión Pre-ITV', meta: 'Chequeo de 40 puntos de seguridad', price: '39 €' },
      { title: 'Carga de Climatización + Higienización', meta: 'Listo en 45 minutos con cita previa', price: '59 €' },
      { title: 'Valoración de Chapa y Pintura por Foto', meta: 'Respuesta rápida por WhatsApp', price: 'Gratis' }
    ]
  },
  tienda: {
    label: 'Tienda y Comercio',
    icon: 'ph-storefront',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Atelier Comercio Local',
    yearsExp: 'Comercio Local · Encargos 24h',
    tagline: 'Selección cuidada de productos con reserva rápida y recogida sin esperas.',
    story: 'Descubre nuestras novedades desde el móvil y haz tu encargo directo por WhatsApp con trato cercano.',
    painTag: 'Vende y recibe encargos las 24h sin depender de que el algoritmo enseñe tus historias',
    solves: [
      'Catálogo limpio con fotos reales, precios y opciones disponibles',
      'Encargos para recoger en tienda o envío local directos a tu WhatsApp',
      '0% comisiones por pedido ni pasarelas complicadas de mantener',
      'Enlace profesional para tu perfil de Instagram, TikTok y Google'
    ],
    heroImage: '/assets/real/tienda_hero.jpg',
    gallery: [
      '/assets/real/tienda_hero.jpg',
      '/assets/real/tienda_work_1.jpg',
      '/assets/real/tienda_work_2.jpg'
    ],
    services: [
      { title: 'Selección Destacada de Temporada', meta: 'Edición cuidada · Reserva inmediata', price: '39,90 €' },
      { title: 'Pack Regalo Personalizado con Dedicatoria', meta: 'Preparado a medida para recoger hoy', price: '49,00 €' },
      { title: 'Cesta Especial / Lote Completo', meta: 'El más solicitado · Presentación cuidada', price: '68,00 €' },
      { title: 'Recogida Rápida en Tienda', meta: 'Listo a la hora que nos indiques', price: '0 €' }
    ]
  },
  fitness: {
    label: 'Fitness y Pilates',
    icon: 'ph-barbell',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Estudio Balance Pilates & Fuerza',
    yearsExp: 'Grupos Reducidos · Entrenamiento',
    tagline: 'Pilates Studio, entrenamiento personal y salud postural en grupos reducidos.',
    story: 'Reserva tu sesión de prueba inicial y entrena con planificación adaptada a tu nivel.',
    painTag: 'Capta nuevos alumnos todas las semanas mostrando horarios y bonos claros',
    solves: [
      'Bonos mensuales, horarios y tarifas explicados sin confusión',
      'Reserva directa de clase de prueba o valoración física inicial',
      'Ideal para estudios de pilates, yoga, box o entrenadores personales',
      'Contacto directo a tu WhatsApp sin intermediarios'
    ],
    heroImage: '/assets/real/fitness_hero.jpg',
    gallery: [
      '/assets/real/fitness_hero.jpg',
      '/assets/real/fitness_work_1.jpg',
      '/assets/real/peluqueria_work_2.jpg'
    ],
    services: [
      { title: 'Sesión de Prueba + Valoración Postural', meta: '50 min · Conoce el estudio sin compromiso', price: '12 €' },
      { title: 'Bono Pilates Studio (2 clases/semana)', meta: 'Grupos reducidos de máx. 6 alumnos', price: '75 €/mes' },
      { title: 'Entrenamiento Funcional Fuerza & Salud', meta: 'Turnos de mañana y tarde', price: '65 €/mes' },
      { title: 'Entrenamiento Personal Individual 1 a 1', meta: 'Planificación y seguimiento a medida', price: '38 €' }
    ]
  },
  gimnasio: {
    label: 'Gimnasio y Entrenador',
    icon: 'ph-barbell',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Kinetic Centro de Entrenamiento',
    yearsExp: 'Entrenamiento · Captación Directa',
    tagline: 'Fuerza, readaptación y entrenamiento personal con resultados medibles.',
    story: 'Empieza con una valoración inicial personalizada presencial u online.',
    painTag: 'Convierte visitas de Instagram y Google en reservas de clase de prueba',
    solves: [
      'Tarifas y planes claros en una sola vista limpia',
      'Reserva de prueba inicial en 15 segundos por WhatsApp',
      '0% comisiones ni cuotas de plataforma',
      'Panel móvil para actualizar horarios cuando quieras'
    ],
    heroImage: '/assets/real/fitness_work_1.jpg',
    gallery: [
      '/assets/real/fitness_work_1.jpg',
      '/assets/real/fitness_hero.jpg'
    ],
    services: [
      { title: 'Valoración Física Inicial + Sesión Prueba', meta: '45 min · Estudio de objetivos', price: 'Gratis' },
      { title: 'Grupos Reducidos Fuerza (3 días/semana)', meta: 'Máximo 8 personas por entrenador', price: '69 €/mes' },
      { title: 'Bono Entrenamiento Personal 1 a 1', meta: 'Seguimiento semanal completo', price: '120 €/mes' }
    ]
  },
  urgencias: {
    label: 'Cerrajería y Asistencia 24h',
    icon: 'ph-key',
    actionType: 'urgencia',
    defaultTheme: 'royal',
    defaultName: 'Cerrajería Técnica Express',
    yearsExp: 'Servicio Local · Llegada en 20 min',
    tagline: 'Aperturas limpias sin daños, cambio de bombines de alta seguridad y urgencias 24h.',
    story: 'Técnicos propios de tu ciudad con precio cerrado confirmado antes de desplazarnos.',
    painTag: 'Genera confianza inmediata con tarifas claras frente a anuncios dudosos',
    solves: [
      'Botón de aviso urgente directo a tu teléfono y WhatsApp',
      'Precios orientativos claros que cierran el aviso al instante',
      'Sin intermediarios ni comisiones por llamada',
      'Carga instantánea en móvil con cobertura baja'
    ],
    heroImage: '/assets/real/cerrajeria_work_1.jpg',
    gallery: [
      '/assets/real/cerrajeria_work_1.jpg',
      '/assets/real/reformas_work_2.jpg'
    ],
    services: [
      { title: 'Apertura Limpia de Puerta Sin Romper', meta: 'Llegada media en 20 minutos', price: 'Desde 59 €' },
      { title: 'Instalación Bombín Antibumping Alta Seguridad', meta: 'Incluye 5 llaves incopiables', price: '125 €' },
      { title: 'Reparación de Cierres y Persianas de Local', meta: 'Atención en el mismo día', price: 'Consultar' }
    ]
  },
  tattoo: {
    label: 'Estudio Tattoo y Piercing',
    icon: 'ph-pen-nib',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Línea Fina Tattoo Studio',
    yearsExp: 'Estudio Homologado · Diseño Único',
    tagline: 'Fine line, micro-realismo y diseño personalizado en cabina privada.',
    story: 'Material 100% estéril monouso, asesoramiento previo y reserva directa con el artista.',
    painTag: 'Filtra consultas serias mostrando tus estilos y tarifa mínima con claridad',
    solves: [
      'Estilos y tarifas base ordenados para ahorrar mensajes eternos',
      'Solicitud de cita y boceto directo a tu WhatsApp',
      'Galería limpia de trabajos curados',
      '0% comisiones por sesión agendada'
    ],
    heroImage: '/assets/real/barberia_work_1.jpg',
    gallery: [
      '/assets/real/barberia_work_1.jpg',
      '/assets/real/peluqueria_work_2.jpg'
    ],
    services: [
      { title: 'Tatuaje Fine Line / Minimalista', meta: 'Diseño limpio · Material 100% estéril', price: 'Desde 60 €' },
      { title: 'Pieza Personalizada Media (10 a 18 cm)', meta: 'Incluye diseño de boceto previo', price: 'Desde 150 €' },
      { title: 'Sesión Completa Realismo / Proyecto', meta: 'Cabina privada reservada', price: 'Consultar' }
    ]
  },
  personal: {
    label: 'Despacho y Profesionales',
    icon: 'ph-briefcase',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Nexo Despacho Profesional',
    yearsExp: 'Atención Directa · Cita Previa',
    tagline: 'Asesoramiento cercano, soluciones claras y resultados desde el primer día.',
    story: 'Agenda tu consulta presencial u online con respuesta rápida y presupuesto transparente.',
    painTag: 'Presenta tu despacho o servicio profesional con una imagen limpia que inspira seriedad',
    solves: [
      'Servicios, especialidades y honorarios explicados con claridad',
      'Solicitud de consulta previa directa a tu WhatsApp',
      'Ideal para abogados, asesorías, psicólogos, arquitectos o autónomos',
      'Dominio propio .es o .com sin cuotas mensuales'
    ],
    heroImage: '/assets/real/peluqueria_work_2.jpg',
    gallery: [
      '/assets/real/peluqueria_work_2.jpg',
      '/assets/real/reformas_work_2.jpg'
    ],
    services: [
      { title: 'Primera Consulta de Valoración', meta: '30 min · Análisis inicial de tu caso', price: 'Gratis' },
      { title: 'Gestión / Servicio Profesional Completo', meta: 'Presupuesto cerrado por escrito', price: 'A medida' },
      { title: 'Asesoramiento Preferente Presencial u Online', meta: 'Respuesta en menos de 24h', price: '55 €' }
    ]
  },
  otro: {
    label: 'Otro Negocio Local',
    icon: 'ph-buildings',
    actionType: 'citas',
    defaultTheme: 'royal',
    defaultName: 'Mi Negocio Local',
    yearsExp: 'Atención Cercana en Tu Ciudad',
    tagline: 'Calidad profesional, precios claros y atención rápida sin esperas.',
    story: 'Consulta nuestros servicios actualizados y escríbenos o pide cita en un solo clic.',
    painTag: 'Tu escaparate abierto las 24 horas en Google, Instagram y WhatsApp sin cuotas',
    solves: [
      'Web limpia y rápida adaptada a móvil y ordenador',
      'Listado claro de servicios y precios para evitar preguntas repetidas',
      'Reservas y consultas directas a tu WhatsApp con 0% comisión',
      'Un único pago para siempre con panel propio de edición'
    ],
    heroImage: '/assets/real/peluqueria_hero.jpg',
    gallery: [
      '/assets/real/peluqueria_hero.jpg',
      '/assets/real/reformas_work_2.jpg',
      '/assets/real/clinica_hero.jpg'
    ],
    services: [
      { title: 'Servicio Principal Más Solicitado', meta: 'Atención personalizada con cita previa', price: '35 €' },
      { title: 'Pack Completo Profesional', meta: 'Garantía de satisfacción incluida', price: '65 €' },
      { title: 'Primera Valoración o Presupuesto', meta: 'Respuesta rápida en el día', price: 'Gratis' }
    ]
  }
};

// Clean Light-First Design System Themes (#1 Flagship: Blanco & Azul Real #4F46E5)
const DESIGN_THEMES = {
  royal: {
    label: 'Blanco & Azul Real', sub: 'Luminoso · El que más convierte',
    swatch1: '#FFFFFF', swatch2: '#4F46E5',
    bg: '#FAFBFD', surface: '#F1F5FB', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(15, 23, 42, 0.08)',
    accent: '#4F46E5', accentHi: '#4338CA', accentSoft: '#EEF2FF', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  clinical: {
    label: 'Blanco & Azul Cobalto', sub: 'Clínicas, Salones y Salud',
    swatch1: '#F8FAFC', swatch2: '#2563EB',
    bg: '#F8FAFC', surface: '#EFF6FF', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(37, 99, 235, 0.12)',
    accent: '#2563EB', accentHi: '#1D4ED8', accentSoft: '#DBEAFE', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  cream: {
    label: 'Marfil & Índigo Suave', sub: 'Peluquería, Estética y Moda',
    swatch1: '#FDFCFB', swatch2: '#6366F1',
    bg: '#FDFCFB', surface: '#F5F3FF', card: '#FFFFFF',
    text: '#1E1B4B', muted: '#52525B', border: 'rgba(99, 102, 241, 0.12)',
    accent: '#4F46E5', accentHi: '#4338CA', accentSoft: '#EEF2FF', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  emerald: {
    label: 'Blanco & Aguamarina', sub: 'Bienestar, Fisio y Pilates',
    swatch1: '#F8FAFC', swatch2: '#0D9488',
    bg: '#F8FAFC', surface: '#F0FDFA', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(13, 148, 136, 0.14)',
    accent: '#0D9488', accentHi: '#0F766E', accentSoft: '#CCFBF1', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  copper: {
    label: 'Blanco Cálido & Terracota', sub: 'Hostelería, Panadería y Hogar',
    swatch1: '#FDFBF7', swatch2: '#C2410C',
    bg: '#FDFBF7', surface: '#FEF3C7', card: '#FFFFFF',
    text: '#1C1917', muted: '#57534E', border: 'rgba(28, 25, 23, 0.09)',
    accent: '#C2410C', accentHi: '#9A3412', accentSoft: '#FFEDD5', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  gold: {
    label: 'Azul Marino & Blanco', sub: 'Despachos, Motor y Reformas',
    swatch1: '#F8FAFC', swatch2: '#1E40AF',
    bg: '#F8FAFC', surface: '#EEF2FF', card: '#FFFFFF',
    text: '#0F172A', muted: '#475569', border: 'rgba(30, 64, 175, 0.12)',
    accent: '#1E40AF', accentHi: '#1E3A8A', accentSoft: '#DBEAFE', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: true
  },
  crimson: {
    label: 'Noche Índigo (Opcional)', sub: 'Modo oscuro opcional',
    swatch1: '#0F172A', swatch2: '#6366F1',
    bg: '#0F172A', surface: '#1E293B', card: '#1E293B',
    text: '#F8FAFC', muted: '#CBD5E1', border: 'rgba(148, 163, 184, 0.18)',
    accent: '#6366F1', accentHi: '#4F46E5', accentSoft: 'rgba(99, 102, 241, 0.18)', accentInk: '#FFFFFF',
    headingFont: "'Outfit', sans-serif", headingWeight: '800', isLight: false
  }
};

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function slugifyName(name) {
  const s = String(name || 'minegocio')
    .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return s || 'minegocio';
}

function encodeSharePayload(st) {
  try {
    const httpHero = (st.customHeroPhoto && /^https?:\/\//.test(st.customHeroPhoto)) ? st.customHeroPhoto : '';
    const httpGal = Array.isArray(st.customGallery)
      ? st.customGallery.filter(u => typeof u === 'string' && /^https?:\/\//.test(u)).slice(0, 4)
      : [];
    const slim = {
      n: st.name, s: st.sector, cs: st.customSectorLabel, y: st.yearsExp,
      tg: st.tagline, st: st.story, bp: st.bookingPolicy, c: st.city,
      a: st.address, w: st.whatsapp, p: st.phone, ig: st.instagram,
      hw: st.hoursWeek, hs: st.hoursSat, hd: st.hoursSun, th: st.theme,
      hp: httpHero, gp: httpGal,
      rv: Array.isArray(st.reviews) ? st.reviews.slice(0, 3) : [],
      lh: st.legalHolder || '', ln: st.legalNif || '', dm: st.desiredDomain || '',
      sv: (st.services || []).slice(0, 12), md: st.modules,
      un: !!st.unlocked, pin: st.adminPin || 'PRO-4829',
      ex: st.expiresAt || (Date.now() + 24 * 3600 * 1000)
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(slim))))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  } catch (e) { return ''; }
}

function decodeSharePayload(b64) {
  try {
    let norm = String(b64).replace(/-/g, '+').replace(/_/g, '/');
    while (norm.length % 4) norm += '=';
    const slim = JSON.parse(decodeURIComponent(escape(atob(norm))));
    if (!slim || !slim.n) return null;
    const def = SECTOR_PRESETS[slim.s] || SECTOR_PRESETS.peluqueria;
    return {
      name: slim.n, userEditedName: true, sector: slim.s || 'peluqueria',
      customSectorLabel: slim.cs || 'Negocio Local', yearsExp: slim.y || def.yearsExp,
      tagline: slim.tg || def.tagline, story: slim.st || def.story,
      bookingPolicy: slim.bp || 'ambos', city: slim.c || 'Madrid',
      address: slim.a || 'Calle Serrano 42', whatsapp: slim.w || '612 890 345',
      phone: slim.p || '', instagram: slim.ig || '',
      hoursWeek: slim.hw || '09:30 a 20:00', hoursSat: slim.hs || '09:30 a 14:30',
      hoursSun: slim.hd || 'Cerrado', theme: slim.th || def.defaultTheme || 'royal',
      customHeroPhoto: slim.hp || '', customGallery: Array.isArray(slim.gp) ? slim.gp : [],
      reviews: Array.isArray(slim.rv) ? slim.rv : [],
      legalHolder: slim.lh || '', legalNif: slim.ln || '', desiredDomain: slim.dm || '',
      services: Array.isArray(slim.sv) && slim.sv.length ? slim.sv : JSON.parse(JSON.stringify(def.services)),
      modules: Object.assign({
        booking: true, whatsappFloat: true, services: true, about: true,
        scheduleMap: true, gallery: true, reviews: true, faq: true
      }, slim.md || {}),
      unlocked: !!slim.un, adminPin: slim.pin || 'PRO-4829',
      expiresAt: slim.ex || (Date.now() + 24 * 3600 * 1000)
    };
  } catch (e) { return null; }
}

function loadStudioState() {
  const def = SECTOR_PRESETS.peluqueria;
  const fallback = {
    name: def.defaultName, userEditedName: false, sector: 'peluqueria',
    customSectorLabel: 'Negocio Local',
    yearsExp: def.yearsExp, tagline: def.tagline, story: def.story,
    bookingPolicy: 'ambos', city: 'Madrid', address: 'Calle Serrano 42, Local',
    whatsapp: '612 890 345', phone: '910 234 567', instagram: '@salonaura',
    hoursWeek: '09:30 a 20:00', hoursSat: '09:30 a 14:30', hoursSun: 'Cerrado',
    theme: 'royal', customHeroPhoto: '', customGallery: [],
    services: JSON.parse(JSON.stringify(def.services)),
    modules: {
      booking: true, whatsappFloat: true, services: true, about: true,
      scheduleMap: true, gallery: true, reviews: true, faq: true
    },
    unlocked: false, adminPin: 'PRO-4829', buyerEmail: '',
    previewDevice: 'mobile', activeStep: 1,
    expiresAt: Date.now() + (24 * 3600 * 1000) - 9000
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.name && Array.isArray(parsed.services)) {
        return Object.assign({}, fallback, parsed, {
          modules: Object.assign({}, fallback.modules, parsed.modules || {})
        });
      }
    }
  } catch (e) {}
  return fallback;
}

let studioState = loadStudioState();
let compileTimer = null;

function saveStudioState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(studioState)); } catch (e) {}
}

// ==========================================================================
// SECTOR-ADAPTIVE COMPILER (Agency-Grade Soft-Structuralist Client Website)
// ==========================================================================
function buildSectorActionWidgetHTML(st, preset) {
  const mode = preset.actionType || 'citas';
  const srvOpts = (st.services || []).map(srv =>
    `<option value="${escapeHtml(srv.title)} (${escapeHtml(srv.price)})">${escapeHtml(srv.title)} · ${escapeHtml(srv.price)}</option>`
  ).join('');

  if (mode === 'reformas') {
    return `
      <div class="sec-head">
        <span class="sec-pill">Presupuesto sin compromiso</span>
        <h2>Solicita valoración para tu reforma</h2>
        <p class="sec-sub">Indica qué estancia quieres reformar y te respondemos en el día por WhatsApp o teléfono.</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Tipo de trabajo</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-extra">2. Superficie aproximada</label>
              <select id="bk-extra">
                <option value="Baño o estancia (< 10 m²)">Baño o estancia (&lt; 10 m²)</option>
                <option value="Cocina o salón (15 a 35 m²)">Cocina o salón (15 a 35 m²)</option>
                <option value="Vivienda completa (+70 m²)">Vivienda completa (+70 m²)</option>
              </select>
            </div>
          </div>
          <div style="margin-bottom:16px;">
            <label for="bk-client">3. Tu nombre y zona</label>
            <input type="text" id="bk-client" placeholder="Ej. Javier · ${escapeHtml(st.city)}" />
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('reforma')">
            <span>Pedir visita y presupuesto por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  if (mode === 'motor') {
    return `
      <div class="sec-head">
        <span class="sec-pill">Taller y Exposición</span>
        <h2>Pide cita de taller o consulta disponibilidad</h2>
        <p class="sec-sub">Selecciona vehículo o mantenimiento y te confirmamos hueco directo en tu móvil.</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Vehículo o servicio</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-extra">2. Modelo o matrícula</label>
              <input type="text" id="bk-extra" placeholder="Ej. Honda SH 125 / Seat León" />
            </div>
          </div>
          <div style="margin-bottom:16px;">
            <label for="bk-client">3. Tu nombre</label>
            <input type="text" id="bk-client" placeholder="Ej. Marcos" />
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('motor')">
            <span>Confirmar consulta por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  if (mode === 'mesa') {
    return `
      <div class="sec-head">
        <span class="sec-pill">Reserva directa · 0% comisiones</span>
        <h2>Reserva tu mesa o haz tu encargo</h2>
        <p class="sec-sub">Elige zona y hora aproximada. Confirmación directa con nuestro equipo sin intermediarios.</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-extra">1. Preferencia de mesa o recogida</label>
              <select id="bk-extra">
                <option value="Mesa para 2 personas en Terraza">Mesa 2 personas · Terraza</option>
                <option value="Mesa para 4 personas en Salón">Mesa 4 personas · Salón</option>
                <option value="Mesa para grupo (+6 personas)">Mesa grupo (+6 personas)</option>
                <option value="Pedido para recoger en local">Pedido para recoger sin espera</option>
              </select>
            </div>
            <div>
              <label for="bk-service">2. Plato o menú destacado</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
          </div>
          <label>3. Turno preferido</label>
          <div class="slots">
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Hoy 14:00')">14:00</button>
            <button type="button" class="slot-btn active" onclick="pickSlot(this,'Hoy 14:30')">14:30</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Hoy 21:00')">21:00</button>
            <button type="button" class="slot-btn" onclick="pickSlot(this,'Hoy 21:30')">21:30</button>
          </div>
          <div style="margin-bottom:16px;">
            <label for="bk-client">4. A nombre de</label>
            <input type="text" id="bk-client" placeholder="Ej. Laura (4 personas)" />
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('mesa')">
            <span>Confirmar reserva por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  if (mode === 'urgencia') {
    return `
      <div class="sec-head">
        <span class="sec-pill">Atención inmediata 24h</span>
        <h2>Solicita técnico en tu ubicación</h2>
        <p class="sec-sub">Te confirmamos precio cerrado y tiempo exacto de llegada antes de salir.</p>
      </div>
      <div class="bezel-shell">
        <div class="book-card">
          <div class="form-grid">
            <div>
              <label for="bk-service">1. Servicio necesario</label>
              <select id="bk-service">${srvOpts}</select>
            </div>
            <div>
              <label for="bk-extra">2. Calle o zona en ${escapeHtml(st.city)}</label>
              <input type="text" id="bk-extra" placeholder="Ej. Calle Mayor 18" />
            </div>
          </div>
          <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('urgencia')">
            <span>Enviar aviso directo por WhatsApp</span>
            <span class="btn-arrow">→</span>
          </button>
          <div class="book-ok" id="bk-ok"></div>
        </div>
      </div>`;
  }

  // Default: citas (Peluquería, Clínica, Estética, Barbería, Fitness, Despacho, Tienda)
  return `
    <div class="sec-head">
      <span class="sec-pill">Agenda directa sin esperas</span>
      <h2>Pide tu cita en 15 segundos</h2>
      <p class="sec-sub">Elige el servicio y el horario que mejor te venga. Recibimos tu solicitud al instante en nuestro WhatsApp.</p>
    </div>
    <div class="bezel-shell">
      <div class="book-card">
        <div class="form-grid">
          <div>
            <label for="bk-service">1. Servicio deseado</label>
            <select id="bk-service">${srvOpts}</select>
          </div>
          <div>
            <label for="bk-extra">2. Día preferido</label>
            <select id="bk-extra">
              <option value="Hoy (si hay hueco libre)">Hoy (si hay hueco)</option>
              <option value="Mañana">Mañana</option>
              <option value="Esta semana por la mañana">Esta semana · Mañanas</option>
              <option value="Esta semana por la tarde">Esta semana · Tardes</option>
              <option value="Sábado">Sábado</option>
            </select>
          </div>
        </div>
        <label>3. Hora aproximada</label>
        <div class="slots">
          <button type="button" class="slot-btn" onclick="pickSlot(this,'10:00')">10:00</button>
          <button type="button" class="slot-btn active" onclick="pickSlot(this,'11:30')">11:30</button>
          <button type="button" class="slot-btn" onclick="pickSlot(this,'17:00')">17:00</button>
          <button type="button" class="slot-btn" onclick="pickSlot(this,'18:30')">18:30</button>
        </div>
        <div style="margin-bottom:16px;">
          <label for="bk-client">4. Tu nombre</label>
          <input type="text" id="bk-client" placeholder="Ej. Marta García" />
        </div>
        <button type="button" class="btn-primary btn-block" onclick="sendSectorWhatsApp('citas')">
          <span>Confirmar cita en ${escapeHtml(st.name)}</span>
          <span class="btn-arrow">→</span>
        </button>
        <div class="book-ok" id="bk-ok"></div>
      </div>
    </div>`;
}

function compileClientWebsiteHTML(st) {
  const preset = SECTOR_PRESETS[st.sector] || SECTOR_PRESETS.peluqueria;
  const thm = DESIGN_THEMES[st.theme] || DESIGN_THEMES.royal;
  const sectorBadge = st.sector === 'otro' ? (st.customSectorLabel || 'Negocio Local') : preset.label;

  const customPhotos = Array.isArray(st.customGallery) ? st.customGallery.filter(Boolean) : [];
  const defaultGallery = Array.isArray(preset.gallery) && preset.gallery.length ? preset.gallery : [preset.heroImage];
  const activeGallery = customPhotos.length ? customPhotos : defaultGallery;
  const heroImg = st.customHeroPhoto || activeGallery[0] || preset.heroImage;

  const cleanWa = String(st.whatsapp || '612890345').replace(/[^0-9]/g, '');
  const fullWa = cleanWa.startsWith('34') ? cleanWa : ('34' + cleanWa);
  const telHref = 'tel:+' + fullWa;

  const actionBtnLabel = preset.actionType === 'reformas' ? 'Pedir presupuesto'
    : preset.actionType === 'mesa' ? 'Reservar mesa'
    : preset.actionType === 'motor' ? 'Cita / Stock'
    : preset.actionType === 'urgencia' ? 'Asistencia 24h'
    : 'Pedir cita';

  const servicesHtml = (st.services || []).map((srv, idx) => `
    <div class="srv-card" onclick="selectServiceForBooking('${escapeHtml(srv.title)}')">
      <div class="srv-info">
        ${idx === 0 ? `<span class="srv-pop">Más solicitado</span>` : ''}
        <div class="srv-title">${escapeHtml(srv.title)}</div>
        <div class="srv-meta">${escapeHtml(srv.meta)}</div>
      </div>
      <div class="srv-right">
        <span class="srv-price">${escapeHtml(srv.price)}</span>
        <span class="srv-arrow">Reservar →</span>
      </div>
    </div>
  `).join('');

  const galleryGridHtml = activeGallery.slice(0, 3).map((ph, idx) => `
    <figure class="gal-item ${idx === 0 ? 'gal-featured' : ''}">
      <img src="${escapeHtml(ph)}" alt="${escapeHtml(st.name)} · Imagen ${idx + 1}" loading="${idx === 0 ? 'eager' : 'lazy'}" />
    </figure>
  `).join('');

  const fallbackReviews = preset.defaultReviews || [
    { author: 'Marta G.', rating: 5, text: `Trato de 10 en ${st.name}. Puntuales, muy profesionales y pedir cita por WhatsApp fue comodísimo.` },
    { author: 'Lucía S.', rating: 5, text: `De lo mejor de ${st.city}. Precios claros en la web desde el primer momento y atención impecable.` },
    { author: 'Carlos R.', rating: 5, text: 'Instalaciones cuidadísimas, trato cercano y cero esperas. Repetiré sin duda.' }
  ];
  const activeReviews = (Array.isArray(st.reviews) && st.reviews.length) ? st.reviews : fallbackReviews;
  const reviewsHtml = activeReviews.slice(0, 3).map(rv => `
    <article class="rev-card">
      <div>
        <div class="rev-stars" aria-label="5 de 5 estrellas">★★★★★</div>
        <p class="rev-text">“${escapeHtml(rv.text)}”</p>
      </div>
      <div class="rev-author">
        <span class="rev-avatar">${escapeHtml((rv.author || 'C').trim().charAt(0).toUpperCase())}</span>
        <div>
          <strong>${escapeHtml(rv.author || 'Cliente verificado')}</strong>
          <span>Reseña verificada · ${escapeHtml(st.city)}</span>
        </div>
      </div>
    </article>
  `).join('');

  const editPhotoBtnHero = !st.unlocked
    ? `<button type="button" class="demo-photo-pill" onclick="try{window.parent.postMessage({type:'MIWEB_OPEN_EDITOR',tab:'fotos'},'*')}catch(e){}">
         <span>Subir fotos de mi local</span>
       </button>`
    : '';

  const editPhotoBtnGal = !st.unlocked
    ? `<button type="button" class="btn-secondary-sm" onclick="try{window.parent.postMessage({type:'MIWEB_OPEN_EDITOR',tab:'fotos'},'*')}catch(e){}">
         Cambiar por fotos de mi móvil
       </button>`
    : '';

  const legalHolderName = st.legalHolder || st.name;
  const legalNifText = st.legalNif ? ` · NIF/CIF: ${st.legalNif}` : '';
  const widgetHtml = buildSectorActionWidgetHTML(st, preset);
  const accentSoft = thm.accentSoft || (thm.isLight ? '#EEF2FF' : 'rgba(99,102,241,0.18)');
  const navBg = thm.isLight ? 'rgba(255, 255, 255, 0.88)' : 'rgba(15, 23, 42, 0.88)';
  const bezelBg = thm.isLight ? 'rgba(15, 23, 42, 0.035)' : 'rgba(255, 255, 255, 0.04)';

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${escapeHtml(st.name)} · ${escapeHtml(st.city)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg:${thm.bg}; --surface:${thm.surface}; --card:${thm.card};
    --ink:${thm.text}; --muted:${thm.muted}; --border:${thm.border};
    --accent:${thm.accent}; --accent-hi:${thm.accentHi}; --accent-soft:${accentSoft}; --accent-ink:${thm.accentInk};
    --bezel:${bezelBg};
  }
  * { box-sizing:border-box; margin:0; padding:0; -webkit-tap-highlight-color:transparent; }
  html { scroll-behavior:smooth; }
  body {
    background:var(--bg); color:var(--ink);
    font-family:'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height:1.55; overflow-x:clip; padding-bottom:84px;
    -webkit-font-smoothing:antialiased;
  }
  a { color:inherit; text-decoration:none; }
  .wrap { max-width:1080px; margin:0 auto; padding:0 20px; }

  /* Top Info Bar */
  .top-strip {
    background:var(--card); border-bottom:1px solid var(--border);
    padding:8px 20px; font-size:12px; color:var(--muted);
  }
  .top-strip-inner {
    max-width:1080px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; gap:12px;
  }
  .open-pill { display:inline-flex; align-items:center; gap:6px; font-weight:600; color:var(--ink); }
  .open-dot { width:7px; height:7px; border-radius:50%; background:#10B981; box-shadow:0 0 0 3px rgba(16,185,129,0.18); }

  /* Sticky Glass Navbar */
  .nav {
    position:sticky; top:0; z-index:40; background:${navBg};
    backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
    border-bottom:1px solid var(--border);
  }
  .nav-inner {
    max-width:1080px; margin:0 auto; padding:13px 20px;
    display:flex; align-items:center; justify-content:space-between; gap:14px;
  }
  .brand {
    font-family:'Outfit',sans-serif; font-weight:800; font-size:1.22rem;
    letter-spacing:-0.03em; line-height:1.05; cursor:pointer; display:flex; align-items:center; gap:9px;
  }
  .brand-mark {
    width:32px; height:32px; border-radius:10px; background:var(--accent); color:var(--accent-ink);
    display:inline-flex; align-items:center; justify-content:center; font-size:0.95rem; font-weight:800; flex-shrink:0;
  }
  .nav-links { display:none; align-items:center; gap:22px; font-size:13.5px; font-weight:600; color:var(--muted); }
  .nav-links a:hover { color:var(--accent); }
  @media (min-width:820px) { .nav-links { display:flex; } }

  /* Tactile Pill Buttons */
  .btn-primary {
    background:var(--accent); color:var(--accent-ink);
    padding:12px 18px 12px 22px; border-radius:999px; border:none;
    font-family:'Outfit',sans-serif; font-weight:700; font-size:14px;
    display:inline-flex; align-items:center; gap:10px; cursor:pointer;
    box-shadow:0 12px 28px -8px rgba(79, 70, 229, 0.38);
    transition:transform 0.2s cubic-bezier(0.23,1,0.32,1), background 0.2s ease;
  }
  .btn-primary:hover { background:var(--accent-hi); transform:translateY(-1px); }
  .btn-primary:active { transform:scale(0.97); }
  .btn-block { width:100%; justify-content:center; padding:14px 22px; font-size:15px; }
  .btn-arrow {
    width:26px; height:26px; border-radius:50%; background:rgba(255,255,255,0.2);
    display:inline-flex; align-items:center; justify-content:center; font-size:13px;
  }
  .btn-secondary {
    background:var(--card); color:var(--ink); border:1px solid var(--border);
    padding:12px 20px; border-radius:999px; font-weight:700; font-size:14px;
    display:inline-flex; align-items:center; gap:8px; cursor:pointer;
    box-shadow:0 4px 14px rgba(15,23,42,0.04);
    transition:border-color 0.2s ease, transform 0.2s ease;
  }
  .btn-secondary:hover { border-color:var(--accent); }
  .btn-secondary-sm {
    background:var(--accent-soft); color:var(--accent); border:1px solid var(--border);
    padding:8px 14px; border-radius:999px; font-weight:700; font-size:12px; cursor:pointer;
  }
  .nav-cta {
    background:var(--accent); color:var(--accent-ink); padding:9px 16px;
    border-radius:999px; font-family:'Outfit',sans-serif; font-size:13px; font-weight:700;
    border:none; cursor:pointer; white-space:nowrap;
  }

  /* Double-Bezel Surface Architecture */
  .bezel-shell {
    background:var(--bezel); border:1px solid var(--border);
    padding:7px; border-radius:28px;
  }

  /* Editorial Split Hero */
  .hero {
    padding:34px 0 46px;
    background:radial-gradient(720px 380px at 85% 0%, var(--accent-soft), transparent 70%);
    border-bottom:1px solid var(--border);
  }
  .hero-grid { display:grid; grid-template-columns:1fr; gap:26px; align-items:center; }
  @media (min-width:820px) {
    .hero { padding:58px 0 68px; }
    .hero-grid { grid-template-columns:1.06fr 0.94fr; gap:42px; }
  }
  .trust-row {
    display:inline-flex; flex-wrap:wrap; align-items:center; gap:8px;
    padding:6px 13px; border-radius:999px; background:var(--card); border:1px solid var(--border);
    font-size:12px; font-weight:700; margin-bottom:16px;
    box-shadow:0 4px 12px rgba(15,23,42,0.04);
  }
  .trust-stars { color:#F59E0B; letter-spacing:1px; }
  h1 {
    font-family:'Outfit',sans-serif; font-weight:800;
    font-size:clamp(2rem, 4.6vw, 3.15rem); line-height:1.06;
    letter-spacing:-0.035em; text-wrap:balance; margin-bottom:14px;
  }
  .hero-p { color:var(--muted); font-size:15.5px; max-width:520px; margin-bottom:22px; line-height:1.6; }
  .hero-btns { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:20px; }
  .hero-checks { display:flex; flex-wrap:wrap; gap:14px; font-size:12.5px; font-weight:600; color:var(--muted); }
  .hero-checks span { display:inline-flex; align-items:center; gap:5px; }
  .hero-checks b { color:var(--accent); }

  .hero-photo-shell {
    position:relative; background:var(--bezel); border:1px solid var(--border);
    padding:8px; border-radius:30px;
    box-shadow:0 24px 54px -16px rgba(15, 23, 42, 0.14);
  }
  .hero-photo-core {
    position:relative; border-radius:22px; overflow:hidden; background:var(--card);
  }
  .hero-photo-core img { width:100%; aspect-ratio:4/3; object-fit:cover; display:block; }
  .hero-float-card {
    position:absolute; bottom:12px; left:12px; right:12px;
    background:${navBg}; backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
    color:var(--ink); padding:11px 15px; border-radius:16px; border:1px solid var(--border);
    display:flex; justify-content:space-between; align-items:center; gap:10px; font-size:12.5px;
    box-shadow:0 12px 28px rgba(15,23,42,0.10);
  }
  .demo-photo-pill {
    position:absolute; top:12px; right:12px; z-index:5;
    background:var(--accent); color:#fff; border:none; border-radius:999px;
    padding:8px 14px; font-size:12px; font-weight:700; cursor:pointer;
    box-shadow:0 10px 24px rgba(79,70,229,0.4);
  }

  /* Sections */
  section { padding:52px 0; border-bottom:1px solid var(--border); }
  .sec-head { margin-bottom:24px; max-width:640px; }
  .sec-head-row { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; gap:12px; margin-bottom:22px; }
  .sec-pill {
    display:inline-block; padding:4px 12px; border-radius:999px;
    background:var(--accent-soft); color:var(--accent);
    font-size:11.5px; font-weight:700; letter-spacing:0.02em; margin-bottom:8px;
  }
  h2 {
    font-family:'Outfit',sans-serif; font-weight:800;
    font-size:clamp(1.55rem, 3.4vw, 2.2rem); line-height:1.12;
    letter-spacing:-0.03em; text-wrap:balance;
  }
  .sec-sub { color:var(--muted); font-size:14.5px; margin-top:6px; }

  /* Services Menu */
  .srv-list { display:grid; grid-template-columns:1fr; gap:12px; }
  @media (min-width:720px) { .srv-list { grid-template-columns:1fr 1fr; gap:14px; } }
  .srv-card {
    background:var(--card); border:1px solid var(--border); border-radius:20px;
    padding:18px 20px; display:flex; justify-content:space-between; align-items:center; gap:14px;
    cursor:pointer; box-shadow:0 8px 24px -12px rgba(15,23,42,0.06);
    transition:transform 0.2s cubic-bezier(0.23,1,0.32,1), border-color 0.2s ease;
  }
  .srv-card:hover { transform:translateY(-2px); border-color:var(--accent); }
  .srv-pop {
    display:inline-block; padding:2px 8px; border-radius:999px;
    background:var(--accent-soft); color:var(--accent); font-size:10.5px; font-weight:700; margin-bottom:5px;
  }
  .srv-title { font-family:'Outfit',sans-serif; font-weight:700; font-size:15.5px; margin-bottom:3px; }
  .srv-meta { color:var(--muted); font-size:12.5px; }
  .srv-right { text-align:right; flex-shrink:0; }
  .srv-price {
    display:inline-block; padding:5px 11px; border-radius:999px;
    background:var(--accent-soft); color:var(--accent);
    font-family:'Outfit',sans-serif; font-weight:800; font-size:14.5px;
    font-variant-numeric:tabular-nums; white-space:nowrap; margin-bottom:4px;
  }
  .srv-arrow { display:block; font-size:11.5px; color:var(--muted); font-weight:700; }

  /* Editorial 3-Photo Gallery */
  .gal-grid { display:grid; grid-template-columns:1fr; gap:14px; }
  @media (min-width:720px) {
    .gal-grid { grid-template-columns:1.35fr 0.85fr; grid-template-rows:repeat(2, 195px); }
    .gal-featured { grid-row:1 / span 2; }
  }
  .gal-item {
    border-radius:22px; overflow:hidden; border:1px solid var(--border);
    background:var(--card); box-shadow:0 12px 28px -12px rgba(15,23,42,0.08);
  }
  .gal-item img { width:100%; height:100%; min-height:190px; object-fit:cover; display:block; }

  /* Booking Card */
  .book-card { background:var(--card); border:1px solid var(--border); border-radius:22px; padding:22px; }
  @media (min-width:680px) { .book-card { padding:28px; } }
  .form-grid { display:grid; grid-template-columns:1fr; gap:14px; margin-bottom:14px; }
  @media (min-width:640px) { .form-grid { grid-template-columns:1fr 1fr; } }
  label { display:block; font-size:11.5px; font-weight:700; color:var(--muted); margin-bottom:6px; }
  input, select {
    width:100%; padding:12px 14px; border-radius:13px; border:1px solid var(--border);
    background:var(--bg); color:var(--ink); font-size:15px; font-family:inherit; outline:none;
  }
  input:focus, select:focus { border-color:var(--accent); box-shadow:0 0 0 3px var(--accent-soft); }
  .slots { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin:6px 0 16px; }
  .slot-btn {
    padding:10px 6px; border-radius:12px; border:1px solid var(--border);
    background:var(--bg); color:var(--ink); font-weight:700; font-size:13px;
    font-variant-numeric:tabular-nums; cursor:pointer;
  }
  .slot-btn.active { background:var(--accent); color:var(--accent-ink); border-color:var(--accent); }
  .book-ok {
    display:none; margin-top:14px; padding:13px 15px; border-radius:14px;
    background:rgba(16,185,129,0.10); border:1px solid rgba(16,185,129,0.3);
    color:#047857; font-size:13.5px; font-weight:600;
  }

  /* Reviews */
  .rev-grid { display:grid; grid-template-columns:1fr; gap:14px; }
  @media (min-width:760px) { .rev-grid { grid-template-columns:repeat(3,1fr); } }
  .rev-card {
    background:var(--card); border:1px solid var(--border); border-radius:22px;
    padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:16px;
    box-shadow:0 10px 26px -14px rgba(15,23,42,0.06);
  }
  .rev-stars { color:#F59E0B; font-size:14px; letter-spacing:2px; margin-bottom:8px; }
  .rev-text { font-size:13.5px; line-height:1.55; color:var(--ink); }
  .rev-author { display:flex; align-items:center; gap:10px; font-size:12px; }
  .rev-avatar {
    width:34px; height:34px; border-radius:50%; background:var(--accent-soft); color:var(--accent);
    display:inline-flex; align-items:center; justify-content:center; font-weight:800; flex-shrink:0;
  }
  .rev-author strong { display:block; font-size:13px; color:var(--ink); }
  .rev-author span { color:var(--muted); font-size:11.5px; }

  /* Schedule & Location */
  .sched-grid { display:grid; grid-template-columns:1fr; gap:16px; }
  @media (min-width:720px) { .sched-grid { grid-template-columns:1fr 1fr; } }
  .sched-box {
    background:var(--card); border:1px solid var(--border); border-radius:22px; padding:22px;
    box-shadow:0 10px 26px -14px rgba(15,23,42,0.06);
  }
  .day-row {
    display:flex; justify-content:space-between; padding:10px 0;
    font-size:13.5px; border-bottom:1px solid var(--border);
    font-variant-numeric:tabular-nums;
  }
  .day-row:last-child { border-bottom:none; }
  .day-row strong { color:var(--accent); }

  /* Mobile Sticky Call/Reserve Bar */
  .mob-dock {
    position:fixed; bottom:12px; left:12px; right:12px; z-index:55;
    background:${navBg}; backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);
    border:1px solid var(--border); border-radius:999px; padding:6px;
    display:grid; grid-template-columns:1fr 1.35fr; gap:6px;
    box-shadow:0 16px 38px rgba(15,23,42,0.16);
  }
  @media (min-width:820px) {
    .mob-dock { left:auto; right:20px; bottom:20px; width:auto; display:inline-flex; padding:6px; }
  }
  .dock-btn-sec {
    padding:11px 16px; border-radius:999px; background:var(--surface); color:var(--ink);
    font-weight:700; font-size:13px; text-align:center; display:inline-flex; align-items:center; justify-content:center; gap:6px;
  }
  .dock-btn-pri {
    padding:11px 18px; border-radius:999px; background:var(--accent); color:var(--accent-ink);
    font-family:'Outfit',sans-serif; font-weight:700; font-size:13px; border:none; cursor:pointer;
    display:inline-flex; align-items:center; justify-content:center; gap:6px;
  }
</style>
</head>
<body>
  <div class="top-strip">
    <div class="top-strip-inner">
      <div class="open-pill"><span class="open-dot"></span><span>Abierto hoy en ${escapeHtml(st.city)} · ${escapeHtml(st.hoursWeek)}</span></div>
      <div style="font-weight:700; color:var(--accent); white-space:nowrap;">Tel. ${escapeHtml(st.phone || st.whatsapp)}</div>
    </div>
  </div>

  <header class="nav">
    <div class="nav-inner">
      <div class="brand" onclick="window.scrollTo({top:0,behavior:'smooth'})">
        <span class="brand-mark">${escapeHtml((st.name || 'M').trim().charAt(0).toUpperCase())}</span>
        <span>${escapeHtml(st.name)}</span>
      </div>
      <nav class="nav-links">
        <a href="#servicios">Servicios y precios</a>
        <a href="#galeria">Nuestro espacio</a>
        <a href="#opiniones">Opiniones</a>
        <a href="#ubicacion">Dónde estamos</a>
      </nav>
      <button type="button" class="nav-cta" onclick="jumpSec('accion')">${escapeHtml(actionBtnLabel)}</button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <div class="trust-row">
            <span class="trust-stars">★★★★★</span>
            <span>4,9 en Google · ${escapeHtml(sectorBadge)} en ${escapeHtml(st.city)}</span>
          </div>
          <h1>${escapeHtml(st.tagline)}</h1>
          <p class="hero-p">${escapeHtml(st.story)}</p>
          <div class="hero-btns">
            ${st.modules.booking ? `
            <button type="button" class="btn-primary" onclick="jumpSec('accion')">
              <span>${escapeHtml(actionBtnLabel)} ahora</span>
              <span class="btn-arrow">→</span>
            </button>` : ''}
            <a href="https://wa.me/${fullWa}?text=${encodeURIComponent('Hola ' + st.name + ', os escribo desde vuestra página web.')}" target="_blank" rel="noopener" class="btn-secondary">
              <span>WhatsApp · ${escapeHtml(st.whatsapp)}</span>
            </a>
          </div>
          <div class="hero-checks">
            <span><b>✓</b> Precios transparentes</span>
            <span><b>✓</b> Respuesta rápida</span>
            <span><b>✓</b> Sin esperas</span>
          </div>
        </div>

        <div class="hero-photo-shell">
          <div class="hero-photo-core">
            ${editPhotoBtnHero}
            <img src="${escapeHtml(heroImg)}" alt="${escapeHtml(st.name)} en ${escapeHtml(st.city)}" />
            <div class="hero-float-card">
              <div>
                <strong style="display:block; font-size:13px;">${escapeHtml(st.name)}</strong>
                <span style="color:var(--muted); font-size:11.5px;">${escapeHtml(st.address)} · ${escapeHtml(st.city)}</span>
              </div>
              <span style="padding:5px 10px; border-radius:999px; background:var(--accent-soft); color:var(--accent); font-weight:700; font-size:11.5px; white-space:nowrap;">Cita hoy</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${st.modules.services ? `
    <section id="servicios">
      <div class="wrap">
        <div class="sec-head">
          <span class="sec-pill">Carta y Tarifas Clarísimas</span>
          <h2>Servicios y precios de ${escapeHtml(st.name)}</h2>
          <p class="sec-sub">Pulsa sobre cualquier servicio para seleccionarlo directamente en tu solicitud de cita.</p>
        </div>
        <div class="srv-list">${servicesHtml}</div>
      </div>
    </section>` : ''}

    ${st.modules.gallery ? `
    <section id="galeria">
      <div class="wrap">
        <div class="sec-head-row">
          <div>
            <span class="sec-pill">Instalaciones y Resultados</span>
            <h2>Conoce ${escapeHtml(st.name)} por dentro</h2>
          </div>
          ${editPhotoBtnGal}
        </div>
        <div class="gal-grid">${galleryGridHtml}</div>
      </div>
    </section>` : ''}

    ${st.modules.booking ? `
    <section id="accion">
      <div class="wrap">${widgetHtml}</div>
    </section>` : ''}

    <section id="opiniones">
      <div class="wrap">
        <div class="sec-head">
          <span class="sec-pill">Valoración Media 4,9 ★</span>
          <h2>Lo que dicen quienes ya nos visitan en ${escapeHtml(st.city)}</h2>
        </div>
        <div class="rev-grid">${reviewsHtml}</div>
      </div>
    </section>

    ${st.modules.scheduleMap ? `
    <section id="ubicacion" style="border-bottom:none;">
      <div class="wrap sched-grid">
        <div class="sched-box">
          <span class="sec-pill">Horario de atención</span>
          <h3 style="font-family:'Outfit',sans-serif; font-size:19px; margin-bottom:12px;">Cuándo estamos abiertos</h3>
          <div class="day-row"><span>Lunes a Viernes</span><strong>${escapeHtml(st.hoursWeek)}</strong></div>
          <div class="day-row"><span>Sábados</span><strong>${escapeHtml(st.hoursSat)}</strong></div>
          <div class="day-row"><span>Domingos</span><span>${escapeHtml(st.hoursSun)}</span></div>
        </div>
        <div class="sched-box" style="display:flex; flex-direction:column; justify-content:space-between; gap:16px;">
          <div>
            <span class="sec-pill">Ubicación y Contacto</span>
            <h3 style="font-family:'Outfit',sans-serif; font-size:19px; margin-bottom:6px;">${escapeHtml(st.address)}</h3>
            <p style="color:var(--muted); font-size:14px;">${escapeHtml(st.city)} · Atención directa en el ${escapeHtml(st.phone || st.whatsapp)}</p>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:10px;">
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(st.name + ' ' + st.address + ' ' + st.city)}" target="_blank" rel="noopener" class="btn-secondary" style="flex:1; justify-content:center;">
              Cómo llegar en Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>` : ''}
  </main>

  <footer style="padding:28px 20px; text-align:center; font-size:12.5px; color:var(--muted); border-top:1px solid var(--border); background:var(--card); display:flex; flex-direction:column; gap:6px; align-items:center;">
    <div>© ${new Date().getFullYear()} <strong>${escapeHtml(st.name)}</strong> · ${escapeHtml(st.address)}, ${escapeHtml(st.city)}</div>
    <button type="button" onclick="document.getElementById('legal-modal').style.display='flex'" style="background:none; border:none; color:var(--muted); text-decoration:underline; font-size:12px; cursor:pointer;">
      Aviso Legal y Política de Privacidad (RGPD)
    </button>
  </footer>

  <div id="legal-modal" onclick="if(event.target===this)this.style.display='none'" style="display:none; position:fixed; inset:0; z-index:90; background:rgba(15,23,42,0.55); backdrop-filter:blur(6px); align-items:center; justify-content:center; padding:16px;">
    <div style="background:var(--card); color:var(--ink); border:1px solid var(--border); border-radius:22px; max-width:560px; width:100%; padding:24px; max-height:82vh; overflow-y:auto; font-size:13px; line-height:1.6; box-shadow:0 24px 60px rgba(15,23,42,0.2);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <strong style="font-family:'Outfit',sans-serif; font-size:16px;">Aviso Legal y Privacidad (LSSI-CE / RGPD)</strong>
        <button type="button" onclick="document.getElementById('legal-modal').style.display='none'" style="background:var(--surface); color:var(--ink); border:1px solid var(--border); border-radius:50%; width:30px; height:30px; cursor:pointer;">✕</button>
      </div>
      <p style="margin-bottom:8px;"><strong>Titular:</strong> ${escapeHtml(legalHolderName)}${escapeHtml(legalNifText)}</p>
      <p style="margin-bottom:8px;"><strong>Domicilio / Ubicación:</strong> ${escapeHtml(st.address)}, ${escapeHtml(st.city)} · Teléfono: ${escapeHtml(st.phone || st.whatsapp)}</p>
      <p style="margin-bottom:8px;"><strong>Protección de Datos (RGPD):</strong> Los datos enviados voluntariamente por WhatsApp o teléfono se destinan exclusivamente a gestionar su cita, reserva o presupuesto solicitado, sin cesión a terceros ni comunicaciones comerciales no autorizadas.</p>
      <p style="color:var(--muted); font-size:12px;">Este sitio web no instala cookies publicitarias ni rastreadores de terceros.</p>
    </div>
  </div>

  ${st.modules.whatsappFloat ? `
  <div class="mob-dock">
    <a class="dock-btn-sec" href="${telHref}">Llamar</a>
    <button type="button" class="dock-btn-pri" onclick="jumpSec('accion')">${escapeHtml(actionBtnLabel)} →</button>
  </div>` : ''}

  <script>
    let chosenSlot = '11:30';
    function jumpSec(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    function pickSlot(btn, slot) {
      chosenSlot = slot;
      document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    function selectServiceForBooking(title) {
      const sel = document.getElementById('bk-service');
      if (sel) {
        for (let i = 0; i < sel.options.length; i++) {
          if (sel.options[i].value.includes(title)) { sel.selectedIndex = i; break; }
        }
        jumpSec('accion');
      }
    }
    function sendSectorWhatsApp(kind) {
      const srv = document.getElementById('bk-service')?.value || '';
      const ext = document.getElementById('bk-extra')?.value || '';
      const cli = document.getElementById('bk-client')?.value || '';
      const msg = 'Hola ' + ${JSON.stringify(st.name)} + ', me gustaría reservar:\\n' +
        '• Servicio: ' + srv + '\\n' +
        (ext ? '• Preferencia: ' + ext + '\\n' : '') +
        (chosenSlot ? '• Hora aprox.: ' + chosenSlot + '\\n' : '') +
        (cli ? '• Nombre: ' + cli : '');
      const ok = document.getElementById('bk-ok');
      if (ok) {
        ok.style.display = 'block';
        ok.innerHTML = '✓ Solicitud preparada para <strong>' + ${JSON.stringify(st.name)} + '</strong> (' + srv + '). <a href="https://wa.me/${fullWa}?text=' + encodeURIComponent(msg) + '" target="_blank" rel="noopener" style="text-decoration:underline; font-weight:800; margin-left:6px;">Enviar ahora por WhatsApp ↗</a>';
      }
      try {
        window.open('https://wa.me/${fullWa}?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      } catch (e) {}
    }
  <\/script>
</body>
</html>`;
}

// ==========================================================================
// VISUAL SECTOR SOLUTIONS SHOWCASE (Interactive Visual Demos on Landing Page!)
// ==========================================================================
function switchVisualSolution(solKey) {
  document.querySelectorAll('.sol-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-sol') === solKey);
  });
  document.querySelectorAll('.sol-stage-pane').forEach(pane => {
    pane.classList.toggle('hidden', pane.getAttribute('data-sol-pane') !== solKey);
  });
}

function demoPickChip(btn) {
  const group = btn.parentElement;
  if (!group) return;
  group.querySelectorAll('button').forEach(b => {
    b.classList.remove('bg-emerald-400', 'text-slate-950', 'border-emerald-400');
    b.classList.add('bg-white/5', 'text-slate-200', 'border-white/10');
  });
  btn.classList.remove('bg-white/5', 'text-slate-200', 'border-white/10');
  btn.classList.add('bg-emerald-400', 'text-slate-950', 'border-emerald-400');

  const feedback = btn.closest('.sol-stage-pane')?.querySelector('.js-sol-feedback');
  if (feedback) {
    feedback.textContent = '✓ Seleccionado: ' + btn.innerText.trim() + ' — Directo al WhatsApp del dueño';
    feedback.classList.remove('hidden');
  }
}

function jumpGeneratorWithSector(sectorKey) {
  selectStudioSector(sectorKey);
  const gen = document.getElementById('generador');
  if (gen) gen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ==========================================================================
// INTERACTIVE BEFORE / AFTER IMAGE SLIDERS (Mouse + Touch Drag)
// ==========================================================================
function initBeforeAfterSliders() {
  document.querySelectorAll('.ba-slider').forEach(slider => {
    let dragging = false;
    const setPos = (clientX) => {
      const rect = slider.getBoundingClientRect();
      if (!rect.width) return;
      const pct = Math.max(6, Math.min(94, ((clientX - rect.left) / rect.width) * 100));
      slider.style.setProperty('--pos', pct.toFixed(1) + '%');
    };
    slider.addEventListener('mousedown', (e) => { dragging = true; setPos(e.clientX); });
    window.addEventListener('mousemove', (e) => { if (dragging) setPos(e.clientX); });
    window.addEventListener('mouseup', () => { dragging = false; });

    slider.addEventListener('touchstart', (e) => {
      if (e.touches[0]) setPos(e.touches[0].clientX);
    }, { passive: true });
    slider.addEventListener('touchmove', (e) => {
      if (e.touches[0]) setPos(e.touches[0].clientX);
    }, { passive: true });
  });
}

// ==========================================================================
// VIP CUSTOM HIGH-TICKET PROJECT CONFIGURATOR MODAL (400€ – 900€+ Leads!)
// ==========================================================================
let vipState = {
  sector: 'Motos / Taller / Concesionario',
  extras: ['Diseño Exclusivo 100% A Medida', 'Catálogo / Reservas Avanzadas'],
  refSite: ''
};

function openVipCustomModal(preSector, refSiteName) {
  closeLiveClientModal();
  if (preSector) vipState.sector = preSector;
  vipState.refSite = refSiteName || '';

  const modal = document.getElementById('vip-custom-modal');
  const refBadge = document.getElementById('vip-ref-badge');
  const refText = document.getElementById('vip-ref-text');
  if (!modal) return;

  if (vipState.refSite && refBadge && refText) {
    refText.textContent = 'Inspirado en: ' + vipState.refSite;
    refBadge.classList.remove('hidden');
  } else if (refBadge) {
    refBadge.classList.add('hidden');
  }

  document.querySelectorAll('.vip-sec-btn').forEach(btn => {
    const on = btn.getAttribute('data-vsec') === vipState.sector;
    btn.className = on
      ? 'vip-sec-btn p-2.5 rounded-xl border border-amber-400 bg-amber-400/15 text-white font-bold text-xs text-left flex items-center gap-2'
      : 'vip-sec-btn p-2.5 rounded-xl border border-white/10 bg-slate-950 text-slate-300 font-semibold text-xs text-left flex items-center gap-2';
  });

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVipCustomModal() {
  const modal = document.getElementById('vip-custom-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function pickVipSector(btn, secLabel) {
  vipState.sector = secLabel;
  document.querySelectorAll('.vip-sec-btn').forEach(b => {
    b.className = b === btn
      ? 'vip-sec-btn p-2.5 rounded-xl border border-amber-400 bg-amber-400/15 text-white font-bold text-xs text-left flex items-center gap-2'
      : 'vip-sec-btn p-2.5 rounded-xl border border-white/10 bg-slate-950 text-slate-300 font-semibold text-xs text-left flex items-center gap-2';
  });
}

function toggleVipExtra(btn, label) {
  const idx = vipState.extras.indexOf(label);
  if (idx >= 0) vipState.extras.splice(idx, 1);
  else vipState.extras.push(label);
  const on = vipState.extras.includes(label);
  btn.className = on
    ? 'vip-ext-btn px-3 py-2 rounded-xl border border-emerald-400 bg-emerald-500/15 text-emerald-200 font-bold text-xs text-left flex items-center justify-between gap-2'
    : 'vip-ext-btn px-3 py-2 rounded-xl border border-white/10 bg-slate-950 text-slate-300 font-medium text-xs text-left flex items-center justify-between gap-2';
}

function sendVipProposalWhatsApp(e) {
  if (e) e.preventDefault();
  const biz = document.getElementById('vip-biz-name')?.value.trim() || 'Mi Negocio';
  const city = document.getElementById('vip-biz-city')?.value.trim() || '';
  const refLine = vipState.refSite ? `\n• Referencia que me gustó: ${vipState.refSite}` : '';
  const extrasLine = vipState.extras.length ? vipState.extras.join(', ') : 'Proyecto completo a medida';

  const msg = `Hola Fathi, quiero presupuesto para una *WEB ÉLITE A MEDIDA* (Proyecto Exclusivo):\n` +
    `• Negocio: *${biz}* ${city ? '(' + city + ')' : ''}\n` +
    `• Sector: ${vipState.sector}\n` +
    `• Funciones clave: ${extrasLine}${refLine}\n` +
    `¿Podemos ver una propuesta personalizada para mi local?`;

  window.open(`https://wa.me/${FATHI_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  closeVipCustomModal();
}

// ==========================================================================
// 50€ BASIC SELF-SERVE STUDIO LOGIC
// ==========================================================================
function renderSectorSelector() {
  const container = document.getElementById('sector-chips-grid');
  if (!container) return;

  container.innerHTML = Object.entries(SECTOR_PRESETS).map(([key, item]) => {
    const isActive = studioState.sector === key;
    return `
      <button type="button" onclick="selectStudioSector('${key}')"
        class="sector-btn ${isActive ? 'active' : 'bg-white/[0.03] border-white/10 text-slate-300'} border rounded-xl px-3 py-2.5 text-left flex items-center gap-2 text-xs font-bold">
        <i class="ph-bold ${item.icon} text-sm ${isActive ? 'text-emerald-400' : 'text-slate-400'} shrink-0"></i>
        <span>${escapeHtml(item.label)}</span>
      </button>
    `;
  }).join('');

  const customWrap = document.getElementById('custom-sector-wrap');
  if (customWrap) customWrap.classList.toggle('hidden', studioState.sector !== 'otro');
}

function selectStudioSector(sectorKey) {
  const preset = SECTOR_PRESETS[sectorKey];
  if (!preset) return;

  const currentTyped = document.getElementById('inp-name')?.value.trim();
  const isDefaultName = Object.values(SECTOR_PRESETS).some(p => p.defaultName === currentTyped);
  if (currentTyped && !isDefaultName) {
    studioState.userEditedName = true;
    studioState.name = currentTyped;
  }

  studioState.sector = sectorKey;
  if (!studioState.userEditedName) studioState.name = preset.defaultName;
  studioState.yearsExp = preset.yearsExp;
  studioState.tagline = preset.tagline;
  studioState.story = preset.story;
  studioState.theme = preset.defaultTheme;
  studioState.services = JSON.parse(JSON.stringify(preset.services));
  studioState.customHeroPhoto = '';
  studioState.customGallery = [];

  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  updateStudioPreview(true);
}

function onNameInputManual(val) {
  studioState.userEditedName = val.trim().length > 0;
  schedulePreviewRefresh();
}

function renderServicesEditor() {
  const list = document.getElementById('services-editor-list');
  if (!list) return;
  list.innerHTML = studioState.services.map((srv, idx) => `
    <div class="p-3 rounded-xl bg-slate-900/90 border border-white/10 space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[11px] font-mono uppercase text-emerald-400 font-bold">Ítem #${idx + 1}</span>
        ${studioState.services.length > 1 ? `
          <button type="button" onclick="removeServiceItem(${idx})" class="text-xs text-rose-300 px-2 py-0.5 rounded bg-rose-500/15 font-semibold">Quitar</button>` : ''}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-12 gap-2">
        <input type="text" value="${escapeHtml(srv.title)}" oninput="editServiceField(${idx}, 'title', this.value)"
          class="sm:col-span-8 desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-white focus:border-emerald-400 focus:outline-none" />
        <input type="text" value="${escapeHtml(srv.price)}" oninput="editServiceField(${idx}, 'price', this.value)"
          class="sm:col-span-4 desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-emerald-300 font-bold focus:border-emerald-400 focus:outline-none" />
      </div>
      <input type="text" value="${escapeHtml(srv.meta)}" oninput="editServiceField(${idx}, 'meta', this.value)"
        class="w-full desk-sm px-3 py-2 rounded-lg bg-slate-950 border border-white/12 text-slate-300 focus:border-emerald-400 focus:outline-none" />
    </div>
  `).join('');
}

function editServiceField(idx, field, val) {
  if (!studioState.services[idx]) return;
  studioState.services[idx][field] = val;
  schedulePreviewRefresh();
}

function addServiceItem() {
  studioState.services.push({ title: 'Nuevo Servicio / Producto', meta: 'Atención directa', price: '20 €' });
  renderServicesEditor();
  updateStudioPreview(true);
}

function removeServiceItem(idx) {
  if (studioState.services.length <= 1) return;
  studioState.services.splice(idx, 1);
  renderServicesEditor();
  updateStudioPreview(true);
}

function handleHeroPhotoUpload(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    studioState.customHeroPhoto = ev.target.result;
    const status = document.getElementById('hero-photo-status');
    if (status) status.textContent = '✓ Foto cargada en portada';
    updateStudioPreview(true);
  };
  reader.readAsDataURL(file);
}

function handleGalleryUpload(input) {
  const files = Array.from(input.files || []).slice(0, 4);
  if (!files.length) return;
  const loaded = [];
  let done = 0;
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      loaded.push(ev.target.result);
      done++;
      if (done === files.length) {
        studioState.customGallery = loaded;
        const status = document.getElementById('gallery-photo-status');
        if (status) status.textContent = `✓ ${loaded.length} foto(s) listas`;
        updateStudioPreview(true);
      }
    };
    reader.readAsDataURL(file);
  });
}

function resetUploadedPhotos() {
  studioState.customHeroPhoto = '';
  studioState.customGallery = [];
  const s1 = document.getElementById('hero-photo-status');
  const s2 = document.getElementById('gallery-photo-status');
  if (s1) s1.textContent = 'Foto automática del sector';
  if (s2) s2.textContent = '3 fotos de muestra';
  updateStudioPreview(true);
}

function renderThemeSelector() {
  const wrap = document.getElementById('theme-selector-grid');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(DESIGN_THEMES).map(([key, t]) => {
    const active = studioState.theme === key;
    return `
      <button type="button" onclick="selectStudioTheme('${key}')"
        class="p-3 rounded-xl border text-left flex items-center gap-3 ${active ? 'border-emerald-400 bg-emerald-500/12' : 'border-white/10 bg-white/[0.03]'}">
        <span class="w-8 h-8 rounded-full shrink-0 border border-white/20 flex overflow-hidden">
          <span style="background:${t.swatch1}; width:50%; height:100%;"></span>
          <span style="background:${t.swatch2}; width:50%; height:100%;"></span>
        </span>
        <span class="min-w-0">
          <span class="block text-xs font-bold text-white truncate">${escapeHtml(t.label)}</span>
          <span class="block text-[11px] text-slate-400 truncate">${escapeHtml(t.sub)}</span>
        </span>
      </button>
    `;
  }).join('');
}

function selectStudioTheme(themeKey) {
  studioState.theme = themeKey;
  renderThemeSelector();
  updateStudioPreview(true);
}

const MODULE_LIST = [
  { key: 'booking', label: 'Módulo Interactivo del Sector (Citas / Presupuesto / Mesa)' },
  { key: 'whatsappFloat', label: 'Botón Flotante de WhatsApp Directo' },
  { key: 'services', label: 'Listado de Servicios / Carta con Precios' },
  { key: 'gallery', label: 'Galería Fotográfica Visual' },
  { key: 'scheduleMap', label: 'Horario + Ruta Google Maps' }
];

function renderModulesSelector() {
  const wrap = document.getElementById('modules-toggle-grid');
  if (!wrap) return;
  wrap.innerHTML = MODULE_LIST.map(m => {
    const on = !!studioState.modules[m.key];
    return `
      <button type="button" onclick="toggleStudioModule('${m.key}')"
        class="mod-switch ${on ? 'active' : 'bg-white/[0.02] border-white/10'} border rounded-xl p-3 flex items-center justify-between gap-2 text-left">
        <span class="text-xs font-semibold text-white">${escapeHtml(m.label)}</span>
        <span class="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-xs font-extrabold ${on ? 'bg-emerald-400 text-slate-950' : 'bg-white/10 text-transparent'}">✓</span>
      </button>
    `;
  }).join('');
}

function toggleStudioModule(modKey) {
  studioState.modules[modKey] = !studioState.modules[modKey];
  renderModulesSelector();
  updateStudioPreview(true);
}

function switchStudioStep(stepNum) {
  studioState.activeStep = stepNum;
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`studio-step-${i}`)?.classList.toggle('hidden', i !== stepNum);
    document.getElementById(`studio-tab-${i}`)?.classList.toggle('active', i === stepNum);
  }
}

function syncInputsFromState() {
  const map = {
    'inp-name': studioState.name,
    'inp-custom-sector': studioState.customSectorLabel,
    'inp-years': studioState.yearsExp,
    'inp-tagline': studioState.tagline,
    'inp-story': studioState.story,
    'inp-city': studioState.city,
    'inp-address': studioState.address,
    'inp-whatsapp': studioState.whatsapp,
    'inp-phone': studioState.phone,
    'inp-hours-week': studioState.hoursWeek,
    'inp-hours-sat': studioState.hoursSat,
    'inp-hours-sun': studioState.hoursSun
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  });
}

function readInputsIntoState() {
  const v = id => {
    const el = document.getElementById(id);
    return el ? el.value : null;
  };
  if (v('inp-name') !== null) studioState.name = v('inp-name').trim() || 'Mi Negocio';
  if (v('inp-custom-sector') !== null) studioState.customSectorLabel = v('inp-custom-sector').trim() || 'Negocio Local';
  if (v('inp-years') !== null) studioState.yearsExp = v('inp-years').trim() || 'Atención Directa';
  if (v('inp-tagline') !== null) studioState.tagline = v('inp-tagline').trim() || 'Calidad profesional.';
  if (v('inp-story') !== null) studioState.story = v('inp-story').trim() || 'Contacto directo.';
  if (v('inp-city') !== null) studioState.city = v('inp-city').trim() || 'Madrid';
  if (v('inp-address') !== null) studioState.address = v('inp-address').trim() || 'Calle Principal 12';
  if (v('inp-whatsapp') !== null) studioState.whatsapp = v('inp-whatsapp').trim() || '612 890 345';
  if (v('inp-phone') !== null) studioState.phone = v('inp-phone').trim();
  if (v('inp-hours-week') !== null) studioState.hoursWeek = v('inp-hours-week').trim() || '09:30 – 20:00';
  if (v('inp-hours-sat') !== null) studioState.hoursSat = v('inp-hours-sat').trim() || '09:30 – 14:30';
  if (v('inp-hours-sun') !== null) studioState.hoursSun = v('inp-hours-sun').trim() || 'Cerrado';
}

function schedulePreviewRefresh() {
  if (compileTimer) clearTimeout(compileTimer);
  compileTimer = setTimeout(() => {
    readInputsIntoState();
    updateStudioPreview(true);
  }, 180);
}

function getLiveShareableSiteUrl() {
  const slug = slugifyName(studioState.name);
  return `/sitio/?negocio=${encodeURIComponent(slug)}&d=${encodeSharePayload(studioState)}`;
}

function getLiveAdminPanelUrl() {
  const slug = slugifyName(studioState.name);
  return `/admin/?negocio=${encodeURIComponent(slug)}&d=${encodeSharePayload(studioState)}`;
}

function updateStudioPreview(skipRead) {
  if (!skipRead) readInputsIntoState();
  saveStudioState();

  const slug = slugifyName(studioState.name);
  const prettyUrl = `miweblocal.com/${slug}`;
  const urlEl = document.getElementById('preview-live-url');
  if (urlEl) urlEl.textContent = prettyUrl;
  const fullUrlEl = document.getElementById('fullscreen-demo-url');
  if (fullUrlEl) fullUrlEl.textContent = prettyUrl;

  const openRealLink = document.getElementById('open-real-demo-tab');
  if (openRealLink) openRealLink.href = getLiveShareableSiteUrl();

  const html = compileClientWebsiteHTML(studioState);
  const iframe = document.getElementById('studio-preview-iframe');
  if (iframe) iframe.srcdoc = html;
}

let mobileInlineUnlocked = false;
function toggleInlineIframeTouch() {
  mobileInlineUnlocked = !mobileInlineUnlocked;
  const guard = document.getElementById('iframe-touch-guard');
  const btn = document.getElementById('btn-unlock-inline-touch');
  if (!guard || !btn) return;
  if (mobileInlineUnlocked) {
    guard.classList.remove('locked-scroll');
    btn.innerHTML = '<i class="ph-bold ph-lock-simple"></i><span>Fijar Scroll</span>';
    btn.className = 'px-3.5 py-2 rounded-full bg-amber-400 text-slate-950 font-display font-extrabold text-xs shadow-lg flex items-center gap-1.5 whitespace-nowrap';
  } else {
    guard.classList.add('locked-scroll');
    btn.innerHTML = '<i class="ph-bold ph-hand-tap text-emerald-400"></i><span>Tocar Demo</span>';
    btn.className = 'px-3.5 py-2 rounded-full bg-slate-900/95 border border-white/20 text-white font-display font-bold text-xs shadow-lg flex items-center gap-1.5 whitespace-nowrap';
  }
}

function setPreviewDevice(mode) {
  studioState.previewDevice = mode;
  const wrap = document.getElementById('preview-frame-shell');
  const btnMob = document.getElementById('btn-dev-mobile');
  const btnDesk = document.getElementById('btn-dev-desktop');
  if (wrap) {
    wrap.classList.toggle('is-mobile-width', mode === 'mobile');
    wrap.classList.toggle('is-desktop-width', mode === 'desktop');
  }
  if (btnMob && btnDesk) {
    btnMob.className = mode === 'mobile'
      ? 'px-3 py-1 rounded-lg text-xs font-bold bg-white text-slate-950'
      : 'px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
    btnDesk.className = mode === 'desktop'
      ? 'px-3 py-1 rounded-lg text-xs font-bold bg-white text-slate-950'
      : 'px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white';
  }
}

function openFullscreenGeneratedDemo() {
  readInputsIntoState();
  saveStudioState();
  const modal = document.getElementById('fullscreen-demo-modal');
  const iframe = document.getElementById('fullscreen-demo-iframe');
  if (!modal || !iframe) return;
  iframe.srcdoc = compileClientWebsiteHTML(studioState);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeFullscreenGeneratedDemo() {
  document.getElementById('fullscreen-demo-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function tickCountdownTimers() {
  const remMs = Math.max(0, (studioState.expiresAt || (Date.now() + 86000000)) - Date.now());
  const totalSec = Math.floor(remMs / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  document.querySelectorAll('.js-countdown-24h').forEach(el => { el.textContent = `${h}:${m}:${s}`; });
}

function pickPayMethod(m) {
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    const on = btn.getAttribute('data-pm') === m;
    btn.className = on
      ? 'pay-method-btn py-2.5 px-3 rounded-xl border border-emerald-400 bg-emerald-500/15 text-white font-bold text-xs text-center'
      : 'pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center';
  });
}

function openAutomatedCheckoutModal() {
  readInputsIntoState();
  saveStudioState();
  closeFullscreenGeneratedDemo();
  const modal = document.getElementById('checkout-modal');
  const content = document.getElementById('checkout-modal-body');
  if (!modal || !content) return;

  const slug = slugifyName(studioState.name);
  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between gap-2 mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-bold">
          ⚡ PLAN WEB EXPRESS · 79 €
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>

      <h3 class="font-display font-extrabold text-xl text-white mb-1">
        Activar web básica de <span class="text-emerald-400">${escapeHtml(studioState.name)}</span>
      </h3>

      <div class="p-3.5 rounded-2xl bg-slate-950 border border-white/10 space-y-2 my-3 text-xs">
        <div class="flex justify-between items-center gap-2">
          <span class="text-slate-400">Enlace público:</span>
          <strong class="text-emerald-300 font-mono truncate">miweblocal.com/${escapeHtml(slug)}</strong>
        </div>
        <div class="flex justify-between items-center gap-2">
          <span class="text-slate-400">Autogestión básica:</span>
          <strong class="text-amber-300 font-mono truncate">miweblocal.com/${escapeHtml(slug)}/admin</strong>
        </div>
        <div class="flex justify-between items-center pt-2 border-t border-white/10">
          <span class="text-white font-bold">Pago único total:</span>
          <strong class="text-xl font-display font-extrabold text-white">79 €</strong>
        </div>
      </div>

      <div class="space-y-3 mb-4">
        <div>
          <label class="block text-[11px] font-mono uppercase text-slate-300 font-semibold mb-1">Tu Email (para enviarte enlaces y PIN)</label>
          <input type="email" id="buyer-email" value="${escapeHtml(studioState.buyerEmail || '')}" placeholder="ejemplo@tunegocio.com"
            class="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white focus:border-emerald-400 focus:outline-none" />
          <div id="buyer-email-err" class="hidden text-rose-400 text-xs font-semibold mt-1">Introduce un email válido con @</div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <button type="button" data-pm="card" onclick="pickPayMethod('card')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-emerald-400 bg-emerald-500/15 text-white font-bold text-xs text-center">Tarjeta</button>
          <button type="button" data-pm="bizum" onclick="pickPayMethod('bizum')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center">Bizum</button>
          <button type="button" data-pm="apple" onclick="pickPayMethod('apple')" class="pay-method-btn py-2.5 px-3 rounded-xl border border-white/12 bg-slate-950 text-slate-300 font-semibold text-xs text-center">Apple / GPay</button>
        </div>
      </div>

      <button type="button" onclick="completeAutomatedDelivery()"
        class="w-full py-3.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-display font-extrabold text-sm shadow-lg mb-2.5">
        Desbloquear Web Express · 79 € →
      </button>

      <button type="button" onclick="closeCheckoutModal(); openVipCustomModal('${escapeHtml(studioState.sector)}', '')"
        class="w-full py-2.5 px-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
        💎 ¿Prefieres una Web Élite A Medida hecha por nosotros? Consultar
      </button>
    </div>
  `;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function completeAutomatedDelivery() {
  const emailEl = document.getElementById('buyer-email');
  const errEl = document.getElementById('buyer-email-err');
  const email = emailEl ? emailEl.value.trim() : '';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    if (errEl) errEl.classList.remove('hidden');
    emailEl?.focus();
    return;
  }

  studioState.buyerEmail = email;
  studioState.unlocked = true;
  if (!studioState.adminPin) studioState.adminPin = 'PRO-' + String(Math.floor(1000 + Math.random() * 9000));
  saveStudioState();

  const siteUrl = getLiveShareableSiteUrl();
  const adminUrl = getLiveAdminPanelUrl();
  const content = document.getElementById('checkout-modal-body');
  if (!content) return;

  content.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-mono text-[11px] font-bold">
          ✓ WEB ACTIVA + PANEL /ADMIN
        </span>
        <button type="button" onclick="closeCheckoutModal()" class="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center">✕</button>
      </div>
      <h3 class="font-display font-extrabold text-xl text-white mb-2">¡Lista, ${escapeHtml(studioState.name)}!</h3>
      <div class="p-4 rounded-2xl bg-slate-950 border border-emerald-500/35 space-y-2.5 text-xs">
        <div class="flex items-center justify-between">
          <span class="text-slate-400">PIN Propietario:</span>
          <strong class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-sm">${escapeHtml(studioState.adminPin)}</strong>
        </div>
        <a href="${siteUrl}" target="_blank" class="btn-tap py-3 px-4 rounded-xl bg-emerald-400 text-slate-950 font-display font-extrabold text-center block">
          1. Abrir Mi Web Pública ↗
        </a>
        <a href="${adminUrl}" target="_blank" class="btn-tap py-3 px-4 rounded-xl bg-amber-400 text-slate-950 font-display font-extrabold text-center block">
          2. Entrar a Mi Panel (/admin) ↗
        </a>
      </div>
    </div>
  `;
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function openLiveAdminPreview() {
  readInputsIntoState();
  saveStudioState();
  window.open(getLiveAdminPanelUrl(), '_blank');
}

// ==========================================================================
// 8 REAL ELITE CUSTOM PROJECTS PORTFOLIO (High-Ticket Showcase + Mouse Drag)
// ==========================================================================
const REAL_PORTFOLIO = [
  {
    id: 'orero', category: 'motor',
    name: 'Orero Motorcycles', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · MOTOR',
    visualTags: ['18 Motos en Stock', 'Sonido 310 CV', 'Cita Taller'],
    screenshot: 'assets/portfolio/motos_orero.jpg',
    route: '/motorcycle-store-orero/'
  },
  {
    id: 'elite', category: 'reformas',
    name: 'Reformas Elite Gold', city: 'Guardamar',
    badge: 'ÉLITE A MEDIDA · OBRAS',
    visualTags: ['Villas de Lujo', 'Presupuesto WhatsApp', '5,0 ★ Google'],
    screenshot: 'assets/portfolio/reformas_elite.jpg',
    route: '/reformas-elite-gold-guardamar/'
  },
  {
    id: 'autolomas', category: 'motor',
    name: 'Auto Lomas Chapa', city: 'Torrevieja',
    badge: 'ÉLITE A MEDIDA · TALLER',
    visualTags: ['Slider Antes/Después', 'Foto Daño WhatsApp', 'Cabina Horno'],
    screenshot: 'assets/portfolio/autochrome.jpg',
    route: '/autochrome-torrevieja/'
  },
  {
    id: 'vimacchiata', category: 'hosteleria',
    name: 'La Vimacchiata Brunch', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · BRUNCH',
    visualTags: ['Carta Interactiva', 'Reserva Terraza', 'Specialty Coffee'],
    screenshot: 'assets/portfolio/vimacchiata_brunch.jpg',
    route: '/orihuela/la-vimacchiata-brunch/'
  },
  {
    id: 'jamal', category: 'barberia',
    name: 'Barbería Jamal', city: 'Cox',
    badge: 'ÉLITE A MEDIDA · BARBER',
    visualTags: ['Agenda 30 seg', 'Galería Cortes', '+45 Citas/sem'],
    screenshot: 'assets/portfolio/barberia_jamal.jpg',
    route: '/cox/barberia-jamal/'
  },
  {
    id: 'artedent', category: 'salud',
    name: 'Clínica Dental Artedent', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · SALUD',
    visualTags: ['Cita Médica Online', 'Especialidades', 'Confianza Clínica'],
    screenshot: 'assets/portfolio/clinica_artedent.jpg',
    route: '/orihuela/clinica-dental-artedent/'
  },
  {
    id: 'lebano', category: 'hosteleria',
    name: 'El Lebano Restaurante', city: 'Alicante',
    badge: 'ÉLITE A MEDIDA · CARTA',
    visualTags: ['Reserva de Mesa', 'Carta Visual', '0% Comisiones'],
    screenshot: 'assets/portfolio/el_lebano.jpg',
    route: '/alicante/el-lebano-cocina-libanesa/'
  },
  {
    id: 'gabi', category: 'barberia',
    name: 'Gabi Tattoo Studio', city: 'Orihuela',
    badge: 'ÉLITE A MEDIDA · TATTOO',
    visualTags: ['Cotizador Tatuaje', 'Portafolio Piel', 'Cita Privada'],
    screenshot: 'assets/portfolio/gabi_tattoo.jpg',
    route: '/orihuela/gabi-tattoo-studio/'
  }
];

function renderPortfolioCards(filterCat = 'all') {
  const grid = document.getElementById('portfolio-cards-container');
  if (!grid) return;

  document.querySelectorAll('.pf-filter-btn').forEach(btn => {
    const active = btn.getAttribute('data-cat') === filterCat;
    btn.className = active
      ? 'pf-filter-btn px-4 py-2 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 whitespace-nowrap'
      : 'pf-filter-btn px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10 hover:text-white whitespace-nowrap';
  });

  const items = filterCat === 'all' ? REAL_PORTFOLIO : REAL_PORTFOLIO.filter(p => p.category === filterCat);

  grid.innerHTML = items.map(item => `
    <article class="pf-card pf-slide w-[80vw] max-w-[300px] rounded-3xl bg-[#10141F] border border-white/12 p-4 flex flex-col justify-between transition-all duration-300">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/35 text-amber-300 text-[10px] font-mono font-extrabold">
            💎 ${escapeHtml(item.badge)}
          </span>
          <span class="text-[11px] text-slate-400 truncate">${escapeHtml(item.city)}</span>
        </div>

        <div class="cursor-pointer" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')">
          <div class="iphone-mockup">
            <div class="iphone-inner">
              <div class="iphone-island"></div>
              <img src="${escapeHtml(item.screenshot)}" alt="${escapeHtml(item.name)}" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 pt-3.5 border-t border-white/10 space-y-2.5">
        <h3 class="font-display font-extrabold text-base text-white truncate">${escapeHtml(item.name)}</h3>
        <div class="flex flex-wrap gap-1">
          ${item.visualTags.map(t => `<span class="px-2 py-0.5 rounded-md bg-white/[0.06] text-[10.5px] font-semibold text-emerald-300">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="grid grid-cols-2 gap-1.5 pt-1">
          <button type="button" onclick="openLiveClientModal('${escapeHtml(item.route)}', '${escapeHtml(item.name)}')"
            class="py-2.5 px-2 rounded-xl bg-white text-slate-950 font-display font-extrabold text-xs whitespace-nowrap">
            Ver en Vivo
          </button>
          <button type="button" onclick="openVipCustomModal('', '${escapeHtml(item.name)}')"
            class="py-2.5 px-2 rounded-xl bg-amber-400/15 border border-amber-400/35 text-amber-300 font-display font-bold text-xs whitespace-nowrap">
            Pedir Igual
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function scrollPortfolioCarousel(dir) {
  const el = document.getElementById('portfolio-cards-container');
  if (el) el.scrollBy({ left: dir * 320, behavior: 'smooth' });
}

function initMouseDragCarousels() {
  document.querySelectorAll('.pf-carousel').forEach(box => {
    let isDown = false, startX = 0, scrollL = 0;
    box.addEventListener('mousedown', e => {
      if (window.innerWidth >= 1100) return;
      isDown = true;
      startX = e.pageX - box.offsetLeft;
      scrollL = box.scrollLeft;
    });
    window.addEventListener('mouseup', () => { isDown = false; });
    box.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      box.scrollLeft = scrollL - (x - startX) * 1.4;
    });
  });
}

function cleanPortfolioIframe(iframe) {
  const hideExtras = () => {
    try {
      const curDoc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
      if (!curDoc || !curDoc.defaultView) return;
      curDoc.querySelectorAll('#owner-activation-banner, #owner-floating-pill, [id*="cookie"], [class*="cookie"]').forEach(el => {
        el.style.display = 'none';
      });
      curDoc.querySelectorAll('div, aside, section').forEach(el => {
        if (el.innerText && el.innerText.length < 700 && (el.innerText.includes('Aviso de Cookies') || el.innerText.includes('Aceptar todas')) && curDoc.defaultView.getComputedStyle(el).position === 'fixed') {
          el.style.display = 'none';
        }
      });
      if (curDoc.body) {
        curDoc.body.style.paddingTop = '0px';
        curDoc.body.style.marginTop = '0px';
      }
    } catch (err) {}
  };
  hideExtras();
  setTimeout(hideExtras, 650);
  setTimeout(hideExtras, 1700);
}

let currentModalClientName = '';
function openLiveClientModal(route, name) {
  currentModalClientName = name || 'Proyecto Élite';
  const modal = document.getElementById('live-client-modal');
  const iframe = document.getElementById('live-client-iframe');
  const title = document.getElementById('live-client-title');
  const ext = document.getElementById('live-client-external');
  if (!modal || !iframe) return;

  if (title) title.textContent = name;
  if (ext) ext.href = route;
  iframe.onload = () => cleanPortfolioIframe(iframe);
  iframe.src = route;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function requestLikeCurrentModalClient() {
  openVipCustomModal('', currentModalClientName);
}

function closeLiveClientModal() {
  const modal = document.getElementById('live-client-modal');
  const iframe = document.getElementById('live-client-iframe');
  if (iframe) iframe.src = 'about:blank';
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function toggleMobileNav(open) {
  const sheet = document.getElementById('mobile-nav-sheet');
  if (!sheet) return;
  sheet.classList.toggle('hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

// ==========================================================================
// INITIALIZATION
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('generador')) return;

  syncInputsFromState();
  renderSectorSelector();
  renderServicesEditor();
  renderThemeSelector();
  renderModulesSelector();
  switchStudioStep(1);
  setPreviewDevice(window.innerWidth >= 1024 ? 'desktop' : 'mobile');
  updateStudioPreview(true);
  renderPortfolioCards('all');

  initBeforeAfterSliders();
  initMouseDragCarousels();

  tickCountdownTimers();
  setInterval(tickCountdownTimers, 1000);

  // Scroll-Reveal Observer
  if ('IntersectionObserver' in window) {
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          revObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal-up').forEach(el => revObs.observe(el));

    // Smart Bottom Bar visibility
    const heroEl = document.getElementById('hero-section');
    const genEl = document.getElementById('generador');
    const smartBar = document.getElementById('smart-bottom-bar');
    if (heroEl && genEl && smartBar) {
      let heroVis = true, genVis = false;
      const syncBar = () => smartBar.classList.toggle('bar-hidden', heroVis || genVis);
      new IntersectionObserver(e => { heroVis = e[0].isIntersecting; syncBar(); }, { threshold: 0.1 }).observe(heroEl);
      new IntersectionObserver(e => { genVis = e[0].isIntersecting; syncBar(); }, { threshold: 0.05 }).observe(genEl);
    }
  }
});
