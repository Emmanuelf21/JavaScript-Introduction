const prompt = require("prompt-sync")();

let numHorasTrabalhadas = parseInt(prompt("Digite a quantidade de horas trabalhadas por semana:"));
let valorHora = parseFloat(prompt("Digite o valor da hora trabalhada:"));

let salarioSemanal = valorHora*numHorasTrabalhadas;
let salarioMensal = salarioSemanal*4;

console.log(`Salário semanal: R$ ${salarioSemanal} \nSalário mensal: R$ ${salarioMensal}`);