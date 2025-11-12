// === ROCKET LAUNCH ON LOAD ===
document.addEventListener("DOMContentLoaded", () => {
    const rocket = document.createElement("div");
    rocket.innerHTML = "ROCKET";
    rocket.style.cssText = `
        position: fixed; bottom: 50px; left: 50%; transform: translateX(-50%);
        font-size: 28px; font-weight: bold; color: #fff; z-index: 9999;
        animation: launch 2s ease-out forwards; pointer-events: none;
    `;
    document.body.appendChild(rocket);
    setTimeout(() => rocket.remove(), 2000);
});

// === STARFIELD v2 — GUARANTEED VISIBLE ===
function spawnStars() {
    const container = document.getElementById('stars');
    if (!container) {
        console.error('Stars container not found!');
        return;
    }

    // Clear any old stars
    container.innerHTML = '';

    const count = 200;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random X
        star.style.left = Math.random() * 100 + 'vw';

        // Start off-screen below
        star.style.top = '100vh';

        // Random size
        const size = Math.random() * 2.5 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // Random speed
        const duration = Math.random() * 8 + 6;
        star.style.animationDuration = duration + 's';

        // Random delay
        star.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(star);
    }
}

// Run IMMEDIATELY + on load
spawnStars();
window.addEventListener('load', () => {
    setTimeout(spawnStars, 100); // Double spawn for safety
});