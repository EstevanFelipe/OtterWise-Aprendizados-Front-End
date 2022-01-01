/*
    -- Expressões Lógicas e Operadores Lógicos. --

 And (&&).
 Or (||).
 Not (!).

    -- Esses operadores são usados para fazer comparações entre valores. --
    -- Se o valor for verdadeiro, ele retorna o valor boolean (true). --
    -- Se o valor for falso, ele retorna o valor boolean (false). --
*/

console.log(true); // true
console.log(false); // false

// And (&&).
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Ao usar o operador &&, ele retornará um valor boolean (true) se ambos os valores forem verdadeiros.
// Se um dos valores for falso, ele retornará um valor boolean (false).

// Or (||).
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Ao usar o operador ||, ele retornará um valor boolean (false) se ambos os valores forem falsos.
// Se um dos valores for verdadeiro, ele retornará um valor boolean (true).

// Not (!).
console.log(!true); // false
console.log(!false); // true

// Usando o operador not (!), ele inverte o valor do valor boolean.
// Se o valor for verdadeiro, ele retornará um valor boolean (false).
// Se o valor for falso, ele retornará um valor boolean (true).