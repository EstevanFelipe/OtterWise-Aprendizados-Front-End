let x = 10; // Variável guardada no escopo global -- Console Imprime o valor de (x) = 10 --

{
    let x = 20;
    console.log(x + 30); // Variável guardada no escopo local -- Console Imprime o valor de (x) + 30 = 50 --
}

function somaDois(a, b) {
    return a + b + 10; // Retorno dentro do escopo da Função -- Console Imprime o valor de (a) + (b) + 10 = 40 --
}

console.log(x + 10);
console.log(somaDois(20, 20));
/* --------------------------------------------------- */
/*
            -- ESCOPO --

    -- O escopo por exemplo da linguagem JavaScript
    é o contexto global.

    -- Outros escopos são Formados (Construindo) por
    blocos de código limitados por chaves {}.
*/