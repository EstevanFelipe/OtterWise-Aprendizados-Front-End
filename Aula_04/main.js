/*
        -- Aula 04 --
        -- Atribuições, Variaveis e Constantes. --



// Variável.

var nome; // Declaração de variável. (var) utilizada para declarar variáveis em escopo global.
let name; // Declaração de variável. (let) utilizada para declarar variáveis em escopo local.

// (var) e (let) são diferentes. (var) é utilizada para declarar variáveis em escopo global.
// e também pode ter seu valor alterado.
// (let) é utilizada para declarar variáveis em escopo local.
// e não pode ter seu valor alterado.



// Constantes.

const cliente; 

// Declaração de constante. (const) utilizada para declarar constantes tanto em escopos globais quanto locais.
// (const) não pode ter seu valor alterado em nenhum momento.


// Atribuições.

var nome = 'Estevan'; // Atribuição de valor a variável.
var idade = 26; // Atribuição de valor a variável.

let name = 'Estevan'; // Atribuição de valor a variável.
let age = 26; // Atribuição de valor a variável.

const cliente = 'Estevan'; // Atribuição de valor a constante.
const idade = 26; // Atribuição de valor a constante.


// (var) = indica o escopo global.
// (nome) = indica o valor que será atribuído.
// ('Estevan') = indica o valor que foi atribuído, podendo ser tanto (string) quanto (number) ou (boolean).
// E em alguns casos, podemos atribuir valores como (null) ou (undefined).
// Caso você seja um programador de jogos em JavaScript.

*/

//        -- VAMOS EXECUTAR ALGUNS CÓDIGOS PARA ENTENDERMOS MELHOR
//           O QUE NOS FOI APRESENTADO NA LEITURA DESTE DOCUMENTO --


// EXEMPLO 1:

var a; // Declaração de variável sem atribuição.
console.log(a); // Imprime no console o valor da variável como (undefined).


// EXEMPLO 2:

var b; // Declaração de variável sem atribuição.
b = 'Estevan'; // Atribuição de valor a variável.
console.log(b); // Imprime no console o valor da variável como ('Estevan').


// EXEMPLO 3:

var c = 'Estevan Felipe'; // Declaração de variável com atribuição. Em um escopo Global.

{
    let c = 'Maria'; // Declaração de variável com atribuição. Em um escopo Local.
}

console.log(c);
/* 

        Se pedirmos para o console imprimir o valor da variável (c), 
        o valor será impresso como('Estevan Felipe') ou como ('Maria') ou vai imprimir os dois juntos ?

        Se você respondeu como ("Estevan Felipe") você está certo.
        pois o console.log(c) está imprimindo o valor da variável (c) no contexto global.

        Se você respondeu como ("Maria") você está equivocado, pois veja que dentro do escopo local,
        que criamos usando as chaves {}, não existe um console.log(c) e por isso ele não imprime nada.
*/


// EXEMPLO 4:

var d = 'Estevan Felipe'; // Declaração de variável com atribuição. Em um escopo Global.

{
    let d = 'Maria'; // Declaração de variável com atribuição. Em um escopo Local.
    console.log(d); // Imprime no console o valor da variável como ('Maria').
}

console.log(d); // Imprime no console o valor da variável como ('Estevan Felipe').

/*

        Se pedirmos para o console imprimir o valor da variável (d),
        o valor será impresso como('Estevan Felipe') e como ('Maria').

        Pois neste caso apresentado no EXEMPLO 4, existem duas variáveis (d),
        uma dentro do escopo global e outra dentro do escopo local.

        E junto destas variáveis, existe um console.log(d) no escopo global,
        e um console.log(d) no escopo local.

        Por isso, o console.log(d) no escopo global imprime o valor da variável global,
        e o console.log(d) no escopo local imprime o valor da variável local.

        Surgindo assim duas respostas para o console.log(d), em nosso console.

        Ao ler esse exercício, preste muita atenção, pois os EXEMPLOS 3 e 4,
        são muito parecidos, mas não são os mesmos, ambos nos trazem respostas diferentes.

*/