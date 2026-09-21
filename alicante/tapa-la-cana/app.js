/**
 * TAPA LA CAÑA CAFÉ & BAR - ALICANTE
 * Interactive Table Reservation & Rice Pre-Order Automation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Footer Year
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Reservation date setup (Tuesday to Sunday)
  const resDateInput = document.getElementById('resDate');
  if (resDateInput) {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);

    // If Monday (1), jump to Tuesday (2)
    if (nextDay.getDay() === 1) nextDay.setDate(nextDay.getDate() + 1);

    const yyyy = nextDay.getFullYear();
    const mm = String(nextDay.getMonth() + 1).padStart(2, '0');
    const dd = String(nextDay.getDate()).padStart(2, '0');
    resDateInput.min = `${yyyy}-${mm}-${dd}`;
    resDateInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Mobile Drawer
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const dItems = document.querySelectorAll('.d-item');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    dItems.forEach(item => item.addEventListener('click', closeDrawer));
  }

  /* -------------------------------------------------------------------------- */
  /* Reservation Wizard Stepper                                                 */
  /* -------------------------------------------------------------------------- */
  const sPill1 = document.getElementById('sPill1');
  const sPill2 = document.getElementById('sPill2');
  const sPill3 = document.getElementById('sPill3');

  const wizardStep1 = document.getElementById('wizardStep1');
  const wizardStep2 = document.getElementById('wizardStep2');
  const wizardStep3 = document.getElementById('wizardStep3');

  const btnNextToStep2 = document.getElementById('btnNextToStep2');
  const btnBackToStep1 = document.getElementById('btnBackToStep1');
  const btnNextToStep3 = document.getElementById('btnNextToStep3');
  const btnBackToStep2 = document.getElementById('btnBackToStep2');
  const btnSubmitReservation = document.getElementById('btnSubmitReservation');

  function goToStep(step) {
    wizardStep1.classList.remove('active');
    wizardStep2.classList.remove('active');
    wizardStep3.classList.remove('active');

    sPill1.classList.remove('active');
    sPill2.classList.remove('active');
    sPill3.classList.remove('active');

    if (step === 1) {
      wizardStep1.classList.add('active');
      sPill1.classList.add('active');
    } else if (step === 2) {
      wizardStep2.classList.add('active');
      sPill1.classList.add('active');
      sPill2.classList.add('active');
    } else if (step === 3) {
      wizardStep3.classList.add('active');
      sPill1.classList.add('active');
      sPill2.classList.add('active');
      sPill3.classList.add('active');
      updateTableTicket();
    }
  }

  if (btnNextToStep2) btnNextToStep2.addEventListener('click', () => goToStep(2));
  if (btnBackToStep1) btnBackToStep1.addEventListener('click', () => goToStep(1));
  if (btnNextToStep3) btnNextToStep3.addEventListener('click', () => goToStep(3));
  if (btnBackToStep2) btnBackToStep2.addEventListener('click', () => goToStep(2));

  /* -------------------------------------------------------------------------- */
  /* Table Ticket Summary & WhatsApp Generation                                 */
  /* -------------------------------------------------------------------------- */
  function getSelectedZone() {
    const radio = document.querySelector('input[name="table_zone"]:checked');
    return radio ? radio.value : 'Terraza Exterior';
  }

  function getSelectedRice() {
    const radio = document.querySelector('input[name="rice_order"]:checked');
    return radio ? radio.value : 'Tapeo a la carta';
  }

  function updateTableTicket() {
    const zone = getSelectedZone();
    const guests = document.getElementById('numGuests').value;
    const rice = getSelectedRice();
    const date = resDateInput ? resDateInput.value : 'Próxima fecha';
    const shift = document.getElementById('resShift').value;
    const notes = document.getElementById('dietaryNotes').value.trim() || 'Sin notas especiales';

    const tableTicketBody = document.getElementById('tableTicketBody');
    if (tableTicketBody) {
      tableTicketBody.innerHTML = `
        <div class="tt-row"><strong>Mesa / Zona:</strong> <span>${zone} (${guests})</span></div>
        <div class="tt-row"><strong>Arroz encargado:</strong> <span>${rice}</span></div>
        <div class="tt-row"><strong>Día y Turno:</strong> <span>${date} — ${shift}</span></div>
        <div class="tt-row"><strong>Observaciones:</strong> <span>${notes}</span></div>
      `;
    }
  }

  // Modal and Submission
  const resModal = document.getElementById('resModal');
  const btnCloseResModal = document.getElementById('btnCloseResModal');
  const btnOpenWhatsAppWarm = document.getElementById('btnOpenWhatsAppWarm');
  const resPreviewBox = document.getElementById('resPreviewBox');

  if (btnSubmitReservation) {
    btnSubmitReservation.addEventListener('click', () => {
      const resName = document.getElementById('resName').value.trim();
      const resPhone = document.getElementById('resPhone').value.trim();

      if (!resName || !resPhone) {
        alert('Por favor indica tu nombre y teléfono de contacto para registrar la reserva.');
        return;
      }

      const zone = getSelectedZone();
      const guests = document.getElementById('numGuests').value;
      const rice = getSelectedRice();
      const date = resDateInput.value;
      const shift = document.getElementById('resShift').value;
      const notes = document.getElementById('dietaryNotes').value.trim() || 'Sin observaciones previas';

      const reservationMessage = 
`*SOLICITUD DE RESERVA DE MESA - TAPA LA CAÑA*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Titular:* ${resName}
📞 *Teléfono:* ${resPhone}
👥 *Comensales:* ${guests}
📍 *Zona preferente:* ${zone}
🥘 *Arroz / Comanda:* ${rice}
📅 *Fecha:* ${date}
⏰ *Turno:* ${shift}
📝 *Comentarios / Alergias:*
"${notes}"
━━━━━━━━━━━━━━━━━━━━━━
_Enviado desde la web de Tapa La Caña Café & Bar (C/ Sacerdote Isidro Albert 4, Alicante)_`;

      const encoded = encodeURIComponent(reservationMessage);
      const waUrl = `https://wa.me/34722686334?text=${encoded}`;

      if (resPreviewBox) {
        resPreviewBox.textContent = reservationMessage;
      }
      if (btnOpenWhatsAppWarm) {
        btnOpenWhatsAppWarm.href = waUrl;
      }

      resModal.classList.add('open');
    });
  }

  if (btnCloseResModal) {
    btnCloseResModal.addEventListener('click', () => resModal.classList.remove('open'));
  }

  if (resModal) {
    resModal.addEventListener('click', (e) => {
      if (e.target === resModal) resModal.classList.remove('open');
    });
  }

  /* -------------------------------------------------------------------------- */
  /* Interactive Menu Catalog Data & Tabs                                       */
  /* -------------------------------------------------------------------------- */
  const menuData = {
    "arroces": [
      {
        name: "Arroz del Senyoret",
        price: "14.00€ / ración",
        desc: "Todo el marisco limpio y pelado (gambas de la bahía, sepia, rape y calamar) cocinado con caldo casero de pescado de roca.",
        tag: "Recomendado de la Casa"
      },
      {
        name: "Arroz a Banda Alicantino",
        price: "13.00€ / ración",
        desc: "El clásico de la costa alicantina elaborado en paella fina con salmorreta y sepia, acompañado de alioli casero.",
        tag: "Tradición Costera"
      },
      {
        name: "Arroz de Magro, Costilla y Verduras",
        price: "13.00€ / ración",
        desc: "Magro de cerdo tierno, costillejas adobadas, alcachofas de temporada, pimiento rojo y judías verdes.",
        tag: "Sabor de Campo"
      },
      {
        name: "Fideuà de Marisco con Calamar y Gambón",
        price: "14.50€ / ración",
        desc: "Fideo fino tostado al punto, gambones de la bahía, chipirones y fondo oscuro con intenso sabor a mar.",
        tag: "Cocina Marinera"
      },
      {
        name: "Arroz Negro con Sepia y Ajos Tiernos",
        price: "14.00€ / ración",
        desc: "Arroz con tinta natural de sepia, tropezones tiernos de chipirón y ajos tiernos salteados.",
        tag: "Socarrat Intenso"
      }
    ],
    "tapas": [
      {
        name: "Calamares a la Romana de Bahía",
        price: "10.50€",
        desc: "Anillas de calamar fresco rebozadas en harina fina con crujiente dorado y limón alicantino.",
        tag: "Ración Popular"
      },
      {
        name: "Sepia a la Plancha con Salsa Verde",
        price: "12.00€",
        desc: "Sepia entera de playa dorada a la plancha con aceite de oliva virgen extra, ajo y perejil fresco.",
        tag: "Producto Fresco"
      },
      {
        name: "Croquetas Caseras de Jamón Ibérico (6 uds)",
        price: "8.50€",
        desc: "Bechamel cremosa elaborada a mano con picadillo de jamón de bellota y rebozado panko crujiente.",
        tag: "100% Caseras"
      },
      {
        name: "Patatas Bravas 'La Caña'",
        price: "6.50€",
        desc: "Patata agria pochada y frita con nuestra salsa brava casera de pimentón picante y alioli de mortero.",
        tag: "Imprescindible"
      },
      {
        name: "Tosta de Escalivada con Anchoa del Cantábrico",
        price: "5.50€",
        desc: "Pimiento, berenjena y cebolla asada a la leña sobre pan rústico con lomos de anchoa curada.",
        tag: "Tosta de Autor"
      },
      {
        name: "Pulpo a la Gallega con Pimentón de la Vera",
        price: "15.00€",
        desc: "Pata de pulpo tierna servida sobre cama de patata cocida, sal en escamas y aceite de oliva virgen extra.",
        tag: "Especialidad"
      }
    ],
    "carnes": [
      {
        name: "Solomillo Ibérico al Pedro Ximénez",
        price: "14.50€",
        desc: "Medallones de solomillo de cerdo ibérico con reducción dulce de vino Pedro Ximénez y pasas.",
        tag: "Plato Estrella"
      },
      {
        name: "Entrecot de Ternera a la Parrilla (350g)",
        price: "18.50€",
        desc: "Corte de ternera madurada servido al punto deseado con patatas gajo y pimientos de padrón.",
        tag: "Carnes Nobles"
      },
      {
        name: "Emperador a la Plancha con Ensalada",
        price: "13.00€",
        desc: "Filete jugoso de pez espada a la plancha con majado de ajo, limón y perejil con guarnición.",
        tag: "Pescado de Lonja"
      }
    ],
    "postres": [
      {
        name: "Tarta de Queso Horneada Casera",
        price: "5.00€",
        desc: "Cremosa en el centro, horneada a baja temperatura con base de galleta y coulis de frutos rojos.",
        tag: "Postre Casero"
      },
      {
        name: "Flan de Turrón de Jijona Tradicional",
        price: "4.50€",
        desc: "Elaborado con auténtico turrón blando de Jijona con caramelo tostado y nata montada fresca.",
        tag: "Típico Alicantino"
      },
      {
        name: "Coulant de Chocolate con Helado de Vainilla",
        price: "5.50€",
        desc: "Bizcocho caliente con corazón de chocolate negro fundente y bola de helado artesano.",
        tag: "Para Chocoadictos"
      }
    ]
  };

  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuDishesGrid = document.getElementById('menuDishesGrid');

  function renderDishes(category) {
    if (!menuDishesGrid) return;
    const items = menuData[category] || [];

    menuDishesGrid.innerHTML = items.map(d => `
      <div class="dish-card">
        <div>
          <div class="d-top">
            <h4 class="d-title">${d.name}</h4>
            <span class="d-price">${d.price}</span>
          </div>
          <p class="d-desc">${d.desc}</p>
        </div>
        <span class="d-tag">${d.tag}</span>
      </div>
    `).join('');
  }

  if (menuTabs.length > 0) {
    // Initial category
    renderDishes('arroces');

    menuTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.getAttribute('data-cat');
        renderDishes(cat);
      });
    });
  }
});
