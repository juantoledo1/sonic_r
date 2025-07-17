import kaplay from "kaplay";

// Obtener las dimensiones actuales del viewport del navegador
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Obtener el devicePixelRatio del dispositivo (ej. 1, 2, 3 para pantallas Retina/HiDPI)
const dpr = window.devicePixelRatio || 1; // Si no está disponible, por defecto es 1

// Configuración para Kaplay
const k = kaplay({
    // --- PARA MEJORAR LA CALIDAD DE IMAGEN EN MÓVIL ---
    // Multiplicamos las dimensiones del viewport por el devicePixelRatio.
    // Esto hace que Kaplay dibuje a una resolución interna más alta para pantallas HiDPI.
    width: viewportWidth * dpr,
    height: viewportHeight * dpr,

    // --- PARA ASEGURAR QUÉ CANVAS USA EL JUEGO ---
    // Le indicamos explícitamente a Kaplay que use el elemento <canvas> que añadimos en index.html.
    canvas: document.getElementById("gameCanvas"), 

    // --- PARA EL POSICIONAMIENTO Y ESCALADO ---
    // 'letterbox: true' centra el juego y añade barras negras para mantener el aspect ratio.
    // Si quieres que el juego NO tenga barras negras y LLENE la pantalla (deformándose si es necesario),
    // podrías intentar buscar una opción como 'stretch: true' en la documentación de Kaplay (si existe).
    // Si quieres que el juego se alinee arriba en lugar de centrarse, Kaplay.js
    // podría tener opciones como `align: "top"` o `origin: "topleft"` para la cámara o el juego en sí.
    // Si no las tiene, el 'letterbox' lo seguirá centrando.
    letterbox: true, 

    // Otras configuraciones
    background: [0, 0, 0],
    global: false,
    buttons: {
        jump: {
            keyboard: ["space"],
            mouse: "left",
        }
    },
    touchToMouse: true, // Una sola vez, ya lo tenías duplicado
    debug: false,
});

export default k;