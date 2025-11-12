/* === FULL DASH CSS CLONE === */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

body {
    background: radial-gradient(circle at center, #0f0c29, #302b63, #24243e) !important;
    font-family: 'Orbitron', sans-serif;
    color: #eee !important;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
}

/* Glass Cards */
.glass-card {
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
    transition: all 0.3s ease;
    padding: 20px;
    margin-bottom: 4rem;
}
.glass-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 255, 255, 0.4);
}

/* Text */
.text-info { color: #0ff !important; font-weight: bold; }
.glow-title {
    animation: glow 2s ease-in-out infinite alternate;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 2.8rem;
    text-align: center;
}
@keyframes glow {
    from { text-shadow: 0 0 10px #0ff; }
    to { text-shadow: 0 0 20px #f0f, 0 0 30px #0ff; }
}

/* Slider */
.slider-thumb {
    -webkit-appearance: none;
    width: 48%;
    height: 8px;
    background: #333;
    outline: none;
    border: 1px solid #0ff;
    border-radius: 4px;
}
.slider-thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #0ff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px #0ff;
}
.slider-thumb::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #0ff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px #0ff;
}

/* Chart Containers */
#stacked-area, #dual-axis, #small-multiples {
    background: rgba(0, 0, 0, 0.3) !important;
    border-radius: 12px !important;
    margin: 2rem 0 !important;
    padding: 10px;
}

/* Header */
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

/* Container */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Starfield */
.stars {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    z-index: -1 !important;
    pointer-events: none !important;
}
.star {
    position: absolute !important;
    background: #fff !important;
    border-radius: 50% !important;
    box-shadow: 0 0 8px #0ff, 0 0 16px #0ff !important;
    animation: float 10s linear infinite !important;
}
@keyframes float {
    0% { transform: translateY(100vh); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100px); opacity: 0; }
}

/* === LOCK ALL GRAPHS — NO GROWTH EVER === */
#stacked-area,
#dual-axis {
    height: 500px !important;
    min-height: 500px !important;
    max-height: 500px !important;
    overflow: hidden !important;
}

#small-multiples {
    height: 900px !important;  /* 3 countries × 300px */
    min-height: 300px !important;  /* 1 country fallback */
    max-height: 900px !important;
    overflow: hidden !important;
}
