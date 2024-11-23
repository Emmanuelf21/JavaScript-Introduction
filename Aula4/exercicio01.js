const prompt = require("prompt-sync")();

let num = prompt("Digite um número de 1 à 4: ");

switch (num) {
  case "1":
    console.log("Aqui está sua Água!");
    break;

  case "2":
    console.log("Aqui está seu Suco!");
    break;

  case "3":
    console.log("Aqui está seu Refrigerante!");
    break;

  case "4":
    console.log("Aqui está seu Café!");
    break;

  default:
    console.log("Número inválido");
    break;
}
