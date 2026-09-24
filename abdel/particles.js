// Particle system for Abdel's Amazigh tribute
class ParticleSystem {
    constructor() {
        this.bgCanvas = document.getElementById('bg-canvas');
        this.effectsCanvas = document.getElementById('effects-canvas');
        this.constellationCanvas = document.getElementById('constellation-canvas');

        this.bgCtx = this.bgCanvas ? this.bgCanvas.getContext('2d') : null;
        this.effCtx = this.effectsCanvas ? this.effectsCanvas.getContext('2d') : null;
        this.conCtx = this.constellationCanvas ? this.constellationCanvas.getContext('2d') : null;

        this.stars = [];
        this.burstParticles = [];
        this.constellationStars = [];
        this.sparkleTrail = [];

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());

        window.addEventListener('mousemove', (e) => this.onPointerMove(e.clientX, e.clientY));
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) this.onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }, { passive: true });

        // Estrellas de fondo con tonos Amazigh (oro, esmeralda, zafiro)
        const starCount = Math.min(130, Math.floor((this.width * this.height) / 7500));
        for (let i = 0; i < starCount; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 1.8 + 0.4,
                alpha: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                color: ['#f59e0b', '#38bdf8', '#10b981', '#ffffff', '#fbbf24'][Math.floor(Math.random() * 5)]
            });
        }

        this.animate();
    }

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if (this.bgCanvas) { this.bgCanvas.width = this.width; this.bgCanvas.height = this.height; }
        if (this.effectsCanvas) { this.effectsCanvas.width = this.width; this.effectsCanvas.height = this.height; }
        if (this.constellationCanvas) {
            const rect = this.constellationCanvas.getBoundingClientRect();
            this.constellationCanvas.width = rect.width || this.width;
            this.constellationCanvas.height = rect.height || 320;
        }
    }

    onPointerMove(x, y) {
        if (Math.random() < 0.3) {
            this.sparkleTrail.push({
                x: x + (Math.random() * 16 - 8),
                y: y + (Math.random() * 16 - 8),
                size: Math.random() * 4 + 2,
                alpha: 1,
                color: ['#f59e0b', '#38bdf8', '#10b981', '#ffffff'][Math.floor(Math.random() * 4)],
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5 - 0.5
            });
        }
    }

    burstGift(originX, originY) {
        for (let i = 0; i < 70; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 9 + 4;
            this.burstParticles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                gravity: 0.18,
                alpha: 1,
                decay: Math.random() * 0.014 + 0.008,
                size: Math.random() * 8 + 3,
                color: ['#f59e0b', '#0284c7', '#10b981', '#e11d48', '#ffffff'][Math.floor(Math.random() * 5)]
            });
        }
    }

    launchFireworks() {
        for (let f = 0; f < 5; f++) {
            setTimeout(() => {
                const fx = Math.random() * (this.width * 0.8) + (this.width * 0.1);
                const fy = Math.random() * (this.height * 0.5) + (this.height * 0.15);
                this.burstGift(fx, fy);
                if (window.romanticAudio) window.romanticAudio.playStarSound();
            }, f * 320);
        }
    }

    animate() {
        if (this.bgCtx) {
            this.bgCtx.clearRect(0, 0, this.width, this.height);
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
        }

        if (this.effCtx) {
            this.effCtx.clearRect(0, 0, this.width, this.height);

            for (let i = this.sparkleTrail.length - 1; i >= 0; i--) {
                const sp = this.sparkleTrail[i];
                sp.x += sp.vx;
                sp.y += sp.vy;
                sp.alpha -= 0.03;
                if (sp.alpha <= 0) { this.sparkleTrail.splice(i, 1); continue; }

                this.effCtx.save();
                this.effCtx.globalAlpha = sp.alpha;
                this.effCtx.fillStyle = sp.color;
                this.effCtx.shadowColor = sp.color;
                this.effCtx.shadowBlur = 8;
                this.effCtx.beginPath();
                this.effCtx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
                this.effCtx.fill();
                this.effCtx.restore();
            }

            for (let i = this.burstParticles.length - 1; i >= 0; i--) {
                const bp = this.burstParticles[i];
                bp.x += bp.vx;
                bp.y += bp.vy;
                bp.vy += bp.gravity;
                bp.alpha -= bp.decay;
                if (bp.alpha <= 0) { this.burstParticles.splice(i, 1); continue; }

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

        if (this.conCtx && this.constellationStars.length > 0) {
            const cw = this.constellationCanvas.width;
            const ch = this.constellationCanvas.height;
            this.conCtx.clearRect(0, 0, cw, ch);

            for (let i = 0; i < this.constellationStars.length; i++) {
                for (let j = i + 1; j < this.constellationStars.length; j++) {
                    const s1 = this.constellationStars[i];
                    const s2 = this.constellationStars[j];
                    const dist = Math.hypot(s1.x - s2.x, s1.y - s2.y);
                    if (dist < 130) {
                        this.conCtx.save();
                        this.conCtx.strokeStyle = `rgba(245, 158, 11, ${1 - dist / 130})`;
                        this.conCtx.lineWidth = 1.4;
                        this.conCtx.beginPath();
                        this.conCtx.moveTo(s1.x, s1.y);
                        this.conCtx.lineTo(s2.x, s2.y);
                        this.conCtx.stroke();
                        this.conCtx.restore();
                    }
                }
            }

            for (let s of this.constellationStars) {
                this.conCtx.save();
                this.conCtx.fillStyle = '#f59e0b';
                this.conCtx.shadowColor = '#38bdf8';
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
        if (this.constellationStars.length >= 26) this.constellationStars.shift();
        this.constellationStars.push({ x, y, radius: Math.random() * 2.5 + 3.5 });
    }

    clearConstellation() {
        this.constellationStars = [];
    }
}

window.particleSystem = new ParticleSystem();
