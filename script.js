document.querySelectorAll('.fixed-text-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Previene il comportamento di default

        const scrollToHeight = parseInt(this.getAttribute('data-scroll'));
        window.scrollTo({
            top: scrollToHeight,
            behavior: 'smooth' // Scroll fluido
        });
    });
});
