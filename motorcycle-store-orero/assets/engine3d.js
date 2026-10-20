/**
 * ORERO MOTORCYCLES — AUTHENTIC 3D MOTORCYCLE ENGINE EXPERIENCE
 * High-Fidelity Mechanical Three.js Assembly with:
 * - DOHC Cylinder Heads & Magnesium Valve Covers
 * - Dual Angled V-Twin / DOHC Cylinder Barrels with CNC Cooling Fins
 * - Reciprocating Forged Pistons & Connecting Rods
 * - Rotating Counterweighted Crankshaft
 * - Dual Curved Titanium Exhaust Headers with Heat-Blued Gradient
 * - Clutch Basket & Pressure Plate with Exposed Springs
 * - Intake Throttle Bodies & Velocity Stacks
 * - Exploded View (Despiece Técnico) Animated Interpolation
 * - X-Ray / Wireframe Internal Inspection Mode
 * - 4-Stroke Mechanical Cycle Simulation
 * - 3D Interactive Hotspots with Technical Drawers
 * - IntersectionObserver Auto-Pause for 60fps Zero-Overhead Performance
 * - Robust WebGL Fallback
 */

(function () {
  'use strict';

  // Check WebGL Availability
  function isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  const HOTSPOT_DATA = [
    {
      id: 'hotspot-heads',
      title: 'Culatas DOHC de Competición',
      category: 'Distribución & Culatas',
      badge: 'Doble Árbol de Levas',
      pos: { x: 0, y: 1.35, z: 0.1 },
      camPos: { x: 0.8, y: 1.6, z: 2.2 },
      camLook: { x: 0, y: 1.2, z: 0 },
      description: 'Culata de 4 válvulas por cilindro accionadas por doble árbol de levas en cabeza (DOHC). Balancines de rodillo con recubrimiento DLC (Diamond-Like Carbon) para reducir la fricción en un 40% a regímenes superiores a 11.000 RPM.',
      specs: [
        { k: 'Válvulas', v: '4 por cilindro (admisión titanio)' },
        { k: 'Accionamiento', v: 'Doble árbol de levas DOHC' },
        { k: 'Tratamiento', v: 'Recubrimiento antifricción DLC' },
        { k: 'Material tapa', v: 'Aleación de magnesio aligerada' }
      ]
    },
    {
      id: 'hotspot-cylinders',
      title: 'Cilindros con Aletas CNC Disipadoras',
      category: 'Termodinámica & Bloque',
      badge: 'Camisas Nicasil',
      pos: { x: -0.65, y: 0.55, z: 0.1 },
      camPos: { x: -1.6, y: 0.8, z: 2.0 },
      camLook: { x: -0.4, y: 0.5, z: 0 },
      description: 'Cilindros independientes con camisas de aluminio y recubrimiento cerámico Nicasil (Níquel-Carburo de Silicio). Aletas disipadoras fresadas por CNC con espesor decreciente que maximizan el flujo aerodinámico de refrigeración.',
      specs: [
        { k: 'Disposición', v: 'V-Twin a 75° de alto rendimiento' },
        { k: 'Recubrimiento', v: 'Cerámica Nicasil de alta dureza' },
        { k: 'Disipación', v: 'Aletas aerodinámicas CNC continuas' },
        { k: 'Diámetro/Carrera', v: '88 mm x 65.5 mm' }
      ]
    },
    {
      id: 'hotspot-pistons',
      title: 'Pistones Forjados & Bielas Ligeras',
      category: 'Tren Alternativo',
      badge: 'Forja Aeronáutica',
      pos: { x: 0.55, y: 0.45, z: 0.05 },
      camPos: { x: 1.5, y: 0.6, z: 1.9 },
      camLook: { x: 0.3, y: 0.35, z: 0 },
      description: 'Pistones forjados en aleación de aluminio y silicio con faldas ultra-cortas recubiertas de grafito. Bielas de acero al cromo-molibdeno fracturadas por láser para un encaje micrométrico en los apoyos de cigüeñal.',
      specs: [
        { k: 'Material pistón', v: 'Aluminio forjado aeroespacial' },
        { k: 'Falda pistón', v: 'Tratamiento antifricción grafito' },
        { k: 'Bielas', v: 'Acero Cr-Mo fracturadas por láser' },
        { k: 'Compresión', v: 'Relación 12.8 : 1' }
      ]
    },
    {
      id: 'hotspot-crankcase',
      title: 'Cárter Monocasco & Cigüeñal',
      category: 'Estructura & Inercia',
      badge: 'Cárter Semiseco',
      pos: { x: 0, y: -0.55, z: 0.15 },
      camPos: { x: 0.9, y: -0.4, z: 2.3 },
      camLook: { x: 0, y: -0.5, z: 0 },
      description: 'Bloque cárter fundido a baja presión en aleación ligera Al-Si con nervaduras estructurales que aportan máxima rigidez torsional. Cigüeñal mecanizado de una sola pieza con contrapesos de tungsteno calibrados a 0.1 g.',
      specs: [
        { k: 'Engrase', v: 'Cárter semiseco con 2 bombas' },
        { k: 'Cigüeñal', v: 'Monobloque forjado al Cr-Ni' },
        { k: 'Equilibrado', v: 'Contrapesos de tungsteno de alta masa' },
        { k: 'Tornillería', v: 'Titanio grado 5 M8/M10 perimetral' }
      ]
    },
    {
      id: 'hotspot-exhaust',
      title: 'Colectores de Escape en Titanio',
      category: 'Flujo de Gases',
      badge: 'Hidroformado 2-en-1',
      pos: { x: 0.8, y: -0.1, z: 0.65 },
      camPos: { x: 2.1, y: 0.2, z: 2.1 },
      camLook: { x: 0.6, y: -0.1, z: 0.3 },
      description: 'Sistema de escape hidroformado en titanio de grado competición con soldaduras robotizadas TIG. Tubos de sección cónica progresiva que optimizan las ondas de contrapresión para un llenado perfecto del cilindro.',
      specs: [
        { k: 'Material tubos', v: 'Titanio puro grado 1 ultraligero' },
        { k: 'Acabado', v: 'Tratamiento térmico titanio azulado' },
        { k: 'Diámetro', v: '45 mm a 60 mm progresivo' },
        { k: 'Sondas', v: 'Doble sensor Lambda O2 de banda ancha' }
      ]
    }
  ];

  class OreroEngine3D {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.isAvailable = isWebGLAvailable() && typeof window.THREE !== 'undefined';
      if (!this.isAvailable) {
        this.renderFallback();
        return;
      }

      // States
      this.isExploded = false;
      this.explodedFactor = 0; // 0 to 1
      this.targetExploded = 0;
      this.isXRay = false;
      this.isEngineRunning = true;
      this.isAutoSpin = true;
      this.isDragging = false;
      this.prevPointerPos = { x: 0, y: 0 };
      this.engineTime = 0;
      this.activeHotspot = null;
      this.isVisibleOnScreen = true;

      // Camera target interpolation
      this.currentCamPos = new THREE.Vector3(1.8, 1.1, 3.8);
      this.targetCamPos = new THREE.Vector3(1.8, 1.1, 3.8);
      this.currentCamLook = new THREE.Vector3(0, 0.1, 0);
      this.targetCamLook = new THREE.Vector3(0, 0.1, 0);

      // Mechanical Sub-assemblies for Exploded View & Cycles
      this.assemblies = {};

      this.init();
    }

    renderFallback() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="engine-fallback-card">
          <div class="fallback-badge">VISUALIZACIÓN MECÁNICA</div>
          <h3 class="fallback-title">Ingeniería & Mecánica de Alto Rendimiento</h3>
          <p class="fallback-text">
            En el taller de <strong>Motorcycle Store Orero</strong> tratamos cada mecánica con precisión de competición.
            Diagnóstico electrónico multimarca, ajuste micrométrico de holgura de válvulas, equilibrado de cigüeñales y puesta a punto de inyección.
          </p>
          <div class="fallback-grid">
            <div class="fallback-item"><span>✦ DOHC 4V</span> Culatas de alto flujo</div>
            <div class="fallback-item"><span>✦ Forja Ligera</span> Pistones de competición</div>
            <div class="fallback-item"><span>✦ Nicasil</span> Camisas cerámicas</div>
            <div class="fallback-item"><span>✦ Escape</span> Colectores de titanio</div>
          </div>
          <div style="margin-top: 24px;">
            <a href="#taller-cita" class="engine-ctrl-btn active" style="padding: 12px 24px; text-decoration: none; display: inline-flex; border-radius: 9999px;">
              🔧 Pedir Cita en Nuestro Taller
            </a>
          </div>
        </div>
      `;
    }

    init() {
      const width = this.container.clientWidth;
      const height = this.container.clientHeight || 560;

      // Scene
      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x07090e, 0.045);

      // Camera
      this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 50);
      this.camera.position.copy(this.currentCamPos);
      this.camera.lookAt(this.currentCamLook);

      // Renderer with Antialiasing & PBR Tone Mapping
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      this.container.innerHTML = '';
      this.container.appendChild(this.renderer.domElement);

      // Root Turntable
      this.turntable = new THREE.Group();
      this.turntable.position.set(0, 0, 0);
      this.scene.add(this.turntable);

      // Build High-Fidelity 3D Engine
      this.buildLighting();
      this.buildPedestal();
      this.buildEngineAssembly();
      this.setupControls();
      this.setupIntersectionObserver();

      // Start RAF Loop
      this.clock = new THREE.Clock();
      this.animate = this.animate.bind(this);
      this.rafId = requestAnimationFrame(this.animate);

      // Initial resize
      this.onResize();
      window.addEventListener('resize', () => this.onResize());
    }

    buildLighting() {
      // Soft Ambient Base
      const ambient = new THREE.AmbientLight(0xffffff, 0.7);
      this.scene.add(ambient);

      // Key Rim Spotlight (Motorsport Racing Red Tint)
      const rimLight = new THREE.SpotLight(0xef233c, 2.8, 14, Math.PI / 4, 0.5);
      rimLight.position.set(-3.5, 4.0, -2.5);
      rimLight.castShadow = true;
      this.scene.add(rimLight);

      // Main Cool White Overhead Key Light
      const keyLight = new THREE.DirectionalLight(0xf0f6ff, 2.2);
      keyLight.position.set(3.5, 5.0, 4.0);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      this.scene.add(keyLight);

      // Underglow Neon Accent (Cyan/Electric Blue)
      const underGlow = new THREE.PointLight(0x38bdf8, 1.8, 4.5);
      underGlow.position.set(0, -1.2, 0.2);
      this.scene.add(underGlow);

      // Soft Backlight
      const backFill = new THREE.DirectionalLight(0x94a3b8, 1.0);
      backFill.position.set(-2.0, -1.0, -3.0);
      this.scene.add(backFill);
    }

    buildPedestal() {
      // Machined Carbon Base
      const baseGeo = new THREE.CylinderGeometry(1.65, 1.78, 0.08, 64);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x0c0f17,
        metalness: 0.88,
        roughness: 0.25
      });
      const pedestal = new THREE.Mesh(baseGeo, baseMat);
      pedestal.position.y = -1.25;
      pedestal.receiveShadow = true;
      this.turntable.add(pedestal);

      // Dual Concentric Glowing Neon Track Rings
      const ringOuterGeo = new THREE.TorusGeometry(1.68, 0.016, 16, 80);
      const ringOuterMat = new THREE.MeshBasicMaterial({ color: 0xef233c, depthWrite: false });
      const ringOuter = new THREE.Mesh(ringOuterGeo, ringOuterMat);
      ringOuter.rotation.x = Math.PI / 2;
      ringOuter.position.y = -1.20;
      this.turntable.add(ringOuter);

      const ringInnerGeo = new THREE.TorusGeometry(1.48, 0.012, 16, 80);
      const ringInnerMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, depthWrite: false });
      const ringInner = new THREE.Mesh(ringInnerGeo, ringInnerMat);
      ringInner.rotation.x = Math.PI / 2;
      ringInner.position.y = -1.19;
      this.turntable.add(ringInner);
    }

    buildEngineAssembly() {
      this.engineRoot = new THREE.Group();
      this.turntable.add(this.engineRoot);

      // Materials Library
      this.materials = {
        crankcase: new THREE.MeshStandardMaterial({
          color: 0x222630,
          metalness: 0.82,
          roughness: 0.28
        }),
        crankcaseRibs: new THREE.MeshStandardMaterial({
          color: 0x333b49,
          metalness: 0.88,
          roughness: 0.22
        }),
        valveCoverRed: new THREE.MeshStandardMaterial({
          color: 0xef233c,
          metalness: 0.65,
          roughness: 0.25,
          clearcoat: 0.4
        }),
        cylinderFins: new THREE.MeshStandardMaterial({
          color: 0x1b1f28,
          metalness: 0.85,
          roughness: 0.32
        }),
        cylinderFinEdges: new THREE.MeshStandardMaterial({
          color: 0x94a3b8,
          metalness: 0.95,
          roughness: 0.15
        }),
        titaniumExhaust: new THREE.MeshStandardMaterial({
          color: 0x5a6d85,
          metalness: 0.92,
          roughness: 0.2,
          roughnessMap: null
        }),
        chromeSteel: new THREE.MeshStandardMaterial({
          color: 0xdde6ed,
          metalness: 0.96,
          roughness: 0.12
        }),
        goldAnodized: new THREE.MeshStandardMaterial({
          color: 0xd4af37,
          metalness: 0.9,
          roughness: 0.2
        }),
        titaniumBlueBolts: new THREE.MeshStandardMaterial({
          color: 0x2563eb,
          metalness: 0.92,
          roughness: 0.18
        }),
        carbonDetails: new THREE.MeshStandardMaterial({
          color: 0x14171f,
          roughness: 0.5,
          metalness: 0.4
        }),
        oilGlass: new THREE.MeshPhysicalMaterial({
          color: 0xf59e0b,
          transparent: true,
          opacity: 0.75,
          roughness: 0.1,
          transmission: 0.7,
          thickness: 0.5
        })
      };

      // ──────────────────────────────────────────────────────────
      // 1. CRANKCASE & ENGINE BLOCK (Lower structural assembly)
      // ──────────────────────────────────────────────────────────
      const crankcaseGroup = new THREE.Group();
      this.assemblies.crankcase = crankcaseGroup;
      this.engineRoot.add(crankcaseGroup);

      // Main crankcase rounded block
      const crankGeo = new THREE.BoxGeometry(1.3, 0.9, 1.1);
      const crankMesh = new THREE.Mesh(crankGeo, this.materials.crankcase);
      crankMesh.position.y = -0.55;
      crankMesh.castShadow = true;
      crankcaseGroup.add(crankMesh);

      // Crankcase structural side covers
      const leftCoverGeo = new THREE.CylinderGeometry(0.42, 0.44, 0.16, 32);
      const leftCover = new THREE.Mesh(leftCoverGeo, this.materials.crankcaseRibs);
      leftCover.rotation.z = Math.PI / 2;
      leftCover.position.set(-0.72, -0.55, 0);
      crankcaseGroup.add(leftCover);

      // Stator alternator badge on left
      const badgeGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.04, 32);
      const badgeMesh = new THREE.Mesh(badgeGeo, this.materials.valveCoverRed);
      badgeMesh.rotation.z = Math.PI / 2;
      badgeMesh.position.set(-0.81, -0.55, 0);
      crankcaseGroup.add(badgeMesh);

      // Oil Level Sight Glass with Amber Tint
      const sightGlassRim = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.02, 16, 32), this.materials.chromeSteel);
      sightGlassRim.rotation.y = Math.PI / 2;
      sightGlassRim.position.set(-0.66, -0.75, 0.35);
      crankcaseGroup.add(sightGlassRim);

      const sightGlass = new THREE.Mesh(new THREE.CircleGeometry(0.09, 32), this.materials.oilGlass);
      sightGlass.rotation.y = Math.PI / 2;
      sightGlass.position.set(-0.662, -0.75, 0.35);
      crankcaseGroup.add(sightGlass);

      // Sump ribs (carter inferior con aletas)
      for (let i = -0.45; i <= 0.45; i += 0.15) {
        const ribGeo = new THREE.BoxGeometry(1.26, 0.04, 0.9);
        const rib = new THREE.Mesh(ribGeo, this.materials.crankcaseRibs);
        rib.position.set(0, -0.98, i * 0.9);
        crankcaseGroup.add(rib);
      }

      // Titanium Perimeter Hex Bolts
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
        const boltGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.04, 6);
        const bolt = new THREE.Mesh(boltGeo, this.materials.titaniumBlueBolts);
        bolt.rotation.z = Math.PI / 2;
        bolt.position.set(-0.73, -0.55 + Math.sin(a) * 0.36, Math.cos(a) * 0.36);
        crankcaseGroup.add(bolt);
      }

      // ──────────────────────────────────────────────────────────
      // 2. CLUTCH BASKET & RIGHT TRANSMISSION COVER
      // ──────────────────────────────────────────────────────────
      const clutchGroup = new THREE.Group();
      this.assemblies.clutch = clutchGroup;
      this.engineRoot.add(clutchGroup);

      const clutchCoverGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.18, 32);
      const clutchCover = new THREE.Mesh(clutchCoverGeo, this.materials.carbonDetails);
      clutchCover.rotation.z = Math.PI / 2;
      clutchCover.position.set(0.72, -0.45, 0.12);
      clutchGroup.add(clutchCover);

      // Exposed Pressure Plate (Slipper Clutch Racing)
      const pressurePlate = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.05, 32), this.materials.valveCoverRed);
      pressurePlate.rotation.z = Math.PI / 2;
      pressurePlate.position.set(0.82, -0.45, 0.12);
      clutchGroup.add(pressurePlate);

      // 6 Gold Anodized Clutch Retaining Springs
      for (let s = 0; s < 6; s++) {
        const ang = (s * Math.PI * 2) / 6;
        const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.08, 16), this.materials.goldAnodized);
        spring.rotation.z = Math.PI / 2;
        spring.position.set(0.84, -0.45 + Math.sin(ang) * 0.24, 0.12 + Math.cos(ang) * 0.24);
        clutchGroup.add(spring);
      }

      // ──────────────────────────────────────────────────────────
      // 3. INTERNAL CRANKSHAFT & ROTATING ASSEMBLY
      // ──────────────────────────────────────────────────────────
      const crankShaftGroup = new THREE.Group();
      this.assemblies.crankshaft = crankShaftGroup;
      crankShaftGroup.position.set(0, -0.52, 0);
      this.engineRoot.add(crankShaftGroup);

      // Main journal shaft
      const shaftGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.1, 24);
      const mainShaft = new THREE.Mesh(shaftGeo, this.materials.chromeSteel);
      mainShaft.rotation.z = Math.PI / 2;
      crankShaftGroup.add(mainShaft);

      // Counterweight Webs (Web lobes)
      [-0.28, 0.28].forEach(xOff => {
        const webShape = new THREE.BoxGeometry(0.12, 0.45, 0.35);
        const web = new THREE.Mesh(webShape, this.materials.crankcaseRibs);
        web.position.set(xOff, 0.1, 0);
        crankShaftGroup.add(web);
      });

      // ──────────────────────────────────────────────────────────
      // 4. CYLINDER ASSEMBLIES (Front Cylinder #1 & Rear Cylinder #2)
      // ──────────────────────────────────────────────────────────
      this.cylinderAssemblies = [];

      const makeCylinder = (index, angleDeg, xOffset, zOffset) => {
        const cylGroup = new THREE.Group();
        cylGroup.rotation.z = (angleDeg * Math.PI) / 180;
        cylGroup.position.set(xOffset, -0.15, zOffset);
        this.engineRoot.add(cylGroup);

        // Cylinder Barrel Sleeve
        const sleeveGeo = new THREE.CylinderGeometry(0.38, 0.4, 0.75, 32);
        const sleeve = new THREE.Mesh(sleeveGeo, this.materials.cylinderFins);
        sleeve.position.y = 0.38;
        cylGroup.add(sleeve);

        // Layered Cooling Fins (Aletas disipadoras CNC)
        const finCount = 10;
        for (let f = 0; f < finCount; f++) {
          const finY = 0.08 + (f * 0.065);
          const outerR = 0.54 - (f * 0.008);
          const finGeo = new THREE.CylinderGeometry(outerR, outerR, 0.018, 32);
          const finMesh = new THREE.Mesh(finGeo, this.materials.cylinderFins);
          finMesh.position.y = finY;
          cylGroup.add(finMesh);

          // Outer polished fin rim
          const rimGeo = new THREE.TorusGeometry(outerR, 0.008, 8, 32);
          const rim = new THREE.Mesh(rimGeo, this.materials.cylinderFinEdges);
          rim.rotation.x = Math.PI / 2;
          rim.position.y = finY;
          cylGroup.add(rim);
        }

        // Piston & Connecting Rod (Reciprocating inside cylinder)
        const pistonAssembly = new THREE.Group();
        cylGroup.add(pistonAssembly);

        const pistonCrown = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.22, 32), this.materials.chromeSteel);
        pistonCrown.position.y = 0.52;
        pistonAssembly.add(pistonCrown);

        // Piston rings grooves
        [-0.04, 0, 0.04].forEach(rY => {
          const ring = new THREE.Mesh(new THREE.TorusGeometry(0.362, 0.006, 8, 32), this.materials.goldAnodized);
          ring.rotation.x = Math.PI / 2;
          ring.position.y = 0.52 + rY;
          pistonAssembly.add(ring);
        });

        // Connecting Rod (Biela)
        const rodGeo = new THREE.BoxGeometry(0.08, 0.48, 0.06);
        const rod = new THREE.Mesh(rodGeo, this.materials.chromeSteel);
        rod.position.y = 0.22;
        pistonAssembly.add(rod);

        // Cylinder Head (Culata)
        const headGroup = new THREE.Group();
        headGroup.position.y = 0.78;
        cylGroup.add(headGroup);

        const headGeo = new THREE.BoxGeometry(0.85, 0.32, 0.85);
        const headMesh = new THREE.Mesh(headGeo, this.materials.crankcaseRibs);
        headMesh.position.y = 0.16;
        headGroup.add(headMesh);

        // Valve Cover (Tapa de Balancines Racing Red)
        const coverGeo = new THREE.BoxGeometry(0.82, 0.18, 0.82);
        const coverMesh = new THREE.Mesh(coverGeo, this.materials.valveCoverRed);
        coverMesh.position.y = 0.4;
        headGroup.add(coverMesh);

        // Camshaft housings (2 rounded lobes on top)
        [-0.22, 0.22].forEach(cZ => {
          const camCover = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 24), this.materials.valveCoverRed);
          camCover.rotation.x = Math.PI / 2;
          camCover.position.set(0, 0.5, cZ);
          headGroup.add(camCover);
        });

        // Spark plug (Bujía central con pipa)
        const plugHex = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.15, 6), this.materials.goldAnodized);
        plugHex.position.set(0, 0.58, 0);
        headGroup.add(plugHex);

        const plugLead = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.18, 16), this.materials.carbonDetails);
        plugLead.rotation.z = Math.PI / 4;
        plugLead.position.set(0.08, 0.68, 0);
        headGroup.add(plugLead);

        // Save reference for animations
        this.cylinderAssemblies.push({
          group: cylGroup,
          headGroup: headGroup,
          pistonAssembly: pistonAssembly,
          baseY: cylGroup.position.y,
          baseHeadY: headGroup.position.y,
          angleDeg: angleDeg
        });
      };

      // V-Twin Cylinders: Cyl #1 tilted left (-22°), Cyl #2 tilted right (+22°)
      makeCylinder(0, -22, -0.32, -0.05);
      makeCylinder(1, 22, 0.32, 0.05);

      // ──────────────────────────────────────────────────────────
      // 5. TITANIUM EXHAUST HEADERS (Colectores de escape dobles)
      // ──────────────────────────────────────────────────────────
      const exhaustGroup = new THREE.Group();
      this.assemblies.exhaust = exhaustGroup;
      this.engineRoot.add(exhaustGroup);

      // Front Curved Exhaust Pipe
      const curve1 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.35, 0.62, 0.35),
        new THREE.Vector3(-0.25, 0.45, 0.75),
        new THREE.Vector3(0.15, 0.1, 0.95),
        new THREE.Vector3(0.65, -0.25, 0.85),
        new THREE.Vector3(1.15, -0.55, 0.55)
      ]);
      const pipeGeo1 = new THREE.TubeGeometry(curve1, 32, 0.09, 16, false);
      const pipe1 = new THREE.Mesh(pipeGeo1, this.materials.titaniumExhaust);
      exhaustGroup.add(pipe1);

      // Rear Curved Exhaust Pipe
      const curve2 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.35, 0.62, 0.32),
        new THREE.Vector3(0.45, 0.38, 0.72),
        new THREE.Vector3(0.65, 0.0, 0.88),
        new THREE.Vector3(0.95, -0.35, 0.72),
        new THREE.Vector3(1.22, -0.58, 0.52)
      ]);
      const pipeGeo2 = new THREE.TubeGeometry(curve2, 32, 0.09, 16, false);
      const pipe2 = new THREE.Mesh(pipeGeo2, this.materials.titaniumExhaust);
      exhaustGroup.add(pipe2);

      // Merged 2-in-1 Collector Chamber
      const collector = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.16, 0.45, 24), this.materials.chromeSteel);
      collector.rotation.z = Math.PI / 3;
      collector.position.set(1.35, -0.68, 0.48);
      exhaustGroup.add(collector);

      // O2 Lambda Sensor on exhaust
      const lambda = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 16), this.materials.goldAnodized);
      lambda.position.set(0.75, -0.15, 0.9);
      exhaustGroup.add(lambda);

      // ──────────────────────────────────────────────────────────
      // 6. INTAKE MANIFOLDS & THROTTLE BODIES (Inyección trasera)
      // ──────────────────────────────────────────────────────────
      const intakeGroup = new THREE.Group();
      this.assemblies.intake = intakeGroup;
      this.engineRoot.add(intakeGroup);

      [-0.28, 0.28].forEach(x => {
        // Velocity stacks (Toberas de trompeta)
        const stackGeo = new THREE.CylinderGeometry(0.16, 0.11, 0.35, 24);
        const stack = new THREE.Mesh(stackGeo, this.materials.chromeSteel);
        stack.rotation.x = -Math.PI / 3;
        stack.position.set(x, 0.92, -0.45);
        intakeGroup.add(stack);

        // Fuel Injector Rail
        const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.2), this.materials.goldAnodized);
        rail.position.set(x, 0.78, -0.38);
        intakeGroup.add(rail);
      });

      // ──────────────────────────────────────────────────────────
      // 7. BUILD INTERACTIVE 3D HOTSPOT ANCHORS
      // ──────────────────────────────────────────────────────────
      this.hotspotMeshes = [];
      HOTSPOT_DATA.forEach(data => {
        const hpAnchor = new THREE.Group();
        hpAnchor.position.set(data.pos.x, data.pos.y, data.pos.z);
        this.engineRoot.add(hpAnchor);

        // Inner Glowing Core
        const coreGeo = new THREE.SphereGeometry(0.065, 16, 16);
        const coreMat = new THREE.MeshBasicMaterial({ color: 0xef233c });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        hpAnchor.add(coreMesh);

        // Outer Pulsing Halo Ring
        const haloGeo = new THREE.RingGeometry(0.09, 0.12, 24);
        const haloMat = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });
        const haloMesh = new THREE.Mesh(haloGeo, haloMat);
        hpAnchor.add(haloMesh);

        this.hotspotMeshes.push({
          data: data,
          anchor: hpAnchor,
          halo: haloMesh,
          core: coreMesh
        });
      });
    }

    setupControls() {
      const canvas = this.renderer.domElement;

      // Pointer Orbit (Mouse & Touch)
      const onPointerDown = (clientX, clientY) => {
        this.isDragging = true;
        this.isAutoSpin = false;
        this.prevPointerPos = { x: clientX, y: clientY };
        const autoSpinBtn = document.getElementById('engineBtnSpin');
        if (autoSpinBtn) autoSpinBtn.classList.remove('active');
      };

      const onPointerMove = (clientX, clientY) => {
        if (!this.isDragging) return;
        const deltaX = clientX - this.prevPointerPos.x;
        const deltaY = clientY - this.prevPointerPos.y;

        this.turntable.rotation.y += deltaX * 0.007;

        // Slight vertical tilt limit
        this.engineRoot.rotation.x = Math.max(-0.25, Math.min(0.25, this.engineRoot.rotation.x + deltaY * 0.004));

        this.prevPointerPos = { x: clientX, y: clientY };
      };

      const onPointerUp = () => {
        this.isDragging = false;
      };

      // Mouse events
      canvas.addEventListener('mousedown', e => onPointerDown(e.clientX, e.clientY));
      window.addEventListener('mousemove', e => onPointerMove(e.clientX, e.clientY));
      window.addEventListener('mouseup', onPointerUp);

      // Touch events
      canvas.addEventListener('touchstart', e => {
        if (e.touches.length === 1) {
          onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener('touchmove', e => {
        if (e.touches.length === 1) {
          onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener('touchend', onPointerUp);

      // Zoom (Wheel)
      canvas.addEventListener('wheel', e => {
        e.preventDefault();
        const zoomDelta = e.deltaY * 0.002;
        const dist = this.targetCamPos.length();
        const newDist = Math.max(1.8, Math.min(6.5, dist + zoomDelta));
        this.targetCamPos.normalize().multiplyScalar(newDist);
      }, { passive: false });

      // Raycasting for Hotspot clicks
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      canvas.addEventListener('click', e => {
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const clickable = this.hotspotMeshes.map(h => h.core);
        const intersects = this.raycaster.intersectObjects(clickable);

        if (intersects.length > 0) {
          const hitMesh = intersects[0].object;
          const found = this.hotspotMeshes.find(h => h.core === hitMesh);
          if (found) {
            this.selectHotspot(found.data);
          }
        }
      });

      // Bind UI Buttons if present in DOM
      this.bindUiButtons();
    }

    bindUiButtons() {
      // Toggle Exploded View
      const btnExplode = document.getElementById('engineBtnExplode');
      if (btnExplode) {
        btnExplode.onclick = () => {
          this.isExploded = !this.isExploded;
          this.targetExploded = this.isExploded ? 1.0 : 0.0;
          btnExplode.classList.toggle('active', this.isExploded);
        };
      }

      // Toggle X-Ray
      const btnXRay = document.getElementById('engineBtnXRay');
      if (btnXRay) {
        btnXRay.onclick = () => {
          this.setXRayMode(!this.isXRay);
          btnXRay.classList.toggle('active', this.isXRay);
        };
      }

      // Toggle Cycle Animation
      const btnCycle = document.getElementById('engineBtnCycle');
      if (btnCycle) {
        btnCycle.onclick = () => {
          this.isEngineRunning = !this.isEngineRunning;
          btnCycle.classList.toggle('active', this.isEngineRunning);
        };
      }

      // Toggle Turntable Spin
      const btnSpin = document.getElementById('engineBtnSpin');
      if (btnSpin) {
        btnSpin.onclick = () => {
          this.isAutoSpin = !this.isAutoSpin;
          btnSpin.classList.toggle('active', this.isAutoSpin);
        };
      }

      // Reset View Camera
      const btnReset = document.getElementById('engineBtnReset');
      if (btnReset) {
        btnReset.onclick = () => {
          this.resetView();
        };
      }

      // Hotspots pill buttons in HTML
      document.querySelectorAll('[data-engine-hotspot]').forEach(btn => {
        btn.onclick = () => {
          const id = btn.getAttribute('data-engine-hotspot');
          const item = HOTSPOT_DATA.find(h => h.id === id);
          if (item) this.selectHotspot(item);
        };
      });

      // Close Drawer
      const closeBtn = document.getElementById('engineHotspotClose');
      if (closeBtn) {
        closeBtn.onclick = () => this.closeHotspotDrawer();
      }
    }

    setXRayMode(enable) {
      this.isXRay = enable;
      const opacity = enable ? 0.35 : 1.0;
      const transparent = enable;
      const wireframe = false;

      [this.materials.crankcase, this.materials.cylinderFins].forEach(mat => {
        mat.transparent = transparent;
        mat.opacity = opacity;
        mat.wireframe = wireframe;
        mat.needsUpdate = true;
      });

      this.materials.valveCoverRed.transparent = transparent;
      this.materials.valveCoverRed.opacity = enable ? 0.55 : 1.0;
      this.materials.valveCoverRed.needsUpdate = true;
    }

    selectHotspot(data) {
      this.activeHotspot = data;
      this.isAutoSpin = false;

      // Update camera target to frame hotspot
      this.targetCamPos.set(data.camPos.x, data.camPos.y, data.camPos.z);
      this.targetCamLook.set(data.camLook.x, data.camLook.y, data.camLook.z);

      // Update UI Drawer
      const drawer = document.getElementById('engineHotspotDrawer');
      const titleEl = document.getElementById('engineHotspotTitle');
      const badgeEl = document.getElementById('engineHotspotBadge');
      const catEl = document.getElementById('engineHotspotCategory');
      const descEl = document.getElementById('engineHotspotDesc');
      const specsEl = document.getElementById('engineHotspotSpecs');

      if (drawer && titleEl && descEl) {
        titleEl.textContent = data.title;
        if (badgeEl) badgeEl.textContent = data.badge;
        if (catEl) catEl.textContent = data.category;
        descEl.textContent = data.description;

        if (specsEl) {
          specsEl.innerHTML = (data.specs || []).map(s => `
            <div class="engine-spec-row">
              <span class="engine-spec-k">${s.k}</span>
              <span class="engine-spec-v">${s.v}</span>
            </div>
          `).join('');
        }

        drawer.classList.add('open');
      }

      // Highlight active pill
      document.querySelectorAll('[data-engine-hotspot]').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-engine-hotspot') === data.id);
      });
    }

    closeHotspotDrawer() {
      this.activeHotspot = null;
      const drawer = document.getElementById('engineHotspotDrawer');
      if (drawer) drawer.classList.remove('open');
      document.querySelectorAll('[data-engine-hotspot]').forEach(b => b.classList.remove('active'));
    }

    resetView() {
      const isMobile = window.innerWidth <= 1024;
      this.targetCamPos.set(isMobile ? 0 : 1.8, isMobile ? 1.4 : 1.1, isMobile ? 4.8 : 3.8);
      this.targetCamLook.set(0, 0.1, 0);
      this.turntable.rotation.y = 0;
      this.engineRoot.rotation.x = 0;
      this.closeHotspotDrawer();
    }

    setupIntersectionObserver() {
      // Pause Three.js RAF when not scrolled into viewport
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            this.isVisibleOnScreen = entry.isIntersecting;
          });
        }, { threshold: 0.1 });
        observer.observe(this.container);
      }
    }

    onResize() {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight || 560;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    animate() {
      this.rafId = requestAnimationFrame(this.animate);

      // If scrolled away, do not waste GPU cycles
      if (!this.isVisibleOnScreen) return;

      const delta = this.clock.getDelta();
      this.engineTime += delta;

      // 1. Auto Turntable Orbit
      if (this.isAutoSpin && !this.isDragging) {
        this.turntable.rotation.y += 0.006;
      }

      // 2. Exploded View Smooth Lerp
      this.explodedFactor += (this.targetExploded - this.explodedFactor) * 0.08;

      if (this.cylinderAssemblies) {
        this.cylinderAssemblies.forEach((cyl, idx) => {
          // Push cylinder heads upward & outward
          const headOffset = this.explodedFactor * 0.65;
          cyl.headGroup.position.y = cyl.baseHeadY + headOffset;

          // Push cylinder barrels outward
          const barrelSpread = this.explodedFactor * (idx === 0 ? -0.45 : 0.45);
          cyl.group.position.x = (idx === 0 ? -0.32 : 0.32) + barrelSpread;
        });
      }

      if (this.assemblies.exhaust) {
        // Push exhaust forward & downward
        this.assemblies.exhaust.position.z = this.explodedFactor * 0.55;
        this.assemblies.exhaust.position.y = -this.explodedFactor * 0.25;
      }

      if (this.assemblies.clutch) {
        // Push clutch cover sideways
        this.assemblies.clutch.position.x = this.explodedFactor * 0.65;
      }

      if (this.assemblies.intake) {
        // Push intake rearward
        this.assemblies.intake.position.z = -this.explodedFactor * 0.55;
      }

      // 3. 4-Stroke Reciprocating Mechanical Engine Cycle Simulation
      if (this.isEngineRunning) {
        const cycleSpeed = 7.0; // simulated idle RPM cadence
        const theta = this.engineTime * cycleSpeed;

        // Rotate Crankshaft
        if (this.assemblies.crankshaft) {
          this.assemblies.crankshaft.rotation.x = theta;
        }

        // Reciprocate Pistons inside cylinders (180° firing interval)
        if (this.cylinderAssemblies) {
          this.cylinderAssemblies.forEach((cyl, idx) => {
            const phase = idx === 0 ? theta : theta + Math.PI;
            const stroke = Math.sin(phase) * 0.16;
            cyl.pistonAssembly.position.y = stroke;
          });
        }
      }

      // 4. Billboard Hotspots to always face the camera & pulse
      if (this.hotspotMeshes) {
        const pulse = 1.0 + Math.sin(this.engineTime * 4.5) * 0.15;
        this.hotspotMeshes.forEach(h => {
          h.anchor.lookAt(this.camera.position);
          h.halo.scale.set(pulse, pulse, 1);
        });
      }

      // 5. Camera Smooth Interpolation
      this.currentCamPos.lerp(this.targetCamPos, 0.05);
      this.currentCamLook.lerp(this.targetCamLook, 0.05);
      this.camera.position.copy(this.currentCamPos);
      this.camera.lookAt(this.currentCamLook);

      this.renderer.render(this.scene, this.camera);
    }

    
    loadMotorcycleGLB() {
      if (this.motorcycleModel) {
        this.motorcycleModel.visible = true;
        return;
      }
      if (!window.THREE || !window.THREE.GLTFLoader) {
        console.warn('GLTFLoader no disponible en THREE');
        return;
      }
      const loader = new THREE.GLTFLoader();
      const containerEl = document.getElementById(this.containerId);
      loader.load('assets/motorcycle.glb', (gltf) => {
        this.motorcycleModel = gltf.scene || gltf.scenes[0];
        
        // Compute bounding box and normalize scale & position
        const box = new THREE.Box3().setFromObject(this.motorcycleModel);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetScale = 2.4 / (maxDim || 1);
        this.motorcycleModel.scale.set(targetScale, targetScale, targetScale);
        
        // Center it nicely on top of pedestal
        this.motorcycleModel.position.set(-center.x * targetScale, -center.y * targetScale - 0.2, -center.z * targetScale);
        
        // Enable shadows and apply automotive PBR materials
        this.motorcycleModel.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
            if (!node.material || node.material.type === 'MeshBasicMaterial') {
              node.material = new THREE.MeshStandardMaterial({
                color: 0x181e29,
                metalness: 0.88,
                roughness: 0.22,
                envMapIntensity: 1.5
              });
            }
          }
        });

        this.turntable.add(this.motorcycleModel);
        this.motorcycleModel.visible = (this.current3DView === 'bike');
      }, undefined, (err) => {
        console.error('Error cargando assets/motorcycle.glb:', err);
      });
    }

    switch3DView(mode) {
      this.current3DView = mode;
      const isBike = (mode === 'bike');

      if (this.engineRoot) this.engineRoot.visible = !isBike;
      if (this.hotspotMeshes) {
        this.hotspotMeshes.forEach(h => { if (h.core) h.core.visible = !isBike; });
      }

      // Hide engine specific buttons in bike mode
      const explodeBtn = document.getElementById('engineBtnExplode');
      const xrayBtn = document.getElementById('engineBtnXRay');
      const cycleBtn = document.getElementById('engineBtnCycle');
      if (explodeBtn) explodeBtn.style.display = isBike ? 'none' : 'inline-flex';
      if (xrayBtn) xrayBtn.style.display = isBike ? 'none' : 'inline-flex';
      if (cycleBtn) cycleBtn.style.display = isBike ? 'none' : 'inline-flex';

      const btnViewEngine = document.getElementById('engineBtnViewEngine');
      const btnViewBike = document.getElementById('engineBtnViewBike');
      if (btnViewEngine) btnViewEngine.classList.toggle('active', !isBike);
      if (btnViewBike) btnViewBike.classList.toggle('active', isBike);

      if (isBike) {
        this.closeHotspotDrawer();
        if (!this.motorcycleModel) {
          this.loadMotorcycleGLB();
        } else {
          this.motorcycleModel.visible = true;
        }
      } else {
        if (this.motorcycleModel) this.motorcycleModel.visible = false;
      }
    }

    destroy() {
      if (this.rafId) cancelAnimationFrame(this.rafId);
      if (this.renderer && this.renderer.domElement) {
        this.container.removeChild(this.renderer.domElement);
        this.renderer.dispose();
      }
    }
  }

  // Export to global scope
  window.OreroEngine3D = OreroEngine3D;

  // Auto-init on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('engine3DCanvasContainer');
    if (el) {
      window.oreroEngineInstance = new OreroEngine3D('engine3DCanvasContainer');
    }
  });
})();
