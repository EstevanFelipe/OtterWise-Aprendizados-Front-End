/*
        -- OPERADORES DE COMPARAÇÃO --

        Igual (==) e Estritamente Igual (===) - Compara o valor e o tipo
        Diferente (!=) e Estritamente Diferente (!==) - Compara o valor e o tipo
        Maior que (>)
        Menor que (<)
        Maior ou Igual (>=)
        Menor ou Igual (<=)

*/

// Exemplo 1 -- Comparação de valores -- Igual e Estritamente Igual --

const A = 5; // Para (Constante A = 5) o console responderá: False.
const B = 10; // Para (Constante B = 10) o console responderá: True.

// Quando o valor For Igual ou Estritamente Igual o console responderá true.
// Quando o valor For outro o console responderá false.
// De acordo com as regras (Condições) de comparação inFormadas no Codigo.

if (A == B, B == 10) {
    console.log('Condição Verdadeira');
} else {
    console.log('Condição False');
}

/* -------------------------------------------------- */ /* -------------------------------------------------- */

// Exemplo 2 -- Comparação de valores -- Diferente e Estritamente Diferente --

let C = 10;
let D = 20;

// Para o parâmetro ( C !== D ) o console responderá: True.
// Para o parâmetro ( D == 10 ) o console responderá: False.

if (C !== D, D == 10) {
    console.log('Condição Verdadeira');
} else {
    console.log('Condição False');  
}

/* -------------------------------------------------- */ /* -------------------------------------------------- */

// Exemplo 3 -- Comparação de valores -- Menor que --

let E = 10;
let F = 20;

// Para o parâmetro ( E > F ) o console responderá: False.
// Para o parâmetro ( F < E ) o console responderá: True.

if (E > F, F < E) {
    console.log('Condição Verdadeira');
} else {
    console.log('Condição False');  
}

/* -------------------------------------------------- */ /* -------------------------------------------------- */

// Exemplo 4 -- Comparação de valores -- Maior que --

let G = 10;
let H = 20;

if (H > G, G > H) {
    console.log('Condição Verdadeira');
} else {
    console.log('Condição False');    
}