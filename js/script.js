document.addEventListener('DOMContentLoaded', () => {
    // --- (Keep your button filter/tab code here at the top) ---

    // --- REUSABLE SINE WAVE GENERATOR ---
    function drawSquigglyBorder(card) {
        const canvas = card.querySelector('.borderCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const w = card.offsetWidth;
        const h = card.offsetHeight;

        // Fix blurry rendering on high-res screens
        canvas.width = w * window.devicePixelRatio;
        canvas.height = h * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        ctx.clearRect(0, 0, w, h);

        const inset = 18;         
        const waveLength = 35;    
        const amplitude = 6;     

        ctx.strokeStyle = '#FF721B';
        ctx.lineWidth = 2.0;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.fillStyle = '#F4DDCB';
        ctx.beginPath();

        // 1. TOP LINE
        ctx.moveTo(inset, inset + Math.sin(inset / waveLength * Math.PI * 2) * amplitude);
        for (let x = inset; x <= w - inset; x++) {
            let y = inset + Math.sin(x / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        // 2. RIGHT LINE
        for (let y = inset; y <= h - inset; y++) {
            let x = (w - inset) + Math.sin(y / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        // 3. BOTTOM LINE
        for (let x = w - inset; x >= inset; x--) {
            let y = (h - inset) + Math.sin(x / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        // 4. LEFT LINE
        for (let y = h - inset; y >= inset; y--) {
            let x = inset + Math.sin(y / waveLength * Math.PI * 2) * amplitude;
            ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.fill();   
        ctx.stroke(); 
    }

    // --- TARGET BOTH CLASSES AT ONCE ---
    const allCards = document.querySelectorAll('.about-item2, .about-item3');

    const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach(entry => {
            drawSquigglyBorder(entry.target);
        });
    });

    // Start watching every card found in the combined list
    allCards.forEach(card => {
        resizeObserver.observe(card);
    });
});


document.addEventListener('DOMContentLoaded', () => {
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