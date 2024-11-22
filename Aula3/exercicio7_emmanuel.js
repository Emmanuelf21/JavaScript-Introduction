const prompt = require("prompt-sync")();

let valorTotal = parseFloat(prompt("Digite o valor total da compra:"));
let qtdParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));


if(qtdParcelas>0){
    let valorParcela = valorTotal/qtdParcelas;
    console.log(`Valor total: R$ ${valorTotal}\n Quantidade de Parcelas: ${qtdParcelas}\n Valor da Parcela: R$ ${valorParcela}`);
}
else{
    console.log("Quantidade de parcelas incorreta!");
}