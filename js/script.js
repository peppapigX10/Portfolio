document.addEventListener('DOMContentLoaded', () => {
    const projectsBtn = document.getElementById('projects-btn');
    const codingBtn = document.getElementById('coding-btn');
    const designBtn = document.getElementById('design-btn');

    const codingCards = document.querySelectorAll('.coding-card');
    const designCards = document.querySelectorAll('.design-card');

    projectsBtn.addEventListener('click', () => {
        codingCards.forEach(card => card.classList.remove('hidden'));
        designCards.forEach(card => card.classList.remove('hidden'));
    })

    codingBtn.addEventListener('click', () => {
        codingCards.forEach(card => card.classList.remove('hidden'));
        designCards.forEach(card => card.classList.add('hidden'));
    })

    designBtn.addEventListener('click', () => {
        codingCards.forEach(card => card.classList.add('hidden'));
        designCards.forEach(card => card.classList.remove('hidden'));
    })
})