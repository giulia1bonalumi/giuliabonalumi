<script>
    document.addEventListener("DOMContentLoaded", function () {
        if (window.innerWidth <= 768) {
            window.location.href = "about.html"; // Reindirizza ad About se su mobile
        }
    });
</script>

// Offsets personalizzati
const desktopOffset = 45; // Offset per desktop
const mobileOffset = 165; // Offset per mobile (adatta in base al tuo design)

// Funzione per determinare l'offset attuale
function getScrollOffset() {
    return window.innerWidth <= 768 ? mobileOffset : desktopOffset;
}

// Aggiungi evento click ai link della fixed-text-bar
document.querySelectorAll('.fixed-text-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Previene il comportamento predefinito del link

        // Ottieni il selettore CSS dal data-target
        const targetSelector = this.getAttribute('data-target');
        const targetElement = document.querySelector(targetSelector);

        // Scrolla all'inizio del contenitore se esiste
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top; // Posizione relativa all'inizio della finestra
            const scrollOffset = getScrollOffset(); // Ottieni l'offset attuale
            const scrollPosition = window.scrollY + targetPosition - scrollOffset; // Aggiungi offset

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth' // Scroll fluido
            });
        } else {
            console.error(`Elemento non trovato per il selettore: ${targetSelector}`);
        }
    });
});
