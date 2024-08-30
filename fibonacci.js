const readline = require('readline');

function isFibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }
    return b === n || n === 0;
}

let numero = null; // Altere este valor para definir manualmente (exemplo: 21)

if (numero !== null) {
    // Se o número foi definido manualmente, use-o diretamente
    verificarFibonacci(numero);
} else {
    // Caso contrário, solicite ao usuário que insira um número
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite um número: ', (input) => {
        numero = parseInt(input);
        verificarFibonacci(numero);
        rl.close();
    });
}

function verificarFibonacci(numero) {
    if (isFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}

