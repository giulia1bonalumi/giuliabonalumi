// Offsets personalizzati per l’header fisso
const desktopOffset = 45;  // Offset per desktop
const mobileOffset = 165;  // Offset per mobile

// Funzione che restituisce l’offset corretto
function getScrollOffset() {
    return window.innerWidth <= 768 ? mobileOffset : desktopOffset;
}

// Funzione per scrollare verso un elemento
function smoothScrollTo(targetSelector) {
    const targetElement = document.querySelector(targetSelector);

    if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top;
        const scrollOffset = getScrollOffset();
        const scrollPosition = window.scrollY + targetPosition - scrollOffset;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    } else {
        console.error(`Elemento non trovato per il selettore: ${targetSelector}`);
    }
}

// --- MENU FISSO ---
document.querySelectorAll('.fixed-text-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSelector = this.getAttribute('data-target');
        smoothScrollTo(targetSelector);
    });
});

// --- BACK TO TOP ---
document.querySelector('.back-to-top').addEventListener('click', function (event) {
    event.preventDefault();

    // Scrolla fino all'inizio della pagina, tenendo conto dell’offset
    const scrollOffset = getScrollOffset();

    window.scrollTo({
        top: 0 - scrollOffset,
        behavior: 'smooth'
    });
});
