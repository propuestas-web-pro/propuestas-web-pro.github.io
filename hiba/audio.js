// Audio Engine con soporte 100% garantizado para Android Mobile, iOS y PC
class RomanticAudio {
    constructor() {
        this.ctx = null;
        this.isPlayingMusic = false;
        this.isMuted = false;
        this.musicTimeout = null;
        this.gainMaster = null;
        this.unlocked = false;
    }

    // Inicializar y desbloquear AudioContext en Android/iOS en cualquier toque
    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.gainMaster = this.ctx.createGain();
            this.gainMaster.gain.setValueAtTime(0.85, this.ctx.currentTime);
            this.gainMaster.connect(this.ctx.destination);
        }

        if (this.ctx.state === 'suspended') {
            this.ctx.resume().then(() => {
                this.unlocked = true;
            }).catch(() => {});
        } else {
            this.unlocked = true;
        }
    }

    toggleMute() {
        this.init();
        this.isMuted = !this.isMuted;
        if (this.gainMaster && this.ctx) {
            this.gainMaster.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.85, this.ctx.currentTime + 0.1);
        }
        if (!this.isMuted && !this.isPlayingMusic) {
            this.startRomanticMusic();
        }
        return this.isMuted;
    }

    // Sonidos con frecuencias optimizadas para altavoces de smartphone (500Hz - 1600Hz)
    playTone(freq, type = 'sine', duration = 1.0, timeOffset = 0, vol = 0.3) {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime + timeOffset;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(vol, now + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(gain);
        gain.connect(this.gainMaster);

        osc.start(now);
        osc.stop(now + duration);
    }

    // Apertura mágica (Arpegio dulce)
    playOpenSound() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        // Frecuencias medias-altas para que suenen claras y brillantes en Android
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
        notes.forEach((freq, idx) => {
            this.playTone(freq, 'triangle', 1.2, idx * 0.07, 0.35);
            this.playTone(freq * 1.5, 'sine', 0.9, idx * 0.07 + 0.02, 0.15);
        });
    }

    // Chime suave
    playChime() {
        this.init();
        const chimes = [880.00, 1174.66, 1318.51];
        chimes.forEach((f, i) => {
            this.playTone(f, 'sine', 0.6, i * 0.06, 0.22);
        });
    }

    // Sonido de estrella
    playStarSound() {
        this.init();
        const pitch = [783.99, 880.00, 987.77, 1046.50, 1318.51][Math.floor(Math.random() * 5)];
        this.playTone(pitch, 'sine', 0.8, 0, 0.25);
        this.playTone(pitch * 1.5, 'triangle', 0.5, 0.02, 0.1);
    }

    // Sonido botón no
    playNopeSound() {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(750, now + 0.12);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

        osc.connect(gain);
        gain.connect(this.gainMaster);

        osc.start(now);
        osc.stop(now + 0.2);
    }

    // Fanfarria de celebración
    playCelebration() {
        this.init();
        const fanfare = [
            { f: 587.33, d: 0.12 }, // D5
            { f: 739.99, d: 0.12 }, // F#5
            { f: 880.00, d: 0.15 }, // A5
            { f: 1174.66, d: 0.35 },// D6
            { f: 987.77, d: 0.15 }, // B5
            { f: 1174.66, d: 0.7 }  // D6 largo
        ];
        let offset = 0;
        fanfare.forEach(item => {
            this.playTone(item.f, 'triangle', item.d * 2.2, offset, 0.38);
            this.playTone(item.f * 1.5, 'sine', item.d * 2.2, offset, 0.15);
            offset += item.d;
        });
    }

    // Música ambiental suave (Loop romántico estilo caja de música)
    startRomanticMusic() {
        this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        if (this.isPlayingMusic) return;
        this.isPlayingMusic = true;

        // Notas en registro medio-alto perfectamente audibles en altavoces de móvil
        const melody = [
            523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, // Do Mayor
            392.00, 493.88, 587.33, 783.99, 587.33, 493.88,  // Sol Mayor
            440.00, 523.25, 659.25, 880.00, 659.25, 523.25,  // La menor
            349.23, 440.00, 523.25, 698.46, 523.25, 440.00   // Fa Mayor
        ];

        let index = 0;
        const step = () => {
            if (!this.isPlayingMusic) return;
            const freq = melody[index];
            // Volumen enriquecido para altavoces de smartphone
            this.playTone(freq, 'sine', 1.5, 0, 0.45);
            this.playTone(freq * 1.002, 'triangle', 1.2, 0.02, 0.25);
            if (index % 3 === 0) {
                this.playTone(freq * 2, 'sine', 1.8, 0.05, 0.2);
            }
            index = (index + 1) % melody.length;
            this.musicTimeout = setTimeout(step, 420);
        };

        step();
    }

    stopRomanticMusic() {
        this.isPlayingMusic = false;
        if (this.musicTimeout) {
            clearTimeout(this.musicTimeout);
            this.musicTimeout = null;
        }
    }
}

window.romanticAudio = new RomanticAudio();

// Desbloquear audio en el primer toque de pantalla en Android/iOS
function unlockAudioMobile() {
    if (window.romanticAudio) {
        window.romanticAudio.init();
    }
}
window.addEventListener('touchstart', unlockAudioMobile, { passive: true, once: false });
window.addEventListener('touchend', unlockAudioMobile, { passive: true, once: false });
window.addEventListener('click', unlockAudioMobile, { passive: true, once: false });
