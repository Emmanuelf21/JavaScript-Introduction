let numeroAleatorio = Math.round(Math.random() * 10);
const prompt = require("prompt-sync")();

let contador = 0;
let acertou = false;

while (contador < 5) {
  let num = Number(
    prompt(
      `Você possui ${5 - contador} tentativas! Digite um numero de 1 a 10: `
    )
  );
  if (num < 1 || num > 10) {
    console.log("Número inválido, esta tentativa não contou!");
  } else {
    if (num == numeroAleatorio) {
      console.log(
        "Parabéns você acertou o número aleatório " + numeroAleatorio + `, faltando ${5-contador} tentativas!`
      );
      acertou = true;
      break;
    } else {
      contador++;
    }
  }
}

if (!acertou) console.log("Suas tentativas esgotaram!");
