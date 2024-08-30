const fs = require('fs');

// Carregar os dados de faturamento a partir do arquivo JSON
const dados = JSON.parse(fs.readFileSync('faturamento.json'));

// Filtrar os dias com faturamento (excluindo os dias com faturamento zero)
const faturamento = dados.faturamento.filter(valor => valor > 0);

const menorValor = Math.min(...faturamento);
const maiorValor = Math.max(...faturamento);
const mediaMensal = faturamento.reduce((acc, valor) => acc + valor, 0) / faturamento.length;

const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);

