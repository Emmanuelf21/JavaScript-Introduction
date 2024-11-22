const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let faltas = parseFloat(prompt("Digite a porcentagem de faltas (em %)"));

let media = (nota1+nota2+nota3)/3;

if(media>10 || media<0){
    console.log("Valores incorretos de nota!");
}else if(faltas>100 || faltas<0){
    console.log("Porcentagem de faltas impossíveis!");
}else {
    if(media>=7 && faltas<25){
        console.log(`O Aluno, ${nome}, está aprovado!`);
    } else if(media<7 && media>=5 && faltas<25){
        console.log(`O Aluno, ${nome}, está de Recuperação!`);
    }else{
        console.log(`O Aluno, ${nome}, está reprovado!`);
    }
}