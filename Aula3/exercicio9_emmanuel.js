const prompt = require("prompt-sync")();

let valorTotal = parseFloat(prompt("Digite o valor total da compra:"));
let qtdParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));
let taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (em %):"))/100;

if(qtdParcelas>0){
    let valorFinal = valorTotal * (1 + taxaJurosMensal * qtdParcelas);
    let valorParcela = valorFinal/qtdParcelas;
    
    console.log(`Valor total: R$ ${valorTotal}\n Quantidade de Parcelas: ${qtdParcelas}\n Taxa de juros: ${taxaJurosMensal}% \n Valor da Parcela: R$ ${valorParcela.toFixed(2)}`);
}
else{
    console.log("Quantidade de parcelas incorreta!");
}