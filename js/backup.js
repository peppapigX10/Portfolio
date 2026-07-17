document.addEventListener('DOMContentLoaded', () => {
    // --- (Keep your button filter/tab code here at the top) ---

    // --- REUSABLE SINE WAVE GENERATOR ---
    function drawSquigglyBorder(card) {
        // Find the canvas element living INSIDE this specific card
        const canvas = card.querySelector('.borderCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const w = card.offsetWidth;
        const h = card.offsetHeight;

        // Fix blurry rendering on high-DPI screens
        canvas.width = w * window.devicePixelRatio;
        canvas.height = h * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        ctx.clearRect(0, 0, w, h);

        // Wave layout configurations
        const inset = 18;         
        const waveLength = 15;    
        const amplitude = 8;     

        ctx.strokeStyle = '#FF721B';
        ctx.lineWidth = 2.0;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = '#F4DDCB';

        ctx.beginPath();

        // 1. TOP LINE (Left to Right)
        ctx.moveTo(inset, inset + Math.sin(inset / waveLength * Math.PI * 2) * amplitude);
        for (let x = inset; x <= w - inset; x++) {
            let y = inset + Math.sin(x / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        // 2. RIGHT LINE (Top to Bottom)
        for (let y = inset; y <= h - inset; y++) {
            let x = (w - inset) + Math.sin(y / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        // 3. BOTTOM LINE (Right to Left)
        for (let x = w - inset; x >= inset; x--) {
            let y = (h - inset) + Math.sin(x / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        // 4. LEFT LINE (Bottom to Top)
        for (let y = h - inset; y >= inset; y--) {
            let x = inset + Math.sin(y / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.fill();   
        ctx.stroke(); 
    }

    // --- TRACK ALL CARDS AUTOMATICALLY ---
    const allCards = document.querySelectorAll('.about-item2');

    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
            // Re-render only the specific card that resized
            drawSquigglyBorder(entry.target);
        });
    });

    // Loop through each text box found on the page and start watching it
    allCards.forEach(card => {
        resizeObserver.observe(card);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // --- Your existing button filtering logic (Left untouched) ---
    const projectsBtn = document.getElementById('projects-btn');
    const codingBtn = document.getElementById('coding-btn');
    const designBtn = document.getElementById('design-btn');

    const codingCards = document.querySelectorAll('.coding-card');
    const designCards = document.querySelectorAll('.design-card');

    projectsBtn.addEventListener('click', () => {
        codingCards.forEach(card => card.classList.remove('hidden'));
        designCards.forEach(card => card.classList.remove('hidden'));
    });

    codingBtn.addEventListener('click', () => {
        codingCards.forEach(card => card.classList.remove('hidden'));
        designCards.forEach(card => card.classList.add('hidden'));
    });

    designBtn.addEventListener('click', () => {
        codingCards.forEach(card => card.classList.add('hidden'));
        designCards.forEach(card => card.classList.remove('hidden'));
    });

  
});