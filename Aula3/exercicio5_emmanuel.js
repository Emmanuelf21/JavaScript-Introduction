const prompt = require("prompt-sync")();

let prod = prompt("Digite o nome do produto:");
let precoUnit = parseFloat(prompt("Digite o preço unitário:"));
let qtd = parseFloat(prompt("Digite a quantidade comprada:"));
let imposto = (precoUnit*qtd*18)/100;
let precoTotal = (precoUnit*qtd)+imposto;

console.log(`Produto: ${prod}\n Preço unitário: ${precoUnit}\n Quantidade: ${qtd} \n Imposto total: R$ ${imposto}\n Preço total: R$ ${precoTotal.toFixed(2)}`);