/*

            --- Condicionais ---

            -- IF --
            -- ELSE --
            -- ELSE IF --
            -- SWITCH CASE --

    essas condicionais são usadas para fazer uma comparação entre dois valores,
    se o valor for verdadeiro, ele executa um bloco de código, se não, ele ignora
    o bloco de código, e segue a execução do código, basicamente é isso que as 
    condicionais fazem.

*/

a = "Estevan"; // Se a variável For Numerica, o console imprimira o valor Numerico,
               // se não, ele imprimirá o valor inFormado no caso.

if (a == 10) {
    console.log('É valor númerico.');
} else {
    console.log('Não é um númerico.');
}

console.log(a)

/* ------------------------------------------------------------------------------------------------ */

value = "String";

switch (value) {
    case 1:
        console.log(10);
        break;
    
    case 2:
        console.log('String');
        break;
    
    default:
        console.log('Não é nenhum dos valores acima.');
        break;
}

console.log(value);