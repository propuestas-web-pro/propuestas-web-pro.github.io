// Abdel Brotherhood Surprise Logic
document.addEventListener('DOMContentLoaded', () => {

    const letterContent = `Bismillah Ar-Rahman Ar-Rahim 🤍

Khouya Abdel ⵣ,

10 snin hadi w 7na dima m3a ba3diyatna f l7elwa w lmorra. Daz lwa9t bzerba walakin lma3dn dyalk b9a howa howa: rajel, drayf, w weld n-nas li dima kay7mer lwejhh.

Ntiya machi ghir sa7bi, ntiya khouya li ma wldatch omi. Dam Amazigh 7or, l'asl w n-nakha w l'kalma d r-rjal.

Bghit nqaddem lik had l'cadeau sghir bach nfakrk bli 10 snin machi sahla, w inchaAllah l3omr kaml d l'khawa w n-naja7. Lah ykhellik dima mnowr w yjazik 3la kol wa9fa dertitiha m3aya. 🤲🤍`;

    let hasOpened = false;
    let isTyping = false;
    let typeWriterTimeout = null;

    const introScreen = document.getElementById('intro-screen');
    const giftCard = document.getElementById('gift-card');
    const openBoxBtn = document.getElementById('open-box-btn');
    const clickFeedback = document.getElementById('click-feedback');
    const mainExperience = document.getElementById('main-experience');

    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const musicWaves = document.getElementById('music-waves');
    const musicText = document.getElementById('music-text');

    const letterBodyContent = document.getElementById('letter-body-content');

    const btnAnswerYes = document.getElementById('btn-answer-yes');
    const btnAnswerNo = document.getElementById('btn-answer-no');
    const proposalQuestionView = document.getElementById('proposal-question-view');
    const proposalSuccessView = document.getElementById('proposal-success-view');
    const btnContactReply = document.getElementById('btn-contact-reply');

    const constellationArea = document.getElementById('constellation-area');
    const skyHint = document.getElementById('sky-hint');
    const btnTraceYaz = document.getElementById('btn-trace-yaz');
    const btnClearSky = document.getElementById('btn-clear-sky');
    const toast = document.getElementById('toast');

    const compliments = [
        "Amazigh 7or ⵣ",
        "Rajel weld n-nas 👑",
        "10 snin d l'khawa ⏳",
        "Khouya l3ziz 🤝",
        "Lah y7fdk a Abdel 🤲",
        "Dima m3ak f dahr 🛡️",
        "L'asl w l'ma3dan zwin ✨",
        "N-nakha d r-rjal 🦁"
    ];

    // Doble toque / clic para abrir
    let lastTapTime = 0;
    let singleClickTimeout = null;

    function handleOpenSurprise(e) {
        if (hasOpened) return;
        hasOpened = true;

        if (singleClickTimeout) clearTimeout(singleClickTimeout);
        if (navigator.vibrate) navigator.vibrate([40, 60, 40, 80, 50]);

        let clientX = window.innerWidth / 2;
        let clientY = window.innerHeight / 2;
        if (e && e.clientX) { clientX = e.clientX; clientY = e.clientY; }

        if (window.romanticAudio) {
            window.romanticAudio.playOpenSound();
            window.romanticAudio.startMusic();
            musicWaves.classList.remove('paused');
            musicText.textContent = "Música 🎵";
        }

        if (window.particleSystem) {
            window.particleSystem.burstGift(clientX, clientY);
        }

        introScreen.classList.add('hide');
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainExperience.classList.add('show');
            startTypewriter();
        }, 600);
    }

    function handleSingleTapHint() {
        if (hasOpened) return;
        if (navigator.vibrate) navigator.vibrate(30);
        if (window.romanticAudio) window.romanticAudio.playChime();
        clickFeedback.textContent = "¡Casi! Toca otra vez rápido para abrir... ⵣ";
        clickFeedback.style.opacity = '1';
        setTimeout(() => {
            if (clickFeedback) clickFeedback.style.opacity = '0.5';
        }, 1500);
    }

    giftCard.addEventListener('dblclick', (e) => handleOpenSurprise(e));
    openBoxBtn.addEventListener('dblclick', (e) => { e.stopPropagation(); handleOpenSurprise(e); });

    giftCard.addEventListener('click', (e) => {
        const currentTime = new Date().getTime();
        const tapInterval = currentTime - lastTapTime;

        if (tapInterval < 420 && tapInterval > 0) {
            handleOpenSurprise(e);
        } else {
            singleClickTimeout = setTimeout(() => handleSingleTapHint(), 250);
        }
        lastTapTime = currentTime;
    });

    // Máquina de escribir
    function startTypewriter() {
        if (isTyping) return;
        isTyping = true;
        letterBodyContent.innerHTML = '';
        let index = 0;

        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';

        function typeNext() {
            if (index < letterContent.length) {
                letterBodyContent.textContent += letterContent.charAt(index);
                letterBodyContent.appendChild(cursor);
                index++;
                typeWriterTimeout = setTimeout(typeNext, 20);
            } else {
                isTyping = false;
                if (cursor.parentNode) cursor.remove();
            }
        }

        letterBodyContent.onclick = () => {
            if (isTyping) {
                clearTimeout(typeWriterTimeout);
                letterBodyContent.textContent = letterContent;
                isTyping = false;
                if (cursor.parentNode) cursor.remove();
            }
        };

        typeNext();
    }

    // Polaroids 3D
    document.querySelectorAll('.polaroid-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            if (navigator.vibrate) navigator.vibrate(15);
            if (window.romanticAudio) window.romanticAudio.playChime();
        });
    });

    // Constelación Amazigh
    function spawnCompliment(x, y) {
        if (skyHint) skyHint.style.opacity = '0';
        const phrase = compliments[Math.floor(Math.random() * compliments.length)];
        const floater = document.createElement('div');
        floater.className = 'compliment-floater';
        floater.textContent = phrase;
        floater.style.left = `${x}px`;
        floater.style.top = `${y}px`;
        constellationArea.appendChild(floater);
        setTimeout(() => floater.remove(), 2100);
    }

    constellationArea.addEventListener('click', (e) => {
        const rect = constellationArea.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (window.particleSystem) window.particleSystem.addConstellationStar(x, y);
        if (window.romanticAudio) window.romanticAudio.playStarSound();
        spawnCompliment(x, y);
    });

    // Trazar el símbolo Amazigh Yaz ⵣ con estrellas
    btnTraceYaz.addEventListener('click', () => {
        if (!window.particleSystem) return;
        window.particleSystem.clearConstellation();

        const rect = constellationArea.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const scale = Math.min(rect.width, rect.height) * 0.35;

        // Puntos geométricos del símbolo Yaz ⵣ
        const points = [
            // Línea central vertical
            { x: cx, y: cy - scale },
            { x: cx, y: cy - scale * 0.5 },
            { x: cx, y: cy },
            { x: cx, y: cy + scale * 0.5 },
            { x: cx, y: cy + scale },
            // Brazo superior izquierdo
            { x: cx - scale * 0.45, y: cy - scale * 0.8 },
            { x: cx - scale * 0.75, y: cy - scale * 0.5 },
            { x: cx - scale * 0.75, y: cy - scale * 0.2 },
            // Brazo superior derecho
            { x: cx + scale * 0.45, y: cy - scale * 0.8 },
            { x: cx + scale * 0.75, y: cy - scale * 0.5 },
            { x: cx + scale * 0.75, y: cy - scale * 0.2 },
            // Brazo inferior izquierdo
            { x: cx - scale * 0.75, y: cy + scale * 0.2 },
            { x: cx - scale * 0.75, y: cy + scale * 0.5 },
            { x: cx - scale * 0.45, y: cy + scale * 0.8 },
            // Brazo inferior derecho
            { x: cx + scale * 0.75, y: cy + scale * 0.2 },
            { x: cx + scale * 0.75, y: cy + scale * 0.5 },
            { x: cx + scale * 0.45, y: cy + scale * 0.8 }
        ];

        points.forEach((p, i) => {
            setTimeout(() => {
                window.particleSystem.addConstellationStar(p.x, p.y);
                if (window.romanticAudio) window.romanticAudio.playStarSound();
            }, i * 75);
        });

        setTimeout(() => spawnCompliment(cx, cy), points.length * 80);
    });

    btnClearSky.addEventListener('click', () => {
        if (window.particleSystem) window.particleSystem.clearConstellation();
        if (skyHint) skyHint.style.opacity = '1';
    });

    // Pregunta de la Hermandad: Botón SÍ y Botón NO que huye
    btnAnswerYes.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate([60, 90, 60, 90, 160]);
        if (window.romanticAudio) window.romanticAudio.playCelebration();
        if (window.particleSystem) window.particleSystem.launchFireworks();

        proposalQuestionView.style.display = 'none';
        proposalSuccessView.style.display = 'block';
        proposalSuccessView.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    btnContactReply.addEventListener('click', (e) => {
        e.preventDefault();
        if (navigator.vibrate) navigator.vibrate(40);

        const replyText = `Khouya Othmane 👑 Chft l'cadeau dyalk w l'lah ykhellik lya ya weld n-nas... Dima khawa inchaAllah! ⵣ🤝`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(replyText).catch(() => {});
        }
        showToast("¡Message copié! Envoi à Othmane... 👑");

        setTimeout(() => {
            window.location.href = `https://instagram.com/direct/inbox/`;
        }, 600);
    });

    const nopePhrases = [
        "Makaynach la m3a Othmane! 😂",
        "10 snin mabghatch tsali! 😉",
        "Cliqui 3la khawa l'mamat! 👑",
        "Amazigh ma kaygoulch la! ⵣ",
        "Hhh wa safi ghir goli Ah! 🤝"
    ];

    function escapeNoButton() {
        if (navigator.vibrate) navigator.vibrate(20);
        const container = document.getElementById('proposal-buttons-container');
        const cRect = container.getBoundingClientRect();
        const bRect = btnAnswerNo.getBoundingClientRect();

        const maxX = Math.min(180, (cRect.width - bRect.width) / 2);
        const maxY = 60;

        const randomX = (Math.random() - 0.5) * maxX * 1.8;
        const randomY = (Math.random() - 0.5) * maxY * 1.8;

        btnAnswerNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
        btnAnswerNo.textContent = nopePhrases[Math.floor(Math.random() * nopePhrases.length)];
        if (window.romanticAudio) window.romanticAudio.playNopeSound();
    }

    btnAnswerNo.addEventListener('mouseenter', escapeNoButton);
    btnAnswerNo.addEventListener('touchstart', (e) => {
        e.preventDefault();
        escapeNoButton();
    });

    musicToggleBtn.addEventListener('click', () => {
        if (!window.romanticAudio) return;
        window.romanticAudio.init();
        if (!window.romanticAudio.isPlayingMusic) {
            window.romanticAudio.startMusic();
            musicWaves.classList.remove('paused');
            musicText.textContent = "Música 🎵";
        } else {
            const isMuted = window.romanticAudio.toggleMute();
            if (isMuted) {
                musicWaves.classList.add('paused');
                musicText.textContent = "Silencio";
            } else {
                musicWaves.classList.remove('paused');
                musicText.textContent = "Música 🎵";
            }
        }
    });

    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
});
