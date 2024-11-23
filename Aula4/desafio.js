const prompt = require("prompt-sync")();

let evento = parseInt(prompt("Selecione um evento:\n1 -> Workshop\n 2 -> Palestra\n 3 -> Hackathon\nDigite o número do evento desejado: "));
let tipoEvento;
let custoTotal;

switch (evento) {
    case 1:
        let numParticipantes = parseInt(prompt("Digite o número de participantes (R$50 por participante): "));
        tipoEvento = "Workshop";
        custoTotal = numParticipantes*50;
        console.log(`
            Tipo de evento: ${tipoEvento}
            Número de participantes: ${numParticipantes}
            Custo Total: R$ ${custoTotal}
            `);
        break;

    case 2:
        let duracao = parseInt(prompt("Insira a duração do evento em horas (R$100 por hora): "));
        tipoEvento = "Palestra";
        custoTotal = duracao*100;
        console.log(`
            Tipo de evento: ${tipoEvento}
            Duração do evento: ${duracao}
            Custo Total: R$ ${custoTotal}
            `);
        break;

    case 3:
        let numDias = parseInt(prompt("Insira o número de dias: "));
        let numEquipes = parseInt(prompt("Insira o número de equipes (R$500 por equipe por dia): "));
        custoTotal = (numEquipes*500)*numDias;
        tipoEvento = "Hackathon";
        console.log(`
            Tipo de evento: ${tipoEvento}
            Número de dias: ${numDias}
            Número de equipes: ${numEquipes}
            Custo Total: R$ ${custoTotal}
            `);
        break;

    default:
        console.log("Evento inexistente!");
        break;
}