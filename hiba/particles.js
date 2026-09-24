// Canvas Particle and Effects System
class ParticleSystem {
    constructor() {
        this.bgCanvas = document.getElementById('bg-canvas');
        this.effectsCanvas = document.getElementById('effects-canvas');
        this.constellationCanvas = document.getElementById('constellation-canvas');

        this.bgCtx = this.bgCanvas ? this.bgCanvas.getContext('2d') : null;
        this.effCtx = this.effectsCanvas ? this.effectsCanvas.getContext('2d') : null;
        this.conCtx = this.constellationCanvas ? this.constellationCanvas.getContext('2d') : null;

        this.stars = [];
        this.petals = [];
        this.burstParticles = [];
        this.constellationStars = [];
        this.sparkleTrail = [];

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.mouse = { x: -100, y: -100, isMoving: false };
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        // Escuchar movimiento de ratón o toque táctil para estela mágica
        window.addEventListener('mousemove', (e) => this.onPointerMove(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        // Crear estrellas de fondo
        const starCount = Math.min(120, Math.floor((this.width * this.height) / 8000));
        for (let i = 0; i < starCount; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.6 + 0.4,
                alpha: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                color: ['#fff', '#ffd1dc', '#ffe6aa', '#e0c3fc'][Math.floor(Math.random() * 4)]
            });
        }

        // Crear pétalos de rosa flotantes
        const petalCount = Math.min(25, Math.floor(this.width / 45));
        for (let i = 0; i < petalCount; i++) {
            this.petals.push(this.createPetal(true));
        }

        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        if (this.bgCanvas) {
            this.bgCanvas.width = this.width;
            this.bgCanvas.height = this.height;
        }
        if (this.effectsCanvas) {
            this.effectsCanvas.width = this.width;
            this.effectsCanvas.height = this.height;
        }
        if (this.constellationCanvas) {
            const rect = this.constellationCanvas.getBoundingClientRect();
            this.constellationCanvas.width = rect.width || this.width;
            this.constellationCanvas.height = rect.height || 360;
        }
    }

    createPetal(randomY = false) {
        return {
            x: Math.random() * this.width,
            y: randomY ? Math.random() * this.height : -30,
            size: Math.random() * 14 + 10,
            speedY: Math.random() * 1.2 + 0.7,
            speedX: Math.random() * 1.5 - 0.75,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 1.5,
            oscillation: Math.random() * 100,
            oscillationSpeed: Math.random() * 0.02 + 0.01,
            color: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#e11d48'][Math.floor(Math.random() * 5)],
            opacity: Math.random() * 0.4 + 0.5
        };
    }

    onPointerMove(x, y) {
        this.mouse.x = x;
        this.mouse.y = y;

        // Añadir destello a la estela
        if (Math.random() < 0.35) {
            this.sparkleTrail.push({
                x: x + (Math.random() * 20 - 10),
                y: y + (Math.random() * 20 - 10),
                size: Math.random() * 4 + 2,
                alpha: 1,
                color: ['#ff80bf', '#ffd700', '#ffffff', '#ff9a9e'][Math.floor(Math.random() * 4)],
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5 - 0.5
            });
        }
    }

    // Explosión de corazones y chispas al abrir la caja
    burstGift(originX, originY) {
        const count = 70;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 9 + 4;
            const isHeart = Math.random() > 0.4;
            this.burstParticles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                gravity: 0.18,
                alpha: 1,
                decay: Math.random() * 0.014 + 0.008,
                size: isHeart ? Math.random() * 18 + 12 : Math.random() * 6 + 3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 8,
                isHeart: isHeart,
                color: ['#ff2a6d', '#ff70a6', '#ffd166', '#ff99c8', '#ffffff'][Math.floor(Math.random() * 5)]
            });
        }
    }

    // Fuegos artificiales para cuando dice SÍ
    launchFireworks() {
        const count = 5;
        for (let f = 0; f < count; f++) {
            setTimeout(() => {
                const fx = Math.random() * (this.width * 0.8) + (this.width * 0.1);
                const fy = Math.random() * (this.height * 0.5) + (this.height * 0.15);
                this.burstGift(fx, fy);
                if (window.romanticAudio) window.romanticAudio.playStarSound();
            }, f * 350);
        }
    }

    drawHeart(ctx, x, y, size, color, alpha, rotation = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = color;
        ctx.beginPath();
        const topCurveHeight = size * 0.3;
        ctx.moveTo(0, topCurveHeight);
        ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
        ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.4, 0, size);
        ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.4, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
        ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }

    drawPetal(ctx, petal) {
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.globalAlpha = petal.opacity;
        ctx.fillStyle = petal.color;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(petal.size / 2, -petal.size / 2, petal.size, 0);
        ctx.quadraticCurveTo(petal.size / 2, petal.size / 2, 0, 0);
        ctx.fill();
        ctx.restore();
    }

    animate() {
        // 1. Dibujar Fondo (Cielo Estrellado y Pétalos Suaves)
        if (this.bgCtx) {
            this.bgCtx.clearRect(0, 0, this.width, this.height);

            // Estrellas titilantes
            for (let s of this.stars) {
                s.alpha += s.twinkleSpeed;
                if (s.alpha > 0.95 || s.alpha < 0.2) s.twinkleSpeed = -s.twinkleSpeed;

                this.bgCtx.save();
                this.bgCtx.globalAlpha = Math.max(0.1, s.alpha);
                this.bgCtx.fillStyle = s.color;
                this.bgCtx.beginPath();
                this.bgCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                this.bgCtx.fill();
                this.bgCtx.restore();
            }

            // Pétalos cayendo
            for (let p of this.petals) {
                p.oscillation += p.oscillationSpeed;
                p.x += Math.sin(p.oscillation) * 0.8 + p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;

                if (p.y > this.height + 30 || p.x < -30 || p.x > this.width + 30) {
                    Object.assign(p, this.createPetal(false));
                }

                this.drawPetal(this.bgCtx, p);
            }
        }

        // 2. Dibujar Efectos Especiales (Explosiones y Estela de Cursor)
        if (this.effCtx) {
            this.effCtx.clearRect(0, 0, this.width, this.height);

            // Estela del cursor / dedo táctil
            for (let i = this.sparkleTrail.length - 1; i >= 0; i--) {
                const sp = this.sparkleTrail[i];
                sp.x += sp.vx;
                sp.y += sp.vy;
                sp.alpha -= 0.025;

                if (sp.alpha <= 0) {
                    this.sparkleTrail.splice(i, 1);
                    continue;
                }

                this.effCtx.save();
                this.effCtx.globalAlpha = sp.alpha;
                this.effCtx.fillStyle = sp.color;
                this.effCtx.beginPath();
                this.effCtx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
                this.effCtx.shadowColor = sp.color;
                this.effCtx.shadowBlur = 8;
                this.effCtx.fill();
                this.effCtx.restore();
            }

            // Partículas de explosión (Corazones y Chispas)
            for (let i = this.burstParticles.length - 1; i >= 0; i--) {
                const bp = this.burstParticles[i];
                bp.x += bp.vx;
                bp.y += bp.vy;
                bp.vy += bp.gravity;
                bp.vx *= 0.98;
                bp.rotation += bp.rotationSpeed;
                bp.alpha -= bp.decay;

                if (bp.alpha <= 0) {
                    this.burstParticles.splice(i, 1);
                    continue;
                }

                if (bp.isHeart) {
                    this.drawHeart(this.effCtx, bp.x, bp.y, bp.size, bp.color, bp.alpha, bp.rotation);
                } else {
                    this.effCtx.save();
                    this.effCtx.globalAlpha = bp.alpha;
                    this.effCtx.fillStyle = bp.color;
                    this.effCtx.shadowColor = bp.color;
                    this.effCtx.shadowBlur = 10;
                    this.effCtx.beginPath();
                    this.effCtx.arc(bp.x, bp.y, bp.size, 0, Math.PI * 2);
                    this.effCtx.fill();
                    this.effCtx.restore();
                }
            }
        }

        // 3. Dibujar Constelación Interactiva si el canvas existe
        if (this.conCtx && this.constellationStars.length > 0) {
            const cw = this.constellationCanvas.width;
            const ch = this.constellationCanvas.height;
            this.conCtx.clearRect(0, 0, cw, ch);

            // Dibujar líneas entre estrellas cercanas
            for (let i = 0; i < this.constellationStars.length; i++) {
                for (let j = i + 1; j < this.constellationStars.length; j++) {
                    const s1 = this.constellationStars[i];
                    const s2 = this.constellationStars[j];
                    const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);
                    if (dist < 150) {
                        this.conCtx.save();
                        this.conCtx.strokeStyle = `rgba(255, 215, 0, ${1 - dist / 150})`;
                        this.conCtx.lineWidth = 1.2;
                        this.conCtx.beginPath();
                        this.conCtx.moveTo(s1.x, s1.y);
                        this.conCtx.lineTo(s2.x, s2.y);
                        this.conCtx.stroke();
                        this.conCtx.restore();
                    }
                }
            }

            // Dibujar estrellas de la constelación
            for (let s of this.constellationStars) {
                this.conCtx.save();
                this.conCtx.fillStyle = '#ffd700';
                this.conCtx.shadowColor = '#fff';
                this.conCtx.shadowBlur = 12;
                this.conCtx.beginPath();
                this.conCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
                this.conCtx.fill();
                this.conCtx.restore();
            }
        }

        requestAnimationFrame(() => this.animate());
    }

    addConstellationStar(x, y) {
        if (this.constellationStars.length >= 24) {
            this.constellationStars.shift(); // limitar cantidad para elegancia
        }
        this.constellationStars.push({
            x,
            y,
            radius: Math.random() * 2.5 + 3.5,
            born: Date.now()
        });
    }

    clearConstellation() {
        this.constellationStars = [];
    }
}

window.particleSystem = new ParticleSystem();
