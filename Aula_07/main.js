/*
            --- FUNÇÕES REGULARES ---

            -- Usando o método de Funções, podemos isolar trechos de códigos para serem reutilizados posteriormente.
            -- As Funções também contam com a ajuda de Parâmetros, que são os valores de entrada que podem ser passados para as Funções.
            -- Funções podem ter um retorno, que é o valor de saída que será retornado pela Função.
            -- Funções são deFinidas com palavras-chaves e posteriormente são chamadas.
            -- Funções sempre teram um Parâmetros ( Entrada ) e um Argumento de Retorno ( Saída ).

*/

function soma(a, b) {
    return a + b;
}

res01 = soma(2, 3); // console Imprime 5.
res02 = soma(5, 5); // console Imprime 10.

console.log(res01, res02);
/* -------------------------------------------------- */

function subtração(a, b) {
    return a - b;
}

result01 = subtração(2, 3); // console Imprime -1.
result02 = subtração(5, 5); // console Imprime 0.

console.log(result01, result02);
/* -------------------------------------------------- */

function multi(a, b) {
    return a * b;
}

resultado01 = multi(2, 3); // console Imprime 6.
resultado02 = multi(5, 5); // console Imprime 25.

console.log(resultado01, resultado02);
/* -------------------------------------------------- */