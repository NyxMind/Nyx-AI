/* styles.css - NyxMind Interstellar Theme */

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    font-family: 'Orbitron', sans-serif;
    background: black;
    color: white;
    text-align: center;
    scroll-behavior: smooth;
}

.section {
    min-height: 100vh;
    padding: 50px 20px;
}

.planet-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
    margin-top: 50px;
}

.planet {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, cyan, black);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px cyan;
    animation: floatPlanet 6s infinite alternate ease-in-out;
}

@keyframes floatPlanet {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(10px); }
}
