
// Inicializamos la variable para contar clics en B y el tamaño de A
let contadorB = 0;
let tamanoA = 20;

// Referenciamos los botones
const botonA = document.getElementById('botonA');
const botonB = document.getElementById('botonB');

// Función para cambiar el texto de B y aumentar el tamaño de A
function cambiarTextoB() {
    const palabras = ['ARRAY',
     'porfavor :(',
      'Te lo ruego',
      '¿Me arrodillo?',
      'perdonameeee',
      'no puedo vivir sin ti',
      '¿enserio sigues aqui?',
      'YA OPRIME "SI" ',
      'te amoo perdoname',
      'si me perdonas te gasto unas salchipapas, va?',
      'no seas tan dura',
      'ni las salchipapas pudieron con esto',
      'ME RINDO',
      'jaja mentiras NO, perdoname',
      'No me obligues a obligarte',
      '¿enserio?',
      'Tu lo pediste',
    ];
    contadorB++;
    const indice = contadorB % palabras.length;
    botonB.textContent = palabras[indice];
    tamanoA += 10; // Aumentamos el tamaño de A en 2px cada vez que se cambia B
    botonA.style.fontSize = tamanoA + 'px';

       // Verificar si llegamos al final del arreglo
    if (indice === palabras.length - 1) {
        // Si estamos al final, ocultar el botón B
        botonB.style.display = 'none';
    }
}


// Event listeners para los clics en los botones
botonB.addEventListener('click', cambiarTextoB);

//popup
document.getElementById("botonA").addEventListener("click", function() {
document.querySelector(".popup").style.display = "flex";
document.querySelector(".botones").style.display = "none";

  });
