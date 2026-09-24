// Audio Engine for Abdel's Brotherhood Tribute (Loud & Clear on Smartphone Speakers)
class BrotherhoodAudio {
    constructor() {
        this.ctx = null;
        this.isPlayingMusic = false;
        this.isMuted = false;
        this.musicTimeout = null;
        this.gainMaster = null;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.gainMaster = this.ctx.createGain();
            this.gainMaster.gain.setValueAtTime(0.9, this.ctx.currentTime);
            this.gainMaster.connect(this.ctx.destination);
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.init();
        this.isMuted = !this.isMuted;
        if (this.gainMaster && this.ctx) {
            this.gainMaster.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.9, this.ctx.currentTime + 0.1);
        }
        if (!this.isMuted && !this.isPlayingMusic) {
            this.startMusic();
        }
        return this.isMuted;
    }

    playTone(freq, type = 'sine', duration = 1.0, timeOffset = 0, vol = 0.35) {
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

    playOpenSound() {
        this.init();
        const notes = [440.00, 554.37, 659.25, 880.00, 1108.73, 1318.51];
        notes.forEach((freq, idx) => {
            this.playTone(freq, 'triangle', 1.2, idx * 0.07, 0.45);
            this.playTone(freq * 1.5, 'sine', 0.9, idx * 0.07 + 0.02, 0.2);
        });
    }

    playChime() {
        this.init();
        [783.99, 1046.50, 1318.51].forEach((f, i) => {
            this.playTone(f, 'triangle', 0.7, i * 0.06, 0.3);
        });
    }

    playStarSound() {
        this.init();
        const pitch = [659.25, 783.99, 880.00, 1046.50, 1174.66][Math.floor(Math.random() * 5)];
        this.playTone(pitch, 'triangle', 0.8, 0, 0.3);
        this.playTone(pitch * 1.5, 'sine', 0.6, 0.02, 0.15);
    }

    playNopeSound() {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(650, now + 0.12);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(this.gainMaster);
        osc.start(now);
        osc.stop(now + 0.2);
    }

    playCelebration() {
        this.init();
        const fanfare = [
            { f: 523.25, d: 0.15 },
            { f: 659.25, d: 0.15 },
            { f: 783.99, d: 0.2 },
            { f: 1046.50, d: 0.4 },
            { f: 880.00, d: 0.2 },
            { f: 1046.50, d: 0.8 }
        ];
        let offset = 0;
        fanfare.forEach(item => {
            this.playTone(item.f, 'triangle', item.d * 2.2, offset, 0.45);
            this.playTone(item.f * 1.5, 'sine', item.d * 2.2, offset, 0.2);
            offset += item.d;
        });
    }

    startMusic() {
        this.init();
        if (this.isPlayingMusic) return;
        this.isPlayingMusic = true;

        // Progresión acústica noble y cálida (Am - G - F - E7 estilo oriental / acústico)
        const melody = [
            440.00, 523.25, 659.25, 880.00, 659.25, 523.25, // Am
            392.00, 493.88, 587.33, 783.99, 587.33, 493.88, // G
            349.23, 440.00, 523.25, 698.46, 523.25, 440.00, // F
            329.63, 415.30, 493.88, 659.25, 493.88, 415.30  // E
        ];

        let index = 0;
        const step = () => {
            if (!this.isPlayingMusic) return;
            const freq = melody[index];
            this.playTone(freq, 'sine', 1.6, 0, 0.45);
            this.playTone(freq * 1.002, 'triangle', 1.2, 0.02, 0.28);
            if (index % 3 === 0) {
                this.playTone(freq * 2, 'sine', 1.8, 0.04, 0.2);
            }
            index = (index + 1) % melody.length;
            this.musicTimeout = setTimeout(step, 400);
        };

        step();
    }

    stopMusic() {
        this.isPlayingMusic = false;
        if (this.musicTimeout) clearTimeout(this.musicTimeout);
    }
}

window.romanticAudio = new BrotherhoodAudio();

function unlockAudioMobile() {
    if (window.romanticAudio) window.romanticAudio.init();
}
window.addEventListener('touchstart', unlockAudioMobile, { passive: true, once: false });
window.addEventListener('touchend', unlockAudioMobile, { passive: true, once: false });
window.addEventListener('click', unlockAudioMobile, { passive: true, once: false });
