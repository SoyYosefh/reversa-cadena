// 2. Reversión de cadena: Dada una frase y luego 
// muestra la misma frase pero con las palabras 
// en orden inverso.

const texto = 'Que tengas buen dia!';
const palabras = texto.split(' ');
const palabrasInvertidas = palabras.reverse();
const fraseInvertida = palabrasInvertidas.join(' ');
console.log(`La frase invertida es: ${fraseInvertida}`);
