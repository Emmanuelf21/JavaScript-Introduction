const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite um número:"));
let n2 = parseFloat(prompt("Digite outro número:"));

if(n1>=n2){
    console.log(`A diferença entre ${n1} e ${n2} é igual a ${n1-n2}.`);
}
else{
    console.log(`A diferença entre ${n2} e ${n1} é igual a ${n2-n1}.`);
}