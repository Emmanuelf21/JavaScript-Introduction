const prompt = require("prompt-sync")();

let prod = prompt("Digite o nome do produto:");
let precoInicial = parseFloat(prompt("Digite o preço inicial:"));
let desconto = parseFloat(prompt("Digite a porcentagem do desconto:"));
let valorDesconto = (precoInicial*desconto)/100;
let precoFinal = precoInicial - valorDesconto;

console.log(`Produto: ${prod}\n Preço original: R$ ${precoInicial}\n Valor do desconto: R$ ${valorDesconto}\n Preço final: R$ ${precoFinal}`);