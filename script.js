// Navegación entre páginas
document.getElementById('nextBtn').addEventListener('click', function() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    showHeaderHearts();
    createHearts();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
});

document.getElementById('nextBtn2').addEventListener('click', function() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
    showHeaderHearts();
    createHearts();
});

document.getElementById('prevBtn2').addEventListener('click', function() {
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
});

document.getElementById('surpriseBtn').addEventListener('click', function() {
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.remove('hidden');
    startHeartRain();
});

document.getElementById('prevBtn3').addEventListener('click', function() {
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
    stopHeartRain();
});

// Efecto de corazones al hacer clic
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.querySelector('.hearts').appendChild(heart);
        
        // Posición aleatoria
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 10 + 10;
        
        heart.style.left = `${xPos}%`;
        heart.style.top = `${yPos}%`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Animación
        heart.style.animation = `float ${Math.random() * 3 + 2}s ease-in forwards`;
        
        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Lluvia de corazones
let heartRainInterval;

function startHeartRain() {
    const floatingHearts = document.getElementById('floatingHearts');
    
    heartRainInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        const shape = document.createElement('div');
        shape.classList.add('heart-shape');
        const rightLobe = document.createElement('div');
        rightLobe.classList.add('right-lobe');
        shape.appendChild(rightLobe);
        heart.appendChild(shape);
        
        // Posición aleatoria en la parte superior
        const xPos = Math.random() * 100;
        
        // Tamaño aleatorio
        const size = Math.random() * 10 + 5;
        
        heart.style.left = `${xPos}%`;
        heart.style.top = `-20px`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        // Duración aleatoria
        const duration = Math.random() * 5 + 5;
        
        heart.style.animation = `fall ${duration}s linear forwards`;
        
        floatingHearts.appendChild(heart);
        
        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 300);
}

function stopHeartRain() {
    clearInterval(heartRainInterval);
    document.getElementById('floatingHearts').innerHTML = '';
}

// Lluvia de corazones permanente de fondo
let permanentHeartRainInterval;

function startPermanentHeartRain() {
    const floatingHearts = document.getElementById('floatingHearts');
    permanentHeartRainInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        const shape = document.createElement('div');
        shape.classList.add('heart-shape');
        const rightLobe = document.createElement('div');
        rightLobe.classList.add('right-lobe');
        shape.appendChild(rightLobe);
        heart.appendChild(shape);

        // Posición aleatoria en la parte superior
        const xPos = Math.random() * 100;
        const size = Math.random() * 30 + 20; // corazones más grandes y visibles

        heart.style.left = `${xPos}%`;
        heart.style.top = `-20px`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;

        // Duración aleatoria
        const duration = Math.random() * 5 + 7;

        heart.style.animation = `fall ${duration}s linear forwards`;

        floatingHearts.appendChild(heart);

        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 350); // frecuencia ajustada para que siempre haya corazones
}

// Lluvia de corazones en el encabezado
function startHeaderHeartRain() {
    const heartsContainer = document.querySelector('.hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const shape = document.createElement('div');
        shape.classList.add('heart-shape');
        const rightLobe = document.createElement('div');
        rightLobe.classList.add('right-lobe');
        shape.appendChild(rightLobe);
        heart.appendChild(shape);

        // Posición aleatoria en el header
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = `-10px`;
        heart.style.width = `24px`;
        heart.style.height = `24px`;

        // Animación flotante
        heart.style.animation = `float-header-heart ${Math.random() * 2 + 2}s linear forwards`;

        heartsContainer.appendChild(heart);

        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 2500);
    }, 350);
}

// Crear corazones en el encabezado
function showHeaderHearts() {
    const heartsContainer = document.querySelector('.hearts');
    heartsContainer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const shape = document.createElement('div');
        shape.classList.add('heart-shape');
        const rightLobe = document.createElement('div');
        rightLobe.classList.add('right-lobe');
        shape.appendChild(rightLobe);
        heart.appendChild(shape);

        // Posición aleatoria en el header
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = `${Math.random() * 60}%`;
        heart.style.width = `24px`;
        heart.style.height = `24px`;

        // Animación flotante
        heart.style.animation = `float-header-heart ${Math.random() * 2 + 2}s linear forwards`;

        heartsContainer.appendChild(heart);
    }
    // Eliminar corazones después de 2.5 segundos
    setTimeout(() => {
        heartsContainer.innerHTML = '';
    }, 2500);
}

// Llama a la función al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    startPermanentHeartRain();
    startHeaderHeartRain();
});