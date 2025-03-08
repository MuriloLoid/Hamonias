    document.querySelector('.circle-container').innerHTML = circuloSVG;

    // Add click interaction for color samples
    const cores = document.querySelectorAll('.cor');
    cores.forEach(cor => {
        cor.addEventListener('click', () => {
            cor.style.transform = 'scale(1.1)';
            setTimeout(() => {
                cor.style.transform = 'scale(1)';
            }, 200);
        });
    });
});

function createGradients() {
    const colors = [
        ['#FF0000', '#FF7F00'], // Vermelho para Laranja
        ['#FF7F00', '#FFFF00'], // Laranja para Amarelo
        ['#FFFF00', '#00FF00'], // Amarelo para Verde
        ['#00FF00', '#00FFFF'], // Verde para Ciano
        ['#00FFFF', '#0000FF'], // Ciano para Azul
        ['#0000FF', '#FF00FF'], // Azul para Magenta
        ['#FF00FF', '#FF0000']  // Magenta para Vermelho
    ];

    return colors.map((color, i) => `
        <linearGradient id="grad${i}" gradientTransform="rotate(${i * 51.43})">
            <stop offset="0%" stop-color="${color[0]}"/>
            <stop offset="100%" stop-color="${color[1]}"/>
        </linearGradient>
    `).join('');
}

function createColorWheel() {
    let paths = '';
    for (let i = 0; i < 7; i++) {
        const startAngle = i * 51.43;
        const endAngle = (i + 1) * 51.43;
        paths += `
            <path d="
                M 100 100
                L ${100 + 80 * Math.cos(startAngle * Math.PI / 180)} ${100 + 80 * Math.sin(startAngle * Math.PI / 180)}
                A 80 80 0 0 1 ${100 + 80 * Math.cos(endAngle * Math.PI / 180)} ${100 + 80 * Math.sin(endAngle * Math.PI / 180)}
                Z
            " fill="url(#grad${i})" />
        `;
    }
    return paths;
}

function showColorInfo(color) {
    // Criar elemento de informação
    const info = document.createElement('div');
    info.className = 'color-description modern-card';
    
    // Get color name using an array of common colors
    const colorName = getColorName(color);
    
    info.innerHTML = `
        <h3>Cor Selecionada</h3>
        <div class="color-preview" style="background-color: ${color}"></div>
        <p>Valor: ${color}</p>
        <p>Nome aproximado: ${colorName}</p>
        <p>Sugestão de uso: ${getColorUsageSuggestion(colorName)}</p>
    `;
    
    // Encontrar ou criar container
    let container = document.querySelector('.color-info-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'color-info-container';
        document.querySelector('.circle-container').after(container);
    }
    
    container.innerHTML = '';
    container.appendChild(info);
}

function getColorName(color) {
    // Simplified color naming logic
    const colors = {
        '#FF0000': 'Vermelho',
        '#00FF00': 'Verde',
        '#0000FF': 'Azul',
        '#FFFF00': 'Amarelo',
        '#FF00FF': 'Magenta',
        '#00FFFF': 'Ciano',
        '#FF7F00': 'Laranja'
    };
    return colors[color.toUpperCase()] || 'Cor personalizada';
}

function getColorUsageSuggestion(colorName) {
    const suggestions = {
        'Vermelho': 'Ótimo para chamadas à ação e alertas',
        'Verde': 'Ideal para feedback positivo e elementos naturais',
        'Azul': 'Perfeito para links e elementos corporativos',
        'Amarelo': 'Bom para destacar informações importantes',
        'Magenta': 'Útil para elementos decorativos e criativos',
        'Ciano': 'Adequado para elementos tecnológicos e modernos',
        'Laranja': 'Excelente para botões de call-to-action secundários'
    };
    return suggestions[colorName] || 'Pode ser usado de acordo com o contexto do design';
}

function loadHarmonyImages() {
    // This function is no longer needed
}
