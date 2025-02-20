window.onload = () => {
    document.body.classList.remove("container");
  
    // Generar estrellas aleatorias en el cielo
    const nightSky = document.querySelector('.night');
  
    // Generar estrellas fijas
    for (let i = 0; i < 100; i++) {
      let star = document.createElement('div');
      star.classList.add('star');
      star.style.top = Math.random() * 100 + 'vh';  // Randomize vertical position
      star.style.left = Math.random() * 100 + 'vw'; // Randomize horizontal position
      star.style.animationDelay = Math.random() * 2 + 's'; // Randomize animation delay
      nightSky.appendChild(star);
    }
  
    // Generar estrellas fugaces blancas más arriba
    for (let i = 0; i < 5; i++) {
      let shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      shootingStar.style.top = Math.random() * 30 + 'vh'; // Aparecen mucho más arriba (máximo 30vh)
      shootingStar.style.left = Math.random() * 100 + 'vw'; // Position horizontally
      shootingStar.style.animationDelay = Math.random() * 5 + 's'; // Randomize delay
      shootingStar.style.animationDuration = Math.random() * 4 + 3 + 's'; // More time for visibility
      nightSky.appendChild(shootingStar);
    }
  };
// Función para abrir y cerrar el modal
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  }
  
  // Función para reproducir y pausar la música
  function toggleMusic() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('playButton');
    
    if (audio.paused) {
      audio.play();
      playButton.textContent = 'Pausar'; // Cambia el texto del botón a "Pausar"
    } else {
      audio.pause();
      playButton.textContent = 'Play'; // Cambia el texto del botón a "Play"
    }
  }
  
  