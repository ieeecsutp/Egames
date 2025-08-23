
function typeWriter(
  elementId: string,
  text: string,
  speed: number = 100,
  callback?: () => void // callback opcional
): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  let i = 0;
  element.innerHTML = "";

  const typing = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      if (callback) callback(); // cuando termina, ejecuta callback
    }
  };

  typing();
}

// Uso:
document.addEventListener("DOMContentLoaded", () => {
  typeWriter("titulo", "Bienvenido a Egames", 80, () => {
    // Solo cuando termine el título, empieza el subtítulo
    typeWriter("subtitulo", "Juegos Digitales para Verdaderos Gamers", 80);
  });
});
