// Romantic Surprise Application Logic
document.addEventListener('DOMContentLoaded', () => {

    // Datos personalizados con Darija marroquí, respeto y romanticismo puro para Hiba y Othmane
    const defaultData = {
        recipient: "Hiba",
        sender: "Othmane",
        instagram: "",
        letter: `Bismillah Ar-Rahman Ar-Rahim 🤍

Hiba, bghit nkteb lik had lklimat mn l9elb, 7it nti machi ay bnt... nti insana khasa bzaf f 7yati.

Smiytk "Hiba" (هبة) w nti bssah a7san hiba w ni3ma mn 3nd Allah. Mlli kanfkkr fik wla kanhdro, nhari kaywlli zwin w fih wa7d r-ra7a makatwsfch. Dik de7ka dyalk w dik n-niya li 3ndk katkhlli ay wa7d y7tarmek w ybghik.

3aref blli fhad l7ayat makayninch sodaf, kolchi Maktub w kolchi b lqadr dyal Allah, w kan7md Allah bzaf (Alhamdulillah) 7it tla9ina w 3reft insana b had l9alb lbyed w l'akhlaq zwinin.

Dert lik had l'espace sghir f west njoum ghir bach nchof dik lbtisama dyalk li katdwi dnya. Lah y7fdk lya, ykhllik dima fer7ana w yb3ed 3lik kol chrr inchaAllah. 🤲🤍`,
        proposal: "Wesh katbghi Othmane? 🙈💖"
    };

    let appData = { ...defaultData };
    let hasOpened = false;
    let isTyping = false;
    let typeWriterTimeout = null;

    // Elementos DOM
    const introScreen = document.getElementById('intro-screen');
    const giftCard = document.getElementById('gift-card');
    const openBoxBtn = document.getElementById('open-box-btn');
    const clickFeedback = document.getElementById('click-feedback');
    const mainExperience = document.getElementById('main-experience');

    // Música y controles
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const musicWaves = document.getElementById('music-waves');
    const musicText = document.getElementById('music-text');

    // Elementos de personalización y textos
    const recipientDisplay = document.getElementById('recipient-display-name');
    const letterGreetingText = document.getElementById('letter-greeting-text');
    const letterNameField = document.getElementById('letter-name-field');
    const letterBodyContent = document.getElementById('letter-body-content');
    const letterSignatureField = document.getElementById('letter-signature-field');
    const currentDateField = document.getElementById('current-date-field');
    const proposalSubtext = document.getElementById('proposal-subtext');

    // Propuesta
    const btnAnswerYes = document.getElementById('btn-answer-yes');
    const btnAnswerNo = document.getElementById('btn-answer-no');
    const proposalQuestionView = document.getElementById('proposal-question-view');
    const proposalSuccessView = document.getElementById('proposal-success-view');
    const btnInstagramReply = document.getElementById('btn-instagram-reply');

    // Constelación interactiva
    const constellationArea = document.getElementById('constellation-area');
    const skyHint = document.getElementById('sky-hint');
    const btnTraceHeart = document.getElementById('btn-trace-heart');
    const btnClearSky = document.getElementById('btn-clear-sky');

    // Modal
    const customizeBtn = document.getElementById('customize-btn');
    const customModal = document.getElementById('custom-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const inputRecipient = document.getElementById('input-recipient');
    const inputSender = document.getElementById('input-sender');
    const inputInstagram = document.getElementById('input-instagram');
    const inputLetter = document.getElementById('input-letter');
    const inputProposal = document.getElementById('input-proposal');
    const btnSaveCustom = document.getElementById('btn-save-custom');
    const btnCopyInstagramLink = document.getElementById('btn-copy-instagram-link');
    const toast = document.getElementById('toast');

    // Frases y cumplidos flotantes para el cielo en Darija marroquí
    const compliments = [
        "Hiba, a7san hiba mn 3nd Allah 🌸",
        "De7ka dyalk katwrrer dnya ✨",
        "Lah y7fdk lya w ynwrek 🤲",
        "Qalb kbir w byed b7al tlejj 💛",
        "Maktub zwin bzaf 🌹",
        "Nour f 3inik (TabarakAllah) 💫",
        "Insana khasa w drayfa 🌌",
        "Allah ykhellik dima fer7ana 🕊️"
    ];

    // Cargar datos desde URL (si se envió por Instagram como enlace personalizado)
    function loadFromUrlOrStorage() {
        try {
            if (window.location.hash.startsWith('#p=')) {
                const encoded = window.location.hash.slice(3);
                const decoded = JSON.parse(decodeURIComponent(escape(atob(encoded))));
                appData = { ...defaultData, ...decoded };
            } else {
                const saved = localStorage.getItem('regalo_romantico_data');
                if (saved) {
                    appData = { ...defaultData, ...JSON.parse(saved) };
                }
            }
        } catch (e) {
            console.warn("No se pudieron cargar datos personalizados:", e);
        }
        applyDataToUI();
    }

    function applyDataToUI() {
        const name = appData.recipient.trim() || "Hiba";
        recipientDisplay.textContent = name;
        letterGreetingText.innerHTML = `Khti w 7bibti <span id="letter-name-field" style="color: var(--primary-gold);">${name}</span>,`;
        letterSignatureField.textContent = `Mn 3nd ${appData.sender.trim() || 'Othmane'} li kaybghik bzaf 🤍✨`;
        proposalSubtext.textContent = appData.proposal.trim() || defaultData.proposal;

        // Fecha actual formateada en español
        const now = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        currentDateField.textContent = now.toLocaleDateString('es-ES', options);

        // Enlace de Instagram
        const handle = appData.instagram.replace('@', '').trim();
        if (handle) {
            btnInstagramReply.href = `https://ig.me/m/${handle}`;
        } else {
            btnInstagramReply.href = "https://instagram.com";
        }

        // Rellenar formulario modal
        inputRecipient.value = appData.recipient;
        inputSender.value = appData.sender;
        inputInstagram.value = appData.instagram;
        inputLetter.value = appData.letter;
        inputProposal.value = appData.proposal;
    }

    loadFromUrlOrStorage();

    // ========================================================
    // FASE 0: LÓGICA DE DOBLE CLIC Y DOBLE TAP PARA ABRIR (ANDROID Y PC)
    // ========================================================
    let lastTapTime = 0;
    let singleClickTimeout = null;

    function handleOpenSurprise(e) {
        if (hasOpened) return;
        hasOpened = true;

        if (singleClickTimeout) clearTimeout(singleClickTimeout);

        // Respuesta háptica en móviles Android
        if (navigator.vibrate) {
            navigator.vibrate([40, 60, 40, 80, 50]);
        }

        // Coordenadas del efecto de explosión
        let clientX = window.innerWidth / 2;
        let clientY = window.innerHeight / 2;
        if (e && e.clientX) {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        // Efectos de sonido y partículas
        if (window.romanticAudio) {
            window.romanticAudio.playOpenSound();
            window.romanticAudio.startRomanticMusic();
            musicWaves.classList.remove('paused');
        }

        if (window.particleSystem) {
            window.particleSystem.burstGift(clientX, clientY);
        }

        // Animación suave de transición
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
        clickFeedback.textContent = "¡Casi! Toca otra vez rápido para abrir tu regalo... ✨";
        clickFeedback.style.opacity = '1';
        setTimeout(() => {
            if (clickFeedback) clickFeedback.style.opacity = '0.5';
        }, 1500);
    }

    // Doble clic en PC
    giftCard.addEventListener('dblclick', (e) => {
        handleOpenSurprise(e);
    });

    openBoxBtn.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        handleOpenSurprise(e);
    });

    // Clic / Toque con detección de doble toque optimizada para Android
    giftCard.addEventListener('click', (e) => {
        const currentTime = new Date().getTime();
        const tapInterval = currentTime - lastTapTime;

        if (tapInterval < 420 && tapInterval > 0) {
            // Doble toque rápido detectado en móvil o PC
            handleOpenSurprise(e);
        } else {
            // Primer toque, aviso interactivo
            singleClickTimeout = setTimeout(() => {
                handleSingleTapHint();
            }, 250);
        }
        lastTapTime = currentTime;
    });

    // ========================================================
    // FASE 1: EFECTO MÁQUINA DE ESCRIBIR EN LA CARTA
    // ========================================================
    function startTypewriter() {
        if (isTyping) return;
        isTyping = true;
        letterBodyContent.innerHTML = '';
        
        const fullText = appData.letter;
        let index = 0;

        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';

        function typeNext() {
            if (index < fullText.length) {
                const char = fullText.charAt(index);
                letterBodyContent.textContent += char;
                letterBodyContent.appendChild(cursor);
                index++;
                typeWriterTimeout = setTimeout(typeNext, 22);
            } else {
                isTyping = false;
                if (cursor.parentNode) cursor.remove();
            }
        }

        // Si el usuario hace clic en la carta, se completa inmediatamente
        letterBodyContent.onclick = () => {
            if (isTyping) {
                clearTimeout(typeWriterTimeout);
                letterBodyContent.textContent = fullText;
                isTyping = false;
                if (cursor.parentNode) cursor.remove();
            }
        };

        typeNext();
    }

    // ========================================================
    // TARJETAS POLAROID 3D INTERACTIVAS
    // ========================================================
    const polaroidCards = document.querySelectorAll('.polaroid-card');
    polaroidCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
            if (window.romanticAudio) window.romanticAudio.playChime();
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                card.classList.toggle('flipped');
                if (window.romanticAudio) window.romanticAudio.playChime();
            }
        });
    });

    // ========================================================
    // CIELO DE DESEOS Y CONSTELACIÓN
    // ========================================================
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

        if (window.particleSystem) {
            window.particleSystem.addConstellationStar(x, y);
        }
        if (window.romanticAudio) {
            window.romanticAudio.playStarSound();
        }
        spawnCompliment(x, y);
    });

    // Trazar constelación en forma de corazón geométrico
    btnTraceHeart.addEventListener('click', () => {
        if (!window.particleSystem) return;
        window.particleSystem.clearConstellation();

        const rect = constellationArea.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const r = Math.min(rect.width, rect.height) * 0.28;

        const points = 16;
        for (let i = 0; i < points; i++) {
            const t = (i / points) * Math.PI * 2;
            // Ecuación paramétrica del corazón
            const hx = 16 * Math.pow(Math.sin(t), 3);
            const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            const finalX = cx + (hx / 16) * r * 1.5;
            const finalY = cy + (hy / 16) * r * 1.5;

            setTimeout(() => {
                window.particleSystem.addConstellationStar(finalX, finalY);
                if (window.romanticAudio) window.romanticAudio.playStarSound();
            }, i * 90);
        }

        setTimeout(() => {
            spawnCompliment(cx, cy);
        }, points * 95);
    });

    btnClearSky.addEventListener('click', () => {
        if (window.particleSystem) window.particleSystem.clearConstellation();
        if (skyHint) skyHint.style.opacity = '1';
    });

    // ========================================================
    // LA PREGUNTA ESPECIAL: BOTÓN "SÍ" Y BOTÓN "NO" JUGUETÓN
    // ========================================================
    btnAnswerYes.addEventListener('click', () => {
        if (navigator.vibrate) navigator.vibrate([60, 90, 60, 90, 160]);
        if (window.romanticAudio) window.romanticAudio.playCelebration();
        if (window.particleSystem) window.particleSystem.launchFireworks();

        proposalQuestionView.style.display = 'none';
        proposalSuccessView.style.display = 'block';

        // Scroll suave para que se vea el mensaje de celebración
        proposalSuccessView.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Acción al pulsar responder por Instagram
    btnInstagramReply.addEventListener('click', (e) => {
        e.preventDefault();
        if (navigator.vibrate) navigator.vibrate(40);
        
        const sender = appData.sender.trim() || 'Othmane';
        const replyText = `Ah ya ${sender}, chft l'cadeau dyalk w 3jbni bzaf bzaf... w 7ta ana kanbghik 🙈💖`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(replyText).catch(() => {});
        }

        showToast("¡Copié ton message! Ouverture d'Instagram... 💌");

        const handle = appData.instagram.replace('@', '').trim();
        setTimeout(() => {
            if (handle) {
                window.location.href = `https://ig.me/m/${handle}`;
            } else {
                window.location.href = `https://instagram.com/direct/inbox/`;
            }
        }, 600);
    });

    // Botón juguetón "No" que huye al acercarse el ratón o tocarlo (No puede decir que no!)
    const nopePhrases = [
        "Wesh bssah la? Hhh la la! 😂",
        "Ghir goli Ah! 😉",
        "Had l'bouton khaser! 🙈",
        "L'Maktub kaygol Ah! ✨",
        "Zidi jrrbi! 😜",
        "Makaynach la m3a Othmane! 🥰"
    ];

    function escapeNoButton() {
        if (navigator.vibrate) navigator.vibrate(20);

        const container = document.getElementById('proposal-buttons-container');
        const cRect = container.getBoundingClientRect();
        const bRect = btnAnswerNo.getBoundingClientRect();

        // Calcular posición aleatoria dentro de márgenes razonables
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

    // ========================================================
    // CONTROL DE MÚSICA
    // ========================================================
    musicToggleBtn.addEventListener('click', () => {
        if (!window.romanticAudio) return;
        window.romanticAudio.init();
        if (!window.romanticAudio.isPlayingMusic) {
            window.romanticAudio.startRomanticMusic();
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

    // ========================================================
    // MODAL DE PERSONALIZACIÓN Y GENERADOR DE ENLACES INSTAGRAM
    // ========================================================
    customizeBtn.addEventListener('click', () => {
        customModal.classList.add('active');
    });

    modalCloseBtn.addEventListener('click', () => {
        customModal.classList.remove('active');
    });

    customModal.addEventListener('click', (e) => {
        if (e.target === customModal) customModal.classList.remove('active');
    });

    btnSaveCustom.addEventListener('click', () => {
        appData.recipient = inputRecipient.value.trim() || defaultData.recipient;
        appData.sender = inputSender.value.trim() || defaultData.sender;
        appData.instagram = inputInstagram.value.trim();
        appData.letter = inputLetter.value.trim() || defaultData.letter;
        appData.proposal = inputProposal.value.trim() || defaultData.proposal;

        localStorage.setItem('regalo_romantico_data', JSON.stringify(appData));
        applyDataToUI();

        if (hasOpened) {
            startTypewriter();
        }

        showToast("¡Personalización guardada con éxito! ✨");
        customModal.classList.remove('active');
    });

    btnCopyInstagramLink.addEventListener('click', () => {
        // Codificar estado actual en base64
        const dataToExport = {
            recipient: inputRecipient.value.trim() || defaultData.recipient,
            sender: inputSender.value.trim() || defaultData.sender,
            instagram: inputInstagram.value.trim(),
            letter: inputLetter.value.trim() || defaultData.letter,
            proposal: inputProposal.value.trim() || defaultData.proposal
        };

        const jsonStr = JSON.stringify(dataToExport);
        const encoded = btoa(unescape(encodeURIComponent(jsonStr)));
        const shareUrl = `${window.location.origin}${window.location.pathname}#p=${encoded}`;

        navigator.clipboard.writeText(shareUrl).then(() => {
            showToast("¡Enlace único copiado! Pégalo en Instagram 💌");
        }).catch(() => {
            prompt("Copia este enlace para enviárselo por Instagram:", shareUrl);
        });
    });

    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    }
});
