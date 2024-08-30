const readline = require('readline');

// Cria uma interface para entrada e saída de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para inverter a string
function inverterString(s) {
    let invertida = '';
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

// Solicita ao usuário que insira uma string
rl.question('Digite uma string: ', (input) => {
    const stringInvertida = inverterString(input);
    console.log(`String invertida: ${stringInvertida}`);
    rl.close();
});

