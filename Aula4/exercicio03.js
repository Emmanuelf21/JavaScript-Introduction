const prompt = require("prompt-sync")();

let cor = prompt("Digite o nome da cor em inglês: ");

switch (cor) {
    case "red":
        console.log(`${cor} -> Vermelho`);
        break;
    case "blue":
        console.log(`${cor} -> Azul`);
        break;
    case "green":
        console.log(`${cor} -> Verde`);
        break;
    default:
        console.log(`Cor desconhecida`);
        break;
}