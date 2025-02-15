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

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const worksSection = document.getElementById("works");
    const showWorksButton = document.getElementById("show-works");

    // Se siamo su mobile, mostra solo "About" all'inizio
    if (window.innerWidth <= 768) {
        worksSection.style.display = "none"; // Nasconde i lavori all'apertura
    }

    // Quando si clicca su "Works", mostra i lavori e nasconde "About"
    showWorksButton.addEventListener("click", function (event) {
        event.preventDefault();
        aboutSection.style.display = "none";
        worksSection.style.display = "block";
    });
});
