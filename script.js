// Função para gerar uma cor aleatória
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Função para clarear a cor
function lightenColor(color) {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    // Aumenta cada componente RGB para clarear a cor
    r = Math.min(255, r + 40);
    g = Math.min(255, g + 40);
    b = Math.min(255, b + 40);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Seleciona o elemento da esfera
const sphere = document.getElementById('sphere');

// Evento para mudar a cor ao passar o mouse
sphere.addEventListener('mouseover', () => {
    const newColor = getRandomColor();
    const lightColor = lightenColor(newColor); // Cor mais clara para o brilho

    sphere.style.backgroundColor = newColor;
    sphere.style.backgroundImage = `radial-gradient(circle, ${lightColor} 50%, ${newColor} 80%)`;
    sphere.style.boxShadow = `0 10px 60px rgba(0, 0, 0, 0.3), 0 0 100px ${lightColor}`;
});

// Evento para resetar a cor e o brilho quando o mouse sair
sphere.addEventListener('mouseout', () => {
    const originalColor = getRandomColor(); // Cor original
    sphere.style.backgroundColor = originalColor;
    sphere.style.backgroundImage = `radial-gradient(circle, rgba(255, 255, 255, 0.1) 50%, ${originalColor} 80%)`;
    sphere.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.2)`;
});