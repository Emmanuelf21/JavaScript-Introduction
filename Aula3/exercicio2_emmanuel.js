const prompt = require("prompt-sync")();

let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
let anoAtual = new Date().getFullYear();

console.log(`Sua idade é ${anoAtual-anoNascimento}.`);