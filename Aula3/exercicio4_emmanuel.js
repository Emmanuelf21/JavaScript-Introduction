const prompt = require("prompt-sync")();

let n1 = parseFloat(prompt("Digite uma temperatura em °C:"));

console.log(`${n1}°C em Fahrenheit é ${(n1*9/5)+32}°F`);