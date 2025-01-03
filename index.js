const cards = document.querySelectorAll('.card:not(.featured)');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('featured');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('featured');
    });
});

